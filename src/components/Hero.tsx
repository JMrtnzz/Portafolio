"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { site } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const nameParts = site.name.split(" ");
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const orbX = useTransform(smx, [0, 1], [-40, 40]);
  const orbY = useTransform(smy, [0, 1], [-28, 28]);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

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
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-12 pt-[max(5.5rem,env(safe-area-inset-top))] sm:pb-16 md:pb-24 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 mesh" aria-hidden />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-20 size-[280px] rounded-full opacity-50 blur-3xl sm:-right-20 sm:top-24 sm:size-[420px] sm:opacity-60 md:size-[520px]"
        style={{
          x: orbX,
          y: orbY,
          background:
            "radial-gradient(circle, rgba(225,6,0,0.35) 0%, rgba(225,6,0,0.08) 45%, transparent 70%)",
        }}
      />

      <div className="section-pad container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.82, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
          className="mb-6 sm:mb-8 md:mb-10"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 rounded-full bg-rockg/30 blur-2xl" aria-hidden />
            <Image
              src="/logo-full.png"
              alt={`${site.name} logo`}
              width={160}
              height={160}
              priority
              className="relative size-20 rounded-full drop-shadow-[0_0_40px_rgba(225,6,0,0.45)] sm:size-24 md:size-36"
            />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-3 max-w-[22rem] text-[0.7rem] uppercase leading-relaxed tracking-[0.16em] text-muted sm:mb-4 sm:max-w-none sm:text-sm sm:tracking-[0.28em]"
        >
          {site.tagline}
        </motion.p>

        <h1 className="font-display text-[clamp(2.65rem,13vw,8rem)] font-extrabold leading-[0.9] tracking-[-0.045em] text-paper sm:text-[clamp(3.25rem,12vw,8rem)] sm:leading-[0.88]">
          <span className="sr-only">{site.name}</span>
          <span aria-hidden className="flex flex-col">
            {nameParts.map((word, wordIndex) => (
              <span key={word} className="block overflow-hidden py-[0.04em]">
                <motion.span
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.12 + wordIndex * 0.14,
                    ease,
                  }}
                  className="block will-change-transform"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.45, ease }}
          className="mt-5 h-px w-full origin-left bg-gradient-to-r from-rockg via-paper/30 to-transparent sm:mt-6"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35, ease }}
          className="mt-6 flex max-w-xl flex-col gap-6 sm:mt-8 sm:gap-8 md:mt-10 md:max-w-none md:flex-row md:items-end md:justify-between"
        >
          <p className="text-base leading-relaxed text-muted sm:text-lg md:max-w-md md:text-xl">
            {site.description}
          </p>

          <div className="flex w-full gap-3 sm:w-auto">
            <motion.a
              href="#proyectos"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-11 flex-1 items-center justify-center rounded-sm bg-paper px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white sm:flex-none"
            >
              Ver proyectos
            </motion.a>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-11 flex-1 items-center justify-center rounded-sm border border-paper/25 px-5 py-3 text-sm font-semibold text-paper transition hover:border-rockg hover:text-rockg sm:flex-none"
            >
              Contactar
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
