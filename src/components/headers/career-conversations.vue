<script setup lang="ts">
import { defineProps, defineAsyncComponent, computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  excerpt: {
    type: String
  }
})
</script>

<template>
  <div class="body">
    <div class="container">
        <!-- Estrellas -->
        <div class="stars">
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
        </div>

        <!-- Nebulosas -->
        <div class="nebula"></div>
        <div class="nebula2"></div>

        <!-- Planetas -->
        <div class="planet planet1"></div>
        <div class="planet planet2"></div>

        <!-- Cohetes -->
        <div class="rocket rocket1">🚀</div>
        <div class="rocket rocket2">🚀</div>

        <!-- Partículas -->
        <div class="particles">
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
        </div>

        <!-- Líneas de conexión -->
        <div class="connection-lines">
            <div class="line line1"></div>
            <div class="line line2"></div>
        </div>

        <!-- Contenido principal -->
        <div class="content">
            <h1 class="title">Career Conversations</h1>
            <h2 class="subtitle">Navegando el Crecimiento Profesional</h2>
            <p class="description">
                Descubre cómo las conversaciones de carrera pueden transformar tu equipo, 
                aumentar el engagement y crear un ambiente donde cada miembro pueda brillar 
                mientras navega hacia sus sueños profesionales.
            </p>
        </div>
    </div>
  </div>

</template>

<style lang="postcss" scoped>
.body {
            overflow: hidden;
            background: radial-gradient(ellipse at bottom, #0d1b2a 0%, var(--dark-color) 100%);
            height: 100vh;
            position: relative;
        }

        .body::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 60px;
            background: linear-gradient(180deg, var(--dark-color), #0a1e2c00);
            pointer-events: none;
            z-index: 99;
        }

        .body::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 60px;
            background: linear-gradient(0deg, var(--dark-color), #0a1e2c00);
            pointer-events: none;
            z-index: 99;
        }

        .container {
            width: 100%;
            height: 100vh;
            position: relative;
            overflow: hidden;
        }

        /* Estrellas animadas */
        .stars {
            position: absolute;
            width: 100%;
            height: 100%;
        }

        .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            animation: twinkle 3s infinite alternate;
        }

        .star:nth-child(1) { width: 2px; height: 2px; top: 20%; left: 10%; animation-delay: 0s; }
        .star:nth-child(2) { width: 1px; height: 1px; top: 30%; left: 80%; animation-delay: 1s; }
        .star:nth-child(3) { width: 3px; height: 3px; top: 60%; left: 20%; animation-delay: 2s; }
        .star:nth-child(4) { width: 2px; height: 2px; top: 80%; left: 90%; animation-delay: 0.5s; }
        .star:nth-child(5) { width: 1px; height: 1px; top: 15%; left: 70%; animation-delay: 1.5s; }
        .star:nth-child(6) { width: 2px; height: 2px; top: 45%; left: 5%; animation-delay: 2.5s; }
        .star:nth-child(7) { width: 1px; height: 1px; top: 70%; left: 60%; animation-delay: 0.8s; }
        .star:nth-child(8) { width: 3px; height: 3px; top: 25%; left: 40%; animation-delay: 1.8s; }

        @keyframes twinkle {
            0% { opacity: 0.3; }
            100% { opacity: 1; }
        }

        /* Nebulosa de fondo */
        .nebula {
            position: absolute;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(138, 43, 226, 0.3) 0%, rgba(75, 0, 130, 0.2) 50%, transparent 100%);
            border-radius: 50%;
            top: -100px;
            right: -100px;
            animation: nebulaPulse 8s infinite ease-in-out;
        }

        .nebula2 {
            position: absolute;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(0, 191, 255, 0.2) 0%, rgba(30, 144, 255, 0.1) 50%, transparent 100%);
            border-radius: 50%;
            bottom: -50px;
            left: -50px;
            animation: nebulaPulse 6s infinite ease-in-out alternate;
        }

        @keyframes nebulaPulse {
            0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.3; }
            50% { transform: scale(1.2) rotate(180deg); opacity: 0.6; }
        }

        /* Planetas */
        .planet {
            position: absolute;
            border-radius: 50%;
            animation: float 10s infinite ease-in-out;
        }

        .planet1 {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #ff6b6b, #ee5a52);
            top: 20%;
            right: 15%;
            box-shadow: 0 0 30px rgba(255, 107, 107, 0.5);
        }

        .planet2 {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #4ecdc4, #44a08d);
            bottom: 25%;
            left: 10%;
            animation-delay: -5s;
            box-shadow: 0 0 20px rgba(78, 205, 196, 0.5);
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }

        /* Contenido principal */
        .content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            z-index: 10;
            color: white;
            max-width: 900px;
            padding: 40px;
        }

        .title {
            font-size: 4rem;
            font-weight: bold;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
            animation: glow 3s infinite alternate;
        }

        @keyframes glow {
            0% { filter: brightness(1); }
            100% { filter: brightness(1.2); }
        }

        .subtitle {
            font-size: 1.5rem;
            margin-bottom: 30px;
            opacity: 0.9;
            font-weight: 300;
            letter-spacing: 2px;
        }

        .description {
            font-size: 1.1rem;
            line-height: 1.6;
            opacity: 0.8;
            max-width: 700px;
            margin: 0 auto 40px;
        }

        /* Cohetes/naves espaciales */
        .rocket {
            position: absolute;
            font-size: 30px;
            animation: fly 15s infinite linear;
        }

        .rocket1 {
            top: 30%;
            left: -50px;
            animation-delay: 0s;
        }

        .rocket2 {
            bottom: 40%;
            right: -50px;
            animation-delay: -7s;
            transform: rotate(180deg);
        }

        @keyframes fly {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(100vw + 100px)); }
        }

        /* Partículas flotantes */
        .particles {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            animation: particleFloat 20s infinite linear;
        }

        .particle:nth-child(odd) {
            background: rgba(102, 126, 234, 0.6);
        }

        .particle:nth-child(1) { left: 10%; animation-delay: 0s; }
        .particle:nth-child(2) { left: 20%; animation-delay: -5s; }
        .particle:nth-child(3) { left: 30%; animation-delay: -10s; }
        .particle:nth-child(4) { left: 40%; animation-delay: -15s; }
        .particle:nth-child(5) { left: 50%; animation-delay: -2s; }
        .particle:nth-child(6) { left: 60%; animation-delay: -7s; }
        .particle:nth-child(7) { left: 70%; animation-delay: -12s; }
        .particle:nth-child(8) { left: 80%; animation-delay: -17s; }

        @keyframes particleFloat {
            0% { 
                transform: translateY(100vh) scale(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% { 
                transform: translateY(-100px) scale(1);
                opacity: 0;
            }
        }

        /* Líneas de conexión animadas */
        .connection-lines {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .line {
            position: absolute;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.8), transparent);
            animation: pulse 4s infinite ease-in-out;
        }

        .line1 {
            width: 200px;
            top: 35%;
            left: 20%;
            transform: rotate(45deg);
        }

        .line2 {
            width: 150px;
            bottom: 30%;
            right: 25%;
            transform: rotate(-30deg);
            animation-delay: -2s;
        }

        @keyframes pulse {
            0%, 100% { opacity: 0; transform-origin: left; transform: scaleX(0); }
            50% { opacity: 1; transform: scaleX(1); }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .title {
                font-size: 2.5rem;
            }
            
            .subtitle {
                font-size: 1.2rem;
            }
            
            .description {
                font-size: 1rem;
            }
            
            .content {
                padding: 20px;
            }
        }
</style>
