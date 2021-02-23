<template>
  <v-container fluid>
    <player-equipment
      @equipped="setEquipment"
    />
    <stance-selector
      :equipped-weapon="weapon"
    />
    <osrs-flat-button>Rapid</osrs-flat-button>
  </v-container>
</template>

<script>
import PlayerEquipment from '../components/DpsCalc/PlayerEquipment.vue';
import StanceSelector from '../components/DpsCalc/StanceSelector.vue';
import OsrsFlatButton from '../components/OsrsFlatButton.vue';

export default {
  name: 'DpsCalc',
  components: { OsrsFlatButton, PlayerEquipment, StanceSelector },
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
