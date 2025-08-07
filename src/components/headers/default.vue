<template>
  <div class="article-header">
    <div class="article-header__container">
      <!-- Estrellas como nodos -->
      <div class="stars">
        <div v-for="n in 10" :key="n" class="star"></div>
      </div>

      <!-- Nebulosas como cultura invisible -->
      <div class="nebula"></div>
      <div class="nebula2"></div>
      <div class="nebula3"></div>

      <!-- Red de conexiones distribuidas -->
      <div class="network">
        <div v-for="n in 5" :key="n" :class="'connection connection' + n"></div>
      </div>

      <!-- Satélites distribuidos -->
      <div class="satellites">
        <div v-for="n in 4" :key="n" class="satellite"></div>
      </div>

      <!-- Ondas de comunicación -->
      <div class="communication-waves">
        <div v-for="n in 3" :key="n" :class="'wave wave' + n"></div>
      </div>

      <!-- Flujo de datos -->
      <div class="data-stream">
        <div v-for="n in 6" :key="n" class="data-bit"></div>
      </div>

      <!-- Hologramas de colaboración -->
      <div v-for="n in 3" :key="n" :class="'hologram hologram' + n"></div>

      <!-- Contenido principal -->
      <!-- <h2 class="subtitle">Lo que no se ve, pero sostiene todo</h2> -->
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

/* Estrellas como nodos distribuidos */
.stars {
  position: absolute;
  width: 100%;
  height: 100%;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: twinkle 5s infinite alternate;
}

.star:nth-child(1) {
  width: 4px;
  height: 4px;
  top: 20%;
  left: 15%;
  animation-delay: 0s;
}
.star:nth-child(2) {
  width: 3px;
  height: 3px;
  top: 30%;
  left: 80%;
  animation-delay: 1s;
}
.star:nth-child(3) {
  width: 5px;
  height: 5px;
  top: 50%;
  left: 25%;
  animation-delay: 2s;
}
.star:nth-child(4) {
  width: 3px;
  height: 3px;
  top: 70%;
  left: 90%;
  animation-delay: 0.5s;
}
.star:nth-child(5) {
  width: 4px;
  height: 4px;
  top: 15%;
  left: 65%;
  animation-delay: 1.5s;
}
.star:nth-child(6) {
  width: 3px;
  height: 3px;
  top: 60%;
  left: 10%;
  animation-delay: 2.5s;
}
.star:nth-child(7) {
  width: 5px;
  height: 5px;
  top: 80%;
  left: 60%;
  animation-delay: 0.8s;
}
.star:nth-child(8) {
  width: 4px;
  height: 4px;
  top: 25%;
  left: 40%;
  animation-delay: 1.8s;
}
.star:nth-child(9) {
  width: 3px;
  height: 3px;
  top: 45%;
  left: 75%;
  animation-delay: 3s;
}
.star:nth-child(10) {
  width: 4px;
  height: 4px;
  top: 35%;
  left: 5%;
  animation-delay: 2.2s;
}

@keyframes twinkle {
  0% {
    opacity: 0.4;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1.3);
  }
}

/* Nebulosas como cultura invisible */
.nebula {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(138, 43, 226, 0.15) 0%,
    rgba(155, 89, 182, 0.1) 30%,
    transparent 70%
  );
  border-radius: 50%;
  top: -200px;
  right: -200px;
  animation: nebulaPulse 20s infinite ease-in-out;
}

.nebula2 {
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(52, 152, 219, 0.12) 0%,
    rgba(116, 185, 255, 0.08) 40%,
    transparent 80%
  );
  border-radius: 50%;
  bottom: -150px;
  left: -150px;
  animation: nebulaPulse 25s infinite ease-in-out alternate;
}

.nebula3 {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(46, 204, 113, 0.1) 0%,
    rgba(26, 188, 156, 0.06) 50%,
    transparent 80%
  );
  border-radius: 50%;
  top: 30%;
  left: 60%;
  animation: nebulaPulse 18s infinite ease-in-out;
  animation-delay: -8s;
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

/* Red de conexiones distribuidas */
.network {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.6;
}

.connection {
  position: absolute;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(116, 185, 255, 0.8),
    rgba(155, 89, 182, 0.6),
    transparent
  );
  animation: dataFlow 8s infinite ease-in-out;
}

