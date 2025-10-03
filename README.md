## Portfolio Website (React · Vite · TypeScript)

![Portfolio Cover](/public/home.png)

Modern, animated developer portfolio built with React, Vite, TypeScript, Tailwind CSS, shadcn/ui (Radix), Framer Motion, and a theme-aware Three.js background using React Three Fiber.

The 3D layer now uses real GLB planet assets (replacing earlier procedural Saturn-like spheres) placed in a far orbit with adaptive lighting, exposure control, and performance toggles.

This project includes ready-to-edit sections (Hero, About, Skills, Projects, Experience, Contact) with theme toggling, smooth scrolling, localization (EN / ES / AR), and a polished UI kit.

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
  - `hasGithubRepo` flag hides Code button when false
  - `hidden` flag keeps localized data but excludes from render

## Live Demo

Live Deployment: https://karim-yasser.vercel.app/
_(Replace with your actual Vercel / custom domain once deployed. If you add a custom domain, update Open Graph meta tags and this link.)_

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
│  ├─ asphalt_8_airborne__car_ferrari_458_italia.glb (car model)
│  ├─ mercury.glb
│  ├─ kepler-452b.glb
│  ├─ alien_planet.glb
│  ├─ green_star.glb
│  ├─ planet_on_the_move.glb
│  ├─ horizon_world.glb
│  ├─ resume.pdf
│  ├─ favicon-dark.ico / favicon-light.ico
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

Domain verification (Resend)

- If you supply a `CONTACT_FROM_EMAIL` using your own domain (e.g. `"Portfolio <noreply@yourdomain.com>"`) you must verify that domain in the Resend dashboard → Domains before mail will actually be delivered with that From address.
- While unverified, some providers will rewrite or drop the message; you may see the provider substitute your account email instead.
- Use a properly formatted value with angle brackets: `"Portfolio <noreply@yourdomain.com>"`.
- You can use a Resend test domain (like `@resend.dev`) only after adding it per Resend docs; generic public mail domains (gmail/outlook) are generally not allowed as custom From senders.

Skipping Resend / using a free alternative

- If you prefer not to verify a domain yet, you can swap the backend to a no-domain-required service (see Free Contact Form Alternatives below) without changing the UI.

Local development with API

- Start Vercel Dev (serves functions on port 3000):
  - `vercel dev`
- Start Vite (port 8080):
  - `npm run dev`
- Vite proxies `/api` to `http://localhost:3000` (see `vite.config.ts`), so submitting the form locally calls the function.

Other platforms

- Netlify: You can port the function to Netlify Functions (`netlify/functions/contact.ts`) and adjust the fetch URL.
- GitHub Pages: Static only — API must be hosted elsewhere (e.g., Vercel/Netlify/Azure Function) and the form should post to that absolute URL.

### Environment Variables Summary

| Name                 | Required              | Scope  | Example                                | Notes                                                                |
| -------------------- | --------------------- | ------ | -------------------------------------- | -------------------------------------------------------------------- |
| `RESEND_API_KEY`     | Yes (if using Resend) | Server | `re_****************`                  | Never exposed client-side.                                           |
| `CONTACT_TO_EMAIL`   | Yes (if using Resend) | Server | `you@yourdomain.com`                   | Destination inbox.                                                   |
| `CONTACT_FROM_EMAIL` | Yes (if using Resend) | Server | `"Portfolio <noreply@yourdomain.com>"` | Must be a verified sender/domain in Resend. Angle brackets required. |
| `VITE_RESUME_URL`    | No                    | Public | `https://cdn.example.com/resume.pdf`   | Falls back to `/resume.pdf` if unset.                                |

When adding or editing server variables in Vercel, remember to redeploy (or trigger a new build) so the function environment picks them up.

### Contact API Error Codes

The serverless function returns JSON: `{ ok: boolean; code: string; error?: string }`.

