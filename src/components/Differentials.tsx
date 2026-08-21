import Reveal from "./Reveal";
import { metrics } from "@/lib/content";

export default function Differentials() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-ink-alt px-6 py-[140px]">
      <div
        className="trelia-orb trelia-float-2"
        style={{
          width: 600,
          height: 600,
          top: -200,
          right: -150,
          background:
            "radial-gradient(circle, rgba(37,99,235,0.25), transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal className="mb-16 max-w-[640px]">
          <p className="m-0 mb-4 text-sm font-semibold tracking-[0.06em] text-blue-light uppercase">
            Diferenciais
          </p>
          <h2 className="m-0 text-[clamp(2rem,4vw,2.9rem)] leading-[1.1] font-extrabold tracking-[-0.02em]">
            Números que sustentam a conversa
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.05}>
              <p className="trelia-gradient-text m-0 mb-3 text-[clamp(2.6rem,5.5vw,3.6rem)] font-black tracking-[-0.03em]">
                {metric.value}
              </p>
              <p className="m-0 text-[15px] leading-snug text-gray-2">
                {metric.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
