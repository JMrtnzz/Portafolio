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

export const projects: Project[] = [
  {
    id: "instituto-fdi",
    title: "Instituto FDI",
    description:
      "Sitio institucional bilingüe (ES/EN) para una academia de criminalística y ciencias forenses en Barranquilla: catálogo de 13 cursos, SEO, admisiones y formularios.",
    category: "cliente",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Zod"],
    github: "https://github.com/JMrtnzz/InstitutoFDI",
    live: "https://institutofdi.edu",
    featured: true,
  },
  {
    id: "api-poligrafia",
    title: "Instituto Americano de Poligrafía",
    description:
      "Web corporativa multi-página con i18n ES/EN, tema claro/oscuro, catálogo de cursos, SEO y captación por WhatsApp/CRM.",
    category: "cliente",
    stack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    github: "https://github.com/JMrtnzz/ApiPoligrafia",
    live: "https://institutoamericanodepoligrafia.com",
    featured: true,
  },
  {
    id: "mg-consultores",
    title: "MG Consultores",
    description:
      "Landing corporativa para Mejía Gómez Consultores Asociados: servicios contables y fiscales, scroll reveal, SEO y contacto.",
    category: "cliente",
    stack: ["Vue 3", "Vite", "Vue Router", "Resend"],
    github: "https://github.com/JMrtnzz/MGConsultores",
    live: "https://mg-consultores-silk.vercel.app",
    featured: true,
  },
  {
    id: "songkick",
    title: "SongKICK",
    description:
      "Integración Kick ↔ Spotify: canjes de recompensas del canal encolan canciones en Spotify con OAuth, webhooks y panel de control.",
    category: "streaming",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    github: "https://github.com/JMrtnzz/SongKICK",
    featured: true,
  },
  {
    id: "alertas-rockg",
    title: "Alertas RocKG",
    description:
      "Pack de alertas personalizadas para Kick + Botrix + OBS: follow, sub, gift, host, tips y KICKs con la identidad visual del canal.",
    category: "streaming",
    stack: ["HTML", "CSS", "JavaScript", "OBS", "Botrix"],
    github: "https://github.com/JMrtnzz/Alertas-RocKG",
    featured: true,
  },
  {
    id: "multify",
    title: "Multify",
    description:
      "Calculadora de multas, meses e incautación para Family RP: busca cargos del código penal, arma el acta y copia el resumen al portapapeles.",
    category: "rp",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/JMrtnzz/Calculadora-Multas",
  },
  {
    id: "tunershop",
    title: "TunerShop",
    description:
      "Calculadora de materiales y precios para taller de tuning en servidor RP, con descuentos y logs a Google Sheets.",
    category: "rp",
    stack: ["HTML", "CSS", "Alpine.js"],
    github: "https://github.com/JMrtnzz/TunerShop",
    live: "https://tuner-shop.vercel.app",
  },
  {
    id: "bot-turnos",
    title: "bot-turnos",
    description:
      "Bot de Discord para fichaje de staff: entrar/salir de turno, roles, logs y totales de horas con SQLite.",
    category: "rp",
    stack: ["Python", "discord.py", "SQLite"],
    github: "https://github.com/JMrtnzz/bot-turnos",
  },
  {
    id: "rockg-server",
    title: "RocKG-Server",
    description:
      "Base de servidor FiveM Qbox (QBX) con recursos propios RocKG: chat, duty, flota policial, shops y stack ox.",
    category: "fivem",
    stack: ["Lua", "FiveM", "QBX", "ox_lib"],
    github: "https://github.com/JMrtnzz/RocKG-Server",
  },
  {
    id: "rockg-project",
    title: "RocKG-Project",
    description:
      "Servidor FiveM QBCore de desarrollo: emotes, carreras, tuning y recursos custom bajo la marca RocKG.",
    category: "fivem",
    stack: ["Lua", "FiveM", "QBCore", "txAdmin"],
    github: "https://github.com/JMrtnzz/RocKG-Project",
  },
  {
    id: "crypto-ai",
    title: "Crypto AI Fund Manager",
    description:
      "Plataforma SaaS de análisis con IA al estilo fondo de inversión: scoring multi-factor, memoria de decisiones y dashboard tipo terminal.",
    category: "experimental",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "LangGraph"],
    github: "https://github.com/JMrtnzz/Crypto-AI-Fund-Manager",
  },
];
