<template>
  <div class="article-header">
    <div class="article-header__container">
      <!-- Estrellas como aspiraciones del equipo -->
      <div class="stars">
        <div v-for="n in 9" :key="n" class="star"></div>
      </div>

      <!-- Nebulosas como ambiente de mentoring -->
      <div v-for="n in 3" :key="n" :class="`nebula${n}`"></div>

      <!-- Estación de mentoría orbitante -->
      <div class="mentoring-station">
        <div class="station-hub"></div>
        <div class="station-arms">
          <div v-for="n in 6" :key="n" class="arm"></div>
        </div>
      </div>

      <!-- Rayos de mentoring -->
      <div class="mentoring-beams">
        <div v-for="n in 4" :key="n" class="beam"></div>
      </div>

      <!-- Planetas como diferentes roles -->
      <div class="career-planets">
        <div class="career-planet planet-tech"></div>
        <div class="career-planet planet-lead"></div>
        <div class="career-planet planet-mgmt"></div>
      </div>

      <!-- Navegadores estelares -->
      <div class="stellar-navigators">
        <div v-for="n in 3" :key="n" class="navigator"></div>
      </div>

      <!-- Canales de comunicación cuánticos -->
      <div class="quantum-channels">
        <div v-for="n in 3" :key="n" :class="`quantum-line q-line${n}`"></div>
      </div>

      <!-- Partículas de inspiración -->
      <div class="inspiration-particles">
        <div v-for="n in 5" :key="n" class="inspiration-particle"></div>
      </div>

      <!-- Ondas de conversación -->
      <div class="conversation-waves">
        <div v-for="n in 3" :key="n" :class="`conv-wave wave-${n}`"></div>
      </div>

      <!-- Estrellas fugaces como momentos breakthrough -->
      <div class="shooting-stars">
        <div v-for="n in 2" :key="n" class="shooting-star"></div>
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

/* Estrellas como aspiraciones del equipo */
.stars {
  position: absolute;
  width: 100%;
  height: 100%;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: twinkle 4.5s infinite alternate;
}

.star:nth-child(1) {
  width: 3px;
  height: 3px;
  top: 16%;
  left: 14%;
  animation-delay: 0s;
}
.star:nth-child(2) {
  width: 4px;
  height: 4px;
  top: 26%;
  left: 78%;
  animation-delay: 1.1s;
}
.star:nth-child(3) {
  width: 5px;
  height: 5px;
  top: 46%;
  left: 24%;
  animation-delay: 2.2s;
}
.star:nth-child(4) {
  width: 3px;
  height: 3px;
  top: 66%;
  left: 88%;
  animation-delay: 0.6s;
}
.star:nth-child(5) {
  width: 4px;
  height: 4px;
  top: 12%;
  left: 56%;
  animation-delay: 1.7s;
}
.star:nth-child(6) {
  width: 3px;
  height: 3px;
  top: 56%;
  left: 8%;
  animation-delay: 2.9s;
}
.star:nth-child(7) {
  width: 4px;
  height: 4px;
  top: 76%;
  left: 48%;
  animation-delay: 0.4s;
}
.star:nth-child(8) {
  width: 5px;
  height: 5px;
  top: 36%;
  left: 42%;
  animation-delay: 2.5s;
}
.star:nth-child(9) {
  width: 3px;
  height: 3px;
  top: 82%;
  left: 72%;
  animation-delay: 1.3s;
}

@keyframes twinkle {
  0% {
    opacity: 0.3;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1.4);
  }
}

/* Nebulosas como ambiente de mentoring */
.nebula1 {
  position: absolute;
  width: 480px;
  height: 480px;
  background: radial-gradient(
    circle,
    rgba(138, 43, 226, 0.3) 0%,
    rgba(75, 0, 130, 0.2) 50%,
    transparent 100%
  );
  border-radius: 50%;
  top: -120px;
  right: -120px;
  animation: nebulaPulse 16s infinite ease-in-out;
}

.nebula2 {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(0, 191, 255, 0.25) 0%,
    rgba(30, 144, 255, 0.15) 50%,
    transparent 100%
  );
  border-radius: 50%;
  bottom: -80px;
  left: -80px;
  animation: nebulaPulse 12s infinite ease-in-out alternate;
}

.nebula3 {
  position: absolute;
  width: 320px;
  height: 320px;
  background: radial-gradient(
    circle,
    rgba(255, 159, 67, 0.2) 0%,
    rgba(255, 107, 107, 0.12) 45%,
    transparent 80%
  );
  border-radius: 50%;
  top: 45%;
  left: 70%;
  animation: nebulaPulse 14s infinite ease-in-out;
  animation-delay: -5s;
}

