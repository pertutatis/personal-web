
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import Book from '../components/book.vue'
import Markdown from 'vue3-markdown-it';
import getArticle from "../api/getArticle";
import { useRoute, useRouter } from 'vue-router'

import type { Ref } from 'vue'
import type { IBook } from '../domain/models/Book';

const route = useRoute()
const router = useRouter()
const source = ref("")
const title = ref("")
const date = ref("")
const books: Ref<IBook[]> = ref([])
const relatedLinks: Ref<{ text: string; link: string }[]> = ref([])

onMounted(async () => {
  const article = await getArticle(route.params.slug as string);
  
  if (!article || article == true) {
    router.push({ path: '/blog/' })
    return
  }

  source.value = article.content
  title.value = article.title
  date.value = article.date
  books.value = article.books
  relatedLinks.value = article.relatedLinks  
})
</script>

<template>
  <Header />

  <section class="section">
    <div class=" section__wrapper">
      <div class="article">
        <h1 class="article__title">{{ title }}</h1>
        <p class="article__meta">{{ date }}</p>
        <Markdown :source="source" :html="true" />

        <hr class="article__division">

        <h3>Profundiza en el tema</h3>
        <p>¿Te ha interesado el tema? A continuación te dejo algunos libros donde seguir profundizando en el tema que te cuento más arriba. Algunos de ellos son la inspiración a mi enfoque del problema.</p>
        <Book v-for="book in books" :book="book" />

        <template v-if="relatedLinks.length">
          <h4>Más artículos de interés</h4>
          <p>Puede que profundizar en el tema con un libro no sea la forma más rápida para avanzar. Si quieres expandir tu conocimiento antes, o simplemente complementar los libros de arriba, te dejo estos enlaces.</p>
          <p v-for="relatedLink in relatedLinks"><a :href="relatedLink.link">{{ relatedLink.text }}</a></p>
        </template>
      </div>
    </div>
  </section>

  <Footer />
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

.article__title {
  margin-bottom: calc(var(--base) * 1);
}

.article__meta {
  margin-bottom: calc(var(--base) * 8);
}

.article__division {
  margin: calc(var(--base) * 8) 0 calc(var(--base) * 4);
}

aside {
  border: 1px solid var(--text-color);
  padding: calc(var(--base) * 3);
  margin-bottom: calc(var(--base) * 2);
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

nav.table-of-contents {
  border: 1px solid var(--text-color);
  padding: calc(var(--base) * 2);
  margin-top: calc(var(--base) * 4);
  margin-bottom: calc(var(--base) * 8);
}

nav.table-of-contents:before {
  content: "indice de contenidos";
  font-weight: var(--bold);
}

hr {
  border-bottom: 1px solid var(--text-color);
  margin-bottom: calc(var(--base) * 2);
}

h1, h2, h3, h4, h5 {
  color: var(--accent-color);
}

figcaption {
  margin-top: calc(var(--base) * -2);
  margin-bottom: calc(var(--base) * 3);
  font-size: 16px;
  font-style: italic;
}


</style>
