# Diego Pertusa — personal web

Personal site with bio, CV and blog. Built with Vue 3 (`<script setup>`), TypeScript, Vite, vue-router and [vite-ssg](https://github.com/antfu-collective/vite-ssg).

- Staging (branch `develop`): https://diegopertusa.netlify.app
- Hosting: Netlify, as static pages prerendered at build time and hydrated in the browser

## Getting started

Requires Node 18 or later (Vite 5); `.nvmrc` pins the version used by Netlify.

```sh
yarn install
yarn dev        # dev server on http://localhost:3001
```

| Script | Description |
| --- | --- |
| `yarn dev` | Start the Vite dev server on port 3001 |
| `yarn build` | Type-check with `vue-tsc` and prerender every page with `vite-ssg` |
| `yarn preview` | Serve the production build locally |
| `yarn test` | Run the Jest test suite |
| `yarn lint` | Lint and fix `.js` and `.vue` files |
| `yarn format` | Format the project with Prettier |

> The blog API only allows CORS requests from `http://localhost:3001`, so keep the dev server on that port.

> On recent Node versions the native `deasync` dependency (pulled in by the test tooling) fails to compile. If `yarn add` or `yarn install` fails on it, run the command with `--ignore-scripts`.

## Content

Articles are not stored in this repository. They live in the blog API (`https://blog-api.diegopertusa.com/api/blog/articles`) and are written in Markdown with raw HTML allowed.

At build time `vite.config.mts` asks the API for every published article and prerenders `/blog/<slug>`, so each page ships its full HTML. The build fails if the API is unreachable, so a broken API never replaces a good deploy. Publishing or editing an article therefore needs a new build.

Data loaded while prerendering is embedded in the page (`initialState`) through `usePrefetchedData`, so the browser does not call the API again on the first load. Navigating inside the app loads data from the API as usual.

Markdown is rendered with `markdown-it` plus:

- `markdown-it-anchor` and `markdown-it-toc-done-right`: heading ids and the table of contents (`[toc]` renders it inline; the desktop sidebar is always generated).
- Local plugins in `src/module/infrastructure`: tables wrapped in a horizontal scroll container and lazy-loaded images.

Writing conventions supported by the article styles:

- `<aside>`: personal experience notes (violet line and tint).
- `> **quote** *author*`: quote with author line.
- Tables scroll horizontally on small screens; no mobile-specific markup is needed.

## Project structure

```
src/
  pages/            Route components: Bio, Blog, Article, CV
  components/       UI components
    headers/        Animated article headers, one per series (some reserved for future series)
  composables/      Reusable composition functions (reading progress)
  module/           Hexagonal-style core
    domain/         Entities and pure domain logic (Article, Book, reading time)
    application/    Use cases (get articles, series neighbours)
    infrastructure/ API repository, HTTP helper, Markdown rendering
    presentation/   Formatting helpers (dates, links)
  routes/           Router configuration
```

Article headers are chosen in `src/components/article-header.vue` by series id; articles without a mapped series use `headers/default.vue`.

## SEO

Every page sets its own `<head>` through `usePageMeta` (`@unhead/vue`), so the tags are in the prerendered HTML and update while navigating:

- Title, description and canonical URL on `https://diegopertusa.com`, always with a trailing slash (Netlify redirects slashless URLs to it, so internal links use it too).
- Open Graph and Twitter tags; articles add `article:published_time` and `BlogPosting` structured data (JSON-LD).
- The tag values are built by pure functions in `src/module/presentation/pageMeta.ts` and `toHeadInput.ts`.

The build also writes, from `src/build/`:

- `404.html`: the prerendered not found page (`noindex`). Netlify serves it with a 404 status for any unknown url, so there is no SPA rewrite.
- `sitemap.xml` with the static pages and every article, and `rss.xml` with the articles.
- `robots.txt`: allows crawling and points to the sitemap, except when Netlify's `URL` build variable is a `*.netlify.app` address (staging), where it blocks all crawlers. Once the custom domain is the site's main domain, the next build allows crawling.

## Design notes

- Typography uses tokens in `src/App.vue`: a single scale (`--text-xs` 13px to `--text-3xl` 48px, plus `--text-display` for hero titles), `--leading-*` line heights and `--tracking-label`. Do not hardcode font sizes.
- Montserrat is used for headings and running text; Roboto Mono for labels, dates, navigation and the light (300) article excerpts. Only the loaded weights are used: Montserrat 400/600/700 and 400 italic, Roboto Mono 300/400.

- Colours are CSS custom properties in `src/App.vue`, with light and dark themes from `prefers-color-scheme`.
- In the light theme, accent text uses darker shades of the brand red (`--accent-text-color`, `--accent-heading-color`) to meet WCAG AA contrast; the brand red stays for decoration.
- Animations respect `prefers-reduced-motion`.
