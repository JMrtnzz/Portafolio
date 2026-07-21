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
    items: ["Node.js", "Python", "Prisma", "PostgreSQL", "SQLite", "Zod", "FastAPI"],
  },
  {
    title: "FiveM y roleplay",
    items: ["Lua", "FiveM", "QBCore / QBX", "ox_lib", "oxmysql"],
  },
  {
    title: "Herramientas",
    items: ["Git", "GitHub Actions", "Vercel", "Docker", "Discord.py", "Kick API"],
  },
];
