export type Skill = {
  name: string;
  /** Simple Icons slug — https://simpleicons.org */
  icon?: string;
};

export type SkillGroup = {
  title: string;
  items: Skill[];
};

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Vue.js", icon: "vuedotjs" },
      { name: "Vite", icon: "vite" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Framer Motion", icon: "framer" },
    ],
  },
  {
    title: "Backend y datos",
    items: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Prisma", icon: "prisma" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "SQLite", icon: "sqlite" },
      { name: "Redis", icon: "redis" },
      { name: "Zod", icon: "zod" },
      { name: "OpenAI", icon: "openai" },
    ],
  },
  {
    title: "FiveM y roleplay",
    items: [
      { name: "Lua", icon: "lua" },
      { name: "FiveM" },
      { name: "QBCore / QBX" },
      { name: "ox_lib" },
    ],
  },
  {
    title: "Herramientas y despliegue",
    items: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Vercel", icon: "vercel" },
      { name: "ESLint", icon: "eslint" },
      { name: "Discord.py", icon: "discord" },
      { name: "OBS", icon: "obsstudio" },
    ],
  },
];
