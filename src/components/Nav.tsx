"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";

const links = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre", label: "Sobre mí" },
  { href: "#stack", label: "Stack" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-ink/90 backdrop-blur-md" : "bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <nav className="section-pad container-narrow flex h-14 items-center justify-between gap-3 sm:h-16">
        <a
          href="#top"
          className="group flex min-w-0 items-center gap-2 transition hover:opacity-90 sm:gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-full.png"
            alt=""
            width={36}
            height={36}
            className="size-8 shrink-0 rounded-full shadow-[0_0_18px_rgba(225,6,0,0.35)] transition group-hover:shadow-[0_0_24px_rgba(225,6,0,0.55)] sm:size-9"
            priority
          />
          <span className="font-display text-base font-bold tracking-tight text-paper transition-colors group-hover:text-rockg sm:text-lg">
            <span className="sm:hidden">Juanse</span>
            <span className="hidden sm:inline">{site.name}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-muted transition-colors hover:text-paper after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-rockg after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${site.email}`}
              className="rounded-sm bg-paper px-3.5 py-1.5 text-sm font-semibold text-ink transition hover:bg-white"
            >
              Hablemos
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-sm text-sm font-medium text-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-ink/98 md:hidden"
          >
            <ul className="section-pad container-narrow flex flex-col gap-1 py-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + i * 0.04 }}
                >
                  <a
                    href={link.href}
                    className="flex min-h-12 items-center text-lg text-paper"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.24 }}
                className="pt-2"
              >
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex min-h-11 items-center font-semibold text-rockg"
                  onClick={() => setOpen(false)}
                >
                  Hablemos
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
