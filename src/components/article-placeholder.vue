<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  count: {
    type: Number
  },
  long: {
    type: Number,
    default: 1
  }
})
</script>

<template>
  <div class="blog__loader">
    <div class="placeholder__list">
      <div class="placeholder__article" v-for="n in count" :key="n">   
        <div class="placeholder__title placeholder--shimmer"></div>
        <div class="placeholder__text placeholder--shimmer" v-for="m in long" :key="m"></div>
        <div class="placeholder__text placeholder__text--short placeholder--shimmer"></div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>

.blog__loader {
  text-align: center;
  padding: 2rem 0;
  font-size: 1.2rem;
  color: var(--accent-color);
  opacity: 0.2;
}

.placeholder__list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.placeholder__article {
  border-radius: 8px;
  padding: 1.5rem 1rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
}

.placeholder__title {
  width: 60%;
  height: 2.5rem;
  margin-bottom: 3rem;
  border-radius: 4px;
  background: var(--title-color);
}

.placeholder__text {
  width: 90%;
  height: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  background: var(--text-color);
}

.placeholder__text--short {
  width: 50%;
  margin-bottom: 0;
}

.placeholder--shimmer {
  position: relative;
  overflow: hidden;
}
.placeholder--shimmer::after {
  content: "";
  position: absolute;
  top: 0;
  left: -150px;
  width: 150px;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: shimmer 1.2s infinite;
}

@keyframes shimmer {
  100% {
    left: 100%;
  }
}
</style>
