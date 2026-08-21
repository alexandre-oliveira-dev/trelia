import Image from "next/image";
import Reveal from "./Reveal";
import PortfolioFrame from "./PortfolioFrame";
import { portfolio } from "@/lib/content";

export default function Portfolio() {
  return (
    <section className="border-y border-white/[0.06] bg-ink-alt px-6 py-[140px]">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 max-w-[640px]">
          <p className="m-0 mb-4 text-sm font-semibold tracking-[0.06em] text-blue-light uppercase">
            Portfólio
          </p>
          <h2 className="m-0 mb-4 text-[clamp(2rem,4vw,2.9rem)] leading-[1.1] font-extrabold tracking-[-0.02em]">
            Sites que colocamos no ar
          </h2>
          <p className="m-0 text-[17px] leading-relaxed text-gray-2">
            Navegue direto no projeto publicado.
          </p>
        </Reveal>

        <div className="flex flex-wrap gap-5">
          {portfolio.map((site, i) => (
            <Reveal
              key={site.name}
              delay={i * 0.06}
              className="trelia-card trelia-glass flex min-w-[280px] flex-1 basis-[320px] flex-col overflow-hidden rounded-2xl"
            >
              <PortfolioFrame
                url={site.url}
                name={site.name}
                embeddable={site.embeddable}
              />
              <div className="flex items-center gap-3.5 p-6">
                <div className="flex flex-shrink-0 items-center justify-center rounded-lg bg-white p-2.5">
                  <Image
                    src={site.logo}
                    alt={site.name}
                    width={110}
                    height={28}
                    style={{ width: "auto", height: "28px" }}
                    className="max-w-[110px] object-contain"
                  />
                </div>
                <div>
                  <h3 className="m-0 mb-1 text-base font-bold tracking-[-0.01em]">
                    {site.name}
                  </h3>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-blue-light"
                  >
                    {site.label}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
