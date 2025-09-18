## Portfolio Website (React · Vite · TypeScript)

Modern, animated developer portfolio built with React, Vite, TypeScript, Tailwind CSS, shadcn/ui (Radix), Framer Motion, and a theme-aware Three.js background using React Three Fiber.

This project includes ready-to-edit sections (Hero, About, Skills, Projects, Experience, Contact) with theme toggling, smooth scrolling, localization, and a polished UI kit.

## Features

- React 18 + Vite 5 + TypeScript
- Tailwind CSS with shadcn/ui components (Radix under the hood)
- Framer Motion animations and transitions
- Three.js background via @react-three/fiber and @react-three/drei
  - Light/Dark aware, remounts cleanly on theme switch
  - Low-power mode and background toggle
- Contact form wired to a Vercel Serverless Function (Resend email) with validation and honeypot
- Resume download CTA (env-configurable URL or local /resume.pdf)
- Dark/Light theme toggle persisted to localStorage
- Responsive navigation with smooth section scrolling
- Prebuilt sections: Hero, About, Skills, Projects, Experience, Contact, Footer
- Path aliases with `@/*`
- Localization with runtime language switch (EN, ES, AR) and full RTL/LTR support
- Built-in Terminal overlay with helpful commands
- Projects grid: equal-height cards; content-driven Demo visibility via `hasDemo`

## Tech Stack

- React 18, TypeScript 5
- Vite 5 (SWC React plugin)
- Tailwind CSS 3, tailwindcss-animate
- shadcn/ui + Radix UI
- Framer Motion
- Three.js, @react-three/fiber, @react-three/drei
- React Router
- Icons: lucide-react, react-icons
- Included (optional) utilities: TanStack Query, Recharts, Embla Carousel, date-fns, etc.

## Project Structure

```
.
├─ public/
│  ├─ asphalt_8_airborne__car_ferrari_458_italia.glb
│  ├─ favicon.ico
│  ├─ robots.txt
│  └─ placeholder.svg
├─ src/
│  ├─ components/
│  │  ├─ CarShowcase.tsx
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
│  ├─ content/ (EN, ES, AR) + ContentContext
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
- A package manager: npm, pnpm, yarn, or bun (a `bun.lockb` exists; any will work)

Install dependencies

- npm: npm install
- pnpm: pnpm install
- yarn: yarn
- bun: bun install

Run the dev server

- npm: npm run dev
- pnpm: pnpm dev
- yarn: yarn dev
- bun: bun run dev

Build for production

- npm: npm run build
- pnpm: pnpm build
- yarn: yarn build
- bun: bun run build

Preview the production build

- npm: npm run preview
- pnpm: pnpm preview
- yarn: yarn preview
- bun: bun run preview

Lint

- npm run lint (or the equivalent command for your package manager)

## Theming and 3D Background

Theme toggle

- The theme is toggled from `Navigation` via props passed from `pages/Portfolio.tsx`.
- Preference is stored in localStorage under the key `theme` and applied by toggling the `dark` class on `<html>`.

3D background controls (SceneSettings)

- The 3D scene is rendered by `src/components/ThreeBackground.tsx`.
- Global controls live in `src/scene/SceneSettingsContext.tsx` and are exposed in the navigation:
  - bg: show/hide the background (persisted under `scene-bg`)
  - power: low-power mode to reduce device load (persisted under `scene-low`)
- The scene adapts to light/dark themes:
  - Dark mode: transparent canvas over the page background with additive blending and ACES tone mapping.
  - Light mode: opaque white canvas, normal blending, no tone mapping, darker particle colors.

Terminal commands that affect theme/scene

- theme [dark|light|toggle]
- bg [on|off]
- power [on|off]
- lang [en|es|ar]

## Content and Localization

- All user-facing content lives under `src/content/`.
- Available locales: English (`en.ts`), Spanish (`es.ts`), Arabic (`ar.ts`).
- The `ContentContext` sets `document.dir` automatically for RTL languages (Arabic).
- To add a language, copy `en.ts` to `<locale>.ts`, translate, then export it from `src/content/index.ts`.

Projects content

- Each project item in `src/content/en.ts` supports:
  - `featured: boolean` to control the Featured grid
  - `hasDemo?: boolean` (optional) — set to `false` to hide the Demo button even if a link exists
  - `links: { demo: string; github: string }` — Demo/Code links; `#` or empty disables the button
  - Images default to `/placeholder.svg` if not set

