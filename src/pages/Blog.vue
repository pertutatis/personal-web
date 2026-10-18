<script setup lang="ts">
import { computed } from "vue";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import ArticlePlaceholder from "../components/article-placeholder.vue";

import articleRepository from "../module/infrastructure/backendRepository";
import getBlogListing from "../module/application/getBlogListing";
import formatArticleDate from "../module/presentation/formatArticleDate";
import usePrefetchedData from "../composables/usePrefetchedData";
import usePageMeta from "../composables/usePageMeta";
import { buildBlogMeta } from "../module/presentation/pageMeta";

const { data: listing, isLoading } = usePrefetchedData(
  () => "blog:listing",
  () => getBlogListing(new articleRepository())
);

usePageMeta(() => buildBlogMeta(listing.value ?? []));

const listedArticles = computed(() =>
  (listing.value ?? []).map((article) => ({
    article,
    formattedDate: formatArticleDate(article.date),
    readingMinutes: article.readingMinutes,
  }))
);

function hasArticles() {
  return listedArticles.value.length > 0;
}
</script>

<template>
  <Header />

  <main id="main" tabindex="-1" class="section blog">
    <div class="section__wrapper">
      <header class="blog__header">
        <h1 class="blog__title">Notes from an engineering leader</h1>
        <p>
          I write about what I run into while leading engineering teams: hiring, giving
          context, building culture, helping people grow… and the mistakes I make along the
          way.
        </p>
        <p>
          There's no publishing schedule: I write when something has made me think enough to
          put it in order. If something resonates, or you disagree, message me on
          <a href="https://www.linkedin.com/in/diego-pertusa/" target="_blank" rel="noopener">LinkedIn</a
          >. All feedback is a gift.
        </p>
      </header>

      <div class="blog__content">
        <articlePlaceholder v-if="isLoading" :count="3" :long="2" />

        <p class="blog__flag" v-if="hasArticles()">Featured</p>

        <article
          class="excerpt"
          :class="index == 0 ? 'is-first' : ''"
          v-for="({ article, formattedDate, readingMinutes }, index) in listedArticles"
          :key="article.slug"
        >
          <router-link class="excerpt__link" :to="'/blog/' + article.slug + '/'">
            <span v-if="article.serie" class="excerpt__cat">
              {{ article.serie?.title }}
            </span>
            <h2 class="excerpt__title">{{ article.title }}</h2>
            <p class="excerpt__meta">
              <time :datetime="article.date">{{ formattedDate }}</time>
              · {{ readingMinutes }} min read
            </p>
            <p class="excerpt__text">{{ article.excerpt }}</p>
            <span class="excerpt__more">Read the article </span>
          </router-link>
        </article>

        <div v-if="!isLoading && !hasArticles()" class="blog__no-articles">
          No articles yet.
        </div>
      </div>
    </div>
  </main>

  <Footer />
</template>

<style lang="postcss" scoped>
.blog__header {
  margin-bottom: calc(var(--base) * 8);

  @media (min-width: 1024px) {
    margin-left: calc(8.33% * 1);
    margin-right: calc(8.33% * 2);
  }
}

.blog__content {
  @media (min-width: 768px) {
    margin-left: calc(8.33% * 1);
    margin-right: calc(8.33% * 1);
    display: flex;
    flex-wrap: wrap;
  }
}

.blog__header p {
  max-width: 42rem;
}

.blog__title {
  margin-bottom: calc(var(--base) * 2);
}

.blog__flag {
  font-family: var(--secondary-font);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--accent-text-color);
  width: 100%;
  margin-bottom: calc(var(--base) * 1);
}

.excerpt {
  /* positions the hover accent bar (::before) */
  position: relative;
  margin-bottom: calc(var(--base) * 12);
  width: 100%;
  transition: transform var(--main-transition);

  @media (min-width: 768px) {
    width: 50%;
    /* gutter between the two columns; on phones it only ate reading width */
    padding-right: calc(var(--base) * 8);
  }

  &.is-first {
    @media (min-width: 768px) {
      width: 80%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: calc(var(--base) * -5);
    top: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, transparent, var(--accent-color), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateX(10px);

    &::before {
      opacity: 1;
    }

    .excerpt__title {
      background: linear-gradient(
        135deg,
        var(--accent-color) 0%,
        var(--accent-color) 100%
      );

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
}

/* Every listed article is an h2; the featured one is just bigger */
.excerpt__title {
  font-size: var(--text-lg);
  margin-bottom: var(--base);
  background: var(--title);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: var(--title-shadow);
  transition: background var(--main-transition);
}

.excerpt__meta {
  font-family: var(--secondary-font);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-label);
  color: var(--text-muted);
  margin-bottom: calc(var(--base) * 2);
}

.is-first .excerpt__title {
  font-size: var(--text-xl);

  @media (min-width: 1024px) {
    font-size: var(--text-2xl);
  }
}

/* Excerpts keep the light monospaced voice of the site */
.excerpt__text {
  font-family: var(--secondary-font);
  font-weight: var(--light);
}

.excerpt__cat {
  display: inline-block;
  background: var(--accent-color-01);
  color: var(--accent-text-color);
  padding: 0.3rem 0.8rem;
  border-radius: var(--radius-pill);
  font-family: var(--secondary-font);
  font-size: var(--text-xs);
  margin: 0.3rem 0.3rem 0.3rem 0;
  border: 1px solid var(--accent-color-03);
  margin-bottom: calc(var(--base) * 2.5);
  text-overflow: ellipsis;
  max-width: calc(80%);
  overflow: hidden;
  white-space: nowrap;
}

.excerpt__link {
  color: var(--text-color);
  text-decoration: none;
  transition: color var(--main-transition), text-decoration var(--main-transition);
}

.excerpt__more {
  font-family: var(--secondary-font);
  font-size: var(--text-sm);
  color: var(--accent-text-color);

  &:after {
    content: "→";
    display: inline-block;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(5px);
  }
}
</style>
