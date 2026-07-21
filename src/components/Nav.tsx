"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#stream", label: "Stream" },
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="section-pad container-narrow flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-paper">
          {site.brand}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.links.kick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-kick px-3.5 py-1.5 text-sm font-semibold text-ink transition hover:brightness-110"
            >
              <span className="live-pulse size-1.5 rounded-full bg-ink" aria-hidden />
              Kick
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="md:hidden text-paper text-sm"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-ink/95 md:hidden">
          <ul className="section-pad container-narrow flex flex-col gap-4 py-5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base text-paper"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.links.kick}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-kick font-semibold"
                onClick={() => setOpen(false)}
              >
                Ver en Kick
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
