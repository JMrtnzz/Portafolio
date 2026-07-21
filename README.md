# Portafolio · RocKG

Portafolio personal de **Juanse Martínez** (marca **RocKG**): proyectos web, FiveM, herramientas RP y streaming en Kick.

**Producción:** [portafolio-nine-blue-65.vercel.app](https://portafolio-nine-blue-65.vercel.app/)

## Stack

| Tecnología | Uso |
|------------|-----|
| [Next.js 15](https://nextjs.org/) | App Router + Turbopack |
| [React 19](https://react.dev/) + TypeScript | UI tipada |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilos |
| [Framer Motion](https://www.framer.com/motion/) | Animaciones |

## Secciones del sitio

- Hero y marca RocKG
- Marquee / about
- Proyectos con filtros por categoría
- Skills / stack
- Contacto y enlaces
- Bloque de stream (Kick / alertas)
- Nav, scroll progress y cursor glow

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo (Turbopack) |
| `npm run build` | Build de producción |
| `npm start` | Servir build |
| `npm run lint` | ESLint |

## Editar contenido

| Archivo | Contenido |
|---------|-----------|
| [`src/data/site.ts`](src/data/site.ts) | Datos del sitio y redes |
| [`src/data/projects.ts`](src/data/projects.ts) | Proyectos destacados |
| [`src/data/skills.ts`](src/data/skills.ts) | Stack / skills |

## Deploy en Vercel

1. Empuja el repo a GitHub (`JMrtnzz/Portafolio`).
2. En [vercel.com](https://vercel.com): **Add New Project** → importa el repo.
3. Framework: **Next.js** (auto-detectado). Root: `.`
4. Deploy. Opcional: dominio custom.

```bash
npx vercel
```

## Enlaces

- Kick: https://kick.com/RocKG
- Redes: https://guns.lol/RocKG
- GitHub: https://github.com/JMrtnzz
- Email: xRocKGx@gmail.com
