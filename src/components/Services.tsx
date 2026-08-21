import Reveal from "./Reveal";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="servicos" className="relative bg-ink px-6 py-[140px]">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 max-w-[640px]">
          <p className="m-0 mb-4 text-sm font-semibold tracking-[0.06em] text-blue-light uppercase">
            Serviços
          </p>
          <h2 className="m-0 mb-4 text-[clamp(2rem,4vw,2.9rem)] leading-[1.1] font-extrabold tracking-[-0.02em]">
            O que fazemos
          </h2>
          <p className="m-0 text-[17px] leading-relaxed text-gray-2">
            Cobrimos o ciclo completo de um produto digital, de front a
            infraestrutura.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc, i) => (
            <Reveal
              key={svc.title}
              delay={i * 0.05}
              className={`trelia-card trelia-glass relative flex min-h-[140px] flex-col justify-end overflow-hidden rounded-2xl p-7 ${
                i === 0 ? "sm:col-span-2 lg:row-span-2" : ""
              } ${i === 3 ? "sm:col-span-2" : ""}`}
            >
              <div
                className="pointer-events-none absolute top-0 right-0 h-[120px] w-[120px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(96,165,250,0.18), transparent 70%)",
                }}
              />
              <h3 className="relative m-0 mb-2 text-[19px] font-bold tracking-[-0.01em]">
                {svc.title}
              </h3>
              <p className="relative m-0 mb-3.5 text-sm leading-relaxed text-gray-2">
                {svc.desc}
              </p>
              <p className="relative m-0 font-mono text-xs font-semibold text-blue-light">
                {svc.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
