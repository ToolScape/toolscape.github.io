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
        <v-img src="../../assets/osrs/Cog.png" />
      </osrs-tab>
    </osrs-tabs>
    <osrs-tab-items
      v-model="selectedTab"
      class="player-details-tab-items"
    >
      <osrs-tab-item>
        <stance-selector
          :equipped-weapon="weapon"
          @stance-changed="setStance"
        />
      </osrs-tab-item>
      <osrs-tab-item>
        <player-skills
          @skills-changed="setSkills"
        />
      </osrs-tab-item>
      <osrs-tab-item>
        <div class="player-details-equipment-tab">
          <player-equipment
            :equipment.sync="equipment"
          />
          <equipment-stats
            :equipment="equipment"
          />
        </div>
      </osrs-tab-item>
      <osrs-tab-item>
        <player-prayer
          @active-prayers="prayersChanged"
        />
      </osrs-tab-item>
      <osrs-tab-item>
        <player-potions
          @potions-changed="potionsChanged"
        />
      </osrs-tab-item>
      <osrs-tab-item>
        <player-settings />
      </osrs-tab-item>
    </osrs-tab-items>
  </osrs-container>
</template>

<script>
import BoostManager from '../../dps-calc/boost.manager';
import OsrsContainer from '../OsrsContainer.vue';
import OsrsTabs from '../OsrsTabs/OsrsTabs.vue';
import OsrsTab from '../OsrsTabs/OsrsTab.vue';
import StanceSelector from './StanceSelector.vue';
import OsrsTabItems from '../OsrsTabs/OsrsTabItems.vue';
import OsrsTabItem from '../OsrsTabs/OsrsTabItem.vue';
import PlayerEquipment from './PlayerEquipment.vue';
import EquipmentStats from './EquipmentStats.vue';
import PlayerSkills from './PlayerSkills.vue';
import PlayerPrayer from './PlayerPrayer.vue';
import PlayerPotions from './PlayerPotions.vue';
import PlayerSettings from './PlayerSettings.vue';

export default {
  name: 'PlayerDetails',
  components: {
    PlayerSettings,
    PlayerPotions,
    PlayerPrayer,
    PlayerSkills,
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
      selectedTab: 2,
      equipment: {},
      skills: {},
      stance: {},
      boosts: [],
      activePrayers: [],
      potions: [],
    };
  },
  computed: {
    weapon() {
      return this.equipment && this.equipment.weapon ? this.equipment.weapon : undefined;
    },
  },
  watch: {
    equipment: {
      immediate: true,
      handler: function equipmentChanged(equipment) {
        this.$emit('equipment-changed', equipment);
        this.updateBoosts();
      },
    },
    skills: {
      immediate: true,
      handler: function skillsChanged(skills) {
        this.$emit('skills-changed', skills);
      },
    },
    stance: {
      immediate: true,
      handler: function stanceChanged(stance) {
        this.$emit('stance-changed', stance);
      },
    },
    boosts: {
      immediate: true,
      handler: function boostsChanged(boosts) {
        this.$emit('boosts-changed', boosts);
      },
    },
  },
  methods: {
    setStance(stance) {
      this.stance = stance;
    },
    setSkills(skills) {
      this.skills = skills;
    },
    updateBoosts() {
      this.boosts = [
        ...BoostManager.getPrayerBoosts(this.activePrayers),
        ...BoostManager.getEquipmentBoosts(this.equipment),
        ...BoostManager.getPotionBoosts(this.potions),
      ];
    },
    prayersChanged(activePrayers) {
      this.activePrayers = activePrayers;
      this.updateBoosts();
    },
    potionsChanged(potions) {
      this.potions = potions;
      this.updateBoosts();
    },
  },
};
</script>

<style scoped>
.player-details-container {
  position: relative;
  min-width: 360px;
  max-width: 400px;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
