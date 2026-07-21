"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 md:pb-24 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 mesh" aria-hidden />
      <div className="section-pad container-narrow relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-sm uppercase tracking-[0.28em] text-muted"
        >
          {site.name}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(4.5rem,18vw,11rem)] font-extrabold leading-[0.85] tracking-[-0.04em] text-paper"
        >
          {site.brand}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex max-w-xl flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between md:max-w-none"
        >
          <p className="text-lg leading-relaxed text-muted md:max-w-md md:text-xl">
            {site.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="rounded-sm bg-paper px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white"
            >
              Ver proyectos
            </a>
            <a
              href={site.links.kick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-kick/50 bg-kick/10 px-5 py-3 text-sm font-semibold text-kick transition hover:bg-kick/20"
            >
              <span className="live-pulse size-2 rounded-full bg-kick" aria-hidden />
              Ver en Kick
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
