# Project context

This document records the lasting product, design and architecture decisions for Marco Polato's personal website.

Development instructions are maintained in [README.md](../README.md). Collaboration rules are maintained in [AGENTS.md](../AGENTS.md).

## Purpose and content

The website presents Marco Polato's professional experience, education, projects and personal interests.

The professional profile focuses on web and mobile software development and technical coordination responsibilities.

Content must reflect real experience and contributions. Avoid invented achievements or professional titles that do not match the actual role.

Keep the homepage concise, with professional background and projects presented on dedicated pages.

## Visual direction

Use the [official Astro Portfolio template](https://astro.build/themes/details/portfolio/) and its [preview](https://preview.astro.new/portfolio/) as references for typography, generous spacing and rounded surfaces.

Maintain the project's own visual identity:

- Inter typography.
- Orange as the primary brand color.
- A shared palette defined through CSS variables.
- Light and dark themes.
- Phosphor icons.
- Responsive layouts, semantic HTML, visible keyboard focus and accessible controls.

Reuse existing visual conventions when extending the interface.

## Languages

The website is multilingual and currently supports Italian and English.

Italian is the default language at the site root. English uses the `/en/` prefix.

Keep translated content consistent across languages. Language switching should preserve the equivalent page or project.

## Technology choices

- Astro for static page generation and reusable components.
- TypeScript for structured content, translations, types and shared logic.
- Semantic HTML for document structure.
- Native CSS for styling, responsive layouts and themes.
- Browser JavaScript for interactive behavior.
- Astro's asset tools for local image processing and font integration.
- Phosphor Icons for SVG icons.
- Prettier for formatting.
- pnpm for dependency and script management.
- GitHub Actions for automated checks.
- Vercel for hosting.

Read dependency and environment versions from the project configuration files rather than duplicating them here.

## Architecture and conventions

- Keep route files in `src/pages/` focused on routing, locale selection and passing data to shared page components.
- Reuse page content through `src/components/pages/` instead of duplicating presentation for each language.
- Keep reusable interface elements in `src/components/` and shared document structure in `src/layouts/`.
- Separate structured content in `src/data/` from its presentation.
- Centralize translations and localized URL construction in `src/i18n/`.
- Use the existing URL helpers for navigation, language switching and contact links.
- Generate static project detail pages from structured data using `getStaticPaths()`.
- Maintain trailing slashes in public URLs.
- Keep shared visual foundations in `src/styles/` and component-specific styles alongside their components.
- Store source images requiring processing in `src/assets/`; use `public/` for files served unchanged.
- Preserve access to contacts from internal pages in the current language.
