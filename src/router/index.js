import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    props: true,
    component: HomeView
  },
  {
    path: '/calculator',
    name: 'calculator',
    props: true,
    component: () => import('../views/CalcPage.vue')
  },
  {
    path: '/total',
    name: 'total',
    props: true,
    component: () => import('../views/TotalPage')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
