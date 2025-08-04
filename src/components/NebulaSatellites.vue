<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  // Parallax y animaciones para nebulosas
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const nebula1 = document.querySelector(".nebula--1") as HTMLElement | null;
    const nebula2 = document.querySelector(".nebula--2") as HTMLElement | null;
    if (nebula1 && nebula2) {
      nebula1.style.transform = `translateY(${scrolled * 0.5}px) rotate(${
        scrolled * 0.1
      }deg)`;
      nebula2.style.transform = `translateY(${-scrolled * 0.3}px) rotate(${
        -scrolled * 0.1
      }deg)`;
    }
  });
});
</script>

<template>
  <div v-for="n in 2" :key="n" :class="`nebula nebula--${n}`"></div>
  <div class="satellites">
    <div v-for="n in 3" :key="n" class="satellite"></div>
  </div>
</template>

<style scoped lang="postcss">
.nebula {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
}
.nebula--1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(116, 185, 255, 0.1) 0%,
    rgba(162, 155, 254, 0.05) 30%,
    transparent 70%
  );
  top: -200px;
  right: -200px;
  animation: nebulaPulse 20s infinite ease-in-out;
}
.nebula--2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(253, 121, 168, 0.08) 0%,
    rgba(255, 127, 71, 0.04) 40%,
    transparent 80%
  );
  bottom: -150px;
  left: -150px;
  animation: nebulaPulse 25s infinite ease-in-out alternate;
}
@keyframes nebulaPulse {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.4) rotate(90deg);
    opacity: 0.6;
  }
}
.satellites {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;

  @media (min-width: 768px) {
    display: unset;
  }
}

.satellite {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(
    135deg,
    var(--secondary-accent-1-color),
    var(--secondary-accent-3-color)
  );
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(116, 185, 255, 0.8);
  animation: orbit 40s infinite linear;
}
.satellite::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(116, 185, 255, 0.6), transparent);
  top: 50%;
  left: -6px;
  transform: translateY(-50%);
}
.satellite:nth-child(1) {
  top: 20%;
  left: 15%;
  animation-duration: 35s;
}
.satellite:nth-child(2) {
  top: 60%;
  right: 20%;
  animation-duration: 45s;
  animation-delay: -15s;
}
.satellite:nth-child(3) {
  bottom: 30%;
  left: 25%;
  animation-duration: 38s;
  animation-delay: -25s;
}
@keyframes orbit {
  0% {
    transform: rotate(0deg) translateX(40px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(40px) rotate(-360deg);
  }
}
</style>
