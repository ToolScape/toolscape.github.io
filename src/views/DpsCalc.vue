<template>
  <v-container fluid>
    <div class="some-class">
      <player-details
        @equipment-changed="setEquipment"
        @skills-changed="setSkills"
        @stance-changed="setStance"
        @boosts-changed="setBoosts"
      />
      <target-details
        @target-changed="setTarget"
      />
    </div>
  </v-container>
</template>

<script>
import PlayerDetails from '../components/DpsCalc/PlayerDetails.vue';
import TargetDetails from '../components/DpsCalc/TargetDetails.vue';

export default {
  name: 'DpsCalc',
  components: {
    TargetDetails,
    PlayerDetails,
  },
  data() {
    return {
      player: {
        equipment: undefined,
        skills: undefined,
        stance: undefined,
        boosts: undefined,
      },
      target: undefined,
    };
  },
  computed: {
    weapon() {
      if (this.equipment && this.equipment.weapon) {
        return this.equipment.weapon;
      }
      return undefined;
    },
  },
  methods: {
    setEquipment(equipment) {
      this.player.equipment = equipment;
    },
    setSkills(skills) {
      this.player.skills = skills;
    },
    setStance(stance) {
      this.player.stance = stance;
    },
    setBoosts(boosts) {
      this.player.boosts = boosts;
    },
    setTarget(target) {
      this.target = target;
    },
  },
};
</script>

<style scoped>
.some-class {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
