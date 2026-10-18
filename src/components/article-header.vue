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
  readingMinutes: {
    type: Number,
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
  <!-- Reserves the full screen height before the lazy header chunk and its styles arrive -->
  <div class="article-header-frame">
    <component :is="dynamicComponent" v-if="dynamicComponent">
      <article-header-content
        :title="props.title"
        :excerpt="props.excerpt"
        :date="props.date"
        :serieName="props.serie?.title"
        :readingMinutes="props.readingMinutes"
      />
      <a class="read-cue" href="#article-start">
        Read <span class="read-cue__arrow" aria-hidden="true">↓</span>
      </a>
    </component>
  </div>
</template>

<style lang="postcss" scoped>
.article-header-frame {
  min-height: 100vh;
  min-height: 100svh;
}

.read-cue {
  position: absolute;
  /* the 100vh header starts below the fixed header spacer (base * 9) */
  bottom: calc(var(--base) * 13);
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  font-family: var(--secondary-font);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-label);
  color: var(--text-color);
  text-decoration: none;
  opacity: 0.8;

  /* on phones the centred header text can reach the bottom; scrolling is the natural gesture there */
  @media (max-width: 767px) {
    display: none;
  }

  &:hover {
    color: var(--accent-text-color);
    opacity: 1;
  }
}

.read-cue__arrow {
  display: inline-block;
  animation: read-cue-bounce 2s ease-in-out infinite;
}

@keyframes read-cue-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(4px);
  }
}
</style>
