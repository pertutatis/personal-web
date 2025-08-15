<template>
  <div class="article-header">
    <div class="article-header__container">
      <!-- Estrellas como destinos profesionales -->
      <div class="stars">
        <div v-for="n in 10" :key="n" class="star"></div>
      </div>

      <!-- Nebulosas como ambiente de crecimiento -->
      <div v-for="n in 3" :key="n" :class="`nebula nebula${n}`"></div>

      <!-- Constelaciones que conectan sueños con realidad -->
      <div class="constellation">
        <div v-for="n in 5" :key="n" :class="`constellation-line line${n}`"></div>
      </div>

      <!-- Observatorio espacial como hub de conversaciones -->
      <div class="observatory">
        <div class="observatory-base"></div>
        <div class="telescope"></div>
      </div>

      <!-- Ondas de comunicación desde el observatorio -->
      <div class="communication-pulses">
        <div v-for="n in 3" :key="n" :class="`pulse pulse${n}`"></div>
      </div>

      <!-- Explorador espacial navegando -->
      <div class="explorer">
        <div class="explorer-ship"></div>
        <div class="explorer-trail"></div>
      </div>

      <!-- Meteoros como oportunidades -->
      <div class="meteors">
        <div v-for="n in 3" :key="n" class="meteor"></div>
      </div>

      <!-- Partículas de crecimiento profesional -->
      <div class="growth-particles">
        <div v-for="n in 5" :key="n" class="growth-particle"></div>
      </div>

      <!-- Contenido principal -->
      <slot />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.article-header {
  /* overflow: hidden; */
  height: 100vh;
  position: relative;
}

.article-header__container {
  width: 100%;
  height: 100vh;
  position: relative;
  /* overflow: hidden; */
}

/* Estrellas como destinos profesionales */
.stars {
  position: absolute;
  width: 100%;
  height: 100%;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: twinkle 4s infinite alternate;
}

.star:nth-child(1) {
  width: 5px;
  height: 5px;
  top: 18%;
  left: 12%;
  animation-delay: 0s;
}
.star:nth-child(2) {
  width: 3px;
  height: 3px;
  top: 28%;
  left: 82%;
  animation-delay: 1s;
}
.star:nth-child(3) {
  width: 4px;
  height: 4px;
  top: 48%;
  left: 22%;
  animation-delay: 2s;
}
.star:nth-child(4) {
  width: 3px;
  height: 3px;
  top: 72%;
  left: 88%;
  animation-delay: 0.5s;
}
.star:nth-child(5) {
  width: 5px;
  height: 5px;
  top: 16%;
  left: 68%;
  animation-delay: 1.5s;
}
.star:nth-child(6) {
  width: 4px;
  height: 4px;
  top: 58%;
  left: 8%;
  animation-delay: 2.5s;
}
.star:nth-child(7) {
  width: 3px;
  height: 3px;
  top: 78%;
  left: 58%;
  animation-delay: 0.8s;
}
.star:nth-child(8) {
  width: 4px;
  height: 4px;
  top: 22%;
  left: 42%;
  animation-delay: 1.8s;
}
.star:nth-child(9) {
  width: 3px;
  height: 3px;
  top: 42%;
  left: 78%;
  animation-delay: 3s;
}
.star:nth-child(10) {
  width: 4px;
  height: 4px;
  top: 32%;
  left: 6%;
  animation-delay: 2.2s;
}

@keyframes twinkle {
  0% {
    opacity: 0.4;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1.4);
  }
}

/* Nebulosas como ambiente de crecimiento */
.nebula1 {
  position: absolute;
  width: 550px;
  height: 550px;
  background: radial-gradient(
    circle,
    rgba(255, 107, 107, 0.2) 0%,
    rgba(238, 90, 82, 0.15) 30%,
    transparent 70%
  );
  border-radius: 50%;
  top: -180px;
  right: -180px;
  animation: nebulaPulse 18s infinite ease-in-out;
}

.nebula2 {
  position: absolute;
  width: 450px;
  height: 450px;
  background: radial-gradient(
    circle,
    rgba(78, 205, 196, 0.18) 0%,
    rgba(68, 160, 141, 0.12) 40%,
    transparent 80%
  );
  border-radius: 50%;
  bottom: -120px;
  left: -120px;
  animation: nebulaPulse 22s infinite ease-in-out alternate;
}

.nebula3 {
  position: absolute;
  width: 380px;
  height: 380px;
  background: radial-gradient(
    circle,
    rgba(116, 185, 255, 0.15) 0%,
    rgba(162, 155, 254, 0.1) 50%,
    transparent 80%
  );
  border-radius: 50%;
  top: 35%;
  left: 55%;
  animation: nebulaPulse 16s infinite ease-in-out;
  animation-delay: -6s;
}

@keyframes nebulaPulse {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.3) rotate(120deg);
    opacity: 0.7;
  }
}

/* Constelaciones que conectan sueños con realidad */
.constellation {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.6;
}

.constellation-line {
  position: absolute;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 107, 107, 0.8),
    rgba(116, 185, 255, 0.6),
    transparent
  );
  animation: conversationFlow 6s infinite ease-in-out;
}

.line1 {
  width: 180px;
  top: 20%;
  left: 12%;
  transform: rotate(35deg);
}

.line2 {
  width: 160px;
  top: 30%;
  right: 18%;
  transform: rotate(-25deg);
  animation-delay: -1.5s;
}

.line3 {
  width: 140px;
  bottom: 28%;
  left: 20%;
  transform: rotate(50deg);
  animation-delay: -3s;
}

