<script setup lang="ts">
import portraitUrl from "../assets/foto.webp";
</script>

<template>
  <aside class="author-box" aria-label="Sobre el autor">
    <img
      class="author-box__photo"
      :src="portraitUrl"
      alt="Diego Pertusa"
      width="64"
      height="64"
      loading="lazy"
      decoding="async"
    />
    <div class="author-box__content">
      <p class="author-box__name">
        <router-link to="/cv/" rel="author">Diego Pertusa Irles</router-link>
      </p>
      <p class="author-box__bio">
        Engineering Leader · Engineering Manager en Seedtag. Escribo sobre liderazgo, hiring y
        cultura en equipos de ingeniería.
      </p>
      <p class="author-box__links">
        <router-link to="/cv/">Ver CV</router-link>
        <span aria-hidden="true">·</span>
        <a href="https://www.linkedin.com/in/diego-pertusa/" target="_blank" rel="noopener"
          >LinkedIn</a
        >
      </p>
    </div>
  </aside>
</template>

<style lang="postcss" scoped>
.author-box {
  display: flex;
  gap: calc(var(--base) * 2.5);
  align-items: flex-start;
  margin: calc(var(--base) * 6) 0 calc(var(--base) * 4);
  padding-top: calc(var(--base) * 4);
  border-top: 1px solid var(--accent-color-03);
}

.author-box__photo {
  flex: 0 0 auto;
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

.author-box__content p {
  margin-bottom: var(--base);
}

.author-box__name {
  font-weight: var(--bold);

  a {
    color: var(--title-color);
    text-decoration: none;

    &:hover {
      color: var(--accent-text-color);
    }
  }
}

.author-box__bio {
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
}

.author-box__links {
  display: flex;
  gap: var(--base);
  font-family: var(--secondary-font);
  font-size: var(--text-sm);
}
</style>
