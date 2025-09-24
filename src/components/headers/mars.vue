<template>
  <div class="container">
    <!-- Atmósfera suave -->
    <div class="soft-atmosphere"></div>

    <!-- Planetas grandes de fondo -->
    <div class="background-planet-left"></div>
    <div class="background-planet-right"></div>

    <!-- Sol distante -->
    <div class="distant-sun"></div>

    <!-- Planeta visible -->
    <div class="visible-planet"></div>

    <!-- Lunas sutiles -->
    <div class="subtle-moons">
      <div class="moon moon1"></div>
      <div class="moon moon2"></div>
      <div class="moon moon3"></div>
    </div>

    <!-- Rayos solares suaves -->
    <div class="gentle-rays">
      <div class="soft-ray soft-ray1"></div>
      <div class="soft-ray soft-ray2"></div>
    </div>

    <!-- Partículas suaves -->
    <div class="gentle-particles">
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
    </div>

    <!-- Contenido principal -->
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.container {
  width: 100%;
  height: 100vh;
  position: relative;
}

/* Sol distante y suave */
.distant-sun {
  position: absolute;
  width: 80px;
  height: 80px;
  top: 20%;
  right: 25%;
  background: radial-gradient(circle, #fff3cd 0%, #ffe066 40%, #ffb347 80%);
  border-radius: 50%;
  opacity: 0.7;
  animation: gentleSunPulse 12s infinite ease-in-out;
  z-index: 1;
}

@keyframes gentleSunPulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

/* Planeta grande de fondo - izquierda */
.background-planet-left {
  position: absolute;
  width: 400px;
  height: 400px;
  top: -150px;
  left: -200px;
  background: radial-gradient(
    circle at 40% 40%,
    rgba(139, 69, 19, 0.12),
    rgba(160, 82, 45, 0.08),
    rgba(205, 133, 63, 0.04)
  );
  border-radius: 50%;
  animation: planetSlow 40s infinite ease-in-out;
  z-index: 1;
}

/* Planeta grande de fondo - derecha */
.background-planet-right {
  position: absolute;
  width: 350px;
  height: 350px;
  bottom: -150px;
  right: -175px;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(178, 34, 34, 0.1),
    rgba(139, 69, 19, 0.06),
    rgba(160, 82, 45, 0.03)
  );
  border-radius: 50%;
  animation: planetSlow 35s infinite ease-in-out reverse;
  z-index: 1;
}

/* Planeta mediano visible */
.visible-planet {
  position: absolute;
  width: 120px;
  height: 120px;
  top: 15%;
  left: 20%;
  background: radial-gradient(
    circle at 35% 35%,
    rgba(160, 82, 45, 0.3),
    rgba(139, 69, 19, 0.2),
    rgba(101, 67, 33, 0.1)
  );
  border-radius: 50%;
  box-shadow: inset -15px -15px 30px rgba(0, 0, 0, 0.1);
  animation: visiblePlanetRotate 25s infinite linear;
  z-index: 2;
}

@keyframes planetSlow {
  0%,
  100% {
    transform: rotate(0deg) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: rotate(180deg) scale(1.02);
    opacity: 0.6;
  }
}

@keyframes visiblePlanetRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Pequeñas lunas sutiles */
.subtle-moons {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.moon {
  position: absolute;
  background: radial-gradient(
    circle at 40% 40%,
    rgba(220, 220, 220, 0.4),
    rgba(192, 192, 192, 0.3),
    rgba(169, 169, 169, 0.2)
  );
  border-radius: 50%;
  animation: moonDrift 20s infinite ease-in-out;
}

.moon1 {
  width: 25px;
  height: 25px;
  top: 30%;
  right: 30%;
  animation-delay: 0s;
}

.moon2 {
  width: 18px;
  height: 18px;
  bottom: 40%;
  left: 30%;
  animation-delay: -10s;
}

.moon3 {
  width: 22px;
  height: 22px;
  top: 65%;
  right: 15%;
  animation-delay: -15s;
}

@keyframes moonDrift {
  0%,
  100% {
    transform: translateX(0) translateY(0);
    opacity: 0.3;
  }
  50% {
    transform: translateX(15px) translateY(-8px);
    opacity: 0.5;
  }
}

/* Partículas muy sutiles */
.gentle-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: gentleFloat 25s infinite ease-in-out;
}

.particle:nth-child(1) {
  top: 25%;
  left: 25%;
  animation-delay: 0s;
}
.particle:nth-child(2) {
  top: 45%;
  right: 35%;
  animation-delay: -8s;
}
.particle:nth-child(3) {
  top: 65%;
  left: 45%;
  animation-delay: -16s;
}
.particle:nth-child(4) {
  top: 75%;
  right: 25%;
  animation-delay: -12s;
}

@keyframes gentleFloat {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.2;
  }
  25% {
    transform: translateY(-10px) rotate(90deg);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-5px) rotate(180deg);
    opacity: 0.3;
  }
  75% {
    transform: translateY(-15px) rotate(270deg);
    opacity: 0.5;
  }
}

/* Rayos solares muy suaves */
.gentle-rays {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.soft-ray {
  position: absolute;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 243, 205, 0.2),
    rgba(255, 179, 71, 0.1),
    transparent
  );
  height: 1px;
  animation: gentleRayFlow 15s infinite ease-in-out;
}

.soft-ray1 {
  width: 150px;
  top: 23%;
  right: 35%;
  transform: rotate(25deg);
  animation-delay: 0s;
}

.soft-ray2 {
  width: 120px;
  top: 27%;
  right: 20%;
  transform: rotate(-15deg);
  animation-delay: -7s;
}

@keyframes gentleRayFlow {
  0%,
  100% {
    opacity: 0;
    transform-origin: right;
    transform: scaleX(0) rotate(var(--soft-ray-angle, 0deg));
  }
  50% {
    opacity: 0.4;
    transform: scaleX(1) rotate(var(--soft-ray-angle, 0deg));
  }
}

.soft-ray1 {
  --soft-ray-angle: 25deg;
}
.soft-ray2 {
  --soft-ray-angle: -15deg;
}

/* Contenido principal */
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
  max-width: 900px;
  padding: 50px 30px;
}

/* Responsive */
@media (max-width: 768px) {
  .content {
    padding: 40px 25px;
  }

  .distant-sun {
    width: 60px;
    height: 60px;
    top: 15%;
    right: 20%;
  }

  .visible-planet {
    width: 80px;
    height: 80px;
  }

  .background-planet-left {
    width: 300px;
    height: 300px;
  }

  .background-planet-right {
    width: 250px;
    height: 250px;
  }
}

@media (max-width: 480px) {
  .content {
    padding: 30px 20px;
  }

  .distant-sun {
    width: 50px;
    height: 50px;
  }

  .visible-planet {
    width: 60px;
    height: 60px;
  }
}
</style>
