<script setup lang="ts">
import Brand from './Brand.vue'
</script>

<template>
  <header class="section header">
    <div class="section__wrapper header__wrapper">
      <div class="header__logo">
        <Brand class="logo" />
      </div>
      <nav class="header__nav nav">
        <router-link class="nav__item" to="/">Home</router-link> ·
        <router-link class="nav__item" to="/blog/">Blog</router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.header {
  width: 100%;
  margin-top: calc(var(--base) * 2);
  margin-bottom: calc(var(--base) * 2);
}

.header__wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  
  &:after {
    content: '';
    /* position: absolute; */
    width: 100%;
    margin-top: calc(var(--base) * 2);
    border-bottom: 1px solid var(--text-color);
  }
}

.logo {
  display: block;
}

.nav__item {
  text-decoration: none;
  color: var(--text-color);
}
</style>