.connection1 {
  width: 220px;
  top: 22%;
  left: 15%;
  transform: rotate(25deg);
}

.connection2 {
  width: 180px;
  top: 35%;
  right: 10%;
  transform: rotate(-30deg);
  animation-delay: -2s;
}

.connection3 {
  width: 160px;
  bottom: 30%;
  left: 25%;
  transform: rotate(45deg);
  animation-delay: -4s;
}

.connection4 {
  width: 200px;
  top: 65%;
  right: 25%;
  transform: rotate(-15deg);
  animation-delay: -6s;
}

.connection5 {
  width: 140px;
  top: 50%;
  left: 45%;
  transform: rotate(60deg);
  animation-delay: -1s;
}

@keyframes dataFlow {
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

.connection1 {
  --rotation: 25deg;
}
.connection2 {
  --rotation: -30deg;
}
.connection3 {
  --rotation: 45deg;
}
.connection4 {
  --rotation: -15deg;
}
.connection5 {
  --rotation: 60deg;
}

/* Satélites distribuidos */
.satellites {
  position: absolute;
  width: 100%;
  height: 100%;
}

.satellite {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #74b9ff, #0984e3);
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(116, 185, 255, 0.8);
  animation: orbit 30s infinite linear;
}

.satellite::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(116, 185, 255, 0.6), transparent);
  top: 50%;
  left: -4px;
  transform: translateY(-50%);
}

.satellite:nth-child(1) {
  top: 25%;
  left: 20%;
  animation-duration: 25s;
}

.satellite:nth-child(2) {
  top: 40%;
  right: 15%;
  animation-duration: 35s;
  animation-delay: -10s;
}

.satellite:nth-child(3) {
  bottom: 35%;
  left: 30%;
  animation-duration: 28s;
  animation-delay: -15s;
}

.satellite:nth-child(4) {
  top: 60%;
  right: 30%;
  animation-duration: 32s;
  animation-delay: -5s;
}

@keyframes orbit {
  0% {
    transform: rotate(0deg) translateX(30px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(30px) rotate(-360deg);
  }
}

/* Ondas de comunicación */
.communication-waves {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.wave {
  position: absolute;
  border: 1px solid rgba(116, 185, 255, 0.3);
  border-radius: 50%;
  animation: waveExpand 6s infinite ease-out;
}

.wave1 {
  width: 60px;
  height: 60px;
  top: 20%;
  left: 15%;
  animation-delay: 0s;
}

.wave2 {
  width: 80px;
  height: 80px;
  bottom: 25%;
  right: 20%;
  animation-delay: -2s;
}

.wave3 {
  width: 70px;
  height: 70px;
  top: 55%;
  left: 70%;
  animation-delay: -4s;
}

@keyframes waveExpand {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}

/* Datos flotantes */
.data-stream {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.data-bit {
  position: absolute;
  width: 2px;
  height: 8px;
  background: linear-gradient(180deg, rgba(116, 185, 255, 1), rgba(116, 185, 255, 0));
  animation: dataMove 12s infinite linear;
}

.data-bit:nth-child(1) {
  left: 10%;
  animation-delay: 0s;
}
.data-bit:nth-child(2) {
  left: 25%;
  animation-delay: -2s;
}
.data-bit:nth-child(3) {
  left: 40%;
  animation-delay: -4s;
}
.data-bit:nth-child(4) {
  left: 55%;
  animation-delay: -6s;
}
.data-bit:nth-child(5) {
  left: 70%;
  animation-delay: -8s;
}
.data-bit:nth-child(6) {
  left: 85%;
  animation-delay: -10s;
}

@keyframes dataMove {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-50px) rotate(180deg);
    opacity: 0;
  }
}

/* Hologramas de colaboración */
.hologram {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid rgba(155, 89, 182, 0.6);
  border-radius: 50%;
  animation: hologramPulse 4s infinite ease-in-out;
}

.hologram::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background: rgba(155, 89, 182, 0.3);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hologram1 {
  top: 30%;
  left: 10%;
  animation-delay: 0s;
}

.hologram2 {
  bottom: 40%;
  right: 15%;
  animation-delay: -1s;
}

.hologram3 {
  top: 65%;
  left: 75%;
  animation-delay: -2s;
}

@keyframes hologramPulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}
</style>
