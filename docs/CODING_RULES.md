# Coding rules

## General principles

- Prefer simplicity, readability, and maintainability.
- Follow existing patterns before introducing new ones.
- Reuse existing components, utilities, and styles.
- Avoid premature abstraction and overengineering.
- Introduce dependencies only when they provide clear value.
- Keep changes focused on the current requirement.

## Structure and responsibilities

- `src/pages/`: file-based routes, locale selection,
  and route-specific data preparation.
- `src/components/`: reusable UI components and interactions.
- `src/components/pages/`: shared page implementations.
- `src/layouts/`: shared document structure and layouts.
- `src/data/`: typed and structured project content.
- `src/i18n/`: translations, localized URLs, and date formatting.
- `src/styles/`: global styles, design tokens, and shared utilities.
- `src/assets/`: imported and Astro-processed assets.
- `public/`: static files served without processing.
- `docs/`: project documentation and implementation plans.
- `.github/workflows/`: continuous integration workflows.
- `.codex/`: project-specific Codex configuration.

Keep responsibilities separated. Introduce new directories
only when the existing structure no longer fits.

## Astro conventions

- Preserve static site generation.
- Prefer Astro components for static content.
- Use Astro frontmatter for build-time logic.
- Use browser scripts only for client-side interactions.
- Prefer native browser APIs over client-side frameworks.
- Use inline scripts only when their execution behavior
  is explicitly required.
- Keep routes thin and delegate page composition to
  `src/components/pages/`.
- Use `getStaticPaths()` for dynamic static routes.

## Components

- Use PascalCase for component filenames.
- Define component inputs through typed `Props`.
- Use slots for reusable content composition.
- Keep components focused on a clear responsibility.
- Extract components when there is actual reuse or
  meaningful complexity to isolate.
- Reuse existing UI components before creating new ones.
- Keep component-specific styles with the component.

## TypeScript and naming

- Preserve the existing strict TypeScript configuration.
- Use descriptive English identifiers.
- Use camelCase for variables and functions.
- Use PascalCase for types and interfaces.
- Avoid `any` and unnecessary type assertions.
- Reuse existing types and interfaces.
- Prefer type inference when it keeps the code clear.
- Use comments to explain non-obvious decisions,
  not to restate the implementation.

## Internationalization

- Support Italian and English consistently.
- Keep interface messages in `src/i18n/messages.ts`.
- Keep localized structured content in `src/data/`.
- Use the existing URL helpers in `src/i18n/paths.ts`.
- Use the existing date utilities in `src/i18n/dates.ts`.
- Avoid hardcoded localized URLs in components.
- Preserve trailing slashes and existing locale conventions.
- Share page implementations across languages.
- Update all affected locales when changing content.

## Styling

- Prefer native CSS and Astro scoped styles.
- Follow existing BEM-style class naming conventions.
- Use global styles for shared visual foundations.
- Reuse CSS custom properties from `src/styles/global.css`.
- Avoid hardcoded values when a suitable design token exists.
- Preserve both light and dark themes.
- Follow the existing responsive layout conventions.
- Avoid unnecessary global selectors and duplicated styles.

See [design system](DESIGN_SYSTEM.md) for visual rules.

## Assets

- Prefer Astro's image components for imported raster images.
- Provide appropriate image dimensions and responsive sizes.
- Use meaningful localized alternative text.
- Use empty alternative text for decorative images.
- Reuse `Icon.astro` for supported interface icons.
- Keep files that must be served unchanged in `public/`.

## Accessibility

- Use semantic HTML and a logical heading hierarchy.
- Use links for navigation and buttons for actions.
- Preserve keyboard navigation and visible focus states.
- Provide accessible names for interactive controls.
- Use ARIA only when native semantics are insufficient.
- Maintain readable contrast in both themes.
- Respect `prefers-reduced-motion`.
- Preserve usability without unnecessary JavaScript.

## Performance

- Minimize client-side JavaScript.
- Avoid unnecessary hydration and dependencies.
- Optimize images using Astro's asset pipeline.
- Avoid layout shifts and unnecessary render-blocking work.
- Prioritize above-the-fold assets only when justified.

## Validation

Use the existing package scripts and CI configuration
as the source of truth for project checks.

- `pnpm format:check`: formatting validation.
- `pnpm check`: Astro and TypeScript diagnostics.
- `pnpm build`: diagnostics and production build.
- `pnpm preview`: preview an existing production build.

For UI changes, verify:

- Mobile and desktop layouts.
- Relevant intermediate breakpoints.
- Both supported themes.
- Both supported languages.
- Keyboard navigation and focus states.
- Browser console errors.
- Affected routes and existing functionality.

Follow the mentoring constraints in `AGENTS.md`.
Provide verification instructions for the user and do
not claim checks were performed unless actually verified.
