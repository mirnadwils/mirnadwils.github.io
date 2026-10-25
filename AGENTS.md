# AGENTS.md

## Project context

Academic portfolio site of Mirna Dwi Lestari Salamah (geotechnical engineer, applying for PhD positions and scholarships). Live at https://mirnadwils.github.io/

**Stack:** Next.js 14 App Router, static export (`output: "export"`, `trailingSlash: true`), deployed to GitHub Pages by `.github/workflows/deploy.yml`. Plain JSX (no TypeScript), plain CSS in `app/globals.css` (CSS variables, light and dark mode). No Tailwind. Fonts: Newsreader (headings) and IBM Plex Sans (body) via a Google Fonts link in `app/layout.jsx`.

**Structure:**
- `app/layout.jsx` (sidebar + footer)
- `app/Nav.jsx`
- `app/page.jsx` (Home)
- `app/research/page.jsx`
- `app/field/page.jsx`
- `app/experience/page.jsx`
- `app/teaching/page.jsx`
- `public/photo.jpg`

## Rules

- Keep it static-export compatible: no server features, no API routes, no `next/image` optimization.
- Prefix every asset URL with `(process.env.NEXT_PUBLIC_BASE_PATH || "")`.
- Keep the existing design language (palette, serif headings, sidebar layout, dark mode). Keep it responsive and accessible (alt text, visible focus, keyboard support, good contrast).
- Avoid heavy dependencies. A small icon library is fine; inline SVG is preferred.
- NEVER invent facts. Content comes only from the user's text in the prompt or from `assets-source/cv-general.md` (primary source) and `assets-source/cv-july-2026.md` (detailed project descriptions). If something is missing, show a clear "Coming soon" state; never fake content.
- NEVER publish a phone number or home address.
- Put editable content in data files under `content/` and shared links in `lib/site.js` so the user can edit without touching components.
- `assets-source/` must be in `.gitignore` (it is source material, not published). Only optimized outputs go to `public/`.
- After every task: run `npm run build`, fix all errors, do not commit, and summarize the files you changed.
