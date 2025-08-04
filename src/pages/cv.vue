<script setup lang="ts">
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import NebulaSatellites from "../components/NebulaSatellites.vue";
import TimelineItem from "../components/TimelineItem.vue";
import CvSidebar from "../components/CvSidebar.vue";

import { onMounted } from "vue";

// Crear estrellas animadas

// Inicializar cuando se carga el DOM
onMounted(() => {
  // Animación de aparición secuencial de los timeline items
  const timelineItems = document.querySelectorAll(".timeline__item");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.animation =
            "slideIn 0.8s ease-out forwards";
        }
      });
    },
    { threshold: 0.1 }
  );

  timelineItems.forEach((item) => {
    observer.observe(item);
  });

  timelineItems.forEach((item) => {
    fadeInObserver.observe(item);
  });
});

// Animación de escritura para los badges de logros
function animateAchievementBadges() {
  const badges = document.querySelectorAll(".achievement-badge");
  badges.forEach((badge, index) => {
    const el = badge as HTMLElement;
    el.style.opacity = "0";
    el.style.transform = "scale(0.8)";

    setTimeout(() => {
      el.style.transition = "all 0.5s ease";
      el.style.opacity = "1";
      el.style.transform = "scale(1)";
    }, index * 200);
  });
}

// Intersection Observer para animaciones cuando los elementos entran en vista
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");

      // Si es el primer timeline item, anima los badges
      if (
        entry.target.classList.contains("timeline__item") &&
        entry.target === document.querySelector(".timeline__item")
      ) {
        setTimeout(animateAchievementBadges, 800);
      }
    }
  });
}, observerOptions);

// Aplicar observer a todos los timeline items
document.addEventListener("DOMContentLoaded", function () {});

// Efecto de partículas adicionales al hacer scroll
let particleCount = 0;
window.addEventListener("scroll", () => {
  particleCount++;
  if (particleCount % 10 === 0) {
    // Crear partícula cada 10 scrolls
    createScrollParticle();
  }
});

function createScrollParticle() {
  const particle = document.createElement("div");
  particle.style.position = "fixed";
  particle.style.width = "3px";
  particle.style.height = "3px";
  particle.style.background = "#74b9ff";
  particle.style.borderRadius = "50%";
  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.top = "100vh";
  particle.style.pointerEvents = "none";
  particle.style.zIndex = "5";
  particle.style.boxShadow = "0 0 10px #74b9ff";

  document.body.appendChild(particle);

  // Animar la partícula hacia arriba
  let position = window.innerHeight;
  const animate = () => {
    position -= 2;
    particle.style.top = position + "px";
    particle.style.opacity = String(position / window.innerHeight);

    if (position > -10) {
      requestAnimationFrame(animate);
    } else {
      document.body.removeChild(particle);
    }
  };

  requestAnimationFrame(animate);
}

// Easter egg: Konami code para modo "hyperdrive"
let konamiCode: String[] = [];
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.code);
  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }

  if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
    activateHyperdrive();
    konamiCode = [];
  }
});

function activateHyperdrive() {
  document.body.style.animation = "hyperdrive 3s ease-in-out";

  // Crear efecto de líneas de velocidad
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const line = document.createElement("div");
      line.style.position = "fixed";
      line.style.width = "2px";
      line.style.height = "100px";
      line.style.background =
        "linear-gradient(180deg, transparent, #74b9ff, transparent)";
      line.style.left = Math.random() * window.innerWidth + "px";
      line.style.top = "-100px";
      line.style.pointerEvents = "none";
      line.style.zIndex = "1000";

      document.body.appendChild(line);

      line.animate(
        [
          { transform: "translateY(-100px)", opacity: 0 },
          { transform: "translateY(0px)", opacity: 1 },
          { transform: "translateY(100vh)", opacity: 0 },
        ],
        {
          duration: 500,
          easing: "ease-out",
        }
      ).onfinish = () => {
        document.body.removeChild(line);
      };
    }, i * 20);
  }
}

