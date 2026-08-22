#!/usr/bin/env bash
set -euo pipefail

# Builda a imagem Docker do projeto, publica no GitHub Container Registry
# (GHCR) e faz o deploy em produção: entra no servidor via SSH, atualiza o
# Dockerfile remoto (que só tem um "FROM ghcr.io/.../trelia:<SHA>" fixando
# a versão) pro SHA novo, roda `docker compose up -d --build` e limpa as
# imagens Docker antigas desse projeto — tanto na máquina local (cada build
# fica com uma tag própria e nunca é removido sozinho) quanto no servidor.
#
# Requisitos:
#   - docker instalado e rodando
#   - gh CLI autenticado (gh auth login) com escopo write:packages
#     (gh auth refresh -h github.com -s write:packages,read:packages)
#   - acesso SSH ao servidor de produção (chave já configurada)
#
# Uso:
#   ./scripts/build-and-push.sh [tag]
#
# [tag] é opcional (padrão: latest) e vira uma tag extra na imagem — o deploy
# em si sempre fixa o SHA curto do commit atual, que é o identificador único
# de cada build.
#
# Variáveis de ambiente opcionais:
#   DEPLOY_HOST=root@77.37.43.65   (padrão, sobrescreva se mudar o servidor)
#   DEPLOY_PATH=/root/trelia       (padrão, caminho do compose no servidor)
#   SKIP_DEPLOY=1                  (só builda e publica no GHCR, sem tocar no servidor)

IMAGE="ghcr.io/alexandre-oliveira-dev/trelia"
TAG="${1:-latest}"
SHA="$(git rev-parse --short HEAD 2>/dev/null || echo nogit)"
DEPLOY_HOST="${DEPLOY_HOST:-root@77.37.43.65}"
DEPLOY_PATH="${DEPLOY_PATH:-/root/trelia}"

if [ "${SHA}" = "nogit" ]; then
  echo "ERRO: não foi possível determinar o SHA do commit atual (o deploy fixa a imagem nesse SHA). Rode este script de dentro do repositório git." >&2
  exit 1
fi

echo "==> Login no GHCR via gh CLI"
gh auth token | docker login ghcr.io -u alexandre-oliveira-dev --password-stdin

echo "==> Build da imagem ${IMAGE}:${TAG} (${IMAGE}:${SHA})"
docker build \
  --build-arg NEXT_PUBLIC_SITE_URL="${NEXT_PUBLIC_SITE_URL:-https://trelia.com.br}" \
  -t "${IMAGE}:${TAG}" \
  -t "${IMAGE}:${SHA}" \
  .

echo "==> Push ${IMAGE}:${TAG}"
docker push "${IMAGE}:${TAG}"

echo "==> Push ${IMAGE}:${SHA}"
docker push "${IMAGE}:${SHA}"

echo "==> Build e push concluídos: ${IMAGE}:${TAG} / ${IMAGE}:${SHA}"

echo "==> Limpando imagens órfãs locais (dangling)"
docker image prune -f

echo "==> Removendo tags antigas de ${IMAGE} na máquina local (mantendo :${SHA} e :${TAG})"
docker images "${IMAGE}" --format '{{.Tag}}' \
  | grep -v -E "^(${SHA}|${TAG})\$" \
  | xargs -r -I{} docker rmi "${IMAGE}:{}" || true

if [ "${SKIP_DEPLOY:-0}" = "1" ]; then
  echo "==> SKIP_DEPLOY=1 — encerrando sem fazer deploy no servidor."
  exit 0
fi

echo "==> Deploy em ${DEPLOY_HOST}:${DEPLOY_PATH} (fixando a imagem em ${SHA})"
ssh "${DEPLOY_HOST}" "mkdir -p '${DEPLOY_PATH}'"
scp docker-compose.yml "${DEPLOY_HOST}:${DEPLOY_PATH}/docker-compose.yml"
ssh "${DEPLOY_HOST}" bash -s -- "${IMAGE}" "${SHA}" "${DEPLOY_PATH}" <<'REMOTE_SCRIPT'
set -euo pipefail
IMAGE="$1"
SHA="$2"
DEPLOY_PATH="$3"

echo "==> [servidor] Fixando Dockerfile em ${IMAGE}:${SHA}"
echo "FROM ${IMAGE}:${SHA}" > "${DEPLOY_PATH}/Dockerfile"

cd "${DEPLOY_PATH}"

echo "==> [servidor] docker compose up -d --build"
docker compose up -d --build

echo "==> [servidor] Limpando imagens soltas (dangling)"
docker image prune -f

echo "==> [servidor] Limpando cache de build não usado"
docker builder prune -f

echo "==> [servidor] Removendo tags antigas de ${IMAGE} (mantendo só :${SHA} — é a única que o Dockerfile daqui referencia)"
docker images "${IMAGE}" --format '{{.Tag}}' \
  | grep -v -E "^${SHA}\$" \
  | xargs -r -I{} docker rmi "${IMAGE}:{}" || true
REMOTE_SCRIPT

echo "==> Deploy concluído em ${DEPLOY_HOST}"
