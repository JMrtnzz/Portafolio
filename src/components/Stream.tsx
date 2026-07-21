"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

const streamTools = [
  {
    title: "Alertas RocKG",
    text: "Overlays HTML/CSS/JS para Botrix y OBS con la identidad del canal.",
    href: "https://github.com/JMrtnzz/Alertas-RocKG",
  },
  {
    title: "SongKICK",
    text: "Canjes de Kick que añaden canciones a la cola de Spotify en tiempo real.",
    href: "https://github.com/JMrtnzz/SongKICK",
  },
];

const socials = [
  { label: "Kick", href: site.links.kick, accent: true },
  { label: "X / Twitter", href: site.links.x },
  { label: "Instagram", href: site.links.instagram },
  { label: "TikTok", href: site.links.tiktok },
  { label: "Twitch", href: site.links.twitch },
  { label: "Discord", href: site.links.discord },
  { label: "guns.lol", href: site.links.guns },
];

export function Stream() {
  return (
    <section id="stream" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(83,252,24,0.14), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(225,6,0,0.1), transparent 50%)",
        }}
      />

      <div className="section-pad container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="live-pulse size-2.5 rounded-full bg-kick" aria-hidden />
            <p className="text-sm uppercase tracking-[0.22em] text-kick">Streaming</p>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-paper md:text-5xl">
            RocKG en Kick
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Transmito en Kick como <span className="text-paper font-medium">{site.brand}</span>.
            Además del stream, desarrollo mis propias herramientas de alertas, song requests e
            integración con OBS para que la experiencia del chat sea parte del producto.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-sm border border-kick/25 bg-ink-2"
          >
            <div className="flex aspect-video flex-col items-center justify-center gap-5 bg-[linear-gradient(135deg,#0d120e_0%,#12141a_50%,#1a0a0a_100%)] p-8 text-center">
              <p className="font-display text-4xl font-extrabold tracking-tight text-paper md:text-6xl">
                {site.brand}
              </p>
              <p className="max-w-sm text-sm text-muted">
                Canal principal en Kick. Entra, sígueme y activa las notificaciones.
              </p>
              <a
                href={site.links.kick}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-kick px-6 py-3 text-sm font-bold text-ink transition hover:brightness-110"
              >
                <span className="live-pulse size-2 rounded-full bg-ink" aria-hidden />
                kick.com/RocKG
              </a>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-display text-lg font-semibold text-paper">
                Herramientas del canal
              </h3>
              <ul className="mt-4 space-y-5">
                {streamTools.map((tool) => (
                  <li key={tool.title} className="border-t border-line pt-4">
                    <a
                      href={tool.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <p className="font-medium text-paper group-hover:text-kick transition-colors">
                        {tool.title}
                      </p>
                      <p className="mt-1 text-sm text-muted">{tool.text}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-paper">Redes</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block rounded-sm border px-3 py-1.5 text-sm transition ${
                        s.accent
                          ? "border-kick/40 text-kick hover:bg-kick/10"
                          : "border-line text-muted hover:border-paper/30 hover:text-paper"
                      }`}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
