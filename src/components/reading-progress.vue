<script setup lang="ts">
const props = defineProps<{ progress: number }>();
</script>

<template>
  <div class="reading-progress" aria-hidden="true">
    <div class="reading-progress__bar" :style="{ transform: `scaleX(${props.progress})` }" />
  </div>
</template>

<style lang="postcss" scoped>
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: 101;
  pointer-events: none;
}

.reading-progress__bar {
  width: 100%;
  height: 100%;
  background: var(--accent-color);
  transform-origin: left center;
}
</style>
