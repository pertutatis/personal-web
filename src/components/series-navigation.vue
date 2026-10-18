<script setup lang="ts">
import type { SeriesLink } from "../module/application/getArticlePage";

const props = defineProps<{
  serieTitle: string;
  previous: SeriesLink | undefined;
  next: SeriesLink | undefined;
}>();
</script>

<template>
  <nav class="series-navigation" aria-label="Series navigation">
    <p class="series-navigation__label">More from the series · {{ props.serieTitle }}</p>
    <div class="series-navigation__links">
      <router-link
        v-if="props.previous"
        class="series-navigation__link series-navigation__link--previous"
        :to="'/blog/' + props.previous.slug + '/'"
      >
        <span class="series-navigation__direction">← Previous</span>
        <span class="series-navigation__title">{{ props.previous.title }}</span>
      </router-link>
      <router-link
        v-if="props.next"
        class="series-navigation__link series-navigation__link--next"
        :to="'/blog/' + props.next.slug + '/'"
      >
        <span class="series-navigation__direction">Next →</span>
        <span class="series-navigation__title">{{ props.next.title }}</span>
      </router-link>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
.series-navigation {
  margin: calc(var(--base) * 8) 0;
}

.series-navigation__label {
  font-family: var(--secondary-font);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-label);
  margin-bottom: calc(var(--base) * 2);
  color: var(--text-muted);
}

.series-navigation__links {
  display: grid;
  gap: calc(var(--base) * 2);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
}

.series-navigation__link {
  display: block;
  padding: calc(var(--base) * 3);
  border: 1px solid var(--accent-color-03);
  border-radius: var(--radius-md);
  background: var(--accent-color-01);
  color: var(--text-color);
  text-decoration: none;
  transition: border-color var(--main-transition);

  &:hover {
    border-color: var(--accent-color);
    color: var(--text-color);
  }
}

.series-navigation__link--next {
  text-align: right;
  grid-column: 2;

  @media (max-width: 767px) {
    grid-column: auto;
  }
}

.series-navigation__direction {
  display: block;
  font-family: var(--secondary-font);
  font-size: var(--text-xs);
  color: var(--accent-text-color);
  margin-bottom: var(--base);
}

.series-navigation__title {
  font-family: var(--primary-font);
  font-weight: var(--bold);
}
</style>
