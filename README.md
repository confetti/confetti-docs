# Confetti API Documentation

API documentation for [Confetti](https://confetti.events) — built with [VitePress](https://vitepress.dev).

Live site: **[docs.confetti.events](https://docs.confetti.events)**

## Prerequisites

- [Node.js](https://nodejs.org) 24 or later (see `.nvmrc`)

## Local Development

Install dependencies:

```sh
npm install
```

Start the dev server with hot reload:

```sh
npm run docs:dev
```

The site will be available at `http://localhost:5173`.

### Other Commands

| Command | Description |
| --- | --- |
| `npm run docs:dev` | Start dev server with hot reload |
| `npm run docs:build` | Production build → `.vitepress/dist/` |
| `npm run docs:preview` | Preview a production build locally |
| `npm run docs:generate` | Regenerate API docs from the `confetti` package |

## How It Works

### Doc Generation

The API reference pages (everything under `docs/events/`, `docs/tickets/`, etc.) are **auto-generated** from the [`confetti`](https://github.com/confetti/confetti-node) npm package by the build script `scripts/generate-docs.ts`.

This script runs automatically before every `docs:dev` and `docs:build`. It reads model metadata (sample responses, filters, includes, create attributes) from the package and outputs clean VitePress markdown with parameter tables, code examples, and JSON response samples.

If the `confetti` package is updated with new fields or models, just run `npm run docs:generate` to regenerate the docs.

### Static Content

The introduction page (`docs/index.md`) and homepage (`index.md`) are written by hand and not auto-generated.

## Deployment

The site is deployed to **GitHub Pages** via a GitHub Actions workflow (`.github/workflows/deploy.yml`).

### How It Works

1. A push to `main` (or a manual trigger) kicks off the workflow.
2. The workflow installs dependencies, runs the build (`npm run docs:build`), and uploads the `.vitepress/dist/` output as a GitHub Pages artifact.
3. A second job deploys that artifact to GitHub Pages.

The custom domain `docs.confetti.events` is configured via the `public/CNAME` file, which is included in every build output automatically.

### Setup Requirement

For the workflow to work, the repository must have **GitHub Pages** enabled with the source set to **GitHub Actions**:

> Settings → Pages → Build and deployment → Source → **GitHub Actions**

### llms.txt

The build also generates `/llms.txt` and `/llms-full.txt` via [vitepress-plugin-llmstxt](https://github.com/angelespejo/vitepress-plugin-llmstxt), making the documentation discoverable and consumable by AI agents following the [llmstxt.org](https://llmstxt.org) standard.

## Project Structure

```
.vitepress/
  config.mts              VitePress configuration (sidebar, nav, plugins)
  theme/
    index.ts              Theme entry — extends default theme
    custom.css            Source Sans 3 font, Confetti brand colors
    components/
      ApiEndpoint.vue     Styled HTTP method + endpoint display
scripts/
  generate-docs.ts        Generates API docs from the confetti npm package
docs/
  index.md                Introduction & authentication (hand-written)
  events/                 Auto-generated endpoint docs
  tickets/                  ↓
  payments/                 ↓
  webhooks/                 ↓
  contacts/                 ↓
  workspace/                ↓
public/
  CNAME                   Custom domain for GitHub Pages
  confetti-logo.svg       Navbar logo
index.md                  Homepage (hero + features)
tsconfig.json             TypeScript configuration
```
