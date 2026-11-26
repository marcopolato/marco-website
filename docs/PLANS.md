# Planning instructions

## Purpose

Implementation plans provide a persistent record of
complex tasks, technical decisions, and development
progress across multiple sessions.

## When to create a plan

Create a plan for:

- New pages and significant features.
- Architectural changes and complex refactoring.
- Tasks involving multiple components or systems.
- Activities requiring multiple development sessions.

Do not create persistent plans for small fixes,
simple styling changes, or isolated improvements.

## Plan location

Store implementation plans in `docs/plans/`.

Use descriptive UPPER_SNAKE_CASE filenames.

## Plan structure

Each plan should contain:

- Objective and scope.
- Current implementation.
- Proposed solution.
- Technical decisions and alternatives.
- Implementation steps.
- Acceptance criteria.
- Progress and verification results.
- Open questions, when applicable.

## Implementation steps

Each step should identify:

- Expected outcome.
- Relevant files.
- Implementation guidance.
- Verification instructions.

## Maintenance

- Keep plans aligned with the actual implementation.
- Record meaningful decisions and deviations.
- Mark steps as completed only after verification.
- Avoid duplicating coding rules or project context.
- Retain completed plans as a development record.

Follow the mentoring constraints in `AGENTS.md`.
The user applies all code and documentation changes.
