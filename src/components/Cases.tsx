import Reveal from "./Reveal";
import { cases } from "@/lib/content";

export default function Cases() {
  return (
    <section id="cases" className="bg-ink px-6 py-[140px]">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 max-w-[640px]">
          <p className="m-0 mb-4 text-sm font-semibold tracking-[0.06em] text-blue-light uppercase">
            Cases
          </p>
          <h2 className="m-0 text-[clamp(2rem,4vw,2.9rem)] leading-[1.1] font-extrabold tracking-[-0.02em]">
            Projetos entregues
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal
              key={c.name}
              delay={i * 0.06}
              className="trelia-card trelia-glass relative flex flex-col gap-5 overflow-hidden rounded-2xl p-8"
            >
              <div
                className="pointer-events-none absolute -top-10 -right-10 h-[140px] w-[140px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(139,92,246,0.2), transparent 70%)",
                }}
              />
              <h3 className="relative m-0 text-xl font-bold tracking-[-0.01em]">
                {c.name}
              </h3>
              <div className="relative">
                <p className="m-0 mb-1.5 text-xs font-semibold tracking-[0.06em] text-gray-3 uppercase">
                  Desafio
                </p>
                <p className="m-0 text-[15px] leading-relaxed text-[#D1D5DB]">
                  {c.challenge}
                </p>
              </div>
              <div className="relative">
                <p className="m-0 mb-1.5 text-xs font-semibold tracking-[0.06em] text-gray-3 uppercase">
                  Resultado
                </p>
                <p className="m-0 text-[15px] leading-relaxed font-semibold text-blue-light">
                  {c.result}
                </p>
              </div>
              <p className="relative m-0 mt-3 border-t border-white/[0.08] pt-4 font-mono text-[13px] text-gray-3">
                {c.stack}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
