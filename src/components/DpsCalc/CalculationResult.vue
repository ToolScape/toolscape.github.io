<template>
  <osrs-container>
    <div
      v-if="dpsResult"
      @click="clicked"
    >
      <span>Combat: {{ combatType }}</span> <br>
      <span>Max hit: {{ dpsResult.maxHit }}</span> <br>
      <span>Hit chance: {{ (dpsResult.hitChance * 100).toFixed(2) }}%</span> <br>
      <span>DPS: {{ dpsResult.dps.toFixed(4) }}</span> <br>
      <span>boosts:</span> <br>
      <ul>
        <li
          v-for="boost in dpsResult.boosts"
          :key="boost.name"
        >
          {{ boost.name }}
        </li>
      </ul>
    </div>
  </osrs-container>
</template>

<script>
import RangedDps from '../../dps-calc/ranged-dps';
import MagicDps from '../../dps-calc/magic-dps';
import OsrsContainer from '../OsrsContainer.vue';

export default {
  name: 'CalculationResult',
  components: { OsrsContainer },
  props: {
    dpsResult: {
      type: Object,
      default: undefined,
    },
  },
  computed: {
    combatType() {
      if (this.dpsResult instanceof RangedDps) {
        return 'Ranged';
      }
      if (this.dpsResult instanceof MagicDps) {
        return 'Magic';
      }
      return 'Melee';
    },
  },
  methods: {
    clicked() {
      console.log(this.dpsResult);
    },
  },
};
</script>

<style scoped>

</style>
