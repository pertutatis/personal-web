
import { createRouter, createWebHistory } from 'vue-router';

import Bio from '../pages/Bio.vue';
import Blog from '../pages/Blog.vue';
import Article from '../pages/Article.vue';
import Cv from '../pages/cv.vue';

const FIXED_HEADER_OFFSET = 96;

const routeInfos = [
  {
    path: '/',
    component: Bio,
  },
  {
    path: '/blog',
    component: Blog,
  },
  {
    path: '/blog/:slug',
    component: Article,
  },
  {
    path: '/cv',
    component: Cv,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routeInfos,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      return { el: to.hash, top: FIXED_HEADER_OFFSET, behavior: prefersReducedMotion ? 'auto' : 'smooth' };
    }

    return { top: 0 };
  },
});

export default router;
