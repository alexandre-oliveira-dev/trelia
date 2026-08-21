import Reveal from "./Reveal";

export default function Testimonial() {
  return (
    <section className="relative border-y border-white/[0.06] bg-ink-alt px-6 py-[160px]">
      <Reveal className="relative z-10 mx-auto max-w-[880px] text-center">
        <p className="m-0 mb-8 text-[clamp(1.7rem,3.6vw,2.6rem)] leading-[1.35] font-semibold tracking-[-0.02em]">
          &ldquo;A Trelia entendeu o problema antes de falar de{" "}
          <span className="trelia-gradient-text">tecnologia</span>. Isso mudou a
          forma como a gente contrata desenvolvimento.&rdquo;
        </p>
        <p className="m-0 text-base text-gray-2">
          Marina Souza — Diretora de Tecnologia, Grupo Plana
        </p>
      </Reveal>
    </section>
  );
}
