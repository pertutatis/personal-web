<script setup lang="ts">
import { defineProps, computed } from "vue";
import formatArticleDate from "../module/presentation/formatArticleDate";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
  },
  date: {
    type: String,
  },
  serieName: {
    type: String,
  },
  readingMinutes: {
    type: Number,
  },
});

const formattedDate = computed(() => formatArticleDate(props.date));
</script>

<template>
  <div class="content">
    <h1 class="title">{{ props.title }}</h1>
    <p class="subtitle">
      {{ props.serieName ? props.serieName + " · " : "" }}
      {{ formattedDate }}
      {{ props.readingMinutes ? " · " + props.readingMinutes + " min de lectura" : "" }}
    </p>
    <p class="description">
      {{ props.excerpt }}
    </p>
  </div>
</template>

<style lang="postcss" scoped>
.content {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  text-align: center;
  z-index: 10;
  color: var(--text-color);
  padding: 30px 20px;

  @media (min-width: 768px) {
    padding: 50px;
  }

  @media (min-width: 1024px) {
    max-width: 1000px;
    padding: 50px 0;
    left: 25%;
    transform: translate(-16.6667%, -50%);
  }

  @media (min-width: 1200px) {
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.title {
  font-weight: var(--bold);
  font-size: var(--text-display);
  margin-bottom: 20px;
  background: var(--title);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: var(--title-shadow);
  animation: titleGlow 5s infinite alternate;
  line-height: 1.1;
}

.subtitle {
  font-family: var(--secondary-font);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-label);
  margin-bottom: 30px;
  opacity: 0.9;

  @media (min-width: 768px) {
    font-size: var(--text-base);
  }
}

/* The excerpt keeps the light monospaced voice used in the blog listing */
.description {
  font-family: var(--secondary-font);
  font-weight: var(--light);
  font-size: var(--text-sm);
  line-height: 1.8;
  opacity: 0.85;
  max-width: 850px;
  margin: 0 auto 40px;

  @media (min-width: 768px) {
    font-size: var(--text-base);
  }
}

@keyframes titleGlow {
  0% {
    filter: brightness(1) saturate(1);
  }
  100% {
    filter: brightness(1.4) saturate(1.3);
  }
}
</style>
