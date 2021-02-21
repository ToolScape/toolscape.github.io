import Vue from 'vue';
import Vuex from 'vuex';
import moduleDpsCalc from './modules/dps-calc';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    dpsCalc: moduleDpsCalc,
  },
});

export default store;