.line4 {
  width: 170px;
  top: 50%;
  right: 30%;
  transform: rotate(-10deg);
  animation-delay: -4.5s;
}

.line5 {
  width: 120px;
  top: 65%;
  left: 70%;
  transform: rotate(70deg);
  animation-delay: -0.8s;
}

@keyframes conversationFlow {
  0%,
  100% {
    opacity: 0;
    transform-origin: left;
    transform: scaleX(0) rotate(var(--rotation, 0deg));
  }
  50% {
    opacity: 0.9;
    transform: scaleX(1) rotate(var(--rotation, 0deg));
  }
}

.line1 {
  --rotation: 35deg;
}
.line2 {
  --rotation: -25deg;
}
.line3 {
  --rotation: 50deg;
}
.line4 {
  --rotation: -10deg;
}
.line5 {
  --rotation: 70deg;
}

/* Observatorio espacial como hub de conversaciones */
.observatory {
  position: absolute;
  top: 15%;
  right: 8%;
  width: 100px;
  height: 100px;
  animation: observatoryRotate 40s infinite linear;
}

.observatory-base {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #74b9ff, #0984e3);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 25px rgba(116, 185, 255, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.2);
}

.telescope {
  position: absolute;
  width: 40px;
  height: 6px;
  background: linear-gradient(90deg, #fdcb6e, #e17055);
  border-radius: 3px;
  top: 50%;
  left: 75%;
  transform: translateY(-50%);
  box-shadow: 0 0 8px rgba(253, 203, 110, 0.5);
  animation: telescopeScan 8s infinite ease-in-out;
}

.telescope::after {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(116, 185, 255, 0.4));
  border-radius: 50%;
  right: -4px;
  top: 50%;
  transform: translateY(-50%);
}

@keyframes observatoryRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes telescopeScan {
  0%,
  100% {
    transform: translateY(-50%) rotate(0deg);
  }
  50% {
    transform: translateY(-50%) rotate(30deg);
  }
}

/* Explorador espacial como team member navegando */
.explorer {
  position: absolute;
  bottom: 20%;
  left: 8%;
  animation: explorerJourney 25s infinite ease-in-out;
}

.explorer-ship {
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 28px solid #00cec9;
  position: relative;
  filter: drop-shadow(0 0 12px rgba(0, 206, 201, 0.8));
}

.explorer-ship::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 10px;
  background: rgba(253, 203, 110, 0.8);
  left: 50%;
  bottom: -35px;
  transform: translateX(-50%);
  border-radius: 2px;
  box-shadow: 0 0 6px rgba(253, 203, 110, 0.6);
}

.explorer-trail {
  position: absolute;
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, rgba(0, 206, 201, 0.8), transparent);
  bottom: 12px;
  left: -35px;
  animation: trailGlow 3s infinite ease-in-out;
}

@keyframes explorerJourney {
  0%,
  100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-30px) translateX(50px) rotate(10deg);
  }
  50% {
    transform: translateY(-10px) translateX(100px) rotate(-5deg);
  }
  75% {
    transform: translateY(-40px) translateX(75px) rotate(15deg);
  }
}

@keyframes trailGlow {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
}

/* Meteoros como oportunidades */
.meteors {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.meteor {
  position: absolute;
  width: 2px;
  height: 30px;
  background: linear-gradient(0deg, rgba(255, 107, 107, 1), transparent);
  animation: meteorFall 12s infinite linear;
}

.meteor:nth-child(1) {
  left: 25%;
  animation-delay: 0s;
  animation-duration: 10s;
}
.meteor:nth-child(2) {
  left: 55%;
  animation-delay: -4s;
  animation-duration: 14s;
}
.meteor:nth-child(3) {
  left: 75%;
  animation-delay: -8s;
  animation-duration: 11s;
}

@keyframes meteorFall {
  0% {
    transform: translateY(-100px) translateX(0px) rotate(20deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) translateX(-80px) rotate(0deg);
    opacity: 0;
  }
}

/* Partículas de crecimiento profesional */
.growth-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.growth-particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(162, 155, 254, 0.8);
  border-radius: 50%;
  animation: growthFloat 18s infinite linear;
  box-shadow: 0 0 6px rgba(162, 155, 254, 0.6);
}

.growth-particle:nth-child(1) {
  left: 15%;
  animation-delay: 0s;
}
.growth-particle:nth-child(2) {
  left: 35%;
  animation-delay: -4s;
}
.growth-particle:nth-child(3) {
  left: 55%;
  animation-delay: -8s;
}
.growth-particle:nth-child(4) {
  left: 75%;
  animation-delay: -12s;
}
.growth-particle:nth-child(5) {
  left: 85%;
  animation-delay: -16s;
}

@keyframes growthFloat {
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translateY(-80px) scale(1.2);
    opacity: 0;
  }
}

/* Ondas de comunicación desde el observatorio */
.communication-pulses {
  position: absolute;
  top: 15%;
  right: 8%;
  width: 100px;
  height: 100px;
}

.pulse {
  position: absolute;
  border: 1px solid rgba(116, 185, 255, 0.4);
  border-radius: 50%;
  animation: pulseExpand 4s infinite ease-out;
}

.pulse1 {
  width: 60px;
  height: 60px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 0s;
}

.pulse2 {
  width: 60px;
  height: 60px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -1.3s;
}

.pulse3 {
  width: 60px;
  height: 60px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -2.6s;
}

@keyframes pulseExpand {
  0% {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .observatory {
    width: 70px;
    height: 70px;
    top: 12%;
    right: 5%;
  }

  .observatory-base {
    width: 35px;
    height: 35px;
  }

  .telescope {
    width: 28px;
    height: 4px;
  }
}
</style>
