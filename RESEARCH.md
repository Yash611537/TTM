# Research — Fleet Management Landing Page

## Goals
- Convey reliability, tracking precision, safety
- Focus on conversion: demo request / contact capture

## Competitor Analysis
- Samsara — strong product screenshots, data-driven benefits, clear CTAs
- TruckX — brand-first hero, simplified flows for drivers/shippers
- Verizon Connect — enterprise trust signals, feature granularity

## Design Inspirations
- Vivo V60e product page: clean hero with imagery, large product visual, micro-interactions
- Use large hero visual (truck + map lines), neon/blue accent, modern typography

## Key UX Patterns
- Hero with short value proposition + single CTA
- Feature cards with icons + short bullets
- Benefits section with metrics/trust logos
- Contact form with minimal fields (Name, Company, Email, Phone, Message)
- Footer with legal links + social links

## Accessibility Considerations
- Color contrast checks (WCAG AA)
- Keyboard accessible interactive controls
- Screen-reader-friendly headings and form labels

## SEO
- Title, description, OG tags, canonical link
- Structured data: Organization + ContactPoint schema
- Lighthouse score target: >90 performance & accessibility

## Tech Stack Used
- Vite 5 (build tool, fast dev server and optimized production build)
- React 18 + TypeScript (UI + typesafety)
- Tailwind CSS 3 (utility-first styling and custom animations in `src/index.css`)
- lucide-react (icon set)

## Alternatives Considered

- Build tool/framework: Next.js (SSR/SSG) vs. Vite + React SPA — chose Vite for simplicity and speed for a landing page; can migrate to Next.js if SEO/SSG needs grow.
- Styling: CSS Modules/SCSS vs. Tailwind CSS — chose Tailwind for velocity and consistency; custom animations live in `src/index.css`.
- Icons: Heroicons/Phosphor vs. lucide-react — chose lucide-react for coverage and aesthetic fit.
- Animations: Framer Motion vs. CSS keyframes — chose CSS keyframes/utilities to keep bundle light; consider Framer Motion for complex sequences later.

## Open Questions / Future Work

- Contact form backend: Supabase (direct) vs. serverless function proxy; add spam protection (hCaptcha/Turnstile + rate limit).
- Analytics: privacy-friendly analytics (Plausible/Umami) and consent banner.
- Theming: add dark mode toggle and Tailwind theme tokens.
- Internationalization: evaluate i18n needs (markets, locales) and library (i18next/react-intl).
- Testing: set up Vitest + React Testing Library; add basic E2E with Playwright.
- Performance budget: optimize images (SVG/AVIF), preload key fonts, target LCP < 2.5s on 4G.

## Changelog Pointers

- Use Conventional Commits and link PRs (e.g., feat(hero): update headline for clarity).
- Record notable changes: hero copy/visual updates, SEO/meta changes, a11y improvements, dependency upgrades.
- Reference dates and context for decisions; include before/after screenshots when design shifts are significant.
