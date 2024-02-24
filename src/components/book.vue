<script setup lang="ts">
const props = defineProps({
  book: Object,
})
</script>

<template>
  <div class="book" v-if="book">
    <img class="book__image" :src="book.image" :alt="book.title">
    <div class="book__content">
      <h5 class="book__title">{{ book.title }}</h5>
      <p class="book__description">{{ book.description }}</p>
      <!-- <p><strong>Te lo recomiendo</strong> o no, quien sabe</p> -->
      <!-- <a href="">Comprar libro</a> -->
    </div>
  </div>
  
</template>

<style lang="postcss" scoped>
.book {
  display: flex;
  flex-wrap: wrap;
  margin: calc(var(--base) * 4) 0;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
}

.book__image {
  width: 20%;
  min-width: 150px;
  margin: 0 auto calc(var(--base) * 2);
  
  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: calc(var(--base) * 4);
    margin-bottom: 0;
  }
}

.book__title {
  margin-bottom: calc(var(--base) * 1);
}

</style>
