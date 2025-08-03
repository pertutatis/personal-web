<script setup lang="ts">
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";

import { onMounted } from "vue";

// Crear estrellas animadas

// Inicializar cuando se carga el DOM
onMounted(() => {
  // Animación de aparición secuencial de los timeline items
  const timelineItems = document.querySelectorAll(".timeline-item");
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

  const timelineContents = document.querySelectorAll(".timeline-content");

  timelineContents.forEach((content) => {
    content.addEventListener("mouseenter", function (this: HTMLElement) {
      this.style.transform = "translateY(-15px) scale(1.02)";
      this.style.boxShadow = "0 25px 50px rgba(116, 185, 255, 0.3)";
    });

    content.addEventListener("mouseleave", function (this: HTMLElement) {
      this.style.transform = "translateY(0) scale(1)";
      this.style.boxShadow = "0 20px 40px rgba(116, 185, 255, 0.2)";
    });
  });

  timelineItems.forEach((item) => {
    fadeInObserver.observe(item);
  });
});

// Efecto parallax suave para las nebulosas
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const nebula1 = document.querySelector(".nebula1") as HTMLElement | null;
  const nebula2 = document.querySelector(".nebula2") as HTMLElement | null;

  if (nebula1 && nebula2) {
    nebula1.style.transform = `translateY(${scrolled * 0.5}px) rotate(${
      scrolled * 0.1
    }deg)`;
    nebula2.style.transform = `translateY(${-scrolled * 0.3}px) rotate(${
      -scrolled * 0.1
    }deg)`;
  }
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
        entry.target.classList.contains("timeline-item") &&
        entry.target === document.querySelector(".timeline-item")
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
  <!-- Nebulosas -->
  <div v-for="n in 2" :key="n" class="nebula nebula--{{ n }}"></div>

  <!-- Satélites decorativos -->
  <div class="satellites">
    <div v-for="n in 3" :key="n" class="satellite"></div>
  </div>

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
          <div class="timeline__item">
            <div class="timeline__node"></div>
            <div class="timeline__content job">
              <div class="job__period">Marzo 2022 - Presente</div>
              <h3 class="job__title">Engineering Manager</h3>
              <p class="job__company">Seedtag</p>
              <div class="job__description">
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
                    <strong>Team Scaling:</strong> Expandí de 5 a 20 miembros, gestionando
                    el proceso de hiring completo
                  </li>
                  <li>
                    <strong>Crecimiento Anual:</strong> Logré un incremento anual del 70%
                    al 100% de 2022 a 2024
                  </li>
                  <li>
                    <strong>Engineering Management:</strong> Gestión directa e indirecta
                    de 16 ingenieros
                  </li>
                  <li>
                    <strong>Mejora del Delivery:</strong> Reduje el cycle time en un 66%
                  </li>
                  <li>
                    <strong>Desarrollo del Equipo:</strong> Conseguí dos promociones y dos
                    cambios de rol en el último año
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="timeline__item">
            <div class="timeline__node"></div>
            <div class="timeline__content job">
              <div class="job__period">Marzo 2020 - Marzo 2022</div>
              <h3 class="job__title">Engineering Team Lead</h3>
              <p class="job__company">Jeffapp</p>
              <div class="job__description">
                <p>
                  Engineering Team Lead en el squad de Internal Users y posteriormente en
                  los nuevos squads de Services Entrepreneurs y Laundry Entrepreneurs.
                </p>
                <ul>
                  <li>Alineación de propósito y compartir contexto</li>
                  <li>Trabajo estrecho con product manager y product designer</li>
                  <li>Fomentar la cultura de producto dentro del equipo</li>
                  <li>Ayudar a los ingenieros con su crecimiento</li>
                  <li>Responsable del hiring del equipo</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="timeline__item">
            <div class="timeline__node"></div>
            <div class="timeline__content job">
              <div class="job__period">Diciembre 2019 - Febrero 2020</div>
              <h3 class="job__title">Senior Frontend Product Engineer</h3>
              <p class="job__company">Jeffapp</p>
              <div class="job__description">
                <p>
                  Desarrollo del Backoffice platform que sirve como herramienta interna
                  para dar soporte a nuestros franquiciados.
                </p>
                <ul>
                  <li>
                    Definir e implementar la arquitectura frontend con aplicaciones Vue en
                    contenedores docker
                  </li>
                  <li>
                    Responsable de asegurar la implementación de un design system en el
                    back office
                  </li>
                  <li>Mejorar el proceso de Continuous Delivery</li>
                  <li>Mentoring a otros miembros del equipo</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="timeline__item">
            <div class="timeline__node"></div>
            <div class="timeline__content job">
              <div class="job__period">Enero 2017 - Octubre 2019</div>
              <h3 class="job__title">Technical Consultant</h3>
              <p class="job__company">The Serious & The Influence Mafia</p>
              <div class="job__description">
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
              </div>
            </div>
          </div>

          <div class="timeline__item">
            <div class="timeline__node"></div>
            <div class="timeline__content job">
              <div class="job__period">Septiembre 2017 - Septiembre 2019</div>
              <h3 class="job__title">Senior Frontend and Product Developer</h3>
              <p class="job__company">WAM We Are Marketing</p>
              <div class="job__description">
                <p>
                  Desarrollo de productos para creación de landings y páginas web basadas
                  en drag & drop.
                </p>
                <ul>
                  <li>
                    Desarrollo de producto para crear landings y páginas web basado en
                    drag & drop
                  </li>
                  <li>Desarrollo de producto de paneles de datos</li>
                  <li>Gestión y configuración de NPM Proxy interno</li>
                  <li>Gestión y evolución del stack del equipo</li>
                  <li>Desarrollo de funcionalidad compleja en Vuejs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar espacial -->
      <div class="sidebar">
        <h3>🚀 Estación de Contacto</h3>
        <ul class="contact-info">
          <li>
            <div class="contact-info__icon">🔗</div>
            <span>linkedin.com/in/diego-pertusa</span>
          </li>
          <li>
            <div class="contact-info__icon">📍</div>
            <span>Valencia, España</span>
          </li>
        </ul>

        <div class="skills">
          <div class="skill__category">
            <h4>🎯 Core Skills</h4>
            <div class="skills__list">
              <span class="skill__tag">Liderazgo</span>
              <span class="skill__tag">Gestión equipos</span>
              <span class="skill__tag">Comunicación</span>
              <span class="skill__tag">Radical Candor</span>
              <span class="skill__tag">Transparencia</span>
              <span class="skill__tag">Ownership</span>
            </div>
          </div>

          <div class="skill__category">
            <h4>🌐 Idiomas</h4>
            <div class="skills__list">
              <span class="skill__tag">Español</span>
              <span class="skill__tag">Francés</span>
              <span class="skill__tag">Inglés</span>
            </div>
          </div>

          <div class="skill__category">
            <h4>🎓 Formación</h4>
            <div class="skills__list">
              <span class="skill__tag">IGNITE Program</span>
              <span class="skill__tag">ID3 Postgraduate</span>
              <span class="skill__tag">Ing. Diseño UPV</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <Footer />
