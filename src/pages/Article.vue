<script setup lang="ts">
import type { Ref } from "vue";

import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import BookComponent from "../components/book.vue";
import ArticlePlaceholder from "../components/article-placeholder.vue";
import articleHeader from "../components/article-header.vue";
import ReadingProgress from "../components/reading-progress.vue";
import SeriesNavigation from "../components/series-navigation.vue";
import AuthorBox from "../components/author-box.vue";

import articleRepository from "../module/infrastructure/backendRepository";
import getArticlePage from "../module/application/getArticlePage";
import estimateReadingMinutes from "../module/domain/readingTime";
import useReadingProgress from "../composables/useReadingProgress";
import usePrefetchedData from "../composables/usePrefetchedData";
import usePageMeta from "../composables/usePageMeta";
import { buildArticleMeta } from "../module/presentation/pageMeta";
import type { RenderedArticle } from "../module/infrastructure/renderArticleMarkdown";
import type { ArticlePage } from "../module/application/getArticlePage";
import { getLinkPresentation } from "../module/presentation/linkPresentation";
import { notFoundLocation } from "../routes/notFound";

const route = useRoute();
const router = useRouter();
const slug = computed(() => route.params.slug as string);

type ArticleView = ArticlePage & { rendered: RenderedArticle };

// Markdown is rendered while prerendering and travels as HTML in the page state:
// the renderer (markdown-it) is only downloaded when navigating to an article in the app
async function loadArticleView(): Promise<ArticleView | null> {
  const articlePage = await getArticlePage(new articleRepository(), slug.value);
  if (!articlePage) return null;

  const { default: renderArticleMarkdown } = await import(
    "../module/infrastructure/renderArticleMarkdown"
  );
  return { ...articlePage, rendered: renderArticleMarkdown(articlePage.article.content) };
}

const { data: page, isLoading } = usePrefetchedData(() => `article:${slug.value}`, loadArticleView);

const article = computed(() => page.value?.article ?? null);
const source = computed(() => article.value?.content ?? "");
const title = computed(() => article.value?.title ?? "");
const date = computed(() => article.value?.date ?? "");
const excerpt = computed(() => article.value?.excerpt ?? "");
const serie = computed(() => article.value?.serie);
const books = computed(() => article.value?.books ?? []);
const relatedLinks = computed(() => article.value?.relatedLinks ?? []);
const moreArticles = computed(() => page.value?.moreArticles ?? []);
const seriesNeighbours = computed(
  () => page.value?.seriesNeighbours ?? { previous: undefined, next: undefined }
);

usePageMeta(() => (article.value ? buildArticleMeta(article.value) : null));

// Only reachable in the browser: every prerendered slug exists
watch([isLoading, page], ([loading, loadedPage]) => {
  if (!loading && !loadedPage) router.replace(notFoundLocation(route));
});

const articleElement: Ref<HTMLElement | null> = ref(null);
const { progress } = useReadingProgress(articleElement);

const readingMinutes = computed(() => estimateReadingMinutes(source.value));
const hasSeriesNeighbours = computed(
  () => Boolean(seriesNeighbours.value.previous || seriesNeighbours.value.next)
);

const renderedArticle = computed(
  () => page.value?.rendered ?? { html: "", tableOfContentsHtml: "" }
);

const presentedRelatedLinks = computed(() =>
  relatedLinks.value.map((relatedLink) => ({
    url: relatedLink.link,
    ...getLinkPresentation(relatedLink.text, relatedLink.link),
  }))
);
</script>

