# Project context

## Purpose and content

The portfolio presents Marco Polato's web and mobile development experience, technical coordination responsibilities, education, projects, and interests. Describe real contributions. Keep the homepage concise and give professional experience and projects dedicated pages.

## Visual direction

The [Astro Portfolio template](https://astro.build/themes/details/portfolio/) remains a reference for typography and spacing. The site uses a warm editorial palette: ivory and terracotta in light mode, warm charcoal and a lighter terracotta accent in dark mode. Inter is the primary typeface, with Source Serif 4 italic reserved for emphasis in the homepage hero. Show one featured project before personal interests. In the project listing, give each project a full row with text before the cover image on narrow screens. Use the same technology chips wherever project technologies are shown.
Present professional experience and education as separate timelines, with dates beside each entry on wide screens and above it on narrow screens.

## Languages and navigation

Italian is served at the root and English under `/en/`. Keep content aligned across languages and preserve trailing slashes. Switching language should open the equivalent page or project. Internal pages should link to the home contact section in the current language.

## Architecture

- Generate the site statically. Use routes for locale and data selection and `getStaticPaths()` for project detail pages.
- Share page content through `src/components/pages/`. Keep reusable UI in `src/components/` and the shared document shell in `src/layouts/`.
- Keep structured content in `src/data/` and use `src/i18n/` for translations, dates, and localized URLs.
- Keep shared visual foundations in `src/styles/`. Use `src/assets/` for images Astro processes and `public/` for files served unchanged.
