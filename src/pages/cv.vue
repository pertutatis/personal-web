<script setup lang="ts">
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import NebulaSatellites from "../components/NebulaSatellites.vue";
import type { Ref } from "vue";
import { ref } from "vue";
import usePageMeta from "../composables/usePageMeta";
import useStickySidebar from "../composables/useStickySidebar";
import { buildStaticPageMeta } from "../module/presentation/pageMeta";
import {
  cvHeadline,
  cvMetrics,
  cvRoles,
  cvEarlierCareerSummary,
  cvEarlierRoles,
  cvLinkedInUrl,
  cvSidebarSections,
} from "../content/cv";

usePageMeta(() => buildStaticPageMeta("cv"));

const sidebar: Ref<HTMLElement | null> = ref(null);
// Same gaps as the CSS: fixed header above (base * 12), breathing room below (base * 4)
useStickySidebar(sidebar, { topGap: 96, bottomGap: 32 });
</script>

<template>
  <NebulaSatellites />

  <Header />

  <main class="cv-page">
    <div class="cv-page__container">
      <header class="cv-header">
        <p class="cv-header__name">Diego Pertusa Irles</p>
        <h1 class="cv-header__title">{{ cvHeadline.title }}</h1>
        <p class="cv-header__subtitle">{{ cvHeadline.summary }}</p>
      </header>

      <ul class="cv-metrics" aria-label="Key figures">
        <li v-for="metric in cvMetrics" :key="metric.label" class="cv-metrics__item">
          <strong class="cv-metrics__value">{{ metric.value }}</strong>
          <span class="cv-metrics__label">{{ metric.label }}</span>
        </li>
      </ul>

      <div class="cv-content">
        <section class="cv-section" aria-labelledby="cv-experience">
          <h2 id="cv-experience" class="cv-section__title">Experience</h2>

          <div class="cv-timeline">
            <article v-for="role in cvRoles" :key="role.company" class="cv-role">
              <span class="cv-timeline__node" aria-hidden="true" />
              <header class="cv-role__header">
                <p class="cv-role__period">{{ role.period }}</p>
                <h3 class="cv-role__title">{{ role.title }}</h3>
                <p class="cv-role__company">{{ role.company }}</p>
              </header>
              <p class="cv-role__summary">{{ role.summary }}</p>

                <template v-for="group in role.highlightGroups" :key="group.title">
                  <h4 class="cv-role__group">{{ group.title }}</h4>
                  <ul class="cv-role__highlights">
                    <li
                      v-for="highlight in group.items"
                      :key="highlight.title"
                      class="cv-highlight"
                    >
                      <strong class="cv-highlight__title">{{ highlight.title }}</strong>
                      {{ " " }}
                      <span class="cv-highlight__text">{{ highlight.text }}</span>
                    </li>
                  </ul>
                </template>
            </article>
          </div>
        </section>

        <section class="cv-section" aria-labelledby="cv-earlier">
          <h2 id="cv-earlier" class="cv-section__title">Earlier career</h2>
          <p class="cv-section__intro">{{ cvEarlierCareerSummary }}</p>

          <ul class="cv-timeline cv-timeline--faded cv-earlier">
            <li
              v-for="role in cvEarlierRoles"
              :key="role.company + role.title"
              class="cv-earlier__item"
            >
              <span
                class="cv-timeline__node cv-timeline__node--small"
                aria-hidden="true"
              />
              <span class="cv-earlier__title">{{ role.title }}</span>
              <span class="cv-earlier__company">{{ role.company }}</span>
              <span class="cv-earlier__period">{{ role.period }}</span>
            </li>
          </ul>
        </section>
      </div>

      <aside ref="sidebar" class="cv-sidebar" aria-label="Profile details">
        <section class="cv-sidebar__section">
          <h2 class="cv-sidebar__title"><span aria-hidden="true">🚀</span> Contact</h2>
          <ul class="cv-sidebar__list">
            <li>
              <a :href="cvLinkedInUrl" target="_blank" rel="noopener">LinkedIn</a>
            </li>
            <li>Valencia, Spain</li>
          </ul>
        </section>

        <section
          v-for="section in cvSidebarSections"
          :key="section.title"
          class="cv-sidebar__section"
        >
          <h2 class="cv-sidebar__title">
            <span aria-hidden="true">{{ section.icon }}</span> {{ section.title }}
          </h2>
          <ul v-if="section.display === 'tags'" class="cv-sidebar__tags">
            <li v-for="item in section.items" :key="item.text">{{ item.text }}</li>
          </ul>
          <ul v-else class="cv-sidebar__list">
            <li v-for="item in section.items" :key="item.text">
              {{ item.text }}
              <span v-if="item.detail" class="cv-sidebar__detail">{{ item.detail }}</span>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  </main>

  <Footer />
