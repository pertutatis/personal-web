
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from '../components/header.vue'
import Markdown from 'vue3-markdown-it';
import getArticle from "../api/getArticle";
import { useRoute, useRouter } from 'vue-router'


const route = useRoute()
const router = useRouter()
const source = ref("")

onMounted(async () => {
  const article = await getArticle(route.params.slug);
  
  if (!article) {
    router.push({ path: '/blog/' })
  }

  source.value = article.content
})
</script>

<template>
  <Header />

  <section class="section">
    <div class=" section__wrapper">
      <header class="article">
        <Markdown :source="source" :html="true" />
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
