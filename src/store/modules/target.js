const moduleTarget = {
  namespaced: true,
  state: () => ({
    target: undefined,
  }),
  mutations: {
    SET_TARGET(state, target) {
      state.target = target;
    },
  },
  actions: {
    setTarget({ commit }, target) {
      commit('SET_TARGET', target);
    },
  },
  getters: {},
};

export default moduleTarget;
