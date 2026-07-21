"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-ink/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="section-pad container-narrow flex h-16 items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2.5 transition hover:opacity-90"
        >
          <Image
            src="/logo-full.png"
            alt=""
            width={36}
            height={36}
            className="size-9 rounded-full shadow-[0_0_18px_rgba(225,6,0,0.35)] transition group-hover:shadow-[0_0_24px_rgba(225,6,0,0.55)]"
            priority
          />
          <span className="font-display text-lg font-bold tracking-tight text-paper group-hover:text-rockg transition-colors">
            {site.brand}
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
          className="text-sm text-paper md:hidden"
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
                href={`mailto:${site.email}`}
                className="font-semibold text-rockg"
                onClick={() => setOpen(false)}
              >
                Hablemos
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
