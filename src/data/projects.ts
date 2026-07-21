export type ProjectCategory =
  | "cliente"
  | "streaming"
  | "rp"
  | "fivem"
  | "experimental";

export type Project = {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  stack: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export const categoryLabels: Record<ProjectCategory, string> = {
  cliente: "Cliente",
  streaming: "Streaming",
  rp: "RP & Tools",
  fivem: "FiveM",
  experimental: "Experimental",
};

/** Orden alineado con el README de perfil (JMrtnzz/JMrtnzz). */
export const projects: Project[] = [
  {
    id: "asociacion-apic",
    title: "Asociación APIC",
    description:
      "Sitio institucional de APIC — membresías, eventos, revista y biblioteca virtual.",
    category: "cliente",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/JMrtnzz/AsociacionAPIC",
    live: "https://asociacion-apic.vercel.app",
    featured: true,
  },
  {
    id: "instituto-fdi",
    title: "Instituto FDI",
    description:
      "Sitio institucional bilingüe (ES/EN) con catálogo de cursos, SEO y formularios.",
    category: "cliente",
    stack: ["Next.js", "React", "Tailwind", "Zod"],
    github: "https://github.com/JMrtnzz/InstitutoFDI",
    live: "https://instituto-fdi.vercel.app",
    featured: true,
  },
  {
    id: "mg-consultores",
    title: "MG Consultores",
    description:
      "Landing corporativa de Mejía Gómez Consultores — servicios contables y fiscales.",
    category: "cliente",
    stack: ["Vue 3", "Vite", "Vue Router", "Resend"],
    github: "https://github.com/JMrtnzz/MGConsultores",
    live: "https://mg-consultores-silk.vercel.app",
    featured: true,
  },
  {
    id: "api-poligrafia",
    title: "Instituto Americano de Poligrafía",
    description:
      "Web corporativa del Instituto Americano de Poligrafía — i18n, temas y webhook CRM.",
    category: "cliente",
    stack: ["Next.js", "TypeScript", "Framer Motion"],
    github: "https://github.com/JMrtnzz/ApiPoligrafia",
    live: "https://api-poligrafia.vercel.app",
    featured: true,
  },
  {
    id: "crypto-ai",
    title: "Crypto AI Fund Manager",
    description:
      "SaaS de IA como analista de fondo — scoring técnico, fundamental, sentimiento y on-chain.",
    category: "experimental",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "OpenAI"],
    github: "https://github.com/JMrtnzz/Crypto-AI-Fund-Manager",
  },
  {
    id: "songkick",
    title: "SongKICK",
    description:
      "Kick ↔ Spotify: cola de reproducción vía redenciones, OAuth y webhooks.",
    category: "streaming",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    github: "https://github.com/JMrtnzz/SongKICK",
    featured: true,
  },
  {
    id: "alertas-rockg",
    title: "Alertas RocKG",
    description:
      "Pack de alertas custom para Kick + Botrix / OBS (follow, sub, gifts, tips).",
    category: "streaming",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/JMrtnzz/Alertas-RocKG",
    featured: true,
  },
  {
    id: "multify",
    title: "Multify",
    description:
      "Calculadora de multas, meses e incautación para Family RP.",
    category: "rp",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/JMrtnzz/Calculadora-Multas",
    live: "https://calculadora-multas.vercel.app",
  },
  {
    id: "tunershop",
    title: "TunerShop",
    description:
      "Calculadora de materiales y precios para taller de tuning en RP.",
    category: "rp",
    stack: ["HTML", "CSS", "Alpine.js"],
    github: "https://github.com/JMrtnzz/TunerShop",
    live: "https://tuner-shop.vercel.app",
  },
  {
    id: "bot-turnos",
    title: "bot-turnos",
    description:
      "Bot de Discord para gestión de turnos con logs y base de datos.",
    category: "rp",
    stack: ["Python", "discord.py", "SQLite"],
    github: "https://github.com/JMrtnzz/bot-turnos",
  },
  {
    id: "rockg-server",
    title: "RocKG-Server",
    description:
      "Base y recursos de servidor FiveM (QBX, ox, scripts custom).",
    category: "fivem",
    stack: ["Lua", "FiveM", "Node"],
    github: "https://github.com/JMrtnzz/RocKG-Server",
  },
];
