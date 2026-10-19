# Marco Polato — Portfolio

Marco Polato's personal website, presenting professional experience, education, projects and personal interests.

The website is multilingual and currently supports Italian and English.

**Live website:** [marco-website-olive.vercel.app](https://marco-website-olive.vercel.app/)

## Features

- Personal introduction and photography.
- Dedicated pages for professional background, education and projects.
- Individual project details.
- Light and dark themes, with the preference saved in the browser.
- Responsive layouts and locally processed images.
- Phosphor icons.
- Automated formatting, type and build checks through GitHub Actions.
- Hosting on Vercel.

## Technologies

- **Astro:** components, routing and static page generation.
- **TypeScript:** structured content, translations, types and shared functions.
- **HTML:** semantic content structure.
- **CSS:** responsive layouts, themes and styling.
- **Phosphor Icons:** SVG icons.
- **Prettier:** code and documentation formatting.

Dependency versions are declared in `package.json` and resolved in `pnpm-lock.yaml`.

## Local development

Use the Node.js version specified by `.nvmrc` and the pnpm version declared in `package.json`.

If project dependencies are missing, install them with pnpm through your IDE's package manager tools or your usual development workflow.

To start the application, open `package.json` and run the **`dev`** script using your IDE's script runner. Open the local address reported by Astro.

## Package scripts

The following scripts are defined in `package.json` and can be run directly from the IDE.

| Script         | Definition                   | Purpose                                                             |
| -------------- | ---------------------------- | ------------------------------------------------------------------- |
| `dev`          | `astro dev`                  | Starts the development server with live updates.                    |
| `check`        | `astro check`                | Runs Astro diagnostics and type checking.                           |
| `build`        | `astro check && astro build` | Checks the project and generates the production website in `dist/`. |
| `preview`      | `astro preview`              | Serves an existing production build locally. Run `build` first.     |
| `astro`        | `astro`                      | Provides access to the Astro CLI with additional arguments.         |
| `format`       | `prettier . --write`         | Formats project files, modifying them.                              |
| `format:check` | `prettier . --check`         | Checks formatting without modifying files.                          |

For code changes, use `format:check` and `build`. The `build` script already includes the checks performed by `check`.

## Project structure

The tree below shows the main project directories. Their responsibilities are described in the following table.

```text
marco-website/
├── .github/
│   └── workflows/
├── docs/
├── public/
└── src/
    ├── assets/
    ├── components/
    │   └── pages/
    ├── data/
    ├── i18n/
    ├── layouts/
    ├── pages/
    └── styles/
```

| Directory               | Responsibility                                                                               |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| `.github/workflows/`    | GitHub Actions workflows that install dependencies and run automated project checks.         |
| `docs/`                 | Project documentation and lasting product, design and architecture decisions.                |
| `public/`               | Files served unchanged, such as favicons, without Astro processing.                          |
| `src/assets/`           | Source images imported by components so Astro can process and optimize them.                 |
| `src/components/`       | Reusable interface elements and sections, such as controls, contact links and project cards. |
| `src/components/pages/` | Shared page content used by the Italian and English route files.                             |
| `src/data/`             | TypeScript data describing experience, education, projects and contacts.                     |
| `src/i18n/`             | Translated text, localized URL helpers and date formatting functions.                        |
| `src/layouts/`          | The shared HTML document structure, including navigation, metadata and footer.               |
| `src/pages/`            | Files that define public URLs and pass language or content data to shared page components.   |
| `src/styles/`           | Global CSS, theme variables and shared visual foundations.                                   |

## Deployment and CI

The website is published on [Vercel](https://marco-website-olive.vercel.app/).

Astro uses static output. The production build generates the website files in `dist/`.

The workflow in `.github/workflows/ci.yml` defines dependency installation, formatting checks, type checks and a production build. It runs on pushes and pull requests targeting `main`, and can also be started manually.

## Documentation

- [Project context](docs/project-context.md): lasting product, design and architecture guidelines.
- [AGENTS.md](AGENTS.md): collaboration instructions and tutoring workflow.
- [Astro documentation](https://docs.astro.build/).
- [Astro Portfolio reference](https://astro.build/themes/details/portfolio/).
