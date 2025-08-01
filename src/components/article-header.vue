<script setup lang="ts">
import { defineProps, defineAsyncComponent, computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  excerpt: {
    type: String
  }
})

const componentMap: Record<string, any> = {
  'cultura-distribuida-lo-que-no-se-ve-pero-sostiene-todo': defineAsyncComponent(() => import('./headers/cultura-distribuida.vue')),
  'empezando-a-gestionar-un-equipo-de-alto-rendimiento': defineAsyncComponent(() => import('./headers/gestionando.vue')),
  'career-conversations': defineAsyncComponent(() => import('./headers/career-conversations.vue')),
}

const defaultComponent = defineAsyncComponent(() => import('./headers/default.vue'))

const dynamicComponent = computed(() => componentMap[props.slug] || defaultComponent)
</script>

<template>
  <component :is="dynamicComponent" v-if="dynamicComponent" :title="props.title" :excerpt="props.excerpt" />
</template>

<style lang="postcss" scoped>
.title {         
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
  /* animation: glow 3s infinite alternate; */
}
</style>
