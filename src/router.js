import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HOME PAGE',
      component: Home,
    },
    {
      path: '/order-history',
      name: 'ORDER HISTORY',
      component: () => import('./views/OrderHistory.vue'),
    },
    {
      path: '*',
      name: '404',
      component: () => import('./views/NotFound.vue'),
    },
  ],
});

