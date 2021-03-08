<template>
  <osrs-container
    class="calc-result-container"
    @dblclick="clicked"
  >
    <div
      v-if="dpsResult"
    >
      <div class="calc-result-grid">
        <span class="crg-header">
          Combat
        </span>
        <span class="crg-cell">
          {{ combatType }}
        </span>
        <span class="crg-cell" />
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
      <osrs-tabs
        v-model="boostsTab"
        class="calc-result-boost-tabs"
        :grow="true"
      >
        <osrs-tab
          v-for="(boosts, index) of computedBoosts"
          :key="index"
        >
          <span>Loadout {{ index + 1 }}</span>
        </osrs-tab>
      </osrs-tabs>
      <osrs-tab-items
        v-model="boostsTab"
      >
        <osrs-tab-item
          v-for="(boosts, index) of computedBoosts"
          :key="index"
        >
          <ul class="calc-result-boost-list">
            <li
              v-for="boost of boosts"
              :key="boost.name"
              class="calc-result-boost-list-item"
              :class="{'boost-inactive': !boost.active}"
            >
              {{ boost.name }}
            </li>
          </ul>
        </osrs-tab-item>
      </osrs-tab-items>
    </div>
  </osrs-container>
</template>

<script>
import RangedDps from '../../dps-calc/ranged-dps';
import MagicDps from '../../dps-calc/magic-dps';
import OsrsContainer from '../OsrsContainer.vue';
import OsrsTabs from '../OsrsTabs/OsrsTabs.vue';
import OsrsTab from '../OsrsTabs/OsrsTab.vue';
import OsrsTabItems from '../OsrsTabs/OsrsTabItems.vue';
import OsrsTabItem from '../OsrsTabs/OsrsTabItem.vue';

export default {
  name: 'CalculationResult',
  components: {
    OsrsTabItem, OsrsTabItems, OsrsTab, OsrsTabs, OsrsContainer,
  },
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
  data() {
    return {
      boostsTab: 0,
    };
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
    computedBoosts() {
      const boosts = [];
      if (this.dpsResult) {
        boosts.push(this.dpsResult.boosts.filter((boost) => boost.show));
      }
      if (this.comparisonDpsResult) {
        boosts.push(this.comparisonDpsResult.boosts.filter((boost) => boost.show));
      }
      return boosts;
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
  min-width: 360px;
  max-width: 360px;
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

.calc-result-boost-tabs {
  margin-top: 10px;
}

.calc-result-boost-list {
  width: 100%;
  max-width: 340px;
  max-height: 180px;
  overflow-y: auto;
  overflow-x: hidden;
  list-style: none;
  padding: 0;
}

.calc-result-boost-list-item {
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
}

.calc-result-boost-list-item.boost-inactive {
  text-decoration: line-through;
}
</style>
