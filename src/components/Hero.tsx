"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { site } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const letters = site.brand.split("");
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const orbX = useTransform(smx, [0, 1], [-40, 40]);
  const orbY = useTransform(smy, [0, 1], [-28, 28]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 md:pb-24 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 mesh" aria-hidden />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-24 size-[420px] rounded-full opacity-60 blur-3xl md:size-[520px]"
        style={{
          x: orbX,
          y: orbY,
          background:
            "radial-gradient(circle, rgba(225,6,0,0.35) 0%, rgba(225,6,0,0.08) 45%, transparent 70%)",
        }}
      />

      <div className="section-pad container-narrow relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-4 text-sm uppercase tracking-[0.28em] text-muted"
        >
          {site.name} · {site.tagline}
        </motion.p>

        <h1 className="font-display text-[clamp(4.5rem,18vw,11rem)] font-extrabold leading-[0.85] tracking-[-0.04em] text-paper">
          <span className="sr-only">{site.brand}</span>
          <span aria-hidden className="inline-flex flex-wrap">
            {letters.map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                initial={{ opacity: 0, y: "0.55em", rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.7, delay: 0.08 + i * 0.055, ease }}
                className="inline-block origin-bottom will-change-transform"
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.45, ease }}
          className="mt-6 h-px w-full origin-left bg-gradient-to-r from-rockg via-paper/30 to-transparent"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35, ease }}
          className="mt-8 flex max-w-xl flex-col gap-8 md:mt-10 md:max-w-none md:flex-row md:items-end md:justify-between"
        >
          <p className="text-lg leading-relaxed text-muted md:max-w-md md:text-xl">
            {site.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.a
              href="#proyectos"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-sm bg-paper px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white"
            >
              Ver proyectos
            </motion.a>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-sm border border-paper/25 px-5 py-3 text-sm font-semibold text-paper transition hover:border-rockg hover:text-rockg"
            >
              Contactar
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
