import Vue from 'vue';
import VueRouter from 'vue-router';
import DpsCalc from '../views/DpsCalc.vue';
import About from '../views/About.vue';
import DataManager from '../views/DataManager.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'DpsCalc',
    component: DpsCalc,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/data-manager',
    name: 'DataManager',
    component: DataManager,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
