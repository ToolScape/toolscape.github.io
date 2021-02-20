import Vue from 'vue';
import VueRouter from 'vue-router';
import DpsCalc from '../components/DpsCalc/DpsCalc.vue';
import About from '../components/About.vue';

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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
