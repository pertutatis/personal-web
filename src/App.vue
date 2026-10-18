<script setup lang="ts">
import { useHead } from "@unhead/vue";
import BackgroundStars from "./components/background-stars.vue";
import montserratLatinUrl from "@fontsource-variable/montserrat/files/montserrat-latin-wght-normal.woff2?url";
import robotoMonoLatinUrl from "@fontsource-variable/roboto-mono/files/roboto-mono-latin-wght-normal.woff2?url";

// Both fonts appear in the first screen of every page (body text, and dates, labels
// and article excerpts): fetch them with the HTML. Montserrat italic is only used further down.
const firstPaintFontUrls = [montserratLatinUrl, robotoMonoLatinUrl];

useHead({
  link: firstPaintFontUrls.map((href) => ({
    rel: "preload",
    as: "font",
    type: "font/woff2",
    href,
    crossorigin: "",
  })),
});
</script>

<template>
  <BackgroundStars />

  <router-view></router-view>
</template>

<style lang="postcss">
/* ====================================
   Config
   ==================================== */

@import url("./assets/reset.css");

:root {
  /* Palette */
  --primary-font: "Montserrat Variable", "Montserrat", helvetica, arial, sans-serif;
  --secondary-font: "Roboto Mono Variable", "Roboto Mono", ui-monospace, monospace;
  --primary-color: 255, 101, 101;
  --secondary-color: 255, 140, 66;
  --dark-color: 10, 30, 44;
  --light-color: 209, 209, 209;
  --lighter-color: 255, 248, 240; /* #FFF8F0 */

  /* scheme */
  --base: 8px;
  --bold: 700;
  --semibold: 600;
  --regular: 400;
  --light: 300; /* Roboto Mono only: article excerpts */

  /* Type scale: every font size in the site comes from here */
  --text-xs: 0.8125rem; /* 13px  labels, dates, tags */
  --text-sm: 0.875rem; /* 14px  secondary UI, tables, sidebar */
  --text-base: 1.125rem; /* 18px  body text */
  --text-lg: 1.375rem; /* 22px  h3, intros, card titles */
  --text-xl: 1.75rem; /* 28px  h2 */
  --text-2xl: 2.25rem; /* 36px  featured titles, page h1 on mobile */
  --text-3xl: 3rem; /* 48px  page h1 */
  --text-display: clamp(2.5rem, 5vw, 3.5rem); /* hero titles */

  --leading-tight: 1.2;
  --leading-normal: 1.6;
  --leading-relaxed: 1.75;

  /* Monospaced labels: dates, categories, small navigation */
  --tracking-label: 1.5px;

  --main-transition: 0.3s ease;

  --accent-color: rgb(var(--secondary-color));
  --accent-color-01: rgba(var(--secondary-color), 0.1);
  --accent-color-03: rgba(var(--secondary-color), 0.3);
  --accent-2-color: rgb(var(--primary-color));
  --background-color: rgb(var(--dark-color));
  --text-color: rgb(var(--light-color));
  --title-color: rgb(var(--light-color));

  --secondary-accent-1-rgb: 116, 185, 255;
  --secondary-accent-2-rgb: 102, 126, 234;
  --secondary-accent-3-rgb: 162, 155, 254;
  --secondary-accent-4-rgb: 118, 75, 162;
  --secondary-accent-5-rgb: 255, 118, 117;
  --secondary-accent-6-rgb: 253, 121, 168;
  --secondary-accent-7-rgb: 253, 203, 110;
  --secondary-accent-1-color: rgb(116, 185, 255);
  --secondary-accent-2-color: rgb(102, 126, 234);
  --secondary-accent-3-color: rgb(162, 155, 254);
  --secondary-accent-4-color: rgb(118, 75, 162);
  --secondary-accent-5-color: rgb(255, 118, 117);
  --secondary-accent-6-color: rgb(253, 121, 168);
  --secondary-accent-7-color: rgb(253, 203, 110);

  --cv-color: var(--secondary-accent-1-rgb);

  /* Accent used as text colour; the light theme needs a darker shade for contrast */
  --accent-text-color: var(--accent-color);
  --accent-heading-color: var(--accent-color);
  --link-hover-color: var(--secondary-accent-5-color);

  /* Content blocks */
  --block-radius: 12px;
  --experience-rgb: var(--secondary-accent-3-rgb);

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

@media (prefers-color-scheme: light) {
  :root {
    --accent-color: rgb(var(--primary-color));
    --accent-color-01: rgba(var(--primary-color), 0.1);
    --accent-color-03: rgba(var(--primary-color), 0.3);
    --accent-2-color: rgb(var(--secondary-color));
    --background-color: rgb(var(--lighter-color));
    --text-color: rgb(var(--dark-color));
    --title-color: rgb(var(--dark-color));

    --title: var(--title-1);
    --title-shadow: 0;

    --cv-color: var(--secondary-accent-3-rgb);
    --stars-colors: var(--secondary-accent-7-color);
    --experience-rgb: var(--secondary-accent-4-rgb);

    /* #FF6565 on cream is 2.7:1, so text uses darker shades of the same red:
       large headings need 3:1 (3.7:1), small text 4.5:1 (5.1:1) */
    --accent-text-color: rgb(200, 45, 45);
    --accent-heading-color: rgb(230, 70, 70);
    --link-hover-color: rgb(175, 40, 40);
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --accent-color: rgb(var(--secondary-color));
    --accent-color-01: rgba(var(--secondary-color), 0.1);
    --accent-color-03: rgba(var(--secondary-color), 0.3);
    --accent-2-color: rgb(var(--primary-color));
    --background-color: rgb(var(--dark-color));
    --text-color: rgb(var(--light-color));
    --title-color: rgb(var(--light-color));

    --title: var(--title-3);
    --title-shadow: 0;

    --cv-color: var(--secondary-accent-1-rgb);
    --stars-colors: rgb(var(--light-color));
    --experience-rgb: var(--secondary-accent-3-rgb);
  }
}

/* ====================================
   Motion
   ==================================== */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ====================================
   Focus
   reset.css unsets every outline, so keyboard focus needs its own style
   ==================================== */

html {
  /* keeps focused elements and anchor targets clear of the fixed header */
  scroll-padding-top: calc(var(--base) * 12);
}

:focus-visible {
  outline: 2px solid var(--accent-text-color);
  outline-offset: 3px;
  border-radius: 4px;
}

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
  /* clip keeps decorative overflow hidden without breaking position: sticky */
  overflow: clip;
}

body {
  min-height: 100vh;
  background-color: var(--background-color);
  font-family: var(--primary-font);
  font-size: var(--text-base);
  font-weight: var(--regular);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
  overflow-x: hidden;
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
  color: var(--accent-text-color);
  text-decoration: underline;
  transition: color var(--main-transition);

  &:hover {
    color: var(--link-hover-color);
  }
}

p,
ul,
ol,
table {
  margin-bottom: calc(var(--base) * 4);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
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
  color: var(--accent-text-color);
}

h1,
h2,
h3,
h4,
h5 {
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: var(--bold);
  line-height: var(--leading-tight);
}

/* Page title; hero titles (home, article header) use --text-display */
h1 {
  font-size: var(--text-2xl);

  @media (min-width: 1024px) {
    font-size: var(--text-3xl);
  }
}

h2 {
  font-size: var(--text-xl);
}

h3 {
  font-size: var(--text-lg);
}

h4,
h5 {
  font-size: var(--text-base);
}

</style>