// CSS adicional para la animación hyperdrive
const hyperdriveCSS = `
            @keyframes hyperdrive {
                0% { filter: blur(0px) brightness(1); }
                50% { filter: blur(2px) brightness(1.5); }
                100% { filter: blur(0px) brightness(1); }
            }
        `;

const style = document.createElement("style");
style.textContent = hyperdriveCSS;
document.head.appendChild(style);
</script>

<template>
  <NebulaSatellites />

  <Header />

  <!-- Contenido principal -->
  <main class="cv-page">
    <div class="cv-page__container">
      <!-- Header del CV -->
      <div class="cv-header">
        <h1 class="cv-header__title">Trayectoria Profesional</h1>
        <h2 class="cv-header__subtitle">
          Un viaje a través del cosmos del Engineering Management
        </h2>
      </div>

      <!-- Timeline de experiencia -->
      <div class="timeline">
        <div class="timeline__wrapper">
          <!-- Experiencia actual -->
          <TimelineItem
            period="Marzo 2022 - Presente"
            title="Engineering Manager"
            company="Seedtag"
          >
            <p>
              Lidero el equipo de ingeniería en la línea de negocio Ad exchange / open
              marketplace de Seedtag, trabajando en la fase de scale-up del vertical.
            </p>

            <div style="margin: 1rem 0">
              <span class="achievement-badge">180B eventos/día</span>
              <span class="achievement-badge">600K páginas/hora</span>
              <span class="achievement-badge">1.5PB CDN/mes</span>
              <span class="achievement-badge">5TB datos/día</span>
            </div>

            <ul>
              <li>
                <strong>Team Scaling:</strong> Expandí de 5 a 20 miembros, gestionando el
                proceso de hiring completo
              </li>
              <li>
                <strong>Crecimiento Anual:</strong> Logré un incremento anual del 70% al
                100% de 2022 a 2024
              </li>
              <li>
                <strong>Engineering Management:</strong> Gestión directa e indirecta de 16
                ingenieros
              </li>
              <li>
                <strong>Mejora del Delivery:</strong> Reduje el cycle time en un 66%
              </li>
              <li>
                <strong>Desarrollo del Equipo:</strong> Conseguí dos promociones y dos
                cambios de rol en el último año
              </li>
            </ul>
          </TimelineItem>

          <TimelineItem
            period="Marzo 2020 - Marzo 2022"
            title="Engineering Team Lead"
            company="Jeffapp"
          >
            <p>
              Engineering Team Lead en el squad de Internal Users y posteriormente en los
              nuevos squads de Services Entrepreneurs y Laundry Entrepreneurs.
            </p>
            <ul>
              <li>Alineación de propósito y compartir contexto</li>
              <li>Trabajo estrecho con product manager y product designer</li>
              <li>Fomentar la cultura de producto dentro del equipo</li>
              <li>Ayudar a los ingenieros con su crecimiento</li>
              <li>Responsable del hiring del equipo</li>
            </ul>
          </TimelineItem>

          <TimelineItem
            period="Diciembre 2019 - Febrero 2020"
            title="Senior Frontend Product Engineer"
            company="Jeffapp"
          >
            <p>
              Desarrollo del Backoffice platform que sirve como herramienta interna para
              dar soporte a nuestros franquiciados.
            </p>
            <ul>
              <li>
                Definir e implementar la arquitectura frontend con aplicaciones Vue en
                contenedores docker
              </li>
              <li>
                Responsable de asegurar la implementación de un design system en el back
                office
              </li>
              <li>Mejorar el proceso de Continuous Delivery</li>
              <li>Mentoring a otros miembros del equipo</li>
            </ul>
          </TimelineItem>

          <TimelineItem
            period="Enero 2017 - Octubre 2019"
            title="Technical Consultant"
            company="The Serious & The Influence Mafia"
          >
            <p>
              Consultoría en nuevas tecnologías y procesos digitales para múltiples
              clientes.
            </p>
            <ul>
              <li>Consultoría en nuevas tecnologías y procesos digitales</li>
              <li>Ayuda en la gestión y desarrollo de proyectos digitales</li>
              <li>Asesoramiento en formas de escalar</li>
            </ul>
            <div style="margin-top: 1rem">
              <strong>Clientes:</strong> Generalitat Valenciana, Natural de montaña,
              Sofffood, Nación Sushi, Vayoil Textil, Smattex
            </div>
          </TimelineItem>

          <TimelineItem
            period="Septiembre 2017 - Septiembre 2019"
            title="Senior Frontend and Product Developer"
            company="WAM We Are Marketing"
          >
            <p>
              Desarrollo de productos para creación de landings y páginas web basadas en
              drag & drop.
            </p>
            <ul>
              <li>
                Desarrollo de producto para crear landings y páginas web basado en drag &
                drop
              </li>
              <li>Desarrollo de producto de paneles de datos</li>
              <li>Gestión y configuración de NPM Proxy interno</li>
              <li>Gestión y evolución del stack del equipo</li>
              <li>Desarrollo de funcionalidad compleja en Vuejs</li>
            </ul>
          </TimelineItem>
        </div>
      </div>

      <CvSidebar />
    </div>
  </main>

  <Footer />
