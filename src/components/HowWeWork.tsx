import Reveal from "./Reveal";
import { steps } from "@/lib/content";

export default function HowWeWork() {
  return (
    <section id="como-trabalhamos" className="relative bg-ink px-6 py-[140px]">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 max-w-[640px]">
          <p className="m-0 mb-4 text-sm font-semibold tracking-[0.06em] text-blue-light uppercase">
            Processo
          </p>
          <h2 className="m-0 mb-4 text-[clamp(2rem,4vw,2.9rem)] leading-[1.1] font-extrabold tracking-[-0.02em]">
            Como trabalhamos
          </h2>
          <p className="m-0 text-[17px] leading-relaxed text-gray-2">
            Quatro etapas, sem burocracia entre elas.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal
              key={step.num}
              delay={i * 0.05}
              className="trelia-card trelia-glass relative overflow-hidden rounded-2xl p-7"
            >
              <div
                className="absolute top-0 left-0 h-[3px] w-full"
                style={{
                  background: "linear-gradient(90deg, #2563EB, #8B5CF6)",
                }}
              />
              <p
                className="m-0 mb-4 font-mono text-sm font-bold"
                style={{
                  background: "linear-gradient(135deg, #60A5FA, #A78BFA)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {step.num}
              </p>
              <h3 className="m-0 mb-2.5 text-[19px] font-bold tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="m-0 text-[15px] leading-relaxed text-gray-2">
                {step.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
