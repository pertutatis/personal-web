<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{ period: string; title: string; company: string }>();
</script>
<template>
  <div class="timeline__item">
    <div class="timeline__node"></div>
    <div class="timeline__content job">
      <div class="job__period">{{ props.period }}</div>
      <h3 class="job__title">{{ props.title }}</h3>
      <p class="job__company">{{ props.company }}</p>
      <div class="job__description">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.timeline__item {
  position: relative;
  margin-bottom: 4rem;
  opacity: 1;
  animation: slideIn 0.8s ease-out forwards;
}

.timeline__item:nth-child(odd) {
  animation-delay: 0.2s;
}

.timeline__item:nth-child(even) {
  animation-delay: 0.4s;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.timeline__content {
  width: 45%;
  padding: 1rem;
  background: rgba(13, 27, 42, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(116, 185, 255, 0.2);
  border-radius: 20px;
  position: relative;
  transition: all 0.3s ease;
}

.timeline__content:hover {
  box-shadow: 0 20px 40px rgba(116, 185, 255, 0.2);
  border-color: var(--secondary-accent-1-color);
}

.timeline__item:nth-child(odd) .timeline__content {
  margin-left: 0;
}

.timeline__item:nth-child(even) .timeline__content {
  margin-left: 55%;
}

/* Nodo espacial en el timeline */
.timeline__node {
  position: absolute;
  left: 50%;
  top: 50px;
  width: 20px;
  height: 20px;
  background: linear-gradient(
    135deg,
    var(--secondary-accent-1-color),
    var(--secondary-accent-3-color)
  );
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 10;
  animation: nodePulse 2s infinite;
  box-shadow: 0 0 20px rgba(116, 185, 255, 0.8);
}

@keyframes nodePulse {
  0%,
  100% {
    transform: translateX(-50%) scale(1);
  }
  50% {
    transform: translateX(-50%) scale(1.3);
  }
}

.timeline__node::before {
  content: "";
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--secondary-accent-1-color),
    var(--secondary-accent-3-color)
  );
  z-index: -1;
  filter: blur(10px);
  opacity: 0.5;
}

/* Conectores hacia el nodo */
.timeline__content::before {
  content: "";
  position: absolute;
  top: 60px;
  width: 54px;
  height: 2px;
  background: linear-gradient(
    90deg,
    var(--secondary-accent-1-color),
    var(--secondary-accent-3-color)
  );
  transform: translateY(-50%);
}

.timeline__item:nth-child(odd) .timeline__content::before {
  right: -55px;
}

.timeline__item:nth-child(even) .timeline__content::before {
  left: -55px;
}

/* Contenido de cada experiencia */
.job__period {
  display: inline-block;
  background: linear-gradient(
    135deg,
    var(--secondary-accent-5-color),
    var(--secondary-accent-7-color)
  );
  color: var(--dark-color);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.job__title {
  font-family: var(--primary-font);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--light-color);
  margin-bottom: 0.5rem;
}

.job__company {
  font-size: 1.1rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
  font-weight: 500;
}

.job__description {
  color: var(--light-color);
  line-height: 1.7;
  opacity: 0.9;
}

.job__description ul {
  margin-top: 1rem;
  padding-left: 1.5rem;
}

.job__description li {
  margin-bottom: 0.8rem;
  position: relative;
}

.job__description li::marker {
  color: var(--secondary-accent-5-color);
}

@media (max-width: 1200px) {
  .timeline__node {
    left: 1rem;
  }

  .timeline__content {
    width: calc(100% - 4rem);
    margin-left: 4rem !important;
  }

  .timeline__content::before {
    left: -55px !important;
    right: auto !important;
  }
}

@media (max-width: 768px) {
  .timeline__content {
    padding: 1.5rem;
  }

  .job__title {
    font-size: 1.2rem;
  }
}
</style>
