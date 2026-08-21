import Reveal from "./Reveal";
import { clientLogos } from "@/lib/content";

export default function ClientLogos() {
  return (
    <section className="border-y border-white/[0.06] bg-ink-alt px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <p className="m-0 mb-8 text-center text-[13px] font-semibold tracking-[0.08em] text-gray-3 uppercase">
          Empresas que confiam na Trelia
        </p>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {clientLogos.map((logo, i) => (
            <Reveal
              key={logo}
              delay={i * 0.05}
              className="flex items-center justify-center text-lg font-bold tracking-[-0.02em] text-[#4B5563] transition-colors duration-300 hover:text-gray-2"
            >
              {logo}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
