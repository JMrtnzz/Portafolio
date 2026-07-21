import Image from "next/image";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-pad border-t border-line py-10">
      <div className="container-narrow flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-full.png"
            alt=""
            width={28}
            height={28}
            className="size-7 rounded-full opacity-90"
          />
          <p className="font-display text-sm font-semibold text-paper">
            © {year} {site.brand} · {site.name}
          </p>
        </div>
        <p className="text-sm text-muted">{site.tagline}</p>
      </div>
    </footer>
  );
}
