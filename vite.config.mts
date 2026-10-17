import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { mkdir, rename, rm, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

import BackendRepository from "./src/module/infrastructure/backendRepository";
import buildSeoFiles from "./src/build/buildSeoFiles";

const OUTPUT_DIRECTORY = resolve("dist");

let publishedArticles: ReturnType<BackendRepository["getArticles"]> | undefined;

// Loaded once and shared by route generation and the SEO files
async function loadPublishedArticles() {
  publishedArticles ??= new BackendRepository().getArticles();
  const articles = await publishedArticles;

  if (!articles) {
    throw new Error("Could not load the articles to prerender from the blog API");
  }

  return articles;
}

// Netlify serves /404.html with a 404 status for every unknown url
async function moveNotFoundPage() {
  await rename(join(OUTPUT_DIRECTORY, "404", "index.html"), join(OUTPUT_DIRECTORY, "404.html"));
  await rm(join(OUTPUT_DIRECTORY, "404"), { recursive: true });
}

async function writeSeoFiles() {
  // Netlify exposes the site's main url as URL during builds
  const files = buildSeoFiles(await loadPublishedArticles(), process.env.URL);

  await mkdir(OUTPUT_DIRECTORY, { recursive: true });
  await Promise.all(
    Object.entries(files).map(([fileName, content]) =>
      writeFile(join(OUTPUT_DIRECTORY, fileName), content)
    )
  );
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3001,
  },
  ssgOptions: {
    // /blog -> blog/index.html, served by Netlify as /blog/
    dirStyle: "nested",
    async includedRoutes(paths) {
      const staticPaths = paths.filter((path) => !path.includes(":"));
      const articles = await loadPublishedArticles();
      return [...staticPaths, ...articles.map((article) => `/blog/${article.slug}`)];
    },
    async onFinished() {
      await moveNotFoundPage();
      await writeSeoFiles();
    },
  },
});
