
import { createRouter, createWebHistory } from 'vue-router';

import Bio from '../pages/Bio.vue';
import Blog from '../pages/Blog.vue';
import Article from '../pages/Article.vue';
import Cv from '../pages/cv.vue';

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
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
