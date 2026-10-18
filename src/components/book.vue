<script setup lang="ts">
import { computed } from "vue";
import type Book from "../module/domain/Book";
import { getLinkDomain } from "../module/presentation/linkPresentation";

const props = defineProps<{ book: Book }>();

const bookLinkDomain = computed(() => getLinkDomain(props.book.url));
</script>

<template>
  <div class="book">
    <img
      class="book__image"
      :src="'/imgs/' + props.book.image + '.webp'"
      :alt="props.book.title"
      loading="lazy"
      decoding="async"
    />
    <div class="book__content">
      <h3 class="book__title">{{ props.book.title }}</h3>
      <p class="book__description">{{ props.book.description }}</p>
      <a
        v-if="props.book.url"
        class="book__link"
        :href="props.book.url"
        target="_blank"
        rel="noopener"
        >Ver libro{{ bookLinkDomain ? " en " + bookLinkDomain : "" }} →</a
      >
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

/* Fixed width and natural height: as a flex item the cover was stretched to the text height */
.book__image {
  flex: 0 0 auto;
  align-self: flex-start;
  width: 150px;
  height: auto;
  margin: 0 auto calc(var(--base) * 2);
  border-radius: 4px;

  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: calc(var(--base) * 4);
    margin-bottom: 0;
  }
}

.book__link {
  font-family: var(--secondary-font);
  font-size: 0.9rem;
  text-decoration: none;
}

.book__title {
  margin-top: 0;
  font-size: 1.125rem;
  line-height: 1.3;
  margin-bottom: calc(var(--base) * 1);
}

</style>