## Customization Guide

Replace demo content with your own:

- Branding/Name
  - `src/components/sections/HeroSection.tsx` (name, headline, bio, social actions)
  - `src/components/Navigation.tsx` (brand text, nav items)
- Social links and contact info
  - `src/components/sections/ContactSection.tsx`
  - Hero social buttons
- Projects
  - `src/components/sections/ProjectsSection.tsx` (equal-height cards; Demo button hidden when `hasDemo: false`)
- Resume
  - Add your resume file to `public/` as `resume.pdf`, or set `VITE_RESUME_URL` to an external link. The Contact “Resume” button will download/open accordingly.
- 3D Background look
  - Tweak `ThreeBackground.tsx` (particle count/colors, orbs, camera)
- Section “cloud” backdrop
  - `.section-cloud` is implemented in `src/index.css` as a subtle, theme-aware radial backdrop (lower alpha in light mode). Apply it to section wrappers if you want the effect.
- Smoke ring visuals
  - `.smoke-ring` utilities in `src/index.css` create a circular, uncropped ring that adapts to theme via CSS variables.
- Glass surfaces
  - `.glass` and `.glass-strong` apply frosted-glass UI surfaces using theme tokens and blur.

Contact form (email delivery)

- Implemented via a Vercel Serverless Function at `api/contact.ts` using the Resend API.
- Includes basic validation and a hidden honeypot field (`website`) to deter bots.
- Configure the environment variables below, deploy to Vercel, and the form will deliver messages to your inbox.

Environment variables (email)

- Server-only (do NOT prefix with VITE\_):
  - `RESEND_API_KEY` — your Resend API key
  - `CONTACT_TO_EMAIL` — destination inbox (e.g., you@example.com)
  - `CONTACT_FROM_EMAIL` — verified Resend sender (e.g., "Portfolio <noreply@yourdomain.com>")
- Optional public:
  - `VITE_RESUME_URL` — resume link used by the Resume buttons (falls back to `/resume.pdf`)

## Available Scripts (package.json)

- dev – Start Vite dev server
- build – Build for production
- build:dev – Development-mode production build (debug prod issues)
- preview – Preview the production build
- lint – Run ESLint

## Deployment

### Vercel (recommended, with serverless contact API)

1. Connect your GitHub repo in Vercel → New Project → Import.
2. Framework preset: Vite (auto-detected). Build: `npm run build`. Output: `dist`.
3. Add Environment Variables (Project → Settings → Environment Variables):
   - `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`
   - Optional `VITE_RESUME_URL`
4. Deploy. Your contact endpoint will be available at `/api/contact`.

Local development with API

- Start Vercel Dev (serves functions on port 3000):
  - `vercel dev`
- Start Vite (port 8080):
  - `npm run dev`
- Vite proxies `/api` to `http://localhost:3000` (see `vite.config.ts`), so submitting the form locally calls the function.

Other platforms

- Netlify: You can port the function to Netlify Functions (`netlify/functions/contact.ts`) and adjust the fetch URL.
- GitHub Pages: Static only — API must be hosted elsewhere (e.g., Vercel/Netlify/Azure Function) and the form should post to that absolute URL.

## Troubleshooting

- Theme switch feels slow: enable Low Power mode from the navbar or via `power on` in the terminal.
- 3D background not visible: ensure Background is turned on in the navbar or via `bg on`.
- Colors look off in light mode: verify `:root --background` in `src/index.css` is `0 0% 100%` (white) and that the page `<html>` doesn’t have residual `dark` class.
- Inputs show odd colors when autofilled: color-scheme and `-webkit-autofill` rules are included in `src/index.css`.
- `/api/contact` returns 404 during local dev: ensure `vercel dev` is running; Vite proxies `/api` to `http://localhost:3000`.
- `/api/contact` returns 405 on GET: that’s expected (only POST is allowed).
- Emails not arriving: verify `CONTACT_FROM_EMAIL` is a verified sender in Resend, check Vercel function logs, and confirm env vars exist in the deployed environment.

## Acknowledgements

- Vite
- React & TypeScript
- Tailwind CSS
- shadcn/ui + Radix UI
- Framer Motion
- Three.js, @react-three/fiber, @react-three/drei
- lucide-react icons
