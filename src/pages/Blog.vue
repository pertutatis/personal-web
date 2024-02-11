<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from '../components/header.vue'
import getArticles from "../api/getArticles";

const articles = ref([])

onMounted(async () => {
  const recievedArticles = await getArticles();
  
  if (recievedArticles) {
    articles.value =recievedArticles;
  }
})

</script>

<template>
  <Header />

  <section class="section blog">
    <div class=" section__wrapper">
      <header class="blog__header">
        <h1 class="blog__title">Hola! 👋🏻 Bienvenido a mi blog</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut ultrices urna, vel aliquam neque. Nam condimentum leo risus, nec semper urna cursus sed. Etiam massa lorem, lobortis ut vehicula ut, viverra ut nulla. Sed bibendum mi non dictum laoreet. Nulla feugiat odio et consectetur tristique.</p>
        <p>Pellentesque posuere sed sapien ac dapibus. Suspendisse scelerisque aliquet semper. Maecenas commodo auctor massa, ac vestibulum ligula tincidunt eu.</p>
      </header>
      
      <div class="blog__content">
        <article class="excerpt" v-for="article in articles">
          <router-link :to="'/blog/' + article.slug">
            <h3 class="excerpt__title">{{ article.title }}</h3>
            <p class="excerpt__text">{{ article.excerpt }}</p>
          </router-link>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.blog__header {
  margin-left: calc(8.33% * 1);
  margin-right: calc(8.33% * 2);
  margin-bottom: calc(var(--base) * 8);
}

.blog__content {
  margin-left: calc(8.33% * 1);
  margin-right: calc(8.33% * 5);
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