| Code                  | Meaning                                | Typical Fix                            |
| --------------------- | -------------------------------------- | -------------------------------------- |
| `CONFIG_MISSING`      | Required env var missing               | Add env vars in dashboard & redeploy   |
| `INVALID_EMAIL`       | Email failed basic regex/format check  | Correct the address                    |
| `CONTENT_TOO_SHORT`   | Message below minimum length           | Submit a more detailed message         |
| `CONTENT_TOO_LONG`    | Message exceeded max length            | Shorten content                        |
| `DOMAIN_NOT_VERIFIED` | Resend rejected unverified From domain | Verify domain in Resend or change From |
| `AUTH_FAILED`         | Resend API key invalid                 | Regenerate key / set correct value     |
| `SERVICE_FAILURE`     | Upstream provider non-200 error        | Check Vercel logs & provider status    |
| `INTERNAL_ERROR`      | Unhandled exception                    | Inspect logs for stack trace           |
| `SENT`                | Success                                | Toast confirmation shown               |

### Testing the Contact Endpoint Locally

1. Start the function runtime: `vercel dev` (port 3000).
2. Start Vite: `npm run dev` (port 8080) — proxy will forward `/api/contact`.
3. Use curl:

```bash
curl -X POST http://localhost:8080/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"tester@example.com","message":"Hello from curl!"}'
```

Expected (success): `{"ok":true,"code":"SENT"}`.

Failure example (invalid email): `{"ok":false,"code":"INVALID_EMAIL","error":"Invalid email"}`.

Inspect logs: `vercel dev --debug` or Vercel dashboard → Functions → Logs after deployment.

### Free Contact Form Alternatives

If you want a zero-config (no domain verification) path, replace the `/api/contact` call inside `ContactSection` with one of these:

| Service                 | Free Tier Highlights                | Integration                          | Notes                                       |
| ----------------------- | ----------------------------------- | ------------------------------------ | ------------------------------------------- |
| Web3Forms               | 250 submissions/mo, spam protection | POST to their endpoint with form key | Data stored; optional redirect              |
| Formspree               | 50 submissions/mo (free)            | POST form or fetch to endpoint       | Email confirmation required                 |
| EmailJS                 | Client-side SDK                     | `emailjs.send` in handler            | Exposes a public key; not purely serverless |
| Basin                   | 100 submissions/mo                  | POST/HTML form                       | Good dashboard, GDPR focus                  |
| GetForm                 | 50 submissions/mo                   | POST form                            | Attachments on paid tiers                   |
| Slack / Discord Webhook | Unlimited messages                  | POST JSON                            | Not email; delivers to channel              |

Minimal swap example (Web3Forms):

```ts
// inside handleSubmit
const resp = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    access_key: import.meta.env.VITE_WEB3FORMS_KEY,
    name,
    email,
    message,
  }),
});
```

Add `VITE_WEB3FORMS_KEY` as a public env var (safe—it's intended to be public). Remove or bypass the serverless function.

### Localization Guide (Advanced)

1. Duplicate `src/content/en.ts` → `fr.ts` (example).
2. Translate values; keep object keys identical for type safety.
3. Export the new locale in `src/content/index.ts` and extend the `languages` array.
4. Provide RTL handling only if needed (the `ContentContext` already sets `dir`).
5. For dynamic values (like years of experience), prefer computing in code so translations stay static.

Validation: TypeScript will flag missing keys automatically since all locale modules share the exported type.

### Performance & Low Power Tips

- Use the navbar Power toggle (or terminal `power on`) to reduce Three.js activity on low-end devices.
- Consider pausing any custom requestAnimationFrame loops when `lowPower` is true (the provided background component already minimizes its work, but extend this if you add heavier objects).
- Keep particle counts moderate; profile with browser Performance tools if FPS dips below 50 on mid-range hardware.

### Security Considerations

- Never expose `RESEND_API_KEY` or other server secrets via `import.meta.env.VITE_*`.
- Basic validation exists; if you enable a third-party form service, confirm it includes spam filtering (honeypot or reCAPTCHA) or add one.
- Limit message length (already enforced) to mitigate abuse and log noise.

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
