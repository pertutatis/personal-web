<script setup lang="ts">
</script>

<template>
  <router-view></router-view>
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
  --primary-color: #ff331a;
  --secondary-color: #ff8a14;
  --dark-color: #252324;
  --light-color: #f6e9c4;
  --lighter-color: #FFFAF1;

  --base: 8px;
  --bold: 700;
  --medium: 500;
  --regular: 400;
  --light: 300;

  /* Light scheme */
  --accent-color: var(--secondary-color);
  --background-color: var(--dark-color);
  --text-color: var(--light-color);
  --title-color: var(--light-color);
}

@media (prefers-color-scheme: light) {
  :root {
    --accent-color: var(--primary-color);
    --background-color: var(--lighter-color);
    --text-color: var(--dark-color);
    --title-color: var(--dark-color);
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --accent-color: var(--secondary-color);
    --background-color: var(--dark-color);
    --text-color: var(--light-color);
    --title-color: var(--light-color);
  }
}

/* ==================================== 
   Skeleton
   ==================================== */

html, body, #app {
  min-height: 100%;
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

p, h1, h2, h3, h4, h5, h6 {
  margin-bottom: calc(var(--base) * 2);
}

a {
  /* font-family: var(--primary-font); */
  /* font-weight: var(--medium); */
  color: var(--accent-color);
  text-decoration: underline;
}

p {
  margin-bottom: calc(var(--base) * 2);
}




h1 {
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: var(--bold);
  font-size: 32px;
  /* line-height: 46px; */

  @media (min-width: 1024px) {
    font-size: 38px;
  }
}

h2 {
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: var(--bold);
  font-size: 28px;
  /* line-height: 39px; */

  @media (min-width: 1024px) {
    font-size: 32px;
  }
}

h3 {
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: var(--bold);
  font-size: 24px;
  /* line-height: 29px; */
}


h4 {
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: var(--bold);
  font-size: 20px;
  /* line-height: 24px; */
}


h5 {
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: var(--bold);
  font-size: 18px;
  /* line-height: 22px; */
}
</style>