@keyframes nebulaPulse {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.25) rotate(90deg);
    opacity: 0.7;
  }
}

/* Estación de mentoría orbitante */
.mentoring-station {
  position: absolute;
  top: 20%;
  right: 10%;
  width: 80px;
  height: 80px;
  animation: stationOrbit 45s infinite linear;
}

.station-hub {
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #fdcb6e, #e17055);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 20px rgba(253, 203, 110, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.2);
}

.station-arms {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: armsRotate 20s infinite linear reverse;
}

.arm {
  position: absolute;
  width: 25px;
  height: 3px;
  background: linear-gradient(90deg, rgba(116, 185, 255, 0.8), rgba(162, 155, 254, 0.6));
  border-radius: 2px;
  top: 50%;
  left: 50%;
  transform-origin: left center;
  box-shadow: 0 0 6px rgba(116, 185, 255, 0.5);
}

.arm:nth-child(1) {
  transform: translate(-50%, -50%) rotate(0deg);
}
.arm:nth-child(2) {
  transform: translate(-50%, -50%) rotate(60deg);
}
.arm:nth-child(3) {
  transform: translate(-50%, -50%) rotate(120deg);
}
.arm:nth-child(4) {
  transform: translate(-50%, -50%) rotate(180deg);
}
.arm:nth-child(5) {
  transform: translate(-50%, -50%) rotate(240deg);
}
.arm:nth-child(6) {
  transform: translate(-50%, -50%) rotate(300deg);
}

@keyframes stationOrbit {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes armsRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Planetas como diferentes roles/especialidades */
.career-planets {
  position: absolute;
  width: 100%;
  height: 100%;
}

.career-planet {
  position: absolute;
  border-radius: 50%;
  animation: planetFloat 12s infinite ease-in-out;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
}

.planet-tech {
  width: 35px;
  height: 35px;
  background: linear-gradient(135deg, #74b9ff, #0984e3);
  top: 30%;
  left: 15%;
  box-shadow: 0 0 15px rgba(116, 185, 255, 0.5);
}

.planet-lead {
  width: 42px;
  height: 42px;
  background: linear-gradient(135deg, #a29bfe, #6c5ce7);
  bottom: 35%;
  left: 20%;
  animation-delay: -4s;
  box-shadow: 0 0 18px rgba(162, 155, 254, 0.5);
}

.planet-mgmt {
  width: 38px;
  height: 38px;
  background: linear-gradient(135deg, #fd79a8, #e84393);
  top: 60%;
  right: 25%;
  animation-delay: -8s;
  box-shadow: 0 0 16px rgba(253, 121, 168, 0.5);
}

@keyframes planetFloat {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }
  33% {
    transform: translateY(-15px) translateX(10px);
  }
  66% {
    transform: translateY(-5px) translateX(-8px);
  }
}

/* Navegadores estelares como equipo explorando */
.stellar-navigators {
  position: absolute;
  bottom: 28%;
  left: 8%;
  animation: navigatorMovement 22s infinite ease-in-out;
}

.navigator {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 18px solid #00cec9;
  position: absolute;
  filter: drop-shadow(0 0 8px rgba(0, 206, 201, 0.8));
}

.navigator::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 1px;
  background: linear-gradient(90deg, rgba(0, 206, 201, 0.8), transparent);
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
}

.navigator:nth-child(1) {
  transform: rotate(5deg);
  left: 0px;
  top: 0px;
}
.navigator:nth-child(2) {
  transform: rotate(-8deg);
  left: 25px;
  top: 12px;
  animation-delay: -3s;
}
.navigator:nth-child(3) {
  transform: rotate(12deg);
  left: 50px;
  top: -6px;
  animation-delay: -6s;
}

@keyframes navigatorMovement {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }
  33% {
    transform: translateY(-18px) translateX(30px);
  }
  66% {
    transform: translateY(-8px) translateX(60px);
  }
}

/* Rayos de mentoring desde la estación */
.mentoring-beams {
  position: absolute;
  top: 20%;
  right: 10%;
  width: 80px;
  height: 80px;
}

.beam {
  position: absolute;
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, rgba(253, 203, 110, 0.8), transparent);
  top: 50%;
  left: 50%;
  transform-origin: left center;
  animation: beamSweep 6s infinite ease-in-out;
}

