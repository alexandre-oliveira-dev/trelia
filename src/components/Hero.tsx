import Reveal from "./Reveal";
import OrbField from "./OrbField";

export default function Hero() {
  return (
    <section className="relative flex min-h-[760px] items-center px-6 pt-[180px] pb-[120px]">
      <OrbField />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-[800px]">
          <Reveal className="trelia-glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-[7px]">
            <span className="trelia-pulse h-1.5 w-1.5 rounded-full bg-blue-light" />
            <span className="text-[13px] font-medium text-[#93C5FD]">
              Software house brasileira
            </span>
          </Reveal>

          <Reveal
            delay={0.05}
            as="h1"
            className="m-0 mb-7 text-[clamp(2.8rem,7vw,5.4rem)] leading-[1.0] font-black tracking-[-0.04em]"
          >
            <span className="trelia-gradient-text">Software sob medida,</span>
            <br />
            construído para durar.
          </Reveal>

          <Reveal delay={0.1}>
            <p className="m-0 mb-11 max-w-[560px] text-xl leading-relaxed text-gray-2">
              Desenvolvemos os sistemas que sua empresa precisa para crescer.
              Da arquitetura ao deploy, sem terceirizar a responsabilidade.
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
              Mais de 40 produtos entregues para empresas de médio porte no
              Brasil.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
