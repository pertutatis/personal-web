<template>
  <div class="sidebar">
    <h3>🚀 Estación de Contacto</h3>
    <ul class="contact-info">
      <li>
        <div class="contact-info__icon">🔗</div>
        <a href="https://linkedin.com/in/diego-pertusa">/diego-pertusa</a>
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
</template>

<style lang="postcss" scoped>
/* Sección lateral (sidebar espacial) */
.sidebar {
  width: 100%;
  background: rgba(13, 27, 42, 0.8);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(116, 185, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  margin: 2rem auto;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }

  @media (min-width: 1400px) {
    grid-column: 2;
    position: sticky;
    top: 100px;
    height: fit-content;
  }
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

  @media (min-width: 1400px) {
    padding: 0.3rem 0.5rem;
  }
}

.skill__tag:hover {
  background: rgba(116, 185, 255, 0.2);
  transform: scale(1.05);
}
</style>
