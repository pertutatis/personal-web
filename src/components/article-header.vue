<script setup lang="ts">
import { defineProps, defineAsyncComponent, computed } from "vue";
import articleHeaderContent from "./article-header-content.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
  },
  date: {
    type: String,
  },
  serie: {
    type: Object || undefined,
  },
});

const componentMap: Record<string, any> = {
  "cultura-distribuida-0-fundamentos-para-equipos-que-no-comparten-oficina": defineAsyncComponent(
    () => import("./headers/cultura-distribuida.vue")
  ),
  "empezando-a-gestionar-un-equipo-de-alto-rendimiento": defineAsyncComponent(
    () => import("./headers/gestionando.vue")
  ),
  "career-conversations": defineAsyncComponent(
    () => import("./headers/career-conversations.vue")
  ),
};

const defaultComponent = defineAsyncComponent(() => import("./headers/default.vue"));

const dynamicComponent = computed(() => componentMap[props.slug] || defaultComponent);
</script>

<template>
  <component :is="dynamicComponent" v-if="dynamicComponent">
    <article-header-content
      :title="props.title"
      :excerpt="props.excerpt"
      :date="props.date"
      :serieName="props.serie?.title"
    />
  </component>
</template>
