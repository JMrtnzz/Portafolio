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
    <section id="contacto" className="section-pad section-y">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-rockg">Contacto</p>
          <h2 className="font-display text-[1.75rem] font-bold tracking-tight text-paper sm:text-3xl md:text-5xl">
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:mt-5 md:text-lg">
            Escribime por email, Discord o X. Abierto a sitios corporativos, SaaS, herramientas
            RP, automatizaciones de stream y recursos FiveM.
          </p>
        </motion.div>

        <ul className="mt-10 grid gap-0 sm:mt-12 sm:grid-cols-2">
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
                className="group block min-w-0"
              >
                <p className="text-xs uppercase tracking-wider text-muted">{item.label}</p>
                <p className="mt-1 break-all font-display text-lg font-semibold text-paper transition sm:text-xl md:group-hover:text-rockg">
                  {item.value}
                  <span className="ml-2 inline-block translate-x-0 opacity-40 transition md:opacity-0 md:group-hover:translate-x-1 md:group-hover:opacity-100">
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
          className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-sm bg-rockg px-6 py-3.5 text-sm font-semibold text-paper transition hover:brightness-110 sm:mt-10 sm:w-auto"
        >
          Enviar email
        </motion.a>
      </div>
    </section>
  );
}
