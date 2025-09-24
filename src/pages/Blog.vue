<script setup lang="ts">
import type { Ref } from "vue";
import type Article from "../module/domain/Article";

import { ref, onMounted } from "vue";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import ArticlePlaceholder from "../components/article-placeholder.vue";

import articleRepository from "../module/infrastructure/backendRepository";
import getArticles from "../module/application/getArticles";

const articles: Ref<Article[] | null> = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  isLoading.value = true;
  const recievedArticles = await getArticles(new articleRepository());
  if (recievedArticles) {
    articles.value = recievedArticles;
  }
  isLoading.value = false;
});

function hasArticles() {
  return Array.isArray(articles.value) && articles.value.length > 0;
}
</script>

<template>
  <Header />

  <section class="section blog">
    <div class="section__wrapper">
      <header class="blog__header">
        <h1 class="blog__title">Hola! 👋🏻 Bienvenido a mi blog</h1>
        <p>
          Quiero agradecer que le dediques unos minutos este es un espacio, donde quiero
          compartir con vosotros mis retos y como los soluciono. No esperéis una
          periodicidad marcada por el calendario. El objetivo último es poder reflexionar
          públicamente sobre cómo afronto mi día a día y así poder aprender de mis errores
          y asentar mis aciertos.
        </p>
        <p>
          Publico mis ideas no con la esperanza de ser leído por los demás pero espero
          poder ayudarte por el camino. Todo feedback es un regalo, así que si tienes algo
          que decirme, no dudes en contactarme por
          <a href="https://www.linkedin.com/in/diego-pertusa/" target="_blank">Linkedin</a
          >.
        </p>
      </header>

      <div class="blog__content">
        <articlePlaceholder v-if="isLoading" :count="3" :long="2" />

        <p class="blog__flag" v-if="hasArticles()">Destacado</p>

        <article
          class="excerpt"
          :class="index == 0 ? 'is-first' : ''"
          v-for="(article, index) in articles"
          v-if="hasArticles()"
          :key="article.slug"
        >
          <router-link class="excerpt__link" :to="'/blog/' + article.slug">
            <span v-if="article.serie" class="excerpt__cat">
              {{ article.serie?.title }}
            </span>
            <h2 v-if="index == 0" class="excerpt__title">{{ article.title }}</h2>
            <h3 v-else class="excerpt__title">{{ article.title }}</h3>
            <p class="excerpt__text">{{ article.excerpt }}</p>
            <span class="excerpt__more">Leer artículo completo </span>
          </router-link>
        </article>

        <div v-else-if="!isLoading" class="blog__no-articles">
          No hay artículos disponibles.
        </div>
      </div>
    </div>
  </section>

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

.blog__title {
  margin-bottom: calc(var(--base) * 2);
}

.blog__flag {
  font-family: var(--primary-font);
  color: var(--accent-color);
  font-size: 1.1rem;
  margin-bottom: 30px;
  opacity: 0.9;
  font-weight: 300;
  letter-spacing: 2px;
  width: 100%;
  margin-bottom: calc(var(--base) * 1);

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
}

.excerpt {
  margin-bottom: calc(var(--base) * 12);
  padding-right: calc(var(--base) * 8);
  width: 100%;
  transition: transform var(--main-transition);

  @media (min-width: 768px) {
    width: 50%;
  }

  &.is-first {
    @media (min-width: 768px) {
      width: 80%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: -40px;
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

.excerpt__title {
  background: var(--title);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: var(--title-shadow);
  animation: titleGlow 5s infinite alternate;
  transition: background var(--main-transition);
}

.excerpt__cat {
  display: inline-block;
  background: var(--accent-color-01);
  color: var(--accent-color);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  margin: 0.3rem 0.3rem 0.3rem 0;
  border: 1px solid var(--accent-color-03);
  margin-bottom: 20px;
  text-overflow: ellipsis;
  max-width: calc(80%);
  overflow: hidden;
  white-space: nowrap;
}

.excerpt__serie {
  font-family: var(--primary-font);
  font-size: 1.1rem;
  margin-bottom: 30px;
  opacity: 0.9;
  font-weight: 300;
  letter-spacing: 2px;
}

.excerpt__link {
  color: var(--text-color);
  text-decoration: none;
  transition: color var(--main-transition), text-decoration var(--main-transition);
}

.excerpt__more {
  color: var(--accent-color);

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