</template>

<style lang="postcss" scoped>
/* Contenido principal */
.cv-page {
  margin-top: 80px;
  position: relative;
  z-index: 10;
  padding: 2rem;
}

.cv-page__container {
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 1400px) {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 3rem;
    align-items: start;
  }
}

/* Header espacial del CV */
.cv-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;

  @media (min-width: 1400px) {
    grid-column: 1 / -1;
  }
}

.cv-header__title {
  font-family: var(--primary-font);
  font-weight: 700;
  font-size: 2.5rem;
  background: linear-gradient(
    135deg,
    var(--secondary-accent-1-color) 0%,
    var(--secondary-accent-3-color) 50%,
    var(--secondary-accent-6-color) 100%
  );
  background: var(--title);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  animation: titleGlow 4s infinite alternate;
  text-shadow: var(--title-shadow);

  @media (min-width: 768px) {
    font-size: clamp(3rem, 6vw, 5rem);
  }
}

@keyframes titleGlow {
  0% {
    filter: brightness(1) saturate(1);
  }
  100% {
    filter: brightness(1.3) saturate(1.2);
  }
}

.cv-header__subtitle {
  font-size: 1.1rem;
  margin-bottom: 30px;
  opacity: 0.9;
  font-weight: 300;
  letter-spacing: 2px;

  /* Responsive */
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
}

/* Timeline espacial */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 1400px) {
    grid-column: 1;
  }
}

.timeline__wrapper {
  position: relative;
}

.timeline__wrapper::before {
  content: "";
  position: absolute;
  left: 50%;
  left: 2rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    180deg,
    var(--secondary-accent-1-color),
    var(--secondary-accent-3-color),
    var(--secondary-accent-6-color)
  );
  transform: translateX(-50%);
  animation: timelineGlow 3s infinite alternate;

  @media (min-width: 1200px) {
    left: 50%;
  }
}

@keyframes timelineGlow {
  0% {
    box-shadow: 0 0 10px var(--secondary-accent-1-color);
  }
  100% {
    box-shadow: 0 0 20px var(--secondary-accent-3-color);
  }
}

.achievement-badge {
  display: inline-block;
  background: rgba(255, 140, 66, 0.1);
  color: var(--secondary-accent-1-color);
  background: rgba(255, 140, 66, 0.1);
  color: var(--accent-color);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  margin: 0.3rem 0.3rem 0.3rem 0;
  border: 1px solid rgba(255, 140, 66, 0.3);
}

/* Scroll personalizado */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(13, 27, 42, 0.5);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(
    180deg,
    var(--secondary-accent-1-color),
    var(--secondary-accent-3-color)
  );
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(
    180deg,
    var(--secondary-accent-3-color),
    var(--secondary-accent-6-color)
  );
}
</style>
