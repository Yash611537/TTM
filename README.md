# TTM — Fleet Management Landing (Vite + React + TypeScript + Tailwind)

A modern, responsive marketing site/landing for a fleet management platform. Built with React 18, TypeScript, Vite 5, and Tailwind CSS. Includes animated hero, feature sections, benefits, client logos, contact, and footer.

## Features

- **Modern stack**: Vite, React 18, TypeScript, Tailwind CSS
- **UI/UX**: Responsive layout, animated sections (`src/index.css`), iconography via `lucide-react`
- **Clean structure**: Componentized sections (`src/components/`)
- **Ready to extend**: Supabase client library included (not wired yet) for future data needs

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- lucide-react (icons)
- framer-motion (scroll/entrance animations)
- @supabase/supabase-js (optional integrations)

## Prerequisites

- Node.js 18+ and npm 9+

## Getting Started

```bash
# Install deps
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type-check
npm run typecheck

# Lint
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
TTM/
├─ src/
│  ├─ components/
│  │  ├─ Hero.tsx
│  │  ├─ Features.tsx
│  │  ├─ Benefits.tsx
│  │  ├─ Clients.tsx
│  │  ├─ Contact.tsx
│  │  └─ Footer.tsx
│  ├─ hooks/
│  │  └─ useScrollAnimation.ts (if used)
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css (custom animations/utilities)
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.ts
├─ tsconfig*.json
├─ eslint.config.js
└─ .env (local only; not committed)
```

## Environment Variables (optional Supabase)

If you plan to integrate Supabase, create `.env` and define:

```bash
VITE_SUPABASE_URL="https://YOUR_PROJECT_ID.supabase.co"
VITE_SUPABASE_ANON_KEY="YOUR_PUBLIC_ANON_KEY"
```

Access within the app using `import.meta.env.VITE_SUPABASE_URL` and `import.meta.env.VITE_SUPABASE_ANON_KEY`.

## Development Notes

- Styling is Tailwind-first. Global animations/utilities live in `src/index.css`.
- Scroll/entrance animations use framer-motion `whileInView` with `viewport={{ once: true }}` in key sections. Complimentary CSS utilities remain for simple effects.
- Components are functional and typed. Co-locate small UI logic with components.
- Icons via `lucide-react`.
- Linting via ESLint; see `eslint.config.js`.
- See `CODING_STANDARDS.md` for conventions.

## Deployment

- Static export via Vite works in most hosts (Vercel, Netlify, Cloudflare Pages).
- Build command: `npm run build`
- Output directory: `dist/`

## Roadmap / Ideas

- Hook up Supabase for forms/auth/analytics
- Add unit tests (Vitest + React Testing Library)
- Add SEO: `<head>` tags, Open Graph, sitemap, robots.txt
- Improve a11y and keyboard interactions

## License

Add your preferred license here (e.g., MIT). If private, clarify usage restrictions.
