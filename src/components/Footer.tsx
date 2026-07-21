import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-pad border-t border-line py-10">
      <div className="container-narrow flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-sm font-semibold text-paper">
          © {year} {site.brand} · {site.name}
        </p>
        <p className="text-sm text-muted">{site.tagline}</p>
      </div>
    </footer>
  );
}
