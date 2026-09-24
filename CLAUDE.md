# jdh4601.github.io

Personal site for Donghyun Jeong. Fashion x AI, single scrolling page, English only.
Vite + React + TypeScript, deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`.

## Commands
- `npm run dev` / `npm run build` / `npm test` (Vitest) / `npx tsc -b` / `npm run lint`

## Design rules
- Fashion is the container (90%): typography, section names, SS/FW season labels. macOS UI is micro-interaction only (10%).
- Background is pattern paper (light only, no dark mode). Accent colour is the red thread `--thread`.
- Fonts: Cormorant Garamond Light Italic (display), Inter Tight (body), JetBrains Mono (labels).
- Season rule: Jan–Jun = SS, Jul–Dec = FW (`src/lib/season.ts`).
- Tech stacks are shown as fabric composition lines, never as logo lists.

## Where things live
| What | File |
|---|---|
| Name, bio, links, care label | `src/data/profile.ts` |
| Collections (Look 01–04) | `src/data/collections.ts` |
| Archive photos + tag colours | `src/data/archive.ts` |
| Landing board objects and positions (desktop + `mobile`, used ≤900px). Keep the title zone empty. | `src/data/board.ts` |
| Scroll thread | `src/components/Thread/` |
| Care label footer | `src/components/Footer/` |
| Contact mail composer (mailto draft + copy address) | `src/components/Contact/MailComposer.tsx` |

## Replacing placeholders
- Media slots render `Placeholder` until a `src` is set in the data file. Look photos live in `public/img/looks/`, archive photos in `public/archive/` (WebP, 720px wide, `width`/`height` set in `archive.ts`).
- Landing polaroids hold lookbook photos (`public/objects/sl-*.webp`); the caption is the item `label` in `board.ts`.
- Collections use one 3:2 photo per Look (no video, no Mac chrome) on the left, tilted and taped at two corners. Photos are hidden at ≤800px on purpose.
- Board icons render at the same pixel size on every screen; phones only change positions (`mobile`) and hide `hideOnMobile` items.
