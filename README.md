# Aren & Busch — Website

Website for **Aren & Busch Private Limited**, a Bhubaneswar construction company delivering civil construction, infrastructure and interiors for government, institutional and private clients.

This repository contains the **Projects** page, built with React, Tailwind CSS and Framer Motion.

![Stack](https://img.shields.io/badge/React-18-61dafb) ![Stack](https://img.shields.io/badge/Vite-6-646cff) ![Stack](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8) ![Stack](https://img.shields.io/badge/Framer_Motion-11-e91e63)

## Getting started

Requires **Node.js 20+** (see `.nvmrc`).

```bash
npm install
npm run dev
```

Open http://localhost:5173.

| Script | What it does |
|---|---|
| `npm run dev` | Start the local dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |

## Project structure

```
├── index.html                 # brand fonts (Google Fonts), favicon, hero image preload
├── vite.config.js             # React + Tailwind CSS (via @tailwindcss/vite)
├── public/
│   ├── brand/                 # A&B logo: full lockup (reverse) + symbol (SVG)
│   └── images/                # hero + project photos (WebP)
└── src/
    ├── main.jsx               # app entry; respects prefers-reduced-motion
    ├── index.css              # brand tokens, type hierarchy (type-* utilities), gutters
    ├── App.jsx
    ├── data/projects.js       # project cards, nav + footer links — edit content here
    └── components/
        ├── Navbar.jsx         # fixed nav, transparent → black on scroll, mobile menu
        ├── Hero.jsx           # full-height image hero + breadcrumb
        ├── ProjectGrid.jsx    # 2-column grid with scroll reveal
        ├── ProjectCard.jsx    # project card with hover zoom
        ├── Footer.jsx         # newsletter, links, wordmark, legal line
        └── motion.jsx         # shared animation pieces (Reveal, RollText, DotLink, SquareIcon)
```

## Brand system

**Typography** — Aren & Busch brand fonts, loaded from Google Fonts:

| Style | Font | Use |
|---|---|---|
| Display | Bricolage Grotesque 700 · 88/88 | Hero title |
| Headline | Bricolage Grotesque 700 · 40/44 | Section and card titles |
| Subheading | Bricolage Grotesque 600 · 26/32 | Sub-sections |
| Body | Instrument Sans 400 · 16/26 (700 for emphasis) | Paragraphs, links, buttons |
| Data | IBM Plex Mono 500 · 15/22 | Years, values, phone, references |

Use the `type-display`, `type-headline`, `type-subheading`, `type-body` and `type-data` classes defined in `src/index.css`.

**Colour** — burnt orange `#D5360C` (accent, logo), soft black `#101010` / `#030000`, warm ivory `#E6D5BD`, off-white `#F5F2EC`.

**Logo** — `public/brand/ab-lockup-reverse.svg` (light version for dark backgrounds) and `public/brand/ab-symbol.svg`. Always use these files; never retype the name or redraw the symbol.

## Editing content

- **Projects:** edit `src/data/projects.js` — title, client, category, detail line (location · year) and image path.
- **Images:** add photos to `public/images/` and point the project's `image` field at them. Use landscape images at least 1400px wide.
- **Contact details:** in `src/components/Footer.jsx`.

## Motion

| Interaction | Behaviour |
|---|---|
| Hero load | Photo settles from 1.4× to 1×; title and subtitle rise into place |
| Scroll | Cards rise 60px and fade in as each row enters the viewport; footer blocks rise 30px |
| Card hover | Photo zooms to 1.2× inside the card |
| Link hover | A small dot slides in and nudges the label right |
| Button hover | Letters roll up in a quick staggered wave |
| Nav | Turns solid black once the page scrolls |

All motion is disabled for visitors who have **Reduce motion** turned on.

## ⚠️ Before going live

The photos in `public/images/` are **placeholder stock imagery** from the reference template the layout was based on (konstra.framer.website). They do not show Aren & Busch projects and are not licensed for use. Replace them with Aren & Busch project photography before deploying or making this repository public.

## Contact

Aren & Busch Private Limited · Plot 71, Unit-III, K V Nagar, Bhubaneswar, Odisha 751001 · +91 82499 34409
CIN U46594OD2026PTC055725

© 2026 Aren & Busch Private Limited. All rights reserved.
