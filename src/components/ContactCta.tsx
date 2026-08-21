"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal from "./Reveal";

export default function ContactCta() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contato"
      className="relative overflow-hidden px-6 py-[140px]"
      style={{ background: "linear-gradient(135deg, #1D4ED8, #6D28D9)" }}
    >
      <div
        className="trelia-orb trelia-float-1"
        style={{
          width: 500,
          height: 500,
          top: -150,
          left: -100,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto grid max-w-[1000px] grid-cols-1 items-start gap-16 lg:grid-cols-2">
        <Reveal>
          <h2 className="m-0 mb-5 text-[clamp(2rem,4vw,2.9rem)] leading-[1.1] font-extrabold tracking-[-0.02em]">
            Vamos conversar sobre o seu projeto.
          </h2>
          <p className="m-0 text-[17px] leading-relaxed text-[#DCE5FB]">
            Uma conversa de 30 minutos para entender o desafio e dizer se
            conseguimos ajudar.
          </p>
        </Reveal>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="trelia-glass rounded-2xl p-10 text-center"
            >
              <p className="m-0 mb-2 text-xl font-bold">Mensagem enviada.</p>
              <p className="m-0 text-[15px] text-[#DCE5FB]">
                Entraremos em contato em até 1 dia útil.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="trelia-glass-light flex flex-col gap-3.5 rounded-2xl p-8"
            >
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  required
                  className="rounded-lg border border-black/[0.12] bg-white px-3.5 py-3 font-sans text-[15px] text-ink"
                />
                <input
                  type="text"
                  name="empresa"
                  placeholder="Empresa"
                  required
                  className="rounded-lg border border-black/[0.12] bg-white px-3.5 py-3 font-sans text-[15px] text-ink"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                className="rounded-lg border border-black/[0.12] bg-white px-3.5 py-3 font-sans text-[15px] text-ink"
              />
              <textarea
                name="mensagem"
                placeholder="Conte um pouco sobre o projeto"
                rows={3}
                className="resize-none rounded-lg border border-black/[0.12] bg-white px-3.5 py-3 font-sans text-[15px] text-ink"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.98 }}
                className="trelia-btn-primary rounded-lg border-none py-3.5 text-base font-semibold text-white"
              >
                Enviar
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
