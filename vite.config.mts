import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import BackendRepository from "./src/module/infrastructure/backendRepository";

async function getArticlePaths(): Promise<string[]> {
  const articles = await new BackendRepository().getArticles();

  if (!articles) {
    throw new Error("Could not load the articles to prerender from the blog API");
  }

  return articles.map((article) => `/blog/${article.slug}`);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3001,
  },
  ssgOptions: {
    // /blog -> blog/index.html, served by Netlify as /blog and /blog/
    dirStyle: "nested",
    async includedRoutes(paths) {
      const staticPaths = paths.filter((path) => !path.includes(":"));
      return [...staticPaths, ...(await getArticlePaths())];
    },
  },
});
