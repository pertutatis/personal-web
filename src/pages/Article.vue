<script setup lang="ts">
import type { Ref } from "vue";
import type Book from "../module/domain/Book";
import type Article from "../module/domain/Article";
import type { SeriesNeighbours } from "../module/application/getSeriesNeighbours";

import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import BookComponent from "../components/book.vue";
import ArticlePlaceholder from "../components/article-placeholder.vue";
import articleHeader from "../components/article-header.vue";
import ReadingProgress from "../components/reading-progress.vue";
import SeriesNavigation from "../components/series-navigation.vue";

import articleRepository from "../module/infrastructure/backendRepository";
import getArticle from "../module/application/getArticle";
import getArticles from "../module/application/getArticles";
import getSeriesNeighbours from "../module/application/getSeriesNeighbours";
import estimateReadingMinutes from "../module/domain/readingTime";
import useReadingProgress from "../composables/useReadingProgress";
import renderArticleMarkdown from "../module/infrastructure/renderArticleMarkdown";
import { getLinkPresentation } from "../module/presentation/linkPresentation";

import Serie from "../module/domain/Series";

const route = useRoute();
const router = useRouter();
const source = ref("");
const title = ref("");
const date = ref("");
const excerpt = ref("");
const slug = ref(route.params.slug as string);

const serie = ref<Serie | undefined>(undefined);
const books: Ref<Book[]> = ref([]);
const relatedLinks: Ref<{ text: string; link: string }[]> = ref([]);
const seriesNeighbours: Ref<SeriesNeighbours<Article>> = ref({ previous: undefined, next: undefined });
const isLoading = ref(true);

const articleElement: Ref<HTMLElement | null> = ref(null);
const { progress } = useReadingProgress(articleElement);

const readingMinutes = computed(() => estimateReadingMinutes(source.value));
const hasSeriesNeighbours = computed(
  () => Boolean(seriesNeighbours.value.previous || seriesNeighbours.value.next)
);

const renderedArticle = computed(() => renderArticleMarkdown(source.value));

const presentedRelatedLinks = computed(() =>
  relatedLinks.value.map((relatedLink) => ({
    url: relatedLink.link,
    ...getLinkPresentation(relatedLink.text, relatedLink.link),
  }))
);

async function loadSeriesNeighbours(currentSlug: string) {
  const articles = await getArticles(new articleRepository());
  seriesNeighbours.value = getSeriesNeighbours(articles ?? [], currentSlug);
}

async function loadArticle(articleSlug: string) {
  isLoading.value = true;
  seriesNeighbours.value = { previous: undefined, next: undefined };

  const article = await getArticle(new articleRepository(), articleSlug);

  if (!article) {
    router.push({ path: "/blog/" });
    return;
  }

  slug.value = article.slug;
  source.value = article.content;
  title.value = article.title;
  date.value = article.date;
  books.value = article.books;
  relatedLinks.value = article.relatedLinks;
  excerpt.value = article.excerpt;
  serie.value = article.serie ? article.serie : undefined;
  isLoading.value = false;

  if (article.serie) {
    loadSeriesNeighbours(article.slug);
  }
}

watch(
  () => route.params.slug as string | undefined,
  (articleSlug) => {
    if (articleSlug) loadArticle(articleSlug);
  },
  { immediate: true }
);
</script>

