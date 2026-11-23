# Damiano Barbati

Personal portfolio, project catalog, and CV. [View the site](https://damianobarbati.github.io/hq/).

## Development

```sh
fnm install --use
npm install -g corepack
corepack enable
pnpm install
pnpm dev
```

Open <http://localhost:3000/hq/>.

Run `pnpm lint` to apply lint fixes and check TypeScript.

## Preview

Run `pnpm build` to generate the static site in `dist`. GitHub Pages publishes this directory.

Stop the development server to free port 3000.

```sh
pnpm build
pnpm exec vite preview
```

Open <http://localhost:3000/hq/>.
