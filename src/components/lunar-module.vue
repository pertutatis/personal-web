<template>
  <div class="lunar-module">
    <!-- Antenas -->
    <div class="antenna-top"></div>
    <div class="antenna-dot-top"></div>

    <!-- Cuerpo principal -->
    <div class="main-body">
      <div class="window">
        <div class="window-glow"></div>
      </div>
      <div class="side-panel"></div>
    </div>

    <!-- Sección inferior -->
    <div class="lower-section"></div>

    <!-- Sistema de patas mejorado -->
    <div class="landing-strut strut-left"></div>
    <div class="landing-strut strut-right"></div>
    <div class="strut-connector-left"></div>
    <div class="strut-connector-right"></div>
    <div class="strut-brace-left"></div>
    <div class="strut-brace-right"></div>

    <!-- Pies de aterrizaje -->
    <div class="landing-pad pad-left"></div>
    <div class="landing-pad pad-right"></div>

    <!-- Pata central -->
    <div class="center-strut"></div>
    <div class="center-pad"></div>
  </div>
</template>
<style lang="postcss" scoped>
.lunar-module {
  display: none;
  position: absolute;
  left: 0;
  bottom: -130px;
  width: 300px;
  height: 400px;
  pointer-events: none;
  transform: scale(0.2);
  animation: float 6s ease-in-out infinite;

  @media screen and (prefers-color-scheme: dark) {
    display: block;
  }
}

@keyframes float {
  0%,
  100% {
    transform: scale(0.2) translateY(0px);
  }
  50% {
    transform: scale(0.2) translateY(-20px);
  }
}