<template>
  <ReadingProgress v-if="!isLoading" :progress="progress" />

  <Header />

  <articleHeader
    v-show="!isLoading"
    :title="title"
    :slug="slug"
    :excerpt="excerpt"
    :date="date"
    :serie="serie"
    :readingMinutes="readingMinutes"
  />

  <section class="section" id="article-start">
    <div class="section__wrapper">
      <div class="article" ref="articleElement">
        <aside
          v-if="!isLoading && renderedArticle.tableOfContentsHtml"
          class="article__sidebar"
          aria-label="Índice del artículo"
        >
          <p class="article__sidebar-title">En este artículo</p>
          <div v-html="renderedArticle.tableOfContentsHtml" />
        </aside>

        <div class="article__body">
          <articlePlaceholder v-if="isLoading" :count="1" :long="10" />

          <template v-else>
            <aside class="article__serie" v-if="serie">
              <strong>Sobre esta serie</strong>
              <p>{{ serie.description }}</p>
            </aside>

            <div class="article__markdown" v-html="renderedArticle.html" />

            <template v-if="books.length">
              <hr class="article__division" />

              <h3>Profundiza en el tema</h3>
              <p>
                ¿Te ha interesado el tema? A continuación te dejo algunos libros donde
                seguir profundizando en el tema que te cuento más arriba. Algunos de ellos
                son la inspiración a mi enfoque del problema.
              </p>
              <BookComponent v-for="book in books" :key="book.id" :book="book" />
            </template>

            <template v-if="relatedLinks.length">
              <h4>Más artículos de interés</h4>
              <p>
                Puede que profundizar en el tema con un libro no sea la forma más rápida
                para avanzar. Si quieres expandir tu conocimiento antes, o simplemente
                complementar los libros de arriba, te dejo estos enlaces.
              </p>
              <ul class="related-links">
                <li v-for="relatedLink in presentedRelatedLinks" :key="relatedLink.url">
                  <a :href="relatedLink.url" target="_blank" rel="noopener">{{
                    relatedLink.title
                  }}</a>
                  <span v-if="relatedLink.domain" class="related-links__domain">
                    · {{ relatedLink.domain }}</span
                  >
                </li>
              </ul>
            </template>

            <SeriesNavigation
              v-if="serie && hasSeriesNeighbours"
              :serieTitle="serie.title"
              :previous="seriesNeighbours.previous"
              :next="seriesNeighbours.next"
            />

            <footer class="article__closing">
              <p>
                Gracias por leer hasta aquí. Todo feedback es un regalo: si quieres
                comentar algo de este artículo, escríbeme por
                <a href="https://www.linkedin.com/in/diego-pertusa/" target="_blank" rel="noopener"
                  >LinkedIn</a
                >.
              </p>
              <router-link class="article__back" to="/blog/">← Volver al blog</router-link>
            </footer>
          </template>
        </div>
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
  --reading-column: 42rem;
  --sidebar-width: 15rem;
  --sidebar-gap: calc(var(--base) * 6);

  margin-bottom: calc(var(--base) * 8);
  padding-bottom: 64px;

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns:
      minmax(0, 1fr) var(--reading-column) minmax(0, 1fr);
    column-gap: var(--sidebar-gap);
    align-items: start;
  }

  /* Legacy duplicated content: tables scroll on mobile, so always show the table version */
  .is-mobile {
    display: none;
  }

  .is-desktop {
    display: block;
  }
}

.article__body {
  max-width: var(--reading-column);
  margin: 0 auto;
  font-family: var(--primary-font);
  font-weight: var(--regular);

  @media (min-width: 1280px) {
    grid-column: 2;
    width: 100%;
  }

  p,
  li {
    font-size: 1.125rem;
    line-height: 1.75;
  }

  h2,
  h3,
  h4,
  h5 {
    scroll-margin-top: calc(var(--base) * 12);
    line-height: 1.25;
  }

  h2 {
    color: var(--accent-heading-color);
    font-size: 1.75rem;
    margin-top: calc(var(--base) * 8);
  }

  h3 {
    color: var(--title-color);
    font-size: 1.375rem;
    margin-top: calc(var(--base) * 5);
  }

  h4,
  h5 {
    color: var(--title-color);
    font-size: 1.125rem;
    margin-top: calc(var(--base) * 4);
  }

  img {
    border-radius: 12px;
  }
}

.article__sidebar {
  display: none;

  @media (min-width: 1280px) {
    display: block;
    grid-column: 1;
    grid-row: 1;
    justify-self: end;
    position: sticky;
    top: calc(var(--base) * 14);
    width: var(--sidebar-width);
    max-height: calc(100vh - var(--base) * 18);
    overflow-y: auto;
    margin: 0;
    padding: 0 calc(var(--base) * 1);
    font-size: 0.875rem;
    line-height: 1.5;
  }

  nav.table-of-contents {
    padding: 0;
    margin: 0;
    background: none;
    border: none;

    &:before {
      display: none;
    }
  }
}

.article__sidebar-title,
.article__body nav.table-of-contents::before {
  font-family: var(--secondary-font);
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--accent-text-color);
  margin-bottom: calc(var(--base) * 2);
}

.related-links {
  list-style: none;
  padding-left: 0;

  li {
    margin: calc(var(--base) * 1.5) 0;
  }
}

.related-links__domain {
  font-family: var(--secondary-font);
  font-size: 0.85rem;
  opacity: 0.7;
}

.article__closing {
  margin-top: calc(var(--base) * 8);
  padding-top: calc(var(--base) * 4);
  border-top: 1px solid var(--accent-color-03);
}

.article__back {
  font-family: var(--secondary-font);
  text-decoration: none;
}

