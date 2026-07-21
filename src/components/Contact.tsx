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
  {
    label: "Kick",
    value: "kick.com/RocKG",
    href: site.links.kick,
  },
  {
    label: "Todas las redes",
    value: "guns.lol/RocKG",
    href: site.links.guns,
  },
];

export function Contact() {
  return (
    <section id="contacto" className="section-pad py-24 md:py-32">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-rockg">Contacto</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-paper md:text-5xl">
            ¿Colaboramos?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            Escribime por email, Discord o X. Abierto a proyectos web, herramientas RP, FiveM y
            todo lo relacionado con el ecosistema Kick.
          </p>
        </motion.div>

        <ul className="mt-12 grid gap-0 sm:grid-cols-2">
          {contacts.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="border-t border-line py-5 sm:odd:pr-6 sm:even:pl-6 sm:[&:nth-child(1)]:border-t sm:[&:nth-child(2)]:border-t"
            >
              <a
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="group block"
              >
                <p className="text-xs uppercase tracking-wider text-muted">{item.label}</p>
                <p className="mt-1 font-display text-xl font-semibold text-paper transition group-hover:text-kick">
                  {item.value}
                </p>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
