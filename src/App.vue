<script setup lang="ts">
import BackgroundStars from "./components/background-stars.vue";
</script>

<template>
  <BackgroundStars />

  <router-view></router-view>
</template>

<style lang="postcss">
/* ====================================
   Config
   ==================================== */

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto+Mono:wght@300;400;700&display=swap");
@import url("./assets/reset.css");

:root {
  /* Palette */
  --primary-font: "Montserrat", helvetica, arial, serif;
  --secondary-font: "Roboto Mono", arial, serif;
  --primary-color: rgb(255, 127, 71);
  --secondary-color: rgb(255, 140, 66);
  --dark-color: #0a1e2c;
  --light-color: #d1d1d1;
  --lighter-color: #f0f0f0;

  /* scheme */
  --base: 8px;
  --bold: 700;
  --medium: 500;
  --regular: 400;
  --light: 300;

  --main-transition: 0.3s ease;

  --accent-color: var(--secondary-color);
  --accent-2-color: var(--primary-color);
  --background-color: var(--dark-color);
  --text-color: var(--light-color);
  --title-color: var(--light-color);

  --secondary-accent-1-color: rgb(116, 185, 255);
  --secondary-accent-2-color: rgb(102, 126, 234);
  --secondary-accent-3-color: rgb(162, 155, 254);
  --secondary-accent-4-color: rgb(118, 75, 162);
  --secondary-accent-5-color: rgb(255, 118, 117);
  --secondary-accent-6-color: rgb(253, 121, 168);
  --secondary-accent-7-color: rgb(253, 203, 110);

  /* Titles gradients */
  --title-1: linear-gradient(
    135deg,
    var(--secondary-accent-2-color) 0%,
    var(--secondary-accent-4-color) 100%
  );
  --title-1-shadow: 0 0 30px
    color-mix(in srgb, var(--secondary-accent-2-color), transparent 50%);

  --title-2: linear-gradient(
    135deg,
    var(--secondary-accent-1-color) 0%,
    var(--secondary-accent-3-color) 50%,
    var(--secondary-accent-6-color) 100%
  );
  --title-2-shadow: 0 0 50px
    color-mix(in srgb, var(--secondary-accent-1-color), transparent 40%);

  --title-3: linear-gradient(
    135deg,
    var(--secondary-accent-5-color) 0%,
    var(--secondary-accent-6-color) 50%,
    var(--secondary-accent-7-color) 100%
  );
  --title-3-shadow: 0 0 40px
    color-mix(in srgb, var(--secondary-accent-5-color), transparent 50%);

  --title: var(--title-3);
  --title-shadow: var(--title-3-shadow);
}

/* @media (prefers-color-scheme: light) {
  :root {
    --accent-color: var(--primary-color);
    --accent-2-color: var(--secondary-color);
    --background-color: var(--lighter-color);
    --text-color: var(--dark-color);
    --title-color: var(--dark-color);
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --accent-color: var(--secondary-color);
    --accent-2-color: var(--primary-color);
    --background-color: var(--dark-color);
    --text-color: var(--light-color);
    --title-color: var(--light-color);
  }
} */

/* ====================================
   Skeleton
   ==================================== */

html,
body,
#app {
  min-height: 100%;
  min-height: 100vh;
}

#app {
  overflow: hidden;
}

body {
  background-color: var(--background-color);
  font-family: var(--secondary-font);
  font-size: calc(var(--base) * 2.25);
  font-weight: var(--light);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
}

body {
  background: radial-gradient(ellipse at center, #0c0c1e 0%, #1a1a3a 40%, #0a0a0f 100%);
  overflow-x: hidden;
  min-height: 100vh;
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

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: calc(var(--base) * 2);
}

a {
  /* font-family: var(--primary-font); */
  /* font-weight: var(--medium); */
  color: var(--accent-color);
  text-decoration: underline;
  transition: color var(--main-transition);

  &:hover {
    color: var(--secondary-accent-5-color);
  }
}

p,
ul,
ol,
table {
  margin-bottom: calc(var(--base) * 4);
  font-size: 1.1rem;
  line-height: 1.6;
}

strong,
b {
  font-weight: var(--bold);
}

h1 {
  margin-bottom: calc(var(--base) * 8);
}

p + h2,
p + h3,
p + h4,
p + h5,
aside + h2,
aside + h3,
aside + h4,
aside + h5,
table + h2,
table + h3,
table + h4,
table + h5 {
  margin-top: calc(var(--base) * 6);
}

ol {
  list-style: decimal-leading-zero;
  padding-left: calc(var(--base) * 6);
}

ul {
  list-style: circle;
  padding-left: 20px;
}

li {
  margin: 8px 0;
}

ul li::marker {
  color: var(--accent-color);
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
}

/* ====================================
   Tables
   ==================================== */

table {
  backdrop-filter: blur(2px);
  border-radius: 20px;
  border-spacing: 0;
  border-collapse: separate;
  overflow: hidden;
}

thead {
  background: rgba(116, 185, 255, 0.3);
  border-radius: 20px 0 0 0 20px;
  border-spacing: 0;
  border-collapse: separate;
}

tr {
  background: rgba(162, 155, 254, 0.05);
  border-bottom: 1px solid rgba(116, 185, 255, 0.2);

  &:nth-child(odd) {
    background: rgba(118, 75, 162, 0.05);
  }
}

th,
td {
  display: block;
  border: none;
  padding: calc(var(--base) * 2);

  @media (min-width: 768px) {
    display: table-cell;
    border-bottom: 0.25px solid rgba(116, 185, 255, 0.2);
  }

  tr:last-child & {
    border-bottom: none;
  }
}
</style>