/* Antenas superiores - conectadas al cuerpo */
.antenna-top {
  position: absolute;
  width: 4px;
  height: 30px;
  top: 30px;
  left: 148px;
  background: linear-gradient(to top, #5a67d8, #667eea);
  border-radius: 2px;
}

.antenna-dot-top {
  position: absolute;
  width: 16px;
  height: 16px;
  top: 22px;
  left: 142px;
  background: radial-gradient(circle, #ff9a9e, #fad0c4);
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(255, 154, 158, 0.6);
}

.antenna-side {
  position: absolute;
  width: 4px;
  height: 25px;
  top: 75px;
  left: 76px;
  background: linear-gradient(to top, #5a67d8, #667eea);
  border-radius: 2px;
}

.antenna-dot-side {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 60px;
  left: 68px;
  background: radial-gradient(circle, #ffc3a0, #ffafbd);
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(255, 175, 189, 0.6);
}

/* Cuerpo principal */
.main-body {
  position: absolute;
  top: 60px;
  left: 80px;
  width: 140px;
  height: 120px;
  background: linear-gradient(135deg, #a8b8ff, #c5d2ff);
  border: 4px solid #5a67d8;
  border-radius: 36px 36px 0 0;
  box-shadow: 0 8px 25px rgba(90, 103, 216, 0.3);
}

/* Ventana circular con efectos de cristal */
.window {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 60px;
  height: 60px;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(173, 216, 230, 0.8) 20%,
    rgba(135, 206, 250, 0.7) 40%,
    rgba(70, 130, 180, 0.6) 70%,
    rgba(25, 25, 112, 0.8) 100%
  );
  border: 4px solid #5a67d8;
  border-radius: 50%;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
    inset -10px -10px 20px rgba(0, 0, 0, 0.2), 0 0 15px rgba(173, 216, 230, 0.4);
  overflow: hidden;
  position: relative;
}

/* Reflejo principal */
.window::before {
  content: "";
  position: absolute;
  top: 8px;
  left: 8px;
  width: 20px;
  height: 25px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.4) 50%,
    transparent 100%
  );
  border-radius: 50% 20% 50% 20%;
  transform: rotate(-10deg);
}

/* Reflejo secundario */
.window::after {
  content: "";
  position: absolute;
  top: 35px;
  right: 12px;
  width: 12px;
  height: 8px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  opacity: 0.7;
}

/* Brillo adicional en el borde */
.window-glow {
  position: absolute;
  top: 18px;
  left: 18px;
  width: 64px;
  height: 64px;
  border: 2px solid rgba(173, 216, 230, 0.6);
  border-radius: 50%;
  animation: windowGlow 3s ease-in-out infinite alternate;
  pointer-events: none;
}

@keyframes windowGlow {
  0% {
    opacity: 0.4;
    transform: scale(1);
    box-shadow: 0 0 10px rgba(173, 216, 230, 0.3);
  }
  100% {
    opacity: 0.8;
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(173, 216, 230, 0.6);
  }
}

/* Compartimento inferior */
.lower-section {
  position: absolute;
  top: 180px;
  left: 80px;
  width: 140px;
  height: 80px;
  background: linear-gradient(135deg, #ffecd2, #fcb69f);
  border: 4px solid #5a67d8;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 8px 25px rgba(252, 182, 159, 0.3);
}

/* Sistema de patas triangular mejorado */
.landing-strut {
  position: absolute;
}

/* Pata izquierda */
.strut-left {
  top: 225px;
  left: 37px;
}

.strut-left::before {
  content: "";
  position: absolute;
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #5a67d8, #667eea);
  transform: rotate(-40deg);
  transform-origin: left center;
  border-radius: 2px;
}

.strut-left::after {
  content: "";
  position: absolute;
  width: 55px;
  height: 4px;
  background: linear-gradient(135deg, #5a67d8, #667eea);
  top: -2px;
  left: 0px;
  transform: rotate(35deg);
  transform-origin: left center;
  border-radius: 2px;
}

/* Pata derecha */
.strut-right {
  top: 225px;
  right: 30px;
}

.strut-right::before {
  content: "";
  position: absolute;
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #5a67d8, #667eea);
  transform: rotate(40deg);
  transform-origin: right center;
  border-radius: 2px;
  right: 0;
}

.strut-right::after {
  content: "";
  position: absolute;
  width: 55px;
  height: 4px;
  background: linear-gradient(135deg, #5a67d8, #667eea);
  top: -2px;
  right: 0px;
  transform: rotate(-35deg);
  transform-origin: right center;
  border-radius: 2px;
}

/* Conectores verticales */
.strut-connector-left {
  position: absolute;
  top: 225px;
  left: 37px;
  width: 4px;
  height: 60px;
  background: linear-gradient(to bottom, #5a67d8, #667eea);
  border-radius: 2px;
}

.strut-connector-right {
  position: absolute;
  top: 225px;
  right: 30px;
  width: 4px;
  height: 60px;
  background: linear-gradient(to bottom, #5a67d8, #667eea);
  border-radius: 2px;
}

/* Pies de aterrizaje mejorados */
.landing-pad {
  position: absolute;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: 2px solid #4c51bf;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(90, 103, 216, 0.3);
}

.pad-left {
  top: 280px;
  left: 22px;
  width: 28px;
  height: 6px;
  border-radius: 14px;
}

.pad-right {
  top: 280px;
  right: 16px;
  width: 28px;
  height: 6px;
  border-radius: 14px;
}

/* Pata central mejorada */
.center-strut {
  position: absolute;
  top: 265px;
  left: 150px;
  width: 4px;
  height: 45px;
  background: linear-gradient(to bottom, #5a67d8, #764ba2);
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(90, 103, 216, 0.2);
}

.center-pad {
  position: absolute;
  top: 300px;
  left: 135px;
  width: 30px;
  height: 6px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: 2px solid #4c51bf;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(90, 103, 216, 0.3);
}

/* Detalle estructural */
.strut-brace-left {
  position: absolute;
  top: 255px;
  left: 38px;
  width: 45px;
  height: 4px;
  background: #667eea;
  transform: rotate(0deg);
  border-radius: 1px;
}

.strut-brace-right {
  position: absolute;
  top: 255px;
  right: 30px;
  width: 45px;
  height: 4px;
  background: #667eea;
  transform: rotate(0deg);
  border-radius: 1px;
}

/* Efectos de brillo */
.glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 450px;
  background: radial-gradient(ellipse, rgba(102, 126, 234, 0.1), transparent 70%);
  animation: glow 4s ease-in-out infinite alternate;
  pointer-events: none;
}

@keyframes glow {
  0% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(0.95);
  }
  100% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.05);
  }
}

/* Detalle decorativo en el lateral */
.side-panel {
  position: absolute;
  top: 90px;
  right: 10px;
  width: 20px;
  height: 40px;
  background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
  border: 2px solid #5a67d8;
  border-radius: 6px;
}
</style>
