"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  categoryLabels,
  projects,
  type ProjectCategory,
} from "@/data/projects";

const filters: Array<"todos" | ProjectCategory> = [
  "todos",
  "cliente",
  "rp",
  "fivem",
  "experimental",
  "streaming",
];

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("todos");

  const visible = useMemo(() => {
    if (filter === "todos") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="proyectos" className="section-pad section-y">
      <div className="container-narrow">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-3 text-sm uppercase tracking-[0.22em] text-rockg">Proyectos</p>
            <h2 className="font-display text-[1.75rem] font-bold tracking-tight text-paper sm:text-3xl md:text-5xl">
              Trabajo seleccionado
            </h2>
          </motion.div>

          <div className="-mx-1 scroll-fade">
            <div className="no-scrollbar flex gap-2 overflow-x-auto px-1 pb-1 snap-x snap-mandatory sm:flex-wrap sm:overflow-visible">
              {filters.map((key) => {
                const label =
                  key === "todos"
                    ? "Todos"
                    : key === "streaming"
                      ? "Otros"
                      : categoryLabels[key];
                const active = filter === key;
                return (
                  <motion.button
                    key={key}
                    type="button"
                    onClick={() => setFilter(key)}
                    whileTap={{ scale: 0.96 }}
                    className={`snap-start whitespace-nowrap rounded-sm px-3.5 py-2 text-sm transition ${
                      active
                        ? "bg-paper font-semibold text-ink"
                        : "border border-line text-muted hover:text-paper"
                    }`}
                  >
                    {label}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        <ul className="mt-10 sm:mt-12">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.li
                key={project.id}
                layout
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group relative border-t border-line last:border-b"
              >
                <div className="absolute inset-y-0 left-0 w-0 bg-rockg/10 transition-all duration-300 md:group-hover:w-full" />
                <div className="relative flex flex-col gap-4 py-6 sm:py-7 md:transition-transform md:duration-300 md:group-hover:translate-x-2 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-lg font-semibold text-paper transition md:text-2xl md:group-hover:text-rockg">
                        {project.title}
                      </h3>
                      <span className="text-xs uppercase tracking-wider text-muted">
                        {categoryLabels[project.category]}
                      </span>
                    </div>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                      {project.description}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-muted/80">
                      {project.stack.join(" · ")}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-5 text-sm">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center font-medium text-rockg transition hover:underline"
                      >
                        Demo →
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center font-medium text-paper/80 transition hover:text-paper hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}
