export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend y datos",
    items: [
      "Node.js",
      "Python",
      "FastAPI",
      "Prisma",
      "PostgreSQL",
      "SQLite",
      "Redis",
      "Zod",
      "OpenAI",
    ],
  },
  {
    title: "FiveM y roleplay",
    items: ["Lua", "FiveM", "QBCore / QBX", "ox_lib"],
  },
  {
    title: "Herramientas y despliegue",
    items: [
      "Git",
      "Docker",
      "GitHub Actions",
      "Vercel",
      "ESLint",
      "Discord.py",
      "OBS",
    ],
  },
];
