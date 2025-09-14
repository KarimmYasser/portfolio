## Portfolio Website (React · Vite · TypeScript)

Modern, animated developer portfolio built with React, Vite, TypeScript, Tailwind CSS, shadcn/ui (Radix), Framer Motion, and a subtle Three.js background using React Three Fiber.

This template includes ready-to-edit sections (Hero, About, Skills, Projects, Experience, Contact) with theme toggling, smooth scrolling, and a polished UI kit.

## Features

- Fast Vite + React + TypeScript setup
- Tailwind CSS with shadcn/ui components (Radix under the hood)
- Framer Motion animations and transitions
- Three.js background via @react-three/fiber and @react-three/drei
- Dark/Light theme toggle persisted to localStorage
- Responsive navigation with smooth section scrolling
- Prebuilt sections: Hero, About, Skills, Projects, Experience, Contact, Footer
- Path aliases with `@/*`

## Tech Stack

- React 18, TypeScript
- Vite 5 (SWC React plugin)
- Tailwind CSS 3, tailwind-merge, tailwindcss-animate, typography
- shadcn/ui components powered by Radix UI
- Framer Motion
- Three.js, @react-three/fiber, @react-three/drei
- React Router
- Icons: lucide-react (UI), react-icons (Simple Icons for brands)
- Utilities present in deps (optional): TanStack Query, Recharts, Embla Carousel, date-fns, etc.

## Project Structure

```
.
├─ public/
│  ├─ favicon.ico
│  ├─ robots.txt
│  └─ placeholder.svg
├─ src/
│  ├─ components/
│  │  ├─ Navigation.tsx
│  │  ├─ ThreeBackground.tsx
│  │  ├─ sections/
│  │  │  ├─ AboutSection.tsx
│  │  │  ├─ ContactSection.tsx
│  │  │  ├─ ExperienceSection.tsx
│  │  │  ├─ FooterSection.tsx
│  │  │  ├─ HeroSection.tsx
│  │  │  ├─ ProjectsSection.tsx
│  │  │  └─ SkillsSection.tsx
│  │  └─ ui/ (shadcn components)
│  ├─ hooks/
│  ├─ lib/
│  └─ pages/
│     ├─ Index.tsx
│     ├─ NotFound.tsx
│     └─ Portfolio.tsx
├─ index.html
├─ package.json
├─ tailwind.config.ts
├─ vite.config.ts
└─ tsconfig*.json
```

Path alias: `@/*` maps to `src/*` (see `tsconfig.json`).

## Getting Started

Prerequisites

- Node.js LTS (18+ recommended)
- A package manager: npm, pnpm, yarn, or bun (a `bun.lockb` exists, but any will work)

Install dependencies

- npm: `npm install`
- pnpm: `pnpm install`
- yarn: `yarn`
- bun: `bun install`

Run the dev server

- npm: `npm run dev`
- pnpm: `pnpm dev`
- yarn: `yarn dev`
- bun: `bun run dev`

Build for production

- npm: `npm run build`
- pnpm: `pnpm build`
- yarn: `yarn build`
- bun: `bun run build`

Preview the production build

- npm: `npm run preview`
- pnpm: `pnpm preview`
- yarn: `yarn preview`
- bun: `bun run preview`

Lint

- `npm run lint` (or the equivalent command for your package manager)

## Customization Guide

Replace demo content with your own:

- Branding/Name
  - `src/components/sections/HeroSection.tsx` (name, headline, bio, social actions)
  - `src/components/Navigation.tsx` (brand text, nav items)
- Social links and contact info
  - `src/components/sections/ContactSection.tsx` (email, phone, socials)
  - `HeroSection.tsx` social buttons
- Projects
  - `src/components/sections/ProjectsSection.tsx` (project list, tags, links)
- Resume
  - Add your resume file to `public/` and wire the button/link in `HeroSection.tsx` / `ContactSection.tsx`
- Theming
  - Theme is toggled in `src/pages/Portfolio.tsx` and persisted in `localStorage` under the key `theme`
- 3D Background
  - Settings live in `src/components/ThreeBackground.tsx` (particle count, colors, camera)

Note on contact form: it currently simulates submission and shows a toast. If you want email delivery, integrate a service (e.g., EmailJS, backend API) and wire it up in `ContactSection.tsx`. The project already includes `@emailjs/browser` but it isn’t configured by default.

## Available Scripts (package.json)

- `dev` – Start Vite dev server
- `build` – Build for production
- `build:dev` – Development-mode production build (useful for debugging prod issues)
- `preview` – Preview the production build
- `lint` – Run ESLint on the project

## Deployment

You can deploy the built `dist/` folder almost anywhere:

- Vercel: Import the repo, set framework to Vite. Default build command `npm run build`, output directory `dist`.
- Netlify: Set build command `npm run build` and publish directory `dist`.
- GitHub Pages: Build locally and push the `dist` folder to a `gh-pages` branch (or use an action).

Environment variables: Not required by default. If you add EmailJS or other APIs, create a `.env` and reference variables via `import.meta.env.VITE_*`.

## Tips

- Use the `@/*` path alias to keep imports clean.
- Tailwind utilities are preconfigured; add design tokens in `tailwind.config.ts`.
- shadcn/ui components live in `src/components/ui/`—they’re fully local and customizable.

## Acknowledgements

- Vite
- React & TypeScript
- Tailwind CSS
- shadcn/ui + Radix UI
- Framer Motion
- Three.js, @react-three/fiber, @react-three/drei
- lucide-react icons
