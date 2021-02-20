import Vue from 'vue';
import Vuex from 'vuex';
import moduleDpsCalc from './modules/dps-calc';
import moduleItems from './modules/items';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    dpsCalc: moduleDpsCalc,
    items: moduleItems,
  },
});

export default store;
