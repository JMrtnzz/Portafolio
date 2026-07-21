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
  "streaming",
  "rp",
  "fivem",
  "experimental",
];

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("todos");

  const visible = useMemo(
    () => (filter === "todos" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="proyectos" className="section-pad py-24 md:py-32">
      <div className="container-narrow">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.22em] text-rockg">Proyectos</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-paper md:text-5xl">
              Trabajo seleccionado
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((key) => {
              const label = key === "todos" ? "Todos" : categoryLabels[key];
              const active = filter === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  className={`rounded-sm px-3 py-1.5 text-sm transition ${
                    active
                      ? "bg-paper text-ink font-semibold"
                      : "text-muted hover:text-paper border border-line"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <ul className="mt-12">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.li
                key={project.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="group border-t border-line py-7 last:border-b"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl font-semibold text-paper md:text-2xl">
                        {project.title}
                      </h3>
                      <span className="text-xs uppercase tracking-wider text-muted">
                        {categoryLabels[project.category]}
                      </span>
                    </div>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                      {project.description}
                    </p>
                    <p className="mt-3 text-xs text-muted/80">{project.stack.join(" · ")}</p>
                  </div>

                  <div className="flex shrink-0 gap-4 text-sm">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-kick transition hover:underline"
                      >
                        Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-paper/80 transition hover:text-paper hover:underline"
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