.beam:nth-child(1) {
  transform: translate(-50%, -50%) rotate(30deg);
  animation-delay: 0s;
}
.beam:nth-child(2) {
  transform: translate(-50%, -50%) rotate(90deg);
  animation-delay: -1.5s;
}
.beam:nth-child(3) {
  transform: translate(-50%, -50%) rotate(150deg);
  animation-delay: -3s;
}
.beam:nth-child(4) {
  transform: translate(-50%, -50%) rotate(210deg);
  animation-delay: -4.5s;
}

@keyframes beamSweep {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

/* Canales de comunicación cuánticos */
.quantum-channels {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.6;
}

.quantum-line {
  position: absolute;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(138, 43, 226, 0.8),
    rgba(0, 191, 255, 0.6),
    transparent
  );
  animation: quantumFlow 10s infinite ease-in-out;
  border-radius: 1px;
}

.q-line1 {
  width: 150px;
  top: 35%;
  left: 15%;
  transform: rotate(25deg);
}

.q-line2 {
  width: 120px;
  bottom: 40%;
  right: 20%;
  transform: rotate(-40deg);
  animation-delay: -2.5s;
}

.q-line3 {
  width: 180px;
  top: 65%;
  left: 45%;
  transform: rotate(55deg);
  animation-delay: -5s;
}

@keyframes quantumFlow {
  0%,
  100% {
    opacity: 0;
    transform-origin: left;
    transform: scaleX(0) rotate(var(--rotation, 0deg));
  }
  50% {
    opacity: 1;
    transform: scaleX(1) rotate(var(--rotation, 0deg));
  }
}

.q-line1 {
  --rotation: 25deg;
}
.q-line2 {
  --rotation: -40deg;
}
.q-line3 {
  --rotation: 55deg;
}

/* Partículas de inspiración */
.inspiration-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.inspiration-particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(255, 159, 67, 0.8);
  border-radius: 50%;
  animation: inspire 16s infinite linear;
  box-shadow: 0 0 6px rgba(255, 159, 67, 0.6);
}

.inspiration-particle:nth-child(1) {
  left: 12%;
  animation-delay: 0s;
}
.inspiration-particle:nth-child(2) {
  left: 32%;
  animation-delay: -3s;
}
.inspiration-particle:nth-child(3) {
  left: 52%;
  animation-delay: -6s;
}
.inspiration-particle:nth-child(4) {
  left: 72%;
  animation-delay: -9s;
}
.inspiration-particle:nth-child(5) {
  left: 92%;
  animation-delay: -12s;
}

@keyframes inspire {
  0% {
    transform: translateY(100vh) scale(0) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translateY(-80px) scale(1.3) rotate(180deg);
    opacity: 0;
  }
}

/* Ondas de conversación */
.conversation-waves {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.conv-wave {
  position: absolute;
  border: 1px solid rgba(0, 191, 255, 0.3);
  border-radius: 50%;
  animation: conversationExpand 8s infinite ease-out;
}

.wave-1 {
  width: 50px;
  height: 50px;
  top: 25%;
  left: 20%;
  animation-delay: 0s;
}

.wave-2 {
  width: 60px;
  height: 60px;
  bottom: 30%;
  right: 30%;
  animation-delay: -2.7s;
}

.wave-3 {
  width: 45px;
  height: 45px;
  top: 70%;
  left: 60%;
  animation-delay: -5.4s;
}

@keyframes conversationExpand {
  0% {
    transform: scale(0.3);
    opacity: 1;
  }
  100% {
    transform: scale(6);
    opacity: 0;
  }
}

/* Estrellas fugaces como momentos de breakthrough */
.shooting-stars {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.shooting-star {
  position: absolute;
  width: 2px;
  height: 35px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1),
    rgba(138, 43, 226, 0.6),
    transparent
  );
  animation: shoot 18s infinite linear;
  border-radius: 1px;
}

.shooting-star::before {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  background: radial-gradient(circle, rgba(255, 255, 255, 1), rgba(138, 43, 226, 0.8));
  border-radius: 50%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

.shooting-star:nth-child(1) {
  left: 40%;
  animation-delay: 0s;
  animation-duration: 15s;
}
.shooting-star:nth-child(2) {
  left: 80%;
  animation-delay: -7s;
  animation-duration: 20s;
}

@keyframes shoot {
  0% {
    transform: translateY(-120px) translateX(80px) rotate(30deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) translateX(-120px) rotate(30deg);
    opacity: 0;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .mentoring-station {
    width: 60px;
    height: 60px;
    top: 18%;
    right: 8%;
  }

  .station-hub {
    width: 35px;
    height: 35px;
  }

  .arm {
    width: 20px;
    height: 2px;
  }
}
</style>