<template>
  <ReadingProgress v-if="!isLoading" :progress="progress" />

  <Header />

  <main id="main" tabindex="-1">
    <articleHeader
      v-show="!isLoading"
      :title="title"
      :slug="slug"
      :excerpt="excerpt"
      :date="date"
      :serie="serie"
      :readingMinutes="readingMinutes"
    />

    <section class="section article-section" id="article-start">
      <div class="section__wrapper">
        <div class="article" ref="articleElement">
          <aside
            v-if="!isLoading && renderedArticle.tableOfContentsHtml"
            class="article__sidebar"
            aria-label="Table of contents"
          >
            <p class="article__sidebar-title">In this article</p>
            <div v-html="renderedArticle.tableOfContentsHtml" />
          </aside>

          <div class="article__body">
            <articlePlaceholder v-if="isLoading" :count="1" :long="10" />

            <template v-else>
              <aside class="article__serie" v-if="serie">
                <strong>About this series</strong>
                <p>{{ serie.description }}</p>
              </aside>

              <div class="article__markdown" v-html="renderedArticle.html" />

              <template v-if="books.length">
                <hr class="article__division" />

                <h2 class="article__endmatter-title">Go deeper</h2>
                <p>
                  Want to dig further? These books inspired a good part of what I share in
                  this article.
                </p>
                <BookComponent v-for="book in books" :key="book.id" :book="book" />
              </template>

              <template v-if="relatedLinks.length">
                <h2 class="article__endmatter-title">Further reading</h2>
                <p>If you prefer something shorter, here are a few articles and resources.</p>
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

              <nav v-if="moreArticles.length" class="more-articles" aria-label="More articles">
                <h2 class="article__endmatter-title">Keep reading</h2>
                <ul class="more-articles__list">
                  <li v-for="moreArticle in moreArticles" :key="moreArticle.slug">
                    <router-link :to="'/blog/' + moreArticle.slug + '/'">{{
                      moreArticle.title
                    }}</router-link>
                  </li>
                </ul>
              </nav>

              <footer class="article__closing">
                <AuthorBox />
                <p>
                  Thanks for reading this far. All feedback is a gift: if you want to comment
                  on this article, message me on
                  <a href="https://www.linkedin.com/in/diego-pertusa/" target="_blank" rel="noopener"
                    >LinkedIn</a
                  >.
                </p>
                <router-link class="article__back" to="/blog/">← Back to the blog</router-link>
              </footer>
            </template>
          </div>
        </div>
      </div>
    </section>
  </main>

  <Footer />
</template>

<style lang="postcss">
/* Unscoped on purpose (styles the rendered markdown), so every selector is
   prefixed with article classes to keep it from leaking into other pages */
.section.article-section {
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
    font-size: var(--text-base);
    line-height: var(--leading-relaxed);
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
    font-size: var(--text-xl);
    margin-top: calc(var(--base) * 8);
  }

  h3 {
    color: var(--title-color);
    font-size: var(--text-lg);
    margin-top: calc(var(--base) * 5);
  }

  h4,
  h5 {
    color: var(--title-color);
    font-size: var(--text-base);
    margin-top: calc(var(--base) * 4);
  }

  img {
    border-radius: var(--radius-md);
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
    font-size: var(--text-sm);
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
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--accent-text-color);
  margin-bottom: calc(var(--base) * 2);
}

/* End matter sections are h2 for the outline but keep a quieter look than content sections */
.article__body .article__endmatter-title {
  color: var(--title-color);
  font-size: var(--text-lg);
  margin-top: calc(var(--base) * 6);
}

.more-articles__list {
  list-style: none;
  padding-left: 0;

  li {
    margin: calc(var(--base) * 1.5) 0;
  }

  a {
    font-weight: var(--bold);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
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
  font-size: var(--text-xs);
  color: var(--text-muted);
}

/* Once the reader is in the text, the full-screen header is off screen: stop its loops */
.is-reading .article-header-frame * {
  animation-play-state: paused;
}

/* The author box opens the closing with its own hairline */
.article__closing {
  margin-top: calc(var(--base) * 8);
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
    font-size: var(--text-sm);
    font-weight: var(--regular);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    color: var(--accent-text-color);
  }

  p {
    font-size: var(--text-base);
    line-height: var(--leading-normal);
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

/* experience notes written in the article content (not the series note or author box) */
.article__markdown aside {
  margin: calc(var(--base) * 5) 0;
  padding: calc(var(--base) * 3);
  background: rgba(var(--experience-rgb), 0.08);
  border-left: 3px solid rgb(var(--experience-rgb));
  border-radius: 0 var(--block-radius) var(--block-radius) 0;
  /* notes written without blank lines are not wrapped in <p> */
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
}

.article__markdown aside,
.article__serie {
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
  font-size: var(--text-lg);
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
    font-size: var(--text-xs);
    font-style: normal;
    color: var(--text-muted);

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
  font-size: var(--text-sm);
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

/* Table of contents: same list style inline (mobile) and in the sidebar (desktop),
   monospaced like the rest of the site navigation labels */
nav.table-of-contents {
  font-family: var(--secondary-font);

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
  font-size: var(--text-sm);
  line-height: 1.5;

  &::before {
    content: "In this article";
    display: block;
  }

  @media (min-width: 1280px) {
    display: none;
  }
}

.article__body hr {
  border-bottom: 1px solid var(--text-color);
  margin-bottom: calc(var(--base) * 2);
  border-color: var(--accent-color);
}

.article__body figcaption {
  margin-top: calc(var(--base) * -2);
  margin-bottom: calc(var(--base) * 3);
  font-size: var(--text-sm);
  font-style: italic;
}
</style>
