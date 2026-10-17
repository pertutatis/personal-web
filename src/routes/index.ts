import type { RouteRecordRaw, RouterScrollBehavior } from 'vue-router';

import Bio from '../pages/Bio.vue';
import Blog from '../pages/Blog.vue';
import Article from '../pages/Article.vue';
import Cv from '../pages/cv.vue';
import NotFound from '../pages/NotFound.vue';

const FIXED_HEADER_OFFSET = 96;

export const routes: RouteRecordRaw[] = [
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
  // Prerendered as dist/404.html, which Netlify serves for unknown urls
  {
    path: '/404',
    component: NotFound,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
];

// Only runs in the browser: the router never scrolls during prerendering
export const scrollBehavior: RouterScrollBehavior = (to, _from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  }

  if (to.hash) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return { el: to.hash, top: FIXED_HEADER_OFFSET, behavior: prefersReducedMotion ? 'auto' : 'smooth' };
  }

  return { top: 0 };
};
