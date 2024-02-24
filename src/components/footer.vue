<script setup lang="ts">
import Github from '../components/Github.vue'
import Linkedin from '../components/Linkedin.vue'
</script>

<template>
  <footer class="section footer">
    <div class="section__wrapper footer__wrapper">
      <nav class="footer__nav nav">
        <a href="https://github.com/pertutatis" target="_blank"  class="nav__item">
            <Github /></a>
          <a href="https://www.linkedin.com/in/diego-pertusa/" target="_blank"  class="nav__item">
            <Linkedin /></a>
      </nav>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
.footer {
  width: 100%;
  margin-top: calc(var(--base) * 2);
  padding-bottom: calc(var(--base) * 2);
}

.footer__wrapper {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  
  &:before {
    content: '';
    /* position: absolute; */
    width: 100%;
    margin-bottom: calc(var(--base) * 2);
    border-bottom: 1px solid var(--text-color);
  }
}


.nav__item {
  text-decoration: none;
  color: var(--text-color);
}

.nav__item + .nav__item {
  margin-left: calc(var(--base) * 2);
}
</style>
