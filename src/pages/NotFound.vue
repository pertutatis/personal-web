<script setup lang="ts">
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import usePageMeta from "../composables/usePageMeta";
import { usePrefetchedState } from "../composables/usePrefetchedData";
import { NOT_FOUND_STATE_KEY } from "../routes/notFound";
import { buildNotFoundMeta } from "../module/presentation/pageMeta";

usePageMeta(() => buildNotFoundMeta());

// Lets the browser know it received the 404 document, whatever the url
if (import.meta.env.SSR) {
  usePrefetchedState()[NOT_FOUND_STATE_KEY] = true;
}
</script>

<template>
  <Header />

  <main id="main" tabindex="-1" class="section not-found">
    <div class="section__wrapper">
      <p class="not-found__code">404</p>
      <h1 class="not-found__title">This page got lost in space</h1>
      <p>
        The page you are looking for doesn't exist or has moved. You may find something
        interesting in the blog.
      </p>
      <nav class="not-found__links" aria-label="Where to go next">
        <router-link to="/blog/">Go to the blog</router-link>
        <router-link to="/">Back to home</router-link>
      </nav>
    </div>
  </main>

  <Footer />
</template>

<style lang="postcss" scoped>
.not-found {
  min-height: 60vh;

  @media (min-width: 1024px) {
    padding-left: calc(8.33% * 1);
    padding-right: calc(8.33% * 2);
  }
}

.not-found__code {
  font-family: var(--secondary-font);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-label);
  color: var(--accent-text-color);
  margin-bottom: var(--base);
}

.not-found p {
  max-width: 42rem;
}

.not-found__title {
  margin-bottom: calc(var(--base) * 3);
}

.not-found__links {
  display: flex;
  gap: calc(var(--base) * 3);
  font-family: var(--secondary-font);
  font-size: var(--text-sm);
}
</style>
