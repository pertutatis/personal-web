
<script setup lang="ts">
import { ref } from 'vue'
import Header from '../components/header.vue'
import Markdown from 'vue3-markdown-it';
import article from "../articles/post-1.js";

const source = ref(article.content)

</script>

<template>
  <Header />

  <section class="section">
    <div class=" section__wrapper">
      <header class="article">
        <Markdown :source="source" html="true" />
      </header>
    </div>
  </section>
</template>

<style lang="postcss">
.article {
  margin-left: calc(8.33% * 2);
  margin-right: calc(8.33% * 2);
  margin-bottom: calc(var(--base) * 8);
  padding-bottom: 64px;
}

aside {
  background: var(--text-color);
  padding: 24px;
  margin-bottom: 16px;
  color: var(--background-color);
  font-style: italic;
}
</style>
