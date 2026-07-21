"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Sitios corporativos",
    text: "Landings e institucionales con Next.js o Vue: SEO, i18n, formularios y deploy en Vercel.",
  },
  {
    title: "Herramientas RP",
    text: "Calculadoras y utilidades para comunidades de roleplay — rápidas, claras y sin fricción.",
  },
  {
    title: "FiveM & bots",
    text: "Recursos QBX/QBCore, automatizaciones Discord y stacks ox con código mantenible.",
  },
  {
    title: "Streaming Kick",
    text: "Overlays, alertas y apps propias (SongKICK) para potenciar el canal RocKG.",
  },
];

export function About() {
  return (
    <section id="sobre" className="section-pad py-24 md:py-32">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-rockg">Sobre mí</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-paper md:text-5xl">
            Productos digitales útiles, con identidad propia.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            Soy desarrollador enfocado en frontend, backend ligero y entornos FiveM. Priorizo
            interfaces claras, buen rendimiento y código que se pueda mantener. Como{" "}
            <span className="text-paper">RocKG</span> también construyo y transmito en Kick.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <div className="reveal-line mb-5 w-full" />
              <h3 className="font-display text-lg font-semibold text-paper">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
