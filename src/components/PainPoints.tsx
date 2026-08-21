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
          <h2 className="m-0 text-[clamp(2rem,4vw,2.9rem)] leading-[1.1] font-extrabold tracking-[-0.02em]">
            Problemas que reconhecemos de longe
          </h2>
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
      </div>
    </section>
  );
}
