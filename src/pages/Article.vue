
<script setup lang="ts">
import Header from '../components/header.vue'
</script>

<template>
  <Header />

  <section class="section blog">
    <div class=" section__wrapper">
      <header class="blog__header">
        <h1>Esto es un post</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut ultrices urna, vel aliquam neque. Nam condimentum leo risus, nec semper urna cursus sed. Etiam massa lorem, lobortis ut vehicula ut, viverra ut nulla. Sed bibendum mi non dictum laoreet. Nulla feugiat odio et consectetur tristique.</p>
        <p>Pellentesque posuere sed sapien ac dapibus. Suspendisse scelerisque aliquet semper. Maecenas commodo auctor massa, ac vestibulum ligula tincidunt eu.</p>
      </header>
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
</style>
