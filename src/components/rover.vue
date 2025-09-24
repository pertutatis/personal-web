<template>
  <!-- Rover -->
  <div class="rover-container">
    <!-- Mástil y cámara -->
    <div class="mast"></div>

    <!-- Antena -->
    <div class="antenna"></div>

    <!-- Cuello de la cámara -->
    <div class="camera-neck">
      <div class="camera-joint"></div>
    </div>

    <!-- Cámara principal con ojos -->
    <div class="main-camera">
      <div class="camera-eyes">
        <div class="eye left"></div>
        <div class="eye right"></div>
      </div>
    </div>

    <!-- Brazo robótico -->
    <div class="robotic-arm">
      <div class="arm-segment upper"></div>
      <div class="arm-segment lower"></div>
      <div class="arm-joint"></div>
      <div class="arm-tool"></div>
    </div>

    <!-- Cuerpo principal -->
    <div class="rover-body"></div>
    <div class="solar-panel"></div>

    <!-- Sistema de suspensión -->
    <div class="suspension">
      <div class="suspension-link"></div>
      <div class="suspension-link"></div>
      <div class="suspension-link"></div>
      <div class="suspension-link"></div>
    </div>

    <!-- Ruedas -->
    <div class="wheel wheel1"></div>
    <div class="wheel wheel2"></div>
    <div class="wheel wheel3"></div>
    <div class="wheel wheel4"></div>
  </div>
</template>

<style lang="postcss" scoped>
/* Contenedor del rover */
.rover-container {
  position: absolute;
  bottom: 40px;
  left: 0;
  z-index: 10;
  animation: hover 120s ease-in-out infinite;
}

/* Cuerpo principal */
.rover-body {
  width: 140px;
  height: 50px;
  background: #e8e8e8;
  border: 3px solid #333;
  border-radius: 0 0 8px 8px;
  position: relative;
}

/* Cuello largo para la cámara */
.camera-neck {
  width: 8px;
  height: 50px;
  background: #e8e8e8;
  border: 2px solid #333;
  position: absolute;
  top: -45px;
  left: 47px;
  border-radius: 4px;
}

.camera-joint {
  background: #e8e8e8;
  border: 2px solid #333;
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  left: -4px;
  top: 20px;
}

/* Cámara principal */
.main-camera {
  width: 50px;
  height: 35px;
  background: #ff8c42;
  border: 3px solid #333;
  border-radius: 8px;
  position: absolute;
  top: -65px;
  left: 24px;
}

.camera-eyes {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 32px;
  height: 15px;
}

.eye {
  width: 12px;
  height: 12px;
  background: #333;
  border-radius: 50%;
  position: absolute;
  top: 0;
  animation: eyeBlink 4s ease-in-out infinite;
}

.eye.left {
  left: 0;
}
.eye.right {
  right: 0;
  animation-delay: 0.1s;
}

.eye::after {
  content: "";
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
}

/* Mástil */
.mast {
  width: 6px;
  height: 40px;
  background: #e8e8e8;
  border: 2px solid #333;
  position: absolute;
  left: 45px;
  top: -35px;
}

/* Antena */
.antenna {
  width: 3px;
  height: 25px;
  background: #333;
  position: absolute;
  right: 15px;
  top: -20px;
  border-radius: 2px;
}

.antenna::after {
  content: "";
  width: 8px;
  height: 8px;
  background: #ff8c42;
  border-radius: 50%;
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  border: 2px solid #333;
}

/* Brazo robótico */
.robotic-arm {
  position: absolute;
  left: -30px;
  top: 10px;
}

.arm-segment {
  background: #e8e8e8;
  border: 2px solid #333;
  position: absolute;
}

.arm-segment.upper {
  width: 25px;
  height: 6px;
  transform: rotate(-20deg);
  top: 5px;
  left: 0;
}

.arm-segment.lower {
  width: 20px;
  height: 6px;
  transform: rotate(45deg);
  top: 8px;
  left: 18px;
}

.arm-joint {
  background: #e8e8e8;
  border: 2px solid #333;
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  left: 15px;
}

.arm-tool {
  width: 20px;
  height: 12px;
  background: #333;
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: -10px;
}

.arm-tool::after {
  content: "";
  width: 4px;
  height: 4px;
  background: #ff8c42;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  left: 8px;
}

/* Sistema de suspensión conectado */
.suspension {
  position: absolute;
  width: 180px;
  height: 40px;
  top: 25px;
  left: -20px;
}

.solar-panel {
  width: 180px;
  height: 6px;
  background: #666;
  border: 2px solid #333;
  position: absolute;
  top: 0;
  left: -20px;
}

.suspension-link {
  width: 50px;
  height: 4px;
  background: #333;
  position: absolute;
  top: 29px;
  transform-origin: top center;
}

.suspension-link:nth-child(1) {
  left: 0;
  transform: rotate(-60deg);
}
.suspension-link:nth-child(2) {
  left: 27px;
  transform: rotate(60deg);
}
.suspension-link:nth-child(3) {
  left: 103px;
  transform: rotate(-60deg);
}
.suspension-link:nth-child(4) {
  left: 130px;
  transform: rotate(60deg);
}

/* Ruedas */
.wheel {
  width: 32px;
  height: 32px;
  background: #666;
  border: 3px solid #333;
  border-radius: 50%;
  position: absolute;
  top: 65px;
  animation: wheelSpin 4s linear infinite;
}

.wheel::after {
  content: "";
  width: 16px;
  height: 16px;
  background: #999;
  border: 2px solid #333;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.wheel::before {
  content: "";
  width: 6px;
  height: 6px;
  background: #ff8c42;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.wheel1 {
  left: -25px;
}
.wheel2 {
  left: 27px;
}
.wheel3 {
  left: 77px;
}
.wheel4 {
  left: 132px;
}

/* Animaciones */
@keyframes hover {
  0%,
  100% {
    transform: translateX(0) scale(0.3);
  }
  50% {
    transform: translateX(80vw) scale(0.3);
  }
}

@keyframes wheelSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-3px) scale(1.05);
  }
}

@keyframes eyeBlink {
  0%,
  90% {
    transform: scaleY(1);
  }
  95% {
    transform: scaleY(0.1);
  }
}
</style>
