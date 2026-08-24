import Reveal from "./Reveal";
import OrbField from "./OrbField";

export default function Hero() {
  return (
    <section className="relative flex min-h-[760px] items-center px-6 pt-[110px] pb-[120px]">
      <OrbField />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-[800px]">
          <Reveal
            delay={0.05}
            as="h1"
            className="m-0 mb-7 text-[clamp(2.8rem,7vw,5.4rem)] leading-[1.05] font-black tracking-[-0.04em]"
          >
            <span className="trelia-gradient-text">Mais clientes.</span> Mais
            vendas.
            <br />
            Menos problemas.
          </Reveal>

          <Reveal delay={0.1}>
            <p className="m-0 mb-6 max-w-[600px] text-xl leading-relaxed text-gray-2">
              Poucos leads. Dificuldade para conquistar novos clientes. Vendas
              que não acontecem. Processos manuais. Equipe perdendo tempo.
              Sistemas que não conversam entre si.
            </p>
          </Reveal>

          <Reveal delay={0.13} className="mb-11 max-w-[620px]">
            <p className="m-0 mb-3 text-lg font-bold tracking-[-0.01em] text-white">
              Você traz o problema. A gente encontra a solução.
            </p>
            <p className="m-0 text-base leading-relaxed text-gray-2">
              Somos parceiros de tecnologia para pequenas e médias empresas
              que querem atrair mais clientes, vender mais, reduzir custos e
              ganhar eficiência sem precisar entender de tecnologia ou montar
              uma equipe de TI.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mb-14 flex flex-wrap gap-4">
            <a
              href="#contato"
              className="trelia-btn-primary rounded-[10px] px-[30px] py-[15px] text-base font-semibold whitespace-nowrap text-white"
            >
              Falar com a gente
            </a>
            <a
              href="#cases"
              className="trelia-btn-secondary rounded-[10px] border border-white/25 px-[30px] py-[15px] text-base font-semibold whitespace-nowrap text-white"
            >
              Ver cases
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="m-0 border-t border-white/10 pt-6 text-sm text-gray-3">
              Da estratégia à solução, a gente assume o problema e entrega o
              que sua empresa precisa para crescer.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
