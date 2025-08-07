<script setup lang="ts">
import { defineProps, computed } from "vue";

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
});

const formattedDate = computed(() => {
  if (!props.date) return "";
  const dateObj = new Date(props.date);
  return dateObj.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});
</script>

<template>
  <div class="content">
    <h1 class="title">{{ props.title }}</h1>
    <h2 class="subtitle">{{ formattedDate }}</h2>
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
  color: white;
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
  font-weight: bold;
  font-size: 2.4rem;
  margin-bottom: 20px;
  background: var(--title);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: var(--title-shadow);
  animation: titleGlow 5s infinite alternate;
  line-height: 1.1;

  @media (min-width: 768px) {
    font-size: 3.2rem;
  }
}

.subtitle {
  font-size: 1.1rem;
  margin-bottom: 30px;
  opacity: 0.9;
  font-weight: 300;
  letter-spacing: 2px;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
}

.description {
  font-size: 1rem;
  line-height: 1.8;
  opacity: 0.85;
  max-width: 850px;
  margin: 0 auto 40px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
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
