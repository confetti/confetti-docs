## Cursor Cloud specific instructions

This is a **Confetti API Documentation** site built with [Docusaurus 3](https://docusaurus.io/). It is a purely static docs site with no backend, database, or external services.

### Relevant commands

All standard commands are in `package.json` scripts and `README.md`:

- **Dev server:** `npm start` (serves on `localhost:3000` with hot-reload)
- **Typecheck:** `npm run typecheck` (runs `tsc`)
- **Build:** `npm run build` (static output in `build/`)
- **Serve prod build:** `npm run serve`

There is no dedicated linter (ESLint) configured; `npm run typecheck` is the primary code quality check. Prettier is installed as a devDependency but has no `format` or `lint` script — run it manually via `npx prettier --check .` if needed.

### Non-obvious notes

- The project has both `package-lock.json` and `yarn.lock`. The CI workflow (`deploy.yml`) uses `yarn`, but local development works fine with `npm`. Prefer `npm` since `package-lock.json` is present.
- Node.js >=20.19.0 is required (`engines` field in `package.json`; `.nvmrc` pins `v20.19.0`).
- The `confetti` npm package is a runtime dependency used for live code examples in the docs. A custom Docusaurus webpack plugin in `docusaurus.config.ts` provides polyfills for `process` and `util` to make this package work in the browser.
- `onBrokenLinks` is set to `'throw'` in `docusaurus.config.ts`, so the build will fail if any internal link is broken — always run `npm run build` after modifying docs structure or links.
