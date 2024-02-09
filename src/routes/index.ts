
import { createRouter, createWebHistory } from 'vue-router';

import Bio from '../pages/Bio.vue';
import Blog from '../pages/Blog.vue';
import Article from '../pages/Article.vue';

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
    path: '/article',
    component: Article,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routeInfos,
});

export default router;
