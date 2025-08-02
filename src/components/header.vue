<script setup lang="ts">
import Brand from './Brand.vue'
</script>

<template>
  <div class="header__spacer" />
  <header class="section header header--fixed">
    <div class="section__wrapper header__wrapper">
      <div class="header__logo">
        <router-link class="nav__item" to="/">
          <Brand class="logo" />
        </router-link>
      </div>
      <nav class="header__nav nav">
        <router-link class="nav__item" to="/" active-class="active">Home</router-link> ·
        <router-link class="nav__item" to="/blog/" active-class="active">Blog</router-link> ·
        <router-link class="nav__item" to="/cv/" active-class="active">CV</router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="postcss" scoped>

.header {
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;;
  padding-top: calc(var(--base) * 2);
}

.header--fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  backdrop-filter: blur(12px);
  background: rgba(var(background-color), 0.7);
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.04);
}

.header__spacer {
  padding-top: 80px;
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




.nav__item {
  font-family: var(--primary-font);
  color: var(--text-color);
  text-decoration: none;
  font-weight: 400;
  transition: all 0.3s ease;
  position: relative;
}

.nav__item:hover {
  color: var(--accent-color);
}

.nav__item::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-color);
  transition: width 0.3s ease;
}

.nav__item:hover::after {
  width: 100%;
}

.nav__item.active {
  color: var(--accent-color);
}

.nav__item.active::after {
  width: 100%;
}
</style>
