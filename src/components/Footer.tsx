import Image from "next/image";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-pad border-t border-line py-8 pb-[max(2rem,env(safe-area-inset-bottom))] sm:py-10">
      <div className="container-narrow flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-full.png"
            alt=""
            width={28}
            height={28}
            className="size-7 rounded-full opacity-90"
          />
          <p className="font-display text-sm font-semibold text-paper">
            © {year} {site.name}
          </p>
        </div>
        <p className="text-xs leading-relaxed text-muted sm:text-sm">{site.tagline}</p>
      </div>
    </footer>
  );
}
