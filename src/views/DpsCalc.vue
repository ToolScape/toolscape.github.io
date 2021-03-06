<template>
  <v-container fluid>
    <div class="some-class">
      <player-details
        @equipment-changed="setEquipment(player1, $event)"
        @skills-changed="setSkills(player1, $event)"
        @stance-changed="setStance(player1, $event)"
        @boosts-changed="setBoosts(player1, $event)"
        @settings-changed="setSettings(player1, $event)"
        @spell-changed="setSpell(player1, $event)"
      />

      <calculation-result
        :dps-result="dpsResult(player1)"
        :comparison-dps-result="dpsResult(player2)"
      />

      <player-details
        @equipment-changed="setEquipment(player2, $event)"
        @skills-changed="setSkills(player2, $event)"
        @stance-changed="setStance(player2, $event)"
        @boosts-changed="setBoosts(player2, $event)"
        @settings-changed="setSettings(player2, $event)"
        @spell-changed="setSpell(player2, $event)"
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
import CalculationResult from '../components/DpsCalc/CalculationResult.vue';
import DpsCalculator from '../dps-calc/dps-calculator';
import Player from '../dps-calc/player';

export default {
  name: 'DpsCalc',
  components: {
    CalculationResult,
    TargetDetails,
    PlayerDetails,
  },
  data() {
    return {
      player1: {
        equipment: undefined,
        skills: undefined,
        stance: undefined,
        boosts: undefined,
        spell: undefined,
        settings: undefined,
      },
      player2: {
        equipment: undefined,
        skills: undefined,
        stance: undefined,
        boosts: undefined,
        spell: undefined,
        settings: undefined,
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
    dpsResult(player) {
      console.log('Calculating!');
      if (player && this.target) {
        return DpsCalculator.calculate(
          new Player({
            skills: player.skills,
            equipment: player.equipment,
            stance: player.stance,
            boosts: player.boosts,
            spell: player.spell,
          }),
          this.target,
          player.settings,
        );
      }
      return undefined;
    },
    setEquipment(player, equipment) {
      player.equipment = equipment;
    },
    setSkills(player, skills) {
      player.skills = skills;
    },
    setStance(player, stance) {
      player.stance = stance;
    },
    setBoosts(player, boosts) {
      player.boosts = boosts;
    },
    setTarget(target) {
      this.target = target;
    },
    setSettings(player, settings) {
      player.settings = settings;
    },
    setSpell(player, spell) {
      player.spell = spell;
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
