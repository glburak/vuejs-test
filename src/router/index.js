import { createRouter, createWebHistory } from 'vue-router';
import LeftMenu from '../components/LeftMenu.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LeftMenu
    }
  ]
});

export default router;
