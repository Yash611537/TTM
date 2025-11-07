# Coding Standards

These conventions keep the TTM codebase consistent, readable, and maintainable.

## Languages & Tools

- React 18 with Function Components + Hooks
- TypeScript for all app code (`.ts` / `.tsx`)
- Tailwind CSS for styling
- ESLint for linting

## Project Conventions

- **File naming**
  - Components: `PascalCase.tsx` (e.g., `Hero.tsx`)
  - Hooks: `camelCase.ts` prefixed with `use` (e.g., `useScrollAnimation.ts`)
  - Other modules/utilities: `camelCase.ts`
- **Folder structure**
  - Keep presentational components in `src/components/`
  - Reusable UI bits can go to `src/components/ui/` (optional)
  - Custom hooks in `src/hooks/`
- **Exports**
  - Prefer named exports for utilities; default export for single primary component per file

## TypeScript

- Avoid `any`. Prefer explicit types and interfaces.
- Type component props via `type Props = { ... }` or `interface Props { ... }`.
- Enable strict patterns: narrow unions, handle `undefined`/`null`.
- Use enums or string unions instead of magic strings.

## React

- Functional components only; no legacy classes.
- Hooks at top-level. Follow the Rules of Hooks.
- Derive state; avoid duplicating props in state.
- Lift state up when multiple children need it.
- Memoize heavy computations with `useMemo`/`useCallback` when profiling shows need.
- Prefer controlled inputs for forms.

## Styling (Tailwind)

- Use Tailwind utility classes for layout/spacing/typography.
- Extract repeated class sets into small components or helper functions if readability suffers.
- Put custom animations and utilities in `src/index.css` (see existing `@layer utilities`).
- Keep responsive and dark-mode patterns consistent.

## Accessibility (a11y)

- Use semantic HTML elements (nav, header, main, section, footer).
- Provide text alternatives for icons/interactive elements.
- Ensure color contrast meets WCAG AA.
- Keyboard operability: focus styles, `tabIndex`, ARIA attributes when necessary.

## Imports & Organization

- Group imports: React/3rd-party, then internal modules, then styles.
- No unused imports/vars. Keep files focused (<300 lines when feasible).

## Linting & Formatting

- Run `npm run lint` and fix warnings.
- Prefer Prettier-style formatting (Tailwind class sorting optional). If adding Prettier later, use a shared config.

## Commits & Branching

- Use Conventional Commits:
  - `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `build:`, `ci:`, `chore:`
  - Scope optional, e.g., `feat(hero): animate CTA`
- Keep commits small and focused. Include rationale in body when non-trivial.
- Branching: `main` for stable, feature branches `feat/<short-desc>`; bugfix branches `fix/<short-desc>`.

## Code Review Checklist

- Clarity: names, function signatures, comments where needed
- Correctness: types, null/undefined, edge cases
- Accessibility: keyboard, focus, contrast, semantics
- Performance: avoid unnecessary renders; large assets
- Security: no secrets; validate user input before network calls
- Tests (when added): updated/added and passing

## Dependencies

- Prefer lightweight libraries. Before adding, check if native/React/Tailwind solves it.
- Keep versions up to date and avoid deprecated APIs.

## Environment & Secrets

- Use `VITE_`-prefixed variables for client-side via Vite.
- Do not commit secrets. `.env` is local-only.

## Documentation

- Update `README.md` when adding scripts or changing setup.
- For significant decisions, document in `RESEARCH.md`.