</template>

<style lang="postcss" scoped>
/* Nebulosas de fondo */
.nebula {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
}

.nebula--1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(116, 185, 255, 0.1) 0%,
    rgba(162, 155, 254, 0.05) 30%,
    transparent 70%
  );
  top: -200px;
  right: -200px;
  animation: nebulaPulse 20s infinite ease-in-out;
}

.nebula--2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(253, 121, 168, 0.08) 0%,
    rgba(255, 127, 71, 0.04) 40%,
    transparent 80%
  );
  bottom: -150px;
  left: -150px;
  animation: nebulaPulse 25s infinite ease-in-out alternate;
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
}

/* Header espacial del CV */
.cv-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
}

.cv-header__title {
  font-family: var(--primary-font);
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
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
  font-size: 1.3rem;
  margin-bottom: 30px;
  opacity: 0.9;
  font-weight: 300;
  letter-spacing: 2px;
}

/* Responsive */
@media (max-width: 768px) {
  .cv-subtitle {
    font-size: 1.1rem;
  }
}

/* Timeline espacial */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline__wrapper {
  position: relative;
}

.timeline__wrapper::before {
  content: "";
  position: absolute;
  left: 50%;
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
}

@keyframes timelineGlow {
  0% {
    box-shadow: 0 0 10px var(--secondary-accent-1-color);
  }
  100% {
    box-shadow: 0 0 20px var(--secondary-accent-3-color);
  }
}

.timeline__item {
  position: relative;
  margin-bottom: 4rem;
  opacity: 1;
  animation: slideIn 0.8s ease-out forwards;
}

.timeline__item:nth-child(odd) {
  animation-delay: 0.2s;
}

.timeline__item:nth-child(even) {
  animation-delay: 0.4s;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.timeline__content {
  width: 45%;
  padding: 2rem;
  background: rgba(13, 27, 42, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(116, 185, 255, 0.2);
  border-radius: 20px;
  position: relative;
  transition: all 0.3s ease;
}

.timeline__content:hover {
  /* transform: translateY(-10px); */
  box-shadow: 0 20px 40px rgba(116, 185, 255, 0.2);
  border-color: var(--secondary-accent-1-color);
}

.timeline__item:nth-child(odd) .timeline__content {
  margin-left: 0;
}

.timeline__item:nth-child(even) .timeline__content {
  margin-left: 55%;
}

/* Nodo espacial en el timeline */
.timeline__node {
  position: absolute;
  left: 50%;
  top: 50px;
  width: 20px;
  height: 20px;
  background: linear-gradient(
    135deg,
    var(--secondary-accent-1-color),
    var(--secondary-accent-3-color)
  );
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 10;
  animation: nodePulse 2s infinite;
  box-shadow: 0 0 20px rgba(116, 185, 255, 0.8);
}

@keyframes nodePulse {
  0%,
  100% {
    transform: translateX(-50%) scale(1);
  }
  50% {
    transform: translateX(-50%) scale(1.3);
  }
}

.timeline__node::before {
  content: "";
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--secondary-accent-1-color),
    var(--secondary-accent-3-color)
  );
  z-index: -1;
  filter: blur(10px);
  opacity: 0.5;
}

