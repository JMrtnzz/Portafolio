# Portafolio · RocKG

Portafolio personal de **Juanse Martínez** (marca **RocKG**): proyectos web, FiveM, herramientas RP y streaming en Kick.

## Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy en Vercel

1. Empujá este repo a GitHub (`JMrtnzz/Portafolio`).
2. En [vercel.com](https://vercel.com): **Add New Project** → importá el repo.
3. Framework: **Next.js** (detectado automático). Root: `.`
4. Deploy. Luego podés enlazar un dominio custom.

Opcional con CLI:

```bash
npx vercel
```

## Enlaces

- Kick: https://kick.com/RocKG
- Redes: https://guns.lol/RocKG
- GitHub: https://github.com/JMrtnzz
- Email: xRocKGx@gmail.com

## Editar contenido

- Datos del sitio / redes: [`src/data/site.ts`](src/data/site.ts)
- Proyectos: [`src/data/projects.ts`](src/data/projects.ts)
- Stack: [`src/data/skills.ts`](src/data/skills.ts)
