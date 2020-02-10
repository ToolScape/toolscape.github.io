import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import TbowMaxHit from '../views/TbowMaxHit.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/tbowmaxhit',
        name: 'TbowMaxHit',
        component: TbowMaxHit
    }
];

const router = new VueRouter({
    routes
});

export default router
