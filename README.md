# Marco Polato — Portfolio

A static Astro portfolio in Italian and English,
covering professional experience, education,
projects, and personal interests.

**Live site:** [marco-website-olive.vercel.app](https://marco-website-olive.vercel.app/)

## Local development

Use the Node.js version in `.nvmrc` and the pnpm
version declared in `package.json`.

```sh
nvm use
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by Astro.

## Checks and deployment

- `pnpm format:check`: check formatting.
- `pnpm check`: run Astro and TypeScript diagnostics.
- `pnpm build`: validate and generate the static site.
- `pnpm preview`: serve an existing production build.

GitHub Actions checks formatting and types and builds
the site on pushes and pull requests targeting `main`.

Vercel hosts the site.

## Documentation

| Document                                      | Purpose                                  |
| --------------------------------------------- | ---------------------------------------- |
| [AGENTS.md](AGENTS.md)                        | Collaboration and mentoring instructions |
| [PROJECT_CONTEXT.md](docs/PROJECT_CONTEXT.md) | Product goals and architecture           |
| [CODING_RULES.md](docs/CODING_RULES.md)       | Technical conventions                    |
| [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md)     | Visual identity and UI guidelines        |
| [PLANS.md](docs/PLANS.md)                     | Implementation planning                  |
| [ROADMAP.md](docs/ROADMAP.md)                 | Project progress and future development  |

Implementation plans are stored in `docs/plans/`.
