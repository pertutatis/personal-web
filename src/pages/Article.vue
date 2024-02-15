
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
  margin-bottom: calc(var(--base) * 8);
  padding-bottom: 64px;

  @media (min-width: 1024px) {
    margin-left: calc(8.33% * 2);
    margin-right: calc(8.33% * 2);
  }
}

aside {
  border: 1px solid var(--text-color);
  padding: 24px;
  margin-bottom: 16px;
  font-style: italic;
}

table legend {
  background: #0000002b;
  width: calc(100% + 16px);
  margin-left: -8px;
  margin-top: -8px;
  padding: 5px;
  margin-bottom: 8px;
  
  @media (min-width: 768px) {
    display: none;
  } 
}

thead {
    display: none;

  @media (min-width: 768px) {
    display: table-header-group;
  }
}





</style>
