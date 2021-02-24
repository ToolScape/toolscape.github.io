<template>
  <v-container fluid>
    <div class="some-class">
      <player-details />
      <player-details />
    </div>
  </v-container>
</template>

<script>
import PlayerDetails from '../components/DpsCalc/PlayerDetails.vue';

export default {
  name: 'DpsCalc',
  components: {
    PlayerDetails,
  },
  data() {
    return {
      equipment: undefined,
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
      this.equipment = equipment;
    },
  },
};
</script>

<style scoped>
.some-class {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
