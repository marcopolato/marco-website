# Homepage and About Me redesign

## Objective

Improve the personal portfolio homepage, introduce a
dedicated About Me page, and create a more engaging
experience through purposeful and accessible motion.

## Current implementation

- The homepage contains a hero, featured project,
  personal interests, and contact links.
- Personal interests are presented as a simple list.
- No dedicated About Me page exists.
- Contact actions lead to the homepage contact section.
- Projects and experience already have dedicated pages.
- Basic control transitions are implemented.

## Scope

- Homepage redesign.
- Bilingual About Me page.
- Personal interests and content.
- Navigation and contact destinations.
- Accessible animations and microinteractions.

## Product decisions

- Remove the featured project section from the homepage.
- Keep dedicated project and experience pages.
- Improve the homepage introduction and calls to action.
- Expand the personal interests section with expandable rows:
  - Football and training.
  - Pokémon card collecting.
  - LEGO.
  - Travel.
- Connect the Pokémon interest to the TrackDex project.
- Preserve quick contact links on the homepage.
- Add a dedicated contact section to the About Me page.
- Redirect the main contact action to that section.

## Technical decisions

- Preserve static site generation.
- Share page implementations across locales.
- Reuse existing components and design tokens.
- Prefer native CSS and targeted browser JavaScript.
- Use Impeccable for visual design.
- Use Emil's skills for motion and interactions.
- Follow the repository's coding rules and design system.
- Preserve both themes and languages.
- Avoid unnecessary dependencies.

## Implementation steps

### Phase 1 — About Me page

- [ ] Inspect existing routes and navigation.
- [ ] Extend localized routing and messages.
- [ ] Create the shared About Me page component.
- [ ] Create Italian and English routes.
- [ ] Reuse existing contact links.
- [ ] Update navigation and contact destinations.
- [ ] Verify the new page in both languages and themes.

### Phase 2 — Homepage redesign

- [ ] Review the existing homepage structure.
- [ ] Validate the approved visual direction.
- [ ] Refine the introduction and calls to action.
- [ ] Remove the featured project section.
- [ ] Expand the personal interests section.
- [ ] Implement accessible expandable interest rows.
- [ ] Add the TrackDex project connection.
- [ ] Preserve quick contact links.
- [ ] Verify responsive layouts.

### Phase 3 — Motion and interactions

- [ ] Evaluate one-time typing animation in the hero.
- [ ] Add subtle scroll reveal animations.
- [ ] Refine expandable content transitions.
- [ ] Evaluate improvements to menu interactions.
- [ ] Respect reduced-motion preferences.
- [ ] Verify accessibility and performance.

### Phase 4 — Final review

- [ ] Review visual consistency.
- [ ] Review both supported languages.
- [ ] Review both supported themes.
- [ ] Perform guided code review.
- [ ] Verify keyboard navigation and focus.
- [ ] Verify relevant responsive breakpoints.
- [ ] Run formatting and type checks.
- [ ] Verify production build.
- [ ] Update project documentation and roadmap.

## Acceptance criteria

- The homepage presents professional and personal content
  without relying on a featured project section.
- The About Me page is accessible in Italian and English.
- Language switching preserves equivalent pages.
- Contact actions lead to the intended destination.
- Existing project and experience pages remain functional.
- Layouts work across supported viewport sizes and themes.
- Animations do not block access to content.
- Reduced-motion preferences are respected.
- Formatting, type checks, and production build pass.

## Open questions

- Final About Me page content and visual composition.
- Exact animation timing and easing.
- Whether page transitions provide sufficient value.
- Whether new reusable components are necessary.

## Progress

Status: Not started.

Verification results: None.

## Maintenance

Update this plan after each verified implementation step.
Record meaningful decisions and deviations.

Follow AGENTS.md and docs/PLANS.md.
The user performs all repository changes.
