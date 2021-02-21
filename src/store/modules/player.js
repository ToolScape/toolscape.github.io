import Player from '../../dps-calc/player';

const modulePlayer = {
  namespaced: true,
  state: () => ({
    skills: {
      attack: 99,
      strength: 99,
      defence: 99,
      ranged: 99,
      prayer: 99,
      magic: 99,
      hitpoints: 99,
    },
    equipment: {
      head: undefined,
      cape: undefined,
      neck: undefined,
      ammo: undefined,
      weapon: undefined,
      shield: undefined,
      body: undefined,
      legs: undefined,
      hands: undefined,
      feet: undefined,
      ring: undefined,
    },
    boosts: [],
  }),
  mutations: {
    SET_SKILLS(state, skills) {
      state.skills = skills;
    },
    SET_EQUIPMENT(state, equipment) {
      state.equipment = equipment;
    },
    SET_BOOSTS(state, boosts) {
      state.boosts = boosts;
    },
  },
  actions: {
    setSkills({ commit }, skills) {
      commit('SET_SKILLS', skills);
    },
    setSkill({ commit, state }, { skill, value }) {
      commit('SET_SKILLS', {
        ...state.skills,
        [skill]: value,
      });
    },
    setEquipment({ commit }, equipment) {
      commit('SET_EQUIPMENT', equipment);
    },
    setEquip({ commit, state }, { slot, equip }) {
      if (slot === '2h') {
        slot = 'weapon';
      }
      commit('SET_EQUIPMENT', {
        ...state.equipment,
        [slot]: equip,
      });
    },
    addBoost({ commit }, boost) {
      // TODO: Logic to prevent duplicate boosts
      commit('SET_BOOSTS', [boost]);
    },
  },
  getters: {
    getPlayer(state) {
      return new Player(state);
    },
  },
};

export default modulePlayer;
