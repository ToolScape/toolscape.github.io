<template>
  <osrs-container>
    <div
      v-if="dpsResult"
      @click="clicked"
    >
      <span>Max hit: {{ dpsResult.maxHit }}</span> <br>
      <span>Hit chance: {{ (dpsResult.hitChance * 100).toFixed(2) }}%</span> <br>
      <span>DPS: {{ dpsResult.dps.toFixed(4) }}</span> <br>
      <span>boosts: {{ dpsResult.boosts.map((i) => i.name).join(', ') }}</span> <br>
    </div>
  </osrs-container>
</template>

<script>
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
  methods: {
    clicked() {
      console.log(this.dpsResult);
    },
  },
};
</script>

<style scoped>

</style>
