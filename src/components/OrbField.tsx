"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect } from "react";

export default function OrbField() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 60, damping: 20, mass: 0.5 });
  const springY = useSpring(pointerY, { stiffness: 60, damping: 20, mass: 0.5 });

  const orb1X = useTransform(springX, (v) => v * 24);
  const orb1Y = useTransform(springY, (v) => v * 24);
  const orb2X = useTransform(springX, (v) => v * -20);
  const orb2Y = useTransform(springY, (v) => v * -20);
  const orb3X = useTransform(springX, (v) => v * 16);
  const orb3Y = useTransform(springY, (v) => v * 16);

  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (e: PointerEvent) => {
      pointerX.set((e.clientX / window.innerWidth - 0.5) * 2);
      pointerY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [pointerX, pointerY, reduceMotion]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="trelia-orb trelia-float-1"
        style={{
          width: 520,
          height: 520,
          top: -120,
          left: -80,
          background:
            "radial-gradient(circle, rgba(37,99,235,0.55), transparent 70%)",
          x: orb1X,
          y: orb1Y,
        }}
      />
      <motion.div
        className="trelia-orb trelia-float-2"
        style={{
          width: 460,
          height: 460,
          top: 80,
          right: -100,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.5), transparent 70%)",
          x: orb2X,
          y: orb2Y,
        }}
      />
      <motion.div
        className="trelia-orb trelia-float-3"
        style={{
          width: 380,
          height: 380,
          bottom: -140,
          left: "30%",
          background:
            "radial-gradient(circle, rgba(96,165,250,0.4), transparent 70%)",
          x: orb3X,
          y: orb3Y,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
        }}
      />
    </div>
  );
}
