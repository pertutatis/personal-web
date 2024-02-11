<script setup lang="ts">
import Brand from '../components/Brand.vue'
import Github from '../components/Github.vue'
import Linkedin from '../components/Linkedin.vue'
</script>

<template>
  <div class="home-wrapper">
  <section class="section">
    <div class="bio section__wrapper">
      
      <img class="portrait" src="../assets/foto.png" alt="Picture about me">
      <div class="bio__column">

        <Brand class="logo" />
        <h1 class="big-title">Hi! 👋🏻 I'm Diego Pertusa Irles</h1>
        <p>Engineering manager at Seedtag</p>

        <div class="link-collection">
          <router-link class="link-collection__item" to="/blog/">Blog</router-link>
        </div>

        <div class="link-collection">
          <a href="https://github.com/pertutatis" target="_blank"  class="link-collection__item--reduced">
            <Github /></a>
          <a href="https://www.linkedin.com/in/diego-pertusa/" target="_blank"  class="link-collection__item--reduced">
            <Linkedin /></a>
        </div>

      </div>
    </div>
  </section>
  </div>
</template>

<style lang="postcss" scoped>
.big-title {
  font-family: var(--primary-font);
  font-weight: var(--bold);
  font-size: calc(var(--base) * 5);
  color: var(--title-color);
  margin-bottom: 0;
}

.home-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.bio {
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
}

.logo {
  margin-bottom: calc(var(--base) * 1);
}

.portrait {
  display: block;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  margin-bottom: calc(var(--base) * 4);
  background-color: var(--title-color);
  border-radius: 50%;

  @media (min-width: 768px) {
    margin: 0;
  }
}

.bio__column {
  @media (min-width: 768px) {
    margin-left: calc(var(--base) * 4);
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
}

.link-collection {
  margin-bottom: calc(var(--base) * 2);

  &:last-child {
    margin-bottom: 0;
  }
}

.link-collection__item {
  color: var(--text-color);
}

.link-collection__item + .link-collection__item {
  margin-left: calc(var(--base) * 3);
}

.link-collection__item--reduced + .link-collection__item--reduced {
  margin-left: calc(var(--base) * 2);
}

</style>
