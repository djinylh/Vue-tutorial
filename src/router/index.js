import { createRouter, createWebHistory } from 'vue-router';
import Component from '@/views/Component.vue';

import Mustache from '@/views/Mustache.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/mustache',
      component: Mustache,
    },
    {
      path: '/component',
      component: Component,
    },
  ],
});

export default router;
