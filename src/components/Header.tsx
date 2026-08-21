"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-trabalhamos", label: "Como trabalhamos" },
  { href: "#cases", label: "Cases" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/[0.08] transition-[background-color,backdrop-filter] duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur-xl" : "bg-ink/90"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-[18px]">
        <a
          href="#"
          className="trelia-gradient-text text-[22px] font-extrabold tracking-[-0.02em]"
        >
          trelia
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-[#C4C8CE] transition-colors hover:text-blue-light"
            >
              {link.label}
            </a>
          ))}
          <motion.a
            href="#contato"
            className="trelia-btn-primary rounded-lg px-[22px] py-2.5 text-[15px] font-semibold text-white"
            whileHover={{ scale: 1.03, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.98 }}
          >
            Falar com a gente
          </motion.a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          className="flex items-center rounded-lg border border-white/20 px-3 py-2 text-sm text-white lg:hidden"
        >
          {menuOpen ? "Fechar" : "Menu"}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/[0.08] lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4 pb-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[15px] font-medium text-[#C4C8CE]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMenuOpen(false)}
                className="trelia-btn-primary rounded-lg px-5 py-2.5 text-center text-[15px] font-semibold text-white"
              >
                Falar com a gente
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
