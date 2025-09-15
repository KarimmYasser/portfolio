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
- Localization with runtime language switch (EN, ES, AR)
  - Full RTL/LTR support (document.dir is updated automatically)
- Built-in Terminal overlay
  - Commands: `help`/`ls`, `about`, `contact`, `projects`, `skills`, `education`, `experience`, `clear`/`cls`, `exit`
  - Tab-based autocomplete with cycling; Shift+Tab cycles backward
  - Tab with an empty prompt cycles through ALL commands
  - Click outside to close; Escape to close; auto-focus preserved while clicking inside
  - Outputs are localized to the selected language

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

### Centralized content and localization

- All user-facing strings and data live in `src/content/en.ts`. Edit this file to update your name, headings, descriptions, projects, experience timeline, contact info, and footer text.
- This template already includes `src/content/es.ts` (Spanish) and `src/content/ar.ts` (Arabic). Arabic triggers RTL automatically by updating `document.dir`.
- To add another language, copy `src/content/en.ts` to `src/content/<locale>.ts` (e.g., `de.ts`), translate the strings, and export it via `src/content/index.ts`.
- Components import from `@/content`, so no UI changes are needed when content updates.

### Terminal overlay usage

- Open the overlay from the “Open in Terminal” button in the Hero section.
- Type a command and press Enter, or use the keyboard-only flow:
  - Press Tab to autocomplete. If multiple matches exist, Tab will cycle forward, Shift+Tab cycles backward.
  - With an empty prompt, Tab cycles through ALL available commands.
- Special commands:
  - `clear`/`cls` clears the terminal history
  - `exit` closes the overlay
- The overlay also supports:
  - Click outside to close, Escape to close
  - Automatic focus and focus retention on inside clicks
  - Direction-aware UI (RTL/LTR) and localized outputs

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
