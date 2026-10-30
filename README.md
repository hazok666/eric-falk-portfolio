# Eric Falk — Portfolio

Vite + React 19 + Tailwind CSS v4. Originally generated in Figma Make, moved here as a standalone repo.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output in dist/
```

## Edit content

All cases (text, credits, Vimeo links, images) live in **`src/data/cases.ts`**.
Images live in `src/imports/` (WebP, max 2400 px).

- Add a case: drop the image in `src/imports/`, import it at the top of `cases.ts`, add an object to the `cases` array.
- Homepage grid order/layout: `src/pages/Home.tsx` (cards are placed by index, `cases[0]`…`cases[8]` — a 10th case needs a new row there).

## Deploy

Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`.
One-time setup: repo **Settings → Pages → Source: GitHub Actions**.

Works as-is on Netlify/Vercel too (build: `npm run build`, output: `dist`). Routing uses hash URLs (`/#/case/...`), so no server rewrites are needed.
