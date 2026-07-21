"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";

/** Compact, optional aside — portfolio for clients stays primary. */
export function Stream() {
  const [open, setOpen] = useState(false);

  return (
    <section id="mas" className="section-pad border-t border-line py-10 md:py-12">
      <div className="container-narrow">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 text-left"
          aria-expanded={open}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">También</p>
            <p className="mt-1 font-display text-base font-medium text-paper/80 md:text-lg">
              Side projects & streaming
            </p>
          </div>
          <span className="text-sm text-muted tabular-nums">{open ? "−" : "+"}</span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="grid gap-6 pb-2 pt-6 text-sm text-muted md:grid-cols-2">
                <p className="leading-relaxed">
                  Fuera del trabajo para clientes, mantengo herramientas propias (alertas OBS,
                  SongKICK) y un canal en Kick como {site.brand}. No es el foco de este
                  portafolio — está aquí por si querés ver ese lado.
                </p>
                <ul className="flex flex-wrap gap-2 content-start">
                  {[
                    { label: "Kick", href: site.links.kick },
                    { label: "guns.lol", href: site.links.guns },
                    { label: "Alertas", href: "https://github.com/JMrtnzz/Alertas-RocKG" },
                    { label: "SongKICK", href: "https://github.com/JMrtnzz/SongKICK" },
                  ].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-sm border border-line px-3 py-1.5 text-muted transition hover:border-paper/30 hover:text-paper"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
