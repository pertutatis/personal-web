<script setup lang="ts">
import { useAppStore } from './stores/app'

const store = useAppStore()

</script>

<template>
  <Header />
  <CountDown />
  <Schedule />
  <HowToArrive />
  <Bus />
  <Reservation />
  <Contact />
  <Disclaimer />
  <Footer />

</template>

<style lang="postcss">
@import url("./assets/reset.css");

:root {
  --primary-font: "Playfair Display", arial, serif;
  --secondary-font: "Montserrat", baskerville, arial, sans-serif;
  --primary-color: #3a4c3e;
  --text-color: #706e67;
  --background-color: #f3f2f1;
  --error-color: #b13b3b;
}

body {
  background-color: var(--background-color);
  font-family: var(--primary-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
}

.section {
  margin-top: 48px;
  margin-bottom: 48px;

  @media (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  @media (min-width: 1024px) {
    margin-top: 104px;
    margin-bottom: 104px;
  }
}

.section__wrapper {
  max-width: 1440px;
  margin: auto;
  padding-left: 24px;
  padding-right: 24px;
  

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1024px) {
    padding-left: 2.632rem;
    padding-right: 2.632rem;
  }
}
</style>
