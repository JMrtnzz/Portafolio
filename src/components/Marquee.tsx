const items = [
  "Next.js",
  "React",
  "TypeScript",
  "Vue",
  "Tailwind",
  "SEO",
  "Vercel",
  "FiveM",
  "APIs",
  "Automatización",
  "Diseño web",
  "Landing pages",
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-line py-4" aria-hidden>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent" />
      <div className="marquee-track gap-10 px-4">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted/70"
          >
            {item}
            <span className="ml-10 text-rockg/50">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
