const items = [
  "Next.js",
  "React",
  "TypeScript",
  "Vue",
  "Tailwind",
  "FastAPI",
  "Vercel",
  "FiveM",
  "Kick",
  "IA / SaaS",
  "Automatización",
  "Discord bots",
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-line py-3.5 sm:py-4" aria-hidden>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-ink to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-ink to-transparent sm:w-16" />
      <div className="marquee-track gap-6 px-3 sm:gap-10 sm:px-4">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-muted/70 sm:text-sm sm:tracking-[0.2em]"
          >
            {item}
            <span className="ml-6 text-rockg/50 sm:ml-10">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
