<template>
  <osrs-container
    class="calc-result-container"
  >
    <div
      v-if="dpsResult"
      @click="clicked"
    >
      <div class="calc-result-grid">
        <span class="crg-header">
          Combat
        </span>
        <span class="crg-cell">
          {{ combatType }}
        </span>
        <span class="crg-cell">
        </span>
        <span class="crg-cell">
          {{ combatType2 }}
        </span>
        <span class="crg-header">
          Max hit
        </span>
        <span class="crg-cell">
          {{ dpsResult.maxHit }}
        </span>
        <span class="crg-cell crg-cell-middle">
          {{ valueDifference(dpsResult.maxHit, comparisonDpsResult.maxHit) }}
        </span>
        <span class="crg-cell">
          {{ comparisonDpsResult.maxHit }}
        </span>
        <span class="crg-header">
          Accuracy
        </span>
        <span class="crg-cell">
          {{ formattedHitChance }}
        </span>
        <span class="crg-cell crg-cell-middle">
          {{ valueDifference(dpsResult.hitChance, comparisonDpsResult.hitChance) }}
        </span>
        <span class="crg-cell">
          {{ formattedHitChance2 }}
        </span>
        <span class="crg-header">
          DPS
        </span>
        <span class="crg-cell">
          {{ formattedDps }}
        </span>
        <span class="crg-cell crg-cell-middle">
          {{ valueDifference(dpsResult.dps, comparisonDpsResult.dps) }}
        </span>
        <span class="crg-cell">
          {{ formattedDps2 }}
        </span>
      </div>
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
    comparisonDpsResult: {
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
    combatType2() {
      if (this.comparisonDpsResult instanceof RangedDps) {
        return 'Ranged';
      }
      if (this.comparisonDpsResult instanceof MagicDps) {
        return 'Magic';
      }
      return 'Melee';
    },
    formattedHitChance() {
      if (this.dpsResult) {
        return `${(this.dpsResult.hitChance * 100).toFixed(2)}%`;
      }
      return '';
    },
    formattedHitChance2() {
      if (this.comparisonDpsResult) {
        return `${(this.comparisonDpsResult.hitChance * 100).toFixed(2)}%`;
      }
      return '';
    },
    formattedDps() {
      if (this.dpsResult) {
        return this.dpsResult.dps.toFixed(4);
      }
      return '';
    },
    formattedDps2() {
      if (this.comparisonDpsResult) {
        return this.comparisonDpsResult.dps.toFixed(4);
      }
      return '';
    },
  },
  methods: {
    clicked() {
      console.log(this.dpsResult);
    },
    valueDifference(a, b) {
      if (a === b) {
        return '-';
      }
      if (a > b) {
        return `< +${((a - b) / a * 100).toFixed(2)}%`;
      }
      return `+${((b - a) / b * 100).toFixed(2)}% >`;
    },
  },
};
</script>

<style scoped>
.calc-result-container {
  min-width: 350px;
}

.calc-result-grid {
  display: grid;
  grid-template-columns: 1fr 100px 1fr;
  place-items: center;
  border: 1px solid var(--osrs-dark-brown);
}

.calc-result-grid .crg-solo,
.calc-result-grid .crg-header {
  grid-column: 1/-1;
}

.calc-result-grid .crg-header {
  display: flex;
  justify-content: center;
  width: 100%;
  background: var(--osrs-dark-brown);
  font-family: "runescape_quill_8regular", "Roboto", sans-serif;
  text-shadow: 1px 1px 1px black;
  font-size: 20px;
  padding-top: 5px;
  line-height: 1em;
}

.calc-result-grid .crg-cell {
  font-size: 24px;
}
.calc-result-grid .crg-cell-middle {
  font-size: 18px;
}
</style>
