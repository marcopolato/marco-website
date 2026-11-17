# Marco Polato — Portfolio

A static Astro portfolio in Italian and English, covering professional experience, education, projects, and personal interests.

**Live site:** [marco-website-olive.vercel.app](https://marco-website-olive.vercel.app/)

## Local development

Use the Node.js version in `.nvmrc` and the pnpm version declared in `package.json`.

```sh
nvm use
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by Astro. You can also run the `dev` script from your IDE.

## Checks and deployment

- `pnpm format:check` checks formatting.
- `pnpm build` runs `astro check` and generates the static site in `dist/`.
- `pnpm preview` serves an existing build locally.

GitHub Actions checks formatting and types and builds the site on pushes and pull requests targeting `main`. Vercel hosts the site.

## Documentation

- [Project context](docs/project-context.md): product, design, and architecture.
- [AGENTS.md](AGENTS.md): collaboration and assistant workflow.
