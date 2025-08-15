<template>
  <div class="article-header">
    <div class="article-header__container">
      <!-- Estrellas como objetivos profesionales -->
      <div class="stars">
        <div v-for="n in 8" :key="n" class="star"></div>
      </div>

      <!-- Nebulosas como entorno de desarrollo -->
      <div v-for="n in 3" :key="n" :class="`nebula${n}`"></div>

      <!-- Centro de comando como hub de mentoring -->
      <div class="command-center">
        <div class="center-core"></div>
        <div class="command-panels">
          <div v-for="n in 4" :key="n" class="panel"></div>
        </div>
      </div>

      <!-- Señales de comunicación -->
      <div class="communication-signals">
        <div v-for="n in 3" :key="n" :class="`signal signal${n}`"></div>
      </div>

      <!-- Rutas de desarrollo -->
      <div class="development-paths">
        <div v-for="n in 4" :key="n" :class="`path path${n}`"></div>
      </div>

      <!-- Flota de naves en desarrollo -->
      <div class="development-fleet">
        <div v-for="n in 4" :key="n" class="dev-ship"></div>
      </div>

      <!-- Cometas como inspiración -->
      <div class="comets">
        <div v-for="n in 2" :key="n" class="comet"></div>
      </div>

      <!-- Partículas ascendentes -->
      <div class="ascending-particles">
        <div v-for="n in 4" :key="n" class="ascending-particle"></div>
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

/* Estrellas como objetivos profesionales */
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
  top: 22%;
  left: 18%;
  animation-delay: 0s;
}
.star:nth-child(2) {
  width: 3px;
  height: 3px;
  top: 32%;
  left: 75%;
  animation-delay: 1.2s;
}
.star:nth-child(3) {
  width: 5px;
  height: 5px;
  top: 52%;
  left: 28%;
  animation-delay: 2.1s;
}
.star:nth-child(4) {
  width: 3px;
  height: 3px;
  top: 68%;
  left: 85%;
  animation-delay: 0.7s;
}
.star:nth-child(5) {
  width: 4px;
  height: 4px;
  top: 14%;
  left: 62%;
  animation-delay: 1.8s;
}
.star:nth-child(6) {
  width: 3px;
  height: 3px;
  top: 62%;
  left: 12%;
  animation-delay: 2.8s;
}
.star:nth-child(7) {
  width: 4px;
  height: 4px;
  top: 78%;
  left: 52%;
  animation-delay: 0.9s;
}
.star:nth-child(8) {
  width: 5px;
  height: 5px;
  top: 28%;
  left: 45%;
  animation-delay: 2.3s;
}

@keyframes twinkle {
  0% {
    opacity: 0.3;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1.3);
  }
}

/* Nebulosas como entorno de desarrollo */
.nebula1 {
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(46, 204, 113, 0.25) 0%,
    rgba(26, 188, 156, 0.15) 40%,
    transparent 75%
  );
  border-radius: 50%;
  top: -150px;
  right: -150px;
  animation: nebulaPulse 20s infinite ease-in-out;
}

.nebula2 {
  position: absolute;
  width: 420px;
  height: 420px;
  background: radial-gradient(
    circle,
    rgba(155, 89, 182, 0.22) 0%,
    rgba(142, 68, 173, 0.14) 45%,
    transparent 80%
  );
  border-radius: 50%;
  bottom: -110px;
  left: -110px;
  animation: nebulaPulse 24s infinite ease-in-out alternate;
}

.nebula3 {
  position: absolute;
  width: 360px;
  height: 360px;
  background: radial-gradient(
    circle,
    rgba(52, 152, 219, 0.2) 0%,
    rgba(41, 128, 185, 0.12) 50%,
    transparent 75%
  );
  border-radius: 50%;
  top: 40%;
  left: 65%;
  animation: nebulaPulse 17s infinite ease-in-out;
  animation-delay: -7s;
}

@keyframes nebulaPulse {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.35) rotate(150deg);
    opacity: 0.75;
  }
}

/* Centro de comando como hub de mentoring */
.command-center {
  position: absolute;
  top: 18%;
  right: 12%;
  width: 90px;
  height: 90px;
  animation: commandRotate 35s infinite linear;
}

.center-core {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #e17055, #d63031);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 25px rgba(225, 112, 85, 0.7), inset 0 0 15px rgba(255, 255, 255, 0.3);
}

.command-panels {
  position: absolute;
  width: 100%;
  height: 100%;
}

