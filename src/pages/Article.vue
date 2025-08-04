<script setup lang="ts">
import type { Ref } from "vue";
import type Book from "../module/domain/Book";

import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Markdown from "vue3-markdown-it";

import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import BookComponent from "../components/book.vue";
import ArticlePlaceholder from "../components/article-placeholder.vue";
import articleHeader from "../components/article-header.vue";

import articleRepository from "../module/infrastructure/backendRepository";
import getArticle from "../module/application/getArticle";

const route = useRoute();
const router = useRouter();
const source = ref("");
const title = ref("");
const date = ref("");
const excerpt = ref("");
const slug = ref(route.params.slug as string);

const books: Ref<Book[]> = ref([]);
const relatedLinks: Ref<{ text: string; link: string }[]> = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  isLoading.value = true;
  const article = await getArticle(new articleRepository(), route.params.slug as string);

  if (!article) {
    router.push({ path: "/blog/" });
    return;
  }

  isLoading.value = false;

  source.value = article.content;
  title.value = article.title;
  date.value = article.date;
  books.value = article.books;
  relatedLinks.value = article.relatedLinks;
  excerpt.value = article.excerpt;
});
</script>

<template>
  <Header />

  <articleHeader v-show="!isLoading" :title="title" :slug="slug" :excerpt="excerpt" />

  <section class="section">
    <div class="section__wrapper">
      <div class="article">
        <articlePlaceholder v-if="isLoading" :count="1" :long="10" />

        <template v-else>
          <Markdown :source="source" :html="true" />

          <hr class="article__division" />

          <h3>Profundiza en el tema</h3>
          <p>
            ¿Te ha interesado el tema? A continuación te dejo algunos libros donde seguir
            profundizando en el tema que te cuento más arriba. Algunos de ellos son la
            inspiración a mi enfoque del problema.
          </p>
          <BookComponent v-for="book in books" :book="book" />

          <template v-if="relatedLinks.length">
            <h4>Más artículos de interés</h4>
            <p>
              Puede que profundizar en el tema con un libro no sea la forma más rápida
              para avanzar. Si quieres expandir tu conocimiento antes, o simplemente
              complementar los libros de arriba, te dejo estos enlaces.
            </p>
            <p v-for="relatedLink in relatedLinks">
              <a :href="relatedLink.link">{{ relatedLink.text }}</a>
            </p>
          </template>
        </template>
      </div>
    </div>
  </section>

  <Footer />
</template>

<style lang="postcss">
.section {
  margin-top: calc(var(--base) * 4);

  @media (min-width: 768px) {
    margin-top: calc(var(--base) * 6);
  }

  @media (min-width: 1024px) {
    margin-top: calc(var(--base) * 8);
  }
}

.article {
  margin-bottom: calc(var(--base) * 8);
  padding-bottom: 64px;
  overflow: hidden;

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
  padding: calc(var(--base) * 3);
  margin-bottom: calc(var(--base) * 2);
  font-style: italic;
  background: rgba(162, 155, 254, 0.1);
  border-left: 4px solid rgba(116, 185, 255, 0.2);
  backdrop-filter: blur(2px);
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
  padding: calc(var(--base) * 4);
  margin-top: calc(var(--base) * 4);
  margin-bottom: calc(var(--base) * 8);
  backdrop-filter: blur(1px);
  background: rgba(13, 27, 42, 0.7);
  border: 1px solid rgba(116, 185, 255, 0.2);
  border-radius: 20px;
}

nav.table-of-contents:before {
  content: "indice de contenidos";
  font-weight: var(--bold);
}

hr {
  border-bottom: 1px solid var(--text-color);
  margin-bottom: calc(var(--base) * 2);
  border-color: var(--accent-color);
}

h1,
h2,
h3,
h4,
h5 {
  color: var(--accent-color);
}

figcaption {
  margin-top: calc(var(--base) * -2);
  margin-bottom: calc(var(--base) * 3);
  font-size: 16px;
  font-style: italic;
}
</style>