/* Conectores hacia el nodo */
.timeline__content::before {
  content: "";
  position: absolute;
  top: 60px;
  width: 54px;
  height: 2px;
  background: linear-gradient(
    90deg,
    var(--secondary-accent-1-color),
    var(--secondary-accent-3-color)
  );
  transform: translateY(-50%);
}

.timeline__item:nth-child(odd) .timeline__content::before {
  right: -55px;
}

.timeline__item:nth-child(even) .timeline__content::before {
  left: -55px;
}

/* Contenido de cada experiencia */
.job__period {
  display: inline-block;
  background: linear-gradient(
    135deg,
    var(--secondary-accent-5-color),
    var(--secondary-accent-7-color)
  );
  color: var(--dark-color);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.job__title {
  font-family: var(--primary-font);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--light-color);
  margin-bottom: 0.5rem;
}

.job__company {
  font-size: 1.1rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
  font-weight: 500;
}

.job__description {
  color: var(--light-color);
  line-height: 1.7;
  opacity: 0.9;
}

.job__description ul {
  margin-top: 1rem;
  padding-left: 1.5rem;
}

.job__description li {
  margin-bottom: 0.8rem;
  position: relative;
}

.job__description li::marker {
  color: var(--secondary-accent-5-color);
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

/* Sección lateral (sidebar espacial) */
.sidebar {
  background: rgba(13, 27, 42, 0.8);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(116, 185, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 4rem;
}

.sidebar h3 {
  font-family: var(--primary-font);
  color: var(--secondary-accent-1-color);
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.2rem;
}

.contact-info {
  list-style: none;
  margin-bottom: 2rem;
}

.contact-info li {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.9rem;
}

.contact-info__icon {
  width: 20px;
  height: 20px;
  background: var(--secondary-accent-1-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: var(--dark-color);
}

.skills {
  margin-bottom: 2rem;
}

.skill__category {
  margin-bottom: 1.5rem;
}

.skill__category h4 {
  color: var(--secondary-accent-3-color);
  font-size: 1rem;
  margin-bottom: 0.8rem;
  font-family: var(--primary-font);
}

.skills__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill__tag {
  background: rgba(116, 185, 255, 0.1);
  color: var(--secondary-accent-1-color);
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(116, 185, 255, 0.3);
  transition: all 0.3s ease;
}

.skill__tag:hover {
  background: rgba(116, 185, 255, 0.2);
  transform: scale(1.05);
}

/* Satélites decorativos */
.satellites {
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

.satellite {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(
    135deg,
    var(--secondary-accent-1-color),
    var(--secondary-accent-3-color)
  );
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(116, 185, 255, 0.8);
  animation: orbit 40s infinite linear;
}

.satellite::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(116, 185, 255, 0.6), transparent);
  top: 50%;
  left: -6px;
  transform: translateY(-50%);
}

.satellite:nth-child(1) {
  top: 20%;
  left: 15%;
  animation-duration: 35s;
}

.satellite:nth-child(2) {
  top: 60%;
  right: 20%;
  animation-duration: 45s;
  animation-delay: -15s;
}

.satellite:nth-child(3) {
  bottom: 30%;
  left: 25%;
  animation-duration: 38s;
  animation-delay: -25s;
}

@keyframes orbit {
  0% {
    transform: rotate(0deg) translateX(40px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(40px) rotate(-360deg);
  }
}

/* Responsive */
@media (max-width: 1400px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 3rem;
    align-items: start;
  }

  .cv-header {
    grid-column: 1 / -1;
  }

  .timeline {
    grid-column: 1;
  }

  .sidebar {
    grid-column: 2;
    position: sticky;
    top: 100px;
    height: fit-content;
  }
}

@media (max-width: 1200px) {
  .container {
    display: block;
  }

  .sidebar {
    position: static;
    width: 100%;
    margin: 2rem auto;
    transform: none;
    max-height: none;
  }

  .timeline::before {
    left: 2rem;
  }

  .timeline-node {
    left: 2rem;
  }

  .timeline-content {
    width: calc(100% - 6rem);
    margin-left: 6rem !important;
  }

  .timeline-content::before {
    left: -30px !important;
    right: auto !important;
  }
}

@media (max-width: 768px) {
  .cv-header__title {
    font-size: 2.5rem;
  }

  .timeline-content {
    padding: 1.5rem;
  }

  .job__title {
    font-size: 1.2rem;
  }

  .satellites {
    display: none;
  }
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
