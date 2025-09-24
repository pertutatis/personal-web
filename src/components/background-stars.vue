<script setup lang="ts">
import { onMounted } from "vue";

function createStars() {
  const starsContainer = document.getElementById("stars");
  const numberOfStars = 100;

  if (!starsContainer) {
    console.error("Stars container not found");
    return;
  }

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.className = "sky__star";

    // Random size
    const size = Math.random() * 3 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";

    // Random position
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    // Random animation delay
    star.style.animationDelay = Math.random() * 2 + "s";

    // Some stars move
    if (Math.random() > 0.8) {
      star.classList.add("sky__star--shooting");
      star.style.animationDelay = Math.random() * 20 + "s";
    }

    starsContainer.appendChild(star);
  }
}
onMounted(() => {
  createStars();
});
</script>

<template>
  <!-- Animated stars background -->
  <div class="sky" id="stars" />
</template>

<style lang="postcss">
.sky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  transition: all 0.3s ease;
}

.sky__star {
  position: absolute;
  background: var(--stars-colors);
  border-radius: 50%;
  animation: twinkle 2s infinite;
  transition: all 0.3s ease;
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

.sky__star--shooting {
  animation: shooting-star 20s linear infinite;
  transition: all 0.3s ease;
}

@keyframes shooting-star {
  0% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(100vw);
  }
}
</style>
