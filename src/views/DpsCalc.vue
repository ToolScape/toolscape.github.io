<template>
  <v-container fluid>
    <item-select
      :item-slots="['weapon', '2h']"
      @input="setEquip({ slot: $event.equipment.slot, equip: $event })"
    />
    <item-select
      :item-slots="['shield']"
    />
    <v-btn @click="calculate">
      Calculate
    </v-btn>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ItemSelect from '../components/ItemSelect.vue';
import DpsCalculator from '../dps-calc/dps-calculator';

export default {
  name: 'DpsCalc',
  components: { ItemSelect },
  data() {
    return {
      selectedWeapon: undefined,
    };
  },
  computed: {
    ...mapGetters({
      player: 'player/getPlayer',
    }),
  },
  methods: {
    ...mapActions({
      setEquip: 'player/setEquip',
    }),
    calculate() {
      console.log(DpsCalculator.calculate(this.player));
    },
  },
};
</script>
