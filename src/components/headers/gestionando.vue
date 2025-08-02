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
            <div class="star"></div>
            <div class="star"></div>
        </div>

        <!-- Nebulosas -->
        <div class="nebula"></div>
        <div class="nebula2"></div>
        <div class="nebula3"></div>

        <!-- Estación espacial -->
        <div class="space-station">
            <div class="station-ring"></div>
            <div class="station-core"></div>
            <div class="station-modules">
                <div class="module"></div>
                <div class="module"></div>
                <div class="module"></div>
                <div class="module"></div>
            </div>
        </div>

        <!-- Flota de naves -->
        <div class="fleet">
            <div class="ship"></div>
            <div class="ship"></div>
            <div class="ship"></div>
        </div>

        <!-- Meteoros -->
        <div class="meteors">
            <div class="meteor"></div>
            <div class="meteor"></div>
            <div class="meteor"></div>
        </div>

        <!-- Red de conexiones -->
        <div class="network">
            <div class="connection connection1"></div>
            <div class="connection connection2"></div>
            <div class="connection connection3"></div>
        </div>

        <!-- Partículas de energía -->
        <div class="energy-particles">
            <div class="energy-particle"></div>
            <div class="energy-particle"></div>
            <div class="energy-particle"></div>
            <div class="energy-particle"></div>
            <div class="energy-particle"></div>
        </div>

        <!-- Contenido principal -->
        <div class="content">
            <h1 class="title">
                {{ props.title }}
            </h1>
            <h2 class="subtitle">Liderando desde la Experiencia</h2>
            <p class="description">
                {{ props.excerpt }}
            </p>
        </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.body {
            overflow: hidden;
            /* background: radial-gradient(ellipse at bottom, #0d1b2a 0%, var(--dark-color) 100%); */
            /* background: radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f0f23 100%); */
            height: 100vh;
            position: relative;
        }

        /* .body::before {
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
        } */

        .container {
            width: 100%;
            height: 100vh;
            position: relative;
            overflow: hidden;
        }

        /* Estrellas animadas con mayor densidad */
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

        .star:nth-child(1) { width: 2px; height: 2px; top: 15%; left: 5%; animation-delay: 0s; }
        .star:nth-child(2) { width: 1px; height: 1px; top: 25%; left: 85%; animation-delay: 1s; }
        .star:nth-child(3) { width: 3px; height: 3px; top: 35%; left: 15%; animation-delay: 2s; }
        .star:nth-child(4) { width: 2px; height: 2px; top: 45%; left: 95%; animation-delay: 0.5s; }
        .star:nth-child(5) { width: 1px; height: 1px; top: 55%; left: 75%; animation-delay: 1.5s; }
        .star:nth-child(6) { width: 2px; height: 2px; top: 65%; left: 8%; animation-delay: 2.5s; }
        .star:nth-child(7) { width: 1px; height: 1px; top: 75%; left: 65%; animation-delay: 0.8s; }
        .star:nth-child(8) { width: 3px; height: 3px; top: 85%; left: 45%; animation-delay: 1.8s; }
        .star:nth-child(9) { width: 2px; height: 2px; top: 10%; left: 55%; animation-delay: 3s; }
        .star:nth-child(10) { width: 1px; height: 1px; top: 20%; left: 35%; animation-delay: 2.2s; }

        @keyframes twinkle {
            0% { opacity: 0.3; transform: scale(1); }
            100% { opacity: 1; transform: scale(1.2); }
        }

        /* Nebulosas más dramáticas */
        .nebula {
            position: absolute;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(255, 79, 79, 0.3) 0%, rgba(255, 159, 67, 0.2) 40%, transparent 80%);
            border-radius: 50%;
            top: -150px;
            right: -150px;
            animation: nebulaPulse 12s infinite ease-in-out;
        }

        .nebula2 {
            position: absolute;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(52, 152, 219, 0.25) 0%, rgba(155, 89, 182, 0.15) 50%, transparent 80%);
            border-radius: 50%;
            bottom: -100px;
            left: -100px;
            animation: nebulaPulse 8s infinite ease-in-out alternate;
        }

        .nebula3 {
            position: absolute;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(46, 204, 113, 0.2) 0%, rgba(26, 188, 156, 0.1) 40%, transparent 70%);
            border-radius: 50%;
            top: 40%;
            left: 10%;
            animation: nebulaPulse 15s infinite ease-in-out;
            animation-delay: -5s;
        }

        @keyframes nebulaPulse {
            0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.4; }
            50% { transform: scale(1.3) rotate(180deg); opacity: 0.7; }
        }

        /* Estación espacial central */
        .space-station {
            position: absolute;
            top: 20%;
            right: 10%;
            width: 120px;
            height: 120px;
            animation: rotate 30s infinite linear;
        }

        .station-core {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #74b9ff, #0984e3);
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 0 0 30px rgba(116, 185, 255, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2);
        }

        .station-ring {
            width: 120px;
            height: 120px;
            border: 3px solid rgba(116, 185, 255, 0.8);
            border-radius: 50%;
            position: absolute;
            border-style: dashed;
            animation: rotate 20s infinite linear reverse;
        }

        .station-modules {
            position: absolute;
            width: 100%;
            height: 100%;
        }

        .module {
            width: 8px;
            height: 20px;
            background: linear-gradient(180deg, #fdcb6e, #e17055);
            border-radius: 4px;
            position: absolute;
            box-shadow: 0 0 10px rgba(253, 203, 110, 0.5);
        }

        .module:nth-child(1) { top: -10px; left: 50%; transform: translateX(-50%); }
        .module:nth-child(2) { bottom: -10px; left: 50%; transform: translateX(-50%); }
        .module:nth-child(3) { top: 50%; left: -10px; transform: translateY(-50%) rotate(90deg); }
        .module:nth-child(4) { top: 50%; right: -10px; transform: translateY(-50%) rotate(90deg); }

        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Flota de naves */
        .fleet {
            position: absolute;
            bottom: 25%;
            left: 5%;
            animation: fleet-movement 20s infinite ease-in-out;
        }

        .ship {
            width: 0;
            height: 0;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-bottom: 20px solid #00cec9;
            position: absolute;
            filter: drop-shadow(0 0 8px rgba(0, 206, 201, 0.8));
        }

        .ship:nth-child(1) { transform: rotate(15deg); left: 0px; top: 0px; }
        .ship:nth-child(2) { transform: rotate(-10deg); left: 25px; top: 15px; animation-delay: -2s; }
        .ship:nth-child(3) { transform: rotate(5deg); left: 50px; top: -10px; animation-delay: -4s; }

        @keyframes fleet-movement {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-15px) translateX(20px); }
            50% { transform: translateY(-5px) translateX(40px); }
            75% { transform: translateY(-20px) translateX(20px); }
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
            max-width: 1000px;
            padding: 50px;
        }

        .title {
            font-size: 3.2rem;
            font-weight: bold;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #ff7675 0%, #fd79a8 50%, #fdcb6e 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0 0 40px rgba(255, 118, 117, 0.5);
            animation: titleGlow 4s infinite alternate;
            line-height: 1.1;
        }

        @keyframes titleGlow {
            0% { filter: brightness(1) saturate(1); }
            100% { filter: brightness(1.3) saturate(1.2); }
        }

        .subtitle {
            font-size: 1.4rem;
            margin-bottom: 30px;
            opacity: 0.9;
            font-weight: 300;
            letter-spacing: 1.5px;
        }

        .description {
            font-size: 1.1rem;
            line-height: 1.7;
            opacity: 0.85;
            max-width: 800px;
            margin: 0 auto 40px;
        }

        /* Meteoros */
        .meteors {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .meteor {
            position: absolute;
            width: 2px;
            height: 40px;
            background: linear-gradient(180deg, rgba(255, 255, 255, 1), transparent);
            animation: meteorFall 8s infinite linear;
        }

        .meteor:nth-child(1) { 
            left: 20%; 
            animation-delay: 0s;
            animation-duration: 6s;
        }
        .meteor:nth-child(2) { 
            left: 60%; 
            animation-delay: -3s;
            animation-duration: 8s;
        }
        .meteor:nth-child(3) { 
            left: 80%; 
            animation-delay: -6s;
            animation-duration: 7s;
        }

        @keyframes meteorFall {
            0% { 
                transform: translateY(-100px) translateX(0px) rotate(45deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% { 
                transform: translateY(100vh) translateX(-100px) rotate(45deg);
                opacity: 0;
            }
        }

        /* Red de conexiones */
        .network {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0.3;
        }

        .connection {
            position: absolute;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(116, 185, 255, 0.8), transparent);
            animation: networkPulse 6s infinite ease-in-out;
        }

        .connection1 {
            width: 180px;
            top: 30%;
            left: 15%;
            transform: rotate(30deg);
        }

        .connection2 {
            width: 150px;
            bottom: 35%;
            right: 20%;
            transform: rotate(-45deg);
            animation-delay: -2s;
        }

        .connection3 {
            width: 120px;
            top: 60%;
            left: 40%;
            transform: rotate(15deg);
            animation-delay: -4s;
        }

        @keyframes networkPulse {
            0%, 100% { 
                opacity: 0; 
                transform-origin: left; 
                transform: scaleX(0) rotate(var(--rotation, 0deg)); 
            }
            50% { 
                opacity: 0.8; 
                transform: scaleX(1) rotate(var(--rotation, 0deg)); 
            }
        }

        .connection1 { --rotation: 30deg; }
        .connection2 { --rotation: -45deg; }
        .connection3 { --rotation: 15deg; }

        /* Partículas de energía */
        .energy-particles {
            position: absolute;
            width: 100%;
            height: 100%;
        }

        .energy-particle {
            position: absolute;
            width: 3px;
            height: 3px;
            background: #00cec9;
            border-radius: 50%;
            animation: energyFloat 15s infinite linear;
            box-shadow: 0 0 6px rgba(0, 206, 201, 0.8);
        }

        .energy-particle:nth-child(1) { left: 10%; animation-delay: 0s; }
        .energy-particle:nth-child(2) { left: 30%; animation-delay: -3s; }
        .energy-particle:nth-child(3) { left: 50%; animation-delay: -6s; }
        .energy-particle:nth-child(4) { left: 70%; animation-delay: -9s; }
        .energy-particle:nth-child(5) { left: 90%; animation-delay: -12s; }

        @keyframes energyFloat {
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
                transform: translateY(-50px) scale(1);
                opacity: 0;
            }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .title {
                font-size: 2.4rem;
            }
            
            .subtitle {
                font-size: 1.1rem;
            }
            
            .description {
                font-size: 1rem;
            }
            
            .content {
                padding: 30px 20px;
            }
            
            .space-station {
                width: 80px;
                height: 80px;
                top: 15%;
                right: 5%;
            }
            
            .station-core {
                width: 40px;
                height: 40px;
            }
            
            .station-ring {
                width: 80px;
                height: 80px;
            }
        }
</style>
