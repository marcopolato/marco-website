# Project context

## Purpose and content

The portfolio presents Marco Polato's web and mobile development experience, technical coordination responsibilities, education, projects, and interests. Describe real contributions. Keep the homepage concise and give professional experience and projects dedicated pages.

## Visual direction

The [Astro Portfolio template](https://astro.build/themes/details/portfolio/) and its [preview](https://preview.astro.new/portfolio/) are references for typography, spacing, and rounded surfaces. The current design uses Inter, orange as the primary accent, Phosphor icons, and shared CSS tokens for light and dark themes. Revisit these choices when a proposal improves hierarchy, readability, or distinctiveness. Keep the result coherent across pages, languages, and themes.

## Languages and navigation

Italian is served at the root and English under `/en/`. Keep content aligned across languages and preserve trailing slashes. Switching language should open the equivalent page or project. Internal pages should link to the home contact section in the current language.

## Architecture

- Generate the site statically. Use routes for locale and data selection and `getStaticPaths()` for project detail pages.
- Share page content through `src/components/pages/`. Keep reusable UI in `src/components/` and the shared document shell in `src/layouts/`.
- Keep structured content in `src/data/` and use `src/i18n/` for translations, dates, and localized URLs.
- Keep shared visual foundations in `src/styles/`. Use `src/assets/` for images Astro processes and `public/` for files served unchanged.
