<script setup lang="ts">
import Bio from './components/Bio.vue'
</script>

<template>
  <Bio />
</template>

<style lang="postcss">
/* ==================================== 
   Config
   ==================================== */

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto+Mono:wght@300&display=swap');
@import url("./assets/reset.css");

:root {
  --primary-font: "Montserrat", helvetica, arial, serif;
  --secondary-font: 'Roboto Mono', arial, serif;
  --primary-color: #00EECE;
  --secondary-color: #F8A85D;
  --dark-color: #31303A;
  --dark-secondary-color: #28282F;
  --dark-gray-color: #363636;
  --gray-color: #CECED3;
  --light-color: #F1F1F1;

  --base: 8px;
  --bold: 700;
  --medium: 500;
  --regular: 400;
  --light: 300;

  /* Light scheme */
  --accent-color: var(--primary-color);
  --background-color: var(--dark-color);
  --text-color: var(--gray-color);
  --title-color: var(--light-color);
}

@media (prefers-color-scheme: light) {
  :root {
    --accent-color: var(--primary-color);
    --background-color: var(--light-color);
    --text-color: var(--dark-gray-color);
    --title-color: var(--dark-color);
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --accent-color: var(--primary-color);
    --background-color: var(--dark-color);
    --text-color: var(--gray-color);
    --title-color: var(--light-color);
  }
}

/* ==================================== 
   Skeleton
   ==================================== */

html, body, #app {
  height: 100%;
}

body {
  background-color: var(--background-color);
  font-family: var(--secondary-font);
  font-size: calc(var(--base) * 2.5);
  font-weight: var(--light);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

.section {
  width: 100%;
  margin-top: calc(var(--base) * 6);
  margin-bottom: calc(var(--base) * 6);

  @media (min-width: 768px) {
    margin-top: calc(var(--base) * 10);
    margin-bottom: calc(var(--base) * 10);
  }

  @media (min-width: 1024px) {
    margin-top: calc(var(--base) * 13);
    margin-bottom: calc(var(--base) * 13);
  }
}

.section__wrapper {
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding-left: calc(var(--base) * 3);
  padding-right: calc(var(--base) * 3);
  

  @media (min-width: 768px) {
    padding-left: calc(var(--base) * 4);
    padding-right: calc(var(--base) * 4);
  }

  @media (min-width: 1024px) {
    padding-left: calc(var(--base) * 5);
    padding-right: calc(var(--base) * 5);
  }
}

/* ==================================== 
   Texts
   ==================================== */

.big-title {
  font-family: var(--primary-font);
  font-weight: var(--bold);
  font-size: calc(var(--base) * 5);
  color: var(--title-color);
}

a {
  font-family: var(--primary-font);
  font-weight: var(--medium);
  color: var(--accent-color);
  text-decoration: underline;
}

p {
  margin-bottom: calc(var(--base) * 2);
}
</style>
