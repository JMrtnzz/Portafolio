"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

const contacts = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "Discord",
    value: "Servidor RocKG",
    href: site.links.discord,
  },
  {
    label: "X / Twitter",
    value: "@xRocKGx",
    href: site.links.x,
  },
  {
    label: "GitHub",
    value: "@JMrtnzz",
    href: site.links.github,
  },
];

export function Contact() {
  return (
    <section id="contacto" className="section-pad py-24 md:py-32">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-rockg">Contacto</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-paper md:text-5xl">
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            Escribime por email, Discord o X. Abierto a sitios corporativos, SaaS, herramientas
            RP, automatizaciones de stream y recursos FiveM.
          </p>
        </motion.div>

        <ul className="mt-12 grid gap-0 sm:grid-cols-2">
          {contacts.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="border-t border-line py-5 sm:odd:pr-6 sm:even:pl-6"
            >
              <a
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="group block"
              >
                <p className="text-xs uppercase tracking-wider text-muted">{item.label}</p>
                <p className="mt-1 font-display text-xl font-semibold text-paper transition group-hover:text-rockg">
                  {item.value}
                  <span className="ml-2 inline-block translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </p>
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href={`mailto:${site.email}`}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 inline-flex rounded-sm bg-rockg px-6 py-3.5 text-sm font-semibold text-paper transition hover:brightness-110"
        >
          Enviar email
        </motion.a>
      </div>
    </section>
  );
}