</template>

<style lang="postcss" scoped>
/* The CV keeps its own blue and violet palette, apart from the blog accent */
.cv-page {
  --cv-accent: var(--secondary-accent-1-color);
  --cv-glass: rgba(var(--cv-color), 0.1);
  --cv-glass-border: rgba(var(--cv-color), 0.3);
  --cv-glow: rgba(116, 185, 255, 0.8);
  --cv-line: linear-gradient(
    180deg,
    var(--secondary-accent-1-color),
    var(--secondary-accent-3-color),
    var(--secondary-accent-6-color)
  );

  position: relative;
  z-index: 10;
  margin-top: calc(var(--base) * 10);
  padding: 0 calc(var(--base) * 3);

  @media (min-width: 768px) {
    padding: 0 calc(var(--base) * 4);
  }

  /* Light blue on cream is too faint for text: use the darker violet */
  @media (prefers-color-scheme: light) {
    --cv-accent: rgb(var(--secondary-accent-4-rgb));
    --cv-glow: rgba(118, 75, 162, 0.5);
  }
}

.cv-page__container {
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 300px;
    column-gap: calc(var(--base) * 8);
    align-items: start;
  }
}

/* Hero */
.cv-header {
  text-align: center;
  margin-bottom: calc(var(--base) * 6);

  @media (min-width: 1024px) {
    grid-column: 1 / -1;
  }
}

.cv-header__name {
  font-family: var(--secondary-font);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--cv-accent);
  margin-bottom: var(--base);
}

.cv-header__title {
  font-family: var(--primary-font);
  font-weight: var(--bold);
  /* Hero title of the CV, intentionally larger than the type scale */
  font-size: 2.5rem;
  background: var(--title);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: calc(var(--base) * 2);
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
  font-size: var(--text-lg);
  margin: 0 auto;
  max-width: 36rem;
}

/* Key figures: glass cards with the title gradient */
.cv-metrics {
  list-style: none;
  padding: 0;
  margin: 0 0 calc(var(--base) * 8);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: calc(var(--base) * 2);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-column: 1 / -1;
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}

.cv-metrics__item {
  margin: 0;
  padding: calc(var(--base) * 2.5) calc(var(--base) * 2);
  background: var(--cv-glass);
  border: 1px solid var(--cv-glass-border);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  text-align: center;
  transition: box-shadow var(--main-transition), border-color var(--main-transition);

  &:hover {
    border-color: var(--cv-accent);
    box-shadow: 0 0 24px rgba(var(--cv-color), 0.25);
  }
}

.cv-metrics__value {
  display: block;
  font-size: var(--text-xl);
  line-height: var(--leading-tight);
  background: var(--title);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cv-metrics__label {
  display: block;
  margin-top: var(--base);
  font-family: var(--secondary-font);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-label);
  line-height: 1.4;
}

/* Main column */
.cv-content {
  max-width: 46rem;
}

.cv-section {
  margin-bottom: calc(var(--base) * 8);
}

.cv-section__title {
  font-size: var(--text-xl);
  color: var(--cv-accent);
  margin-bottom: calc(var(--base) * 4);
}

/* Timeline: glowing gradient line with a node per role */
.cv-timeline {
  position: relative;
  padding-left: calc(var(--base) * 5);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(var(--base) * 1.25);
    width: 2px;
    background: var(--cv-line);
    animation: timelineGlow 3s infinite alternate;
  }
}

.cv-timeline--faded::before {
  opacity: 0.4;
  animation: none;
}

@keyframes timelineGlow {
  0% {
    box-shadow: 0 0 6px var(--secondary-accent-1-color);
  }
  100% {
    box-shadow: 0 0 16px var(--secondary-accent-3-color);
  }
}

.cv-timeline__node {
  position: absolute;
  top: calc(var(--base) * 0.5);
  left: calc(var(--base) * -4.75);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--secondary-accent-1-color),
    var(--secondary-accent-3-color)
  );
  box-shadow: 0 0 16px var(--cv-glow);
  animation: nodePulse 2.5s infinite ease-in-out;
}

