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
  "0d02f895-b160-4e9b-86d0-421d4c06c9ff": defineAsyncComponent(
    //Cultura Distribuida
    () => import("./headers/cultura-distribuida.vue")
  ),
  "ffb22877-fb2f-4add-91e8-b70098ae483c": defineAsyncComponent(
    // Hiring en Ingeniería: Del 'Who' al Equipo de Alto Rendimiento
    () => import("./headers/mars.vue")
  ),
  "career-conversations": defineAsyncComponent(
    () => import("./headers/career-conversations.vue")
  ),
};

const defaultComponent = defineAsyncComponent(() => import("./headers/default.vue"));

const dynamicComponent = computed(
  () => componentMap[props.serie?.id] || defaultComponent
);
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
