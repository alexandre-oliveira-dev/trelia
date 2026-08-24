import Reveal from "./Reveal";
import { painPoints } from "@/lib/content";

export default function PainPoints() {
  return (
    <section className="border-y border-white/[0.06] bg-ink-alt px-6 py-[120px]">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 max-w-[640px]">
          <p className="m-0 mb-4 text-sm font-semibold tracking-[0.06em] text-blue-light uppercase">
            Dores que resolvemos
          </p>
          <h2 className="m-0 mb-5 text-[clamp(2rem,4vw,2.9rem)] leading-[1.1] font-extrabold tracking-[-0.02em]">
            Mais clientes. Mais vendas. Menos problemas.
          </h2>
          <p className="m-0 text-lg leading-relaxed text-gray-2">
            Poucos leads. Dificuldade para conquistar novos clientes. Vendas
            que não acontecem. Processos manuais. Equipe perdendo tempo.
            Sistemas que não conversam entre si.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point, i) => (
            <Reveal
              key={point}
              delay={i * 0.04}
              className="trelia-pill trelia-glass rounded-xl px-6 py-[22px]"
            >
              <p className="m-0 text-base font-semibold tracking-[-0.01em]">
                {point}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="trelia-glass mt-12 rounded-2xl px-8 py-10 sm:px-12">
          <h3 className="m-0 mb-4 text-[clamp(1.4rem,2.5vw,1.9rem)] font-extrabold tracking-[-0.02em]">
            Você traz o problema. A gente encontra a solução.
          </h3>
          <p className="m-0 mb-3 max-w-[720px] text-base leading-relaxed text-gray-2">
            Somos parceiros de tecnologia para pequenas e médias empresas que
            querem atrair mais clientes, vender mais, reduzir custos e ganhar
            eficiência sem precisar entender de tecnologia ou montar uma
            equipe de TI.
          </p>
          <p className="m-0 max-w-[720px] text-base leading-relaxed text-gray-2">
            Da estratégia à solução, a gente assume o problema e entrega o
            que sua empresa precisa para crescer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