.article__serie {
  margin-bottom: calc(var(--base) * 6);
  padding: calc(var(--base) * 3);
  background: var(--accent-color-01);
  border-radius: var(--block-radius);

  strong {
    display: block;
    margin-bottom: var(--base);
    font-family: var(--secondary-font);
    font-size: 0.8rem;
    font-weight: var(--regular);
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--accent-text-color);
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
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

/* ====================================
   Content blocks
   Told apart by shape:
   quote = accent line, experience (aside) = violet line + tint,
   editorial note (serie) = tint, navigation (toc) = hairlines,
   data (table) = frame.
   ==================================== */

.article__body aside:not(.article__serie) {
  margin: calc(var(--base) * 5) 0;
  padding: calc(var(--base) * 3);
  background: rgba(var(--experience-rgb), 0.08);
  border-left: 3px solid rgb(var(--experience-rgb));
  border-radius: 0 var(--block-radius) var(--block-radius) 0;
  /* notes written without blank lines are not wrapped in <p> */
  font-size: 1.125rem;
  line-height: 1.75;
}

.article__body aside {
  > :last-child,
  ul:last-child,
  p:last-child {
    margin-bottom: 0;
  }
}

.article__body blockquote {
  margin: calc(var(--base) * 6) 0;
  padding: calc(var(--base) * 1) 0 calc(var(--base) * 1) calc(var(--base) * 3);
  border-left: 3px solid var(--accent-color);
  font-size: 1.25rem;
  line-height: 1.6;
  font-style: italic;

  p {
    font-size: inherit;
    line-height: inherit;
  }

  > :last-child {
    margin-bottom: 0;
  }

  /* Legacy format: **quote** followed by *author* */
  strong {
    font-weight: var(--regular);
  }

  strong::before {
    content: "“";
    color: var(--accent-text-color);
  }

  strong::after {
    content: "”";
    color: var(--accent-text-color);
  }

  strong ~ em {
    display: block;
    margin-top: calc(var(--base) * 2);
    font-family: var(--secondary-font);
    font-size: 0.9rem;
    font-style: normal;
    opacity: 0.85;

    &::before {
      content: "— ";
      color: var(--accent-text-color);
    }
  }
}

.article__body .table-scroll {
  margin: calc(var(--base) * 5) 0;
  overflow-x: auto;
  border: 1px solid var(--accent-color-03);
  border-radius: var(--block-radius);
  /* Scroll shadows: the "local" covers move with the content and hide
     the "scroll" shadows only when that edge is fully visible */
  background:
    linear-gradient(to right, var(--background-color) 30%, transparent) left / 48px 100% no-repeat local,
    linear-gradient(to left, var(--background-color) 30%, transparent) right / 48px 100% no-repeat local,
    radial-gradient(farthest-side at 0 50%, var(--accent-color-03), transparent) left / 16px 100% no-repeat scroll,
    radial-gradient(farthest-side at 100% 50%, var(--accent-color-03), transparent) right / 16px 100% no-repeat scroll,
    var(--background-color);
}

.article__body table {
  width: 100%;
  min-width: 36rem;
  margin: 0;
  border-collapse: collapse;
  font-size: 0.95rem;
  line-height: 1.5;

  thead {
    background: var(--accent-color-01);
  }

  th,
  td {
    display: table-cell;
    padding: calc(var(--base) * 1.5) calc(var(--base) * 2);
    text-align: left;
    vertical-align: top;
    border-bottom: 1px solid var(--accent-color-03);
  }

  th {
    font-weight: var(--bold);
    color: var(--accent-text-color);
  }

  tr:last-child td {
    border-bottom: none;
  }

  /* Legacy mobile labels: tables now scroll instead of stacking */
  legend {
    display: none;
  }
}

/* Table of contents: same list style inline (mobile) and in the sidebar (desktop) */
nav.table-of-contents {
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
    font-size: inherit;
    line-height: inherit;
  }

  ol ol {
    padding-left: calc(var(--base) * 2);
  }

  li {
    margin: calc(var(--base) * 1) 0;
    font-size: inherit;
    line-height: inherit;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    opacity: 0.75;

    &:hover {
      color: var(--accent-text-color);
      opacity: 1;
    }
  }
}

.article__body nav.table-of-contents {
  margin: calc(var(--base) * 4) 0 calc(var(--base) * 6);
  padding: calc(var(--base) * 3) 0;
  border-top: 1px solid var(--accent-color-03);
  border-bottom: 1px solid var(--accent-color-03);
  font-size: 0.95rem;
  line-height: 1.5;

  &::before {
    content: "En este artículo";
    display: block;
  }

  @media (min-width: 1280px) {
    display: none;
  }
}

hr {
  border-bottom: 1px solid var(--text-color);
  margin-bottom: calc(var(--base) * 2);
  border-color: var(--accent-color);
}

figcaption {
  margin-top: calc(var(--base) * -2);
  margin-bottom: calc(var(--base) * 3);
  font-size: 16px;
  font-style: italic;
}
</style>
