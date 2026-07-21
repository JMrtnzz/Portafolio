"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="stack" className="section-pad py-24 md:py-32">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-rockg">Stack</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-paper md:text-5xl">
            Tecnologías que uso
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {skills.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="border-t border-line pt-6"
            >
              <h3 className="font-display text-lg font-semibold text-paper">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-line px-2.5 py-1 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
