export default function Footer() {
  return (
    <footer className="bg-ink px-6 pt-[72px] pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 border-b border-white/[0.08] pb-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="trelia-gradient-text mb-3 text-[22px] font-extrabold tracking-[-0.02em]">
              trelia
            </div>
            <p className="m-0 max-w-[260px] text-sm leading-relaxed text-gray-3">
              Software sob medida para empresas que não podem esperar.
            </p>
          </div>

          <div>
            <p className="m-0 mb-4 text-sm font-semibold text-white">
              Produto
            </p>
            <div className="flex flex-col gap-3">
              <a href="#servicos" className="text-sm text-gray-2">
                Serviços
              </a>
              <a href="#como-trabalhamos" className="text-sm text-gray-2">
                Como trabalhamos
              </a>
              <a href="#cases" className="text-sm text-gray-2">
                Cases
              </a>
            </div>
          </div>

          <div>
            <p className="m-0 mb-4 text-sm font-semibold text-white">
              Contato
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:contato@trelia.com.br" className="text-sm text-gray-2">
                contato@trelia.com.br
              </a>
              <a href="tel:+551140028922" className="text-sm text-gray-2">
                +55 11 4002-8922
              </a>
            </div>
          </div>

          <div>
            <p className="m-0 mb-4 text-sm font-semibold text-white">
              Redes
            </p>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-gray-2">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-gray-2">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <p className="m-0 mt-6 text-[13px] text-[#4B5563]">
          © 2026 Trelia Software. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
