import type { RouteRecordRaw, RouterScrollBehavior } from 'vue-router';
import { NOT_FOUND_ROUTE_NAME } from './notFound';

const FIXED_HEADER_OFFSET = 96;

// Pages are loaded per route, so each page only ships the code it uses
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../pages/Bio.vue'),
  },
  {
    path: '/blog',
    component: () => import('../pages/Blog.vue'),
  },
  {
    path: '/blog/:slug',
    component: () => import('../pages/Article.vue'),
  },
  {
    path: '/cv',
    component: () => import('../pages/cv.vue'),
  },
  // Prerendered as dist/404.html, which Netlify serves for unknown urls
  {
    path: '/404',
    component: () => import('../pages/NotFound.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: NOT_FOUND_ROUTE_NAME,
    component: () => import('../pages/NotFound.vue'),
  },
];

// Only runs in the browser: the router never scrolls during prerendering
export const scrollBehavior: RouterScrollBehavior = (to, _from, savedPosition) => {
  // html has scroll-behavior: smooth for in-page anchors; page changes must not animate
  if (savedPosition) {
    return { ...savedPosition, behavior: 'instant' };
  }

  if (to.hash) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return { el: to.hash, top: FIXED_HEADER_OFFSET, behavior: prefersReducedMotion ? 'auto' : 'smooth' };
  }

  return { top: 0, behavior: 'instant' };
};