.panel {
  width: 12px;
  height: 6px;
  background: linear-gradient(90deg, #74b9ff, #0984e3);
  border-radius: 3px;
  position: absolute;
  box-shadow: 0 0 8px rgba(116, 185, 255, 0.6);
  animation: panelBlink 3s infinite ease-in-out;
}

.panel:nth-child(1) {
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 0s;
}
.panel:nth-child(2) {
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 0.5s;
}
.panel:nth-child(3) {
  top: 50%;
  left: 15px;
  transform: translateY(-50%) rotate(90deg);
  animation-delay: 1s;
}
.panel:nth-child(4) {
  top: 50%;
  right: 15px;
  transform: translateY(-50%) rotate(90deg);
  animation-delay: 1.5s;
}

@keyframes commandRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes panelBlink {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

/* Rutas de desarrollo como senderos espaciales */
.development-paths {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.7;
}

.path {
  position: absolute;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(46, 204, 113, 0.9),
    rgba(26, 188, 156, 0.7),
    transparent
  );
  animation: pathFlow 8s infinite ease-in-out;
  border-radius: 1px;
}

.path1 {
  width: 200px;
  top: 25%;
  left: 18%;
  transform: rotate(20deg);
}

.path2 {
  width: 180px;
  top: 35%;
  right: 15%;
  transform: rotate(-35deg);
  animation-delay: -2s;
}

.path3 {
  width: 160px;
  bottom: 32%;
  left: 25%;
  transform: rotate(45deg);
  animation-delay: -4s;
}

.path4 {
  width: 140px;
  top: 55%;
  right: 25%;
  transform: rotate(-20deg);
  animation-delay: -6s;
}

@keyframes pathFlow {
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

.path1 {
  --rotation: 20deg;
}
.path2 {
  --rotation: -35deg;
}
.path3 {
  --rotation: 45deg;
}
.path4 {
  --rotation: -20deg;
}

/* Flota de naves como equipo en desarrollo */
.development-fleet {
  position: absolute;
  bottom: 25%;
  left: 10%;
  animation: fleetMovement 18s infinite ease-in-out;
}

.dev-ship {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 22px solid #00cec9;
  position: absolute;
  filter: drop-shadow(0 0 10px rgba(0, 206, 201, 0.8));
}

.dev-ship:nth-child(1) {
  transform: rotate(8deg);
  left: 0px;
  top: 0px;
}
.dev-ship:nth-child(2) {
  transform: rotate(-12deg);
  left: 30px;
  top: 18px;
  animation-delay: -1.5s;
}
.dev-ship:nth-child(3) {
  transform: rotate(3deg);
  left: 60px;
  top: -8px;
  animation-delay: -3s;
}
.dev-ship:nth-child(4) {
  transform: rotate(-6deg);
  left: 90px;
  top: 12px;
  animation-delay: -4.5s;
}

@keyframes fleetMovement {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(-20px) translateX(25px);
  }
  50% {
    transform: translateY(-8px) translateX(50px);
  }
  75% {
    transform: translateY(-25px) translateX(30px);
  }
}

/* Cometas como inspiración y sueños */
.comets {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.comet {
  position: absolute;
  width: 3px;
  height: 45px;
  background: linear-gradient(
    180deg,
    rgba(46, 204, 113, 1),
    rgba(26, 188, 156, 0.4),
    transparent
  );
  animation: cometTrail 15s infinite linear;
  border-radius: 2px;
}

.comet::before {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  background: radial-gradient(circle, rgba(46, 204, 113, 1), rgba(26, 188, 156, 0.8));
  border-radius: 50%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 12px rgba(46, 204, 113, 0.9);
}

.comet:nth-child(1) {
  left: 30%;
  animation-delay: 0s;
  animation-duration: 12s;
}
.comet:nth-child(2) {
  left: 65%;
  animation-delay: -5s;
  animation-duration: 16s;
}

@keyframes cometTrail {
  0% {
    transform: translateY(-150px) translateX(50px) rotate(200deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) translateX(-100px) rotate(180deg);
    opacity: 0;
  }
}

/* Señales de comunicación */
.communication-signals {
  position: absolute;
  top: 18%;
  right: 12%;
  width: 90px;
  height: 90px;
}

.signal {
  position: absolute;
  border: 2px solid rgba(225, 112, 85, 0.4);
  border-radius: 50%;
  animation: signalExpand 5s infinite ease-out;
}

.signal1 {
  width: 40px;
  height: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 0s;
}

.signal2 {
  width: 40px;
  height: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -1.7s;
}

.signal3 {
  width: 40px;
  height: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -3.4s;
}

@keyframes signalExpand {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(2.5);
    opacity: 0;
  }
}

/* Partículas de crecimiento ascendente */
.ascending-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.ascending-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(155, 89, 182, 0.7);
  border-radius: 50%;
  animation: ascend 20s infinite linear;
  box-shadow: 0 0 8px rgba(155, 89, 182, 0.5);
}

.ascending-particle:nth-child(1) {
  left: 20%;
  animation-delay: 0s;
}
.ascending-particle:nth-child(2) {
  left: 40%;
  animation-delay: -5s;
}
.ascending-particle:nth-child(3) {
  left: 60%;
  animation-delay: -10s;
}
.ascending-particle:nth-child(4) {
  left: 80%;
  animation-delay: -15s;
}

@keyframes ascend {
  0% {
    transform: translateY(100vh) scale(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) scale(1.5) rotate(360deg);
    opacity: 0;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .command-center {
    width: 70px;
    height: 70px;
    top: 15%;
    right: 8%;
  }

  .center-core {
    width: 40px;
    height: 40px;
  }
}
</style>
