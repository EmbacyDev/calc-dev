import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomePage.vue';
import store from '../store';

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
router.beforeEach((to, from, next) => {
  if (store.state.total.length === 0 && to.name === 'total') {
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
