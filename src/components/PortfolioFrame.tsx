"use client";

import { useEffect, useRef, useState } from "react";

const BASE_WIDTH = 1440;
const BASE_HEIGHT = 900;

export default function PortfolioFrame({
  url,
  name,
  embeddable,
}: {
  url: string;
  name: string;
  embeddable: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(BASE_HEIGHT);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const width = el.offsetWidth;
      if (!width) return;
      const nextScale = width / BASE_WIDTH;
      setScale(nextScale);
      setHeight(BASE_HEIGHT * nextScale);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!embeddable) {
    return (
      <div
        ref={containerRef}
        className="relative flex w-full items-center justify-center overflow-hidden bg-ink"
        style={{ height }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(96,165,250,0.16), transparent 70%)",
          }}
        />
        <p className="relative m-0 px-6 text-center text-sm text-gray-3">
          Site não disponível para pré-visualização incorporada.
          <br />
          Acesse pelo link abaixo.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-ink"
      style={{ height }}
    >
      <iframe
        src={url}
        title={name}
        loading="lazy"
        className="pointer-events-none absolute top-0 left-0 border-0"
        style={{
          width: BASE_WIDTH,
          height: BASE_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      />
    </div>
  );
}
