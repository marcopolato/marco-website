# Design system

## Visual identity

The portfolio follows a warm editorial visual direction,
combining clear typography, restrained decoration, generous
spacing, and a strong hierarchy of content.

- Prioritize clarity, personality, and professionalism.
- Avoid generic SaaS layouts and unnecessary card grids.
- Use decoration and visual effects with a clear purpose.
- Maintain a consistent identity across pages and themes.
- Give professional content and personal interests
  appropriate visual emphasis.

## Design references

- Astro Portfolio template: typography and spacing.
  https://astro.build/themes/details/portfolio/
- DoubleBe: visual rhythm and interaction inspiration.
  https://doublebe.it/
- Impeccable: design direction and UI refinement.

Use references as inspiration, not as layouts to copy.

## Colors and themes

The light theme uses ivory and terracotta.
The dark theme uses warm charcoal and a lighter terracotta.

`src/styles/global.css` is the source of truth for colors
and shared design tokens.

- `--page`: main page background.
- `--surface`: component and panel backgrounds.
- `--surface-muted`: secondary surfaces and labels.
- `--text`: primary text.
- `--text-muted`: secondary text.
- `--brand`: primary brand accent.
- `--accent-text`: emphasized text, links, and focus.
- `--on-brand`: foreground content on brand backgrounds.
- `--border`: component boundaries.
- `--rule`: subtle section separators.

Use semantic tokens instead of hardcoded colors.
Preserve intentional fixed-color artwork where necessary.

Dark is the default theme. Theme initialization and
persistence are handled by `ThemeInit.astro`
and `ThemeToggle.astro`.

## Typography

- Use Inter as the primary typeface.
- Reserve Source Serif 4 italic for editorial emphasis,
  particularly in the homepage hero.
- Maintain clear heading and body text hierarchy.
- Prefer fluid typography using `clamp()`.
- Use secondary text colors for supporting content.
- Keep long text sections at readable line lengths.

Font configuration lives in `astro.config.mjs`.

## Layout and spacing

- Use the shared `.container` for page alignment.
- Reuse `--content-width` and `--radius` where appropriate.
- Prefer fluid spacing and content-driven layouts.
- Use whitespace and subtle separators to establish rhythm.
- Avoid wrapping every section in a bordered panel.
- Keep primary content visually dominant.

## Components

Reuse existing components before introducing new patterns.

- `Chip.astro`: non-interactive labels and technologies.
  Use `.chip-list` for collections of chips.
- `ProjectCard.astro`: full-width editorial project rows,
  with text before media on narrow screens.
- `ExperienceItem.astro`: timeline entries with dates
  and distinct markers for ongoing experiences.
- `ExperienceSection.astro`: separate professional
  experience and education sections.
- `ContactLinks.astro`: accessible circular contact links.
- `Icon.astro`: shared interface icons.
- `LanguageMenu.astro` and `ThemeToggle.astro`:
  consistent header controls.
- `BaseLayout.astro`: shared page shell and navigation.

Keep project statuses, contribution highlights, technology
labels, and media treatments consistent across project pages.

## Responsive design

Design mobile-first and adapt layouts to their content.

Existing responsive conventions:

- `24rem`: compact header adjustments.
- `48rem`: navigation, timeline, and content layout changes.
- `52rem`: two-column hero and project layouts.

Preserve brand and header controls on the same mobile row,
with navigation below them.

Check intermediate widths and both supported languages.
Introduce new breakpoints only when content requires them.

## Motion and interactions

- Use motion to clarify feedback, hierarchy, or navigation.
- Prefer CSS transitions for simple interactions.
- Use targeted JavaScript when CSS is insufficient.
- Keep microinteractions short and consistent.
- Prefer transform and opacity for motion where suitable.
- Avoid animations that delay access to essential content.
- Preserve a usable experience without animation.
- Respect `prefers-reduced-motion`.

Existing control transitions use approximately 180–220ms.

Use Impeccable for visual design and Emil's skills or
transitions.dev for interaction and motion guidance.

New animation patterns must be evaluated before becoming
part of the shared design system.

## Accessibility

- Maintain readable contrast in both themes.
- Preserve visible keyboard focus.
- Provide clear hover, active, and selected states.
- Never communicate meaning through color alone.
- Target comfortable interactive areas of at least 44px
  where practical.

Follow `CODING_RULES.md` for technical accessibility
requirements.

## Maintenance

Update this document when lasting visual decisions change.
Keep token values and component implementations in code.
Record unimplemented design proposals in `ROADMAP.md`
or the relevant implementation plan.
