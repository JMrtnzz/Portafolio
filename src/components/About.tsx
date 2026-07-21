"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Sitios corporativos",
    text: "Landings e institucionales con Next.js o Vue: SEO, i18n, temas y deploy en Vercel.",
  },
  {
    title: "AI / SaaS",
    text: "Plataformas con FastAPI, PostgreSQL, Redis y pipelines de decisión explicables.",
  },
  {
    title: "Streaming & bots",
    text: "Kick ↔ Spotify, alertas OBS/Botrix y bots de Discord con persistencia.",
  },
  {
    title: "FiveM & RP",
    text: "Recursos QBX/QBCore, ox_lib y herramientas para comunidades de roleplay.",
  },
];

export function About() {
  return (
    <section id="sobre" className="section-pad py-24 md:py-32">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 28, clipPath: "inset(12% 0 0 0)" }}
          whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-rockg">Sobre mí</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-paper md:text-5xl">
            Productos digitales útiles y bien cuidados.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            Desde landings corporativas e institucionales hasta calculadoras, integraciones
            con APIs, bots de Discord, herramientas para Kick y plataformas asistidas por IA.
            Me muevo entre frontend, backend y entornos FiveM, priorizando interfaces claras,
            buen rendimiento y código mantenible.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <motion.div
                className="mb-5 h-px w-full origin-left bg-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              />
              <p className="mb-2 font-display text-xs text-rockg/80">0{i + 1}</p>
              <h3 className="font-display text-lg font-semibold text-paper transition group-hover:text-rockg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
