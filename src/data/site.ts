export const site = {
  brand: "RocKG",
  name: "Juanse Martínez",
  githubUser: "JMrtnzz",
  tagline: "Desarrollador web · FiveM · Streaming",
  description:
    "Construyo sitios corporativos, herramientas para comunidades RP, bots y recursos FiveM. En Kick transmito como RocKG.",
  email: "xRocKGx@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/124746063?v=4",
  links: {
    github: "https://github.com/JMrtnzz",
    kick: "https://kick.com/RocKG",
    guns: "https://guns.lol/RocKG",
    x: "https://x.com/xRocKGx",
    instagram: "https://instagram.com/xrockgx",
    tiktok: "https://tiktok.com/@xRocKGx",
    twitch: "https://twitch.tv/RocKG",
    discord: "https://discord.gg/8kz4j2q33e",
  },
} as const;

export type SiteLink = keyof typeof site.links;
