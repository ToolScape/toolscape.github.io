<template>
  <osrs-container class="player-details-container">
    <osrs-tabs
        v-model="selectedTab"
    >
      <osrs-tab>
        <v-img src="../../assets/osrs/Combat icon.png" />
      </osrs-tab>
      <osrs-tab>
        <v-img src="../../assets/osrs/Stats icon.png" />
      </osrs-tab>
      <osrs-tab>
        <v-img src="../../assets/osrs/Worn equipment.png" />
      </osrs-tab>
      <osrs-tab>
        <v-img src="../../assets/osrs/Prayer tab icon.png" />
      </osrs-tab>
      <osrs-tab>
        <v-img src="../../assets/osrs/Vial.png" />
      </osrs-tab>
      <osrs-tab>
        <v-img src="../../assets/osrs/Account Management.png" />
      </osrs-tab>
    </osrs-tabs>
    <osrs-tab-items
      v-model="selectedTab"
      class="player-details-tab-items"
    >
      <osrs-tab-item>
        <stance-selector
          :equipped-weapon="weapon"
          @stance-changed="stanceChanged"
        />
      </osrs-tab-item>
      <osrs-tab-item>
        TODO: Skills
      </osrs-tab-item>
      <osrs-tab-item>
        <div class="player-details-equipment-tab">
          <player-equipment
            :equipment.sync="equipment"
          />
          <equipment-stats
            :bonuses="bonuses"
          />
        </div>
      </osrs-tab-item>
      <osrs-tab-item>
        TODO: Prayer
      </osrs-tab-item>
      <osrs-tab-item>
        TODO: Boosts
      </osrs-tab-item>
      <osrs-tab-item>
        TODO: Extra settings
      </osrs-tab-item>
    </osrs-tab-items>
  </osrs-container>
</template>

<script>
import OsrsContainer from '../OsrsContainer.vue';
import OsrsTabs from '../OsrsTabs/OsrsTabs.vue';
import OsrsTab from '../OsrsTabs/OsrsTab.vue';
import StanceSelector from './StanceSelector.vue';
import OsrsTabItems from '../OsrsTabs/OsrsTabItems.vue';
import OsrsTabItem from '../OsrsTabs/OsrsTabItem.vue';
import PlayerEquipment from './PlayerEquipment.vue';
import EquipmentStats from './EquipmentStats.vue';
import Player from '../../dps-calc/player';

export default {
  name: 'PlayerDetails',
  components: {
    EquipmentStats,
    PlayerEquipment,
    OsrsTabItems,
    OsrsTabItem,
    StanceSelector,
    OsrsTabs,
    OsrsTab,
    OsrsContainer,
  },
  data() {
    return {
      selectedTab: 0,
      equipment: undefined,
      skills: undefined,
      boosts: undefined,
      stance: undefined,
    };
  },
  computed: {
    player() {
      return new Player({
        skills: this.skills || {},
        equipment: this.equipment || {},
        boosts: this.boosts || [],
        stance: this.stance,
      });
    },
    weapon() {
      return this.equipment && this.equipment.weapon ? this.equipment.weapon : undefined;
    },
    bonuses() {
      return this.player ? this.player.bonuses : undefined;
    },
  },
  methods: {
    stanceChanged(stance) {
      this.stance = stance;
    },
    itemEquipped() {
    },
  },
};
</script>

<style scoped>
.player-details-container {
  position: relative;
  max-width: 400px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
}

.player-details-tab-items {
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.player-details-equipment-tab {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
