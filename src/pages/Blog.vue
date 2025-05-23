<script setup lang="ts">
import type { Ref } from 'vue'
import type Article from '../module/domain/Article'

import { ref, onMounted } from 'vue'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'

import articleRepository from '../module/infrastructure/inMemoryArticlesRepository'
import getArticles from "../module/application/getArticles";


const articles: Ref<Article[] | null> = ref([])

onMounted(async () => {
  const recievedArticles = await getArticles(new articleRepository());
  
  if (recievedArticles) {
    articles.value =recievedArticles;
  }
})

function hasArticles () {
  return Array.isArray(articles.value)
}

</script>

<template>
  <Header />

  <section class="section blog">
    <div class=" section__wrapper">
      <header class="blog__header">
        <h1 class="blog__title">Hola! 👋🏻 Bienvenido a mi blog</h1>
        <p>Quiero agradecer que le dediques unos minutos este es un espacio, donde quiero compartir con vosotros mis retos y como los soluciono. No esperéis una periodicidad marcada por el calendario. El objetivo último es poder reflexionar públicamente sobre cómo afronto mi día a día y así poder aprender de mis errores y asentar mis aciertos. </p>
        <p>Publico mis ideas no con la esperanza de ser leído por los demás pero espero poder ayudarte por el camino. Todo feedback es un regalo, así que si tienes algo que decirme, no dudes en contactarme por <a href="https://www.linkedin.com/in/diego-pertusa/" target="_blank">Linkedin</a>.</p>
      </header>
      
      <div class="blog__content" v-if="hasArticles()">
        <article class="excerpt"  v-for="article in articles as Article[]">
          <router-link class="excerpt__link" :to="'/blog/' + article.slug">
            <h3 class="excerpt__title">{{ article.title }}</h3>
            <p class="excerpt__text">{{ article.excerpt }}</p>
          </router-link>
        </article>
      </div>
    </div>
  </section>

  <Footer/>
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
  @media (min-width: 1024px) {
    margin-left: calc(8.33% * 1);
    margin-right: calc(8.33% * 5);
  }
}

.blog__title {
  margin-bottom: calc(var(--base) * 2);
}

.excerpt {
  margin-bottom: calc(var(--base) * 4);
}

.excerpt__link {
  color: var(--text-color);
  text-decoration: none;
  transition: color var(--main-transition), text-decoration var(--main-transition);

  &:hover {
    color: var(--accent-color);
    text-decoration: underline;
  }
}
</style>
