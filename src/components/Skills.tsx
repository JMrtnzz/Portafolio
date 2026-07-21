"use client";

import { motion } from "framer-motion";
import { skills, type Skill } from "@/data/skills";

function SkillIcon({ skill }: { skill: Skill }) {
  if (skill.icon) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://cdn.simpleicons.org/${skill.icon}/9A9AA3`}
        alt=""
        width={14}
        height={14}
        className="size-3.5 shrink-0 opacity-90 transition group-hover:opacity-100"
        loading="lazy"
      />
    );
  }

  return (
    <span
      aria-hidden
      className="flex size-3.5 shrink-0 items-center justify-center rounded-[2px] bg-paper/10 text-[9px] font-semibold uppercase leading-none text-muted"
    >
      {skill.name.charAt(0)}
    </span>
  );
}

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
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="border-t border-line pt-6"
            >
              <h3 className="font-display text-lg font-semibold text-paper">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 + j * 0.03 }}
                    whileHover={{ y: -2, borderColor: "rgba(225,6,0,0.45)" }}
                    className="group inline-flex items-center gap-1.5 rounded-sm border border-line px-2.5 py-1 text-sm text-muted transition hover:text-paper"
                  >
                    <SkillIcon skill={item} />
                    {item.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
