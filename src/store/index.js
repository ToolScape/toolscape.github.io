import Vue from 'vue';
import Vuex from 'vuex';
import moduleDpsCalc from './modules/dps-calc';
import modulePlayer from './modules/player';
import moduleTarget from './modules/target';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    dpsCalc: moduleDpsCalc,
    player: modulePlayer,
    target: moduleTarget,
  },
});

export default store;