.cv-timeline__node--small {
  top: calc(var(--base) * 2.25);
  left: calc(var(--base) * -4.25);
  width: 8px;
  height: 8px;
  box-shadow: 0 0 8px var(--cv-glow);
  animation: none;
}

@keyframes nodePulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
}

/* Roles sit directly on the timeline, without a box */
.cv-role {
  position: relative;
  margin-bottom: calc(var(--base) * 6);

  > :last-child {
    margin-bottom: 0;
  }
}

.cv-role__period {
  display: inline-block;
  padding: calc(var(--base) * 0.5) calc(var(--base) * 1.5);
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    var(--secondary-accent-5-color),
    var(--secondary-accent-7-color)
  );
  color: rgb(var(--dark-color));
  font-family: var(--secondary-font);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-label);
  margin-bottom: calc(var(--base) * 2);
}

.cv-role__title {
  font-size: var(--text-lg);
  /* overrides the global "p + h3" spacing: the period sits right above */
  margin-top: 0;
  margin-bottom: calc(var(--base) * 0.5);
}

.cv-role__company {
  font-family: var(--secondary-font);
  color: var(--cv-accent);
  margin-bottom: calc(var(--base) * 2);
}

.cv-role__group {
  font-size: var(--text-base);
  color: var(--cv-accent);
  margin-top: calc(var(--base) * 3);
}

/* Achievements in two columns, each titled with a monospaced label */
.cv-role__highlights {
  list-style: none;
  padding: 0;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: calc(var(--base) * 4);
  }
}

.cv-highlight {
  margin: 0 0 calc(var(--base) * 2.5);
}

.cv-highlight__title {
  display: block;
  margin-bottom: calc(var(--base) * 0.5);
  font-family: var(--secondary-font);
  font-size: var(--text-xs);
  font-weight: var(--regular);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--cv-accent);
}

.cv-highlight__text {
  font-size: var(--text-sm);
}

/* Earlier career: the same timeline, dimmed */
.cv-section__intro {
  max-width: 42rem;
}

.cv-earlier {
  list-style: none;
  margin: 0;
}

.cv-earlier__item {
  position: relative;
  display: grid;
  gap: calc(var(--base) * 0.5);
  padding: calc(var(--base) * 1.5) 0;
  margin: 0;
  border-bottom: 1px solid var(--cv-glass-border);

  @media (min-width: 768px) {
    /* fixed period column so every row shares the same columns */
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr) 7rem;
    gap: calc(var(--base) * 2);
    align-items: baseline;
  }
}

.cv-earlier__title {
  font-weight: var(--semibold);
}

.cv-earlier__company {
  font-size: var(--text-sm);
}

.cv-earlier__period {
  font-family: var(--secondary-font);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-label);
  color: var(--cv-accent);

  @media (min-width: 768px) {
    text-align: right;
  }
}

/* Sidebar: one glass panel, sections split by hairlines, sticky on desktop */
.cv-sidebar {
  padding: calc(var(--base) * 3);
  background: var(--cv-glass);
  border: 1px solid var(--cv-glass-border);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  margin-bottom: calc(var(--base) * 8);

  /* "top" is driven by useStickySidebar so a sidebar taller than the screen
     locks its bottom when scrolling down and its top when scrolling up */
  @media (min-width: 1024px) {
    position: sticky;
    top: calc(var(--base) * 12);
  }
}

.cv-sidebar__section + .cv-sidebar__section {
  margin-top: calc(var(--base) * 2.5);
  padding-top: calc(var(--base) * 2.5);
  border-top: 1px solid var(--cv-glass-border);
}

.cv-sidebar__title {
  font-size: var(--text-base);
  color: var(--cv-accent);
  margin-bottom: var(--base);
}

.cv-sidebar__list,
.cv-sidebar__tags {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: var(--text-sm);
  line-height: 1.5;

  li {
    margin: var(--base) 0;
  }
}

/* Focus areas: a plain list with glowing dots, no boxes inside the panel */
.cv-sidebar__tags li {
  position: relative;
  padding-left: calc(var(--base) * 2);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.6em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--cv-accent);
    box-shadow: 0 0 6px var(--cv-glow);
  }
}

.cv-sidebar__detail {
  display: block;
  font-family: var(--secondary-font);
  font-size: var(--text-xs);
  opacity: 0.75;
}
</style>
