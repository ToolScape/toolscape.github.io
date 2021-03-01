<template>
  <div class="player-settings-container">
    <div class="player-settings-grid">
      <osrs-tooltip>
        <template #activator="{ on }">
          <v-img
            v-if="dwhObject"
            :src="`data:image/png;base64,${dwhObject.icon}`"
            v-on="on"
          />
        </template>
        <span>Dragon warhammer specials that hit and deal more than 0 damage</span> <br>
        <span>Each hit reduces defence level by 30% of current defence level</span>
      </osrs-tooltip>
      <osrs-number-input
        v-model="settings.dwhSpecials"
        @input="updateSettings"
      />
      <osrs-tooltip>
        <template #activator="{on}">
          <v-img
            v-if="arclightObject"
            :src="`data:image/png;base64,${arclightObject.icon}`"
            v-on="on"
          />
        </template>
        <span>Arclight/Darklight specials hit</span> <br>
        <span>Each hit reduces defence level by 5% (10% if demon)</span>
      </osrs-tooltip>
      <osrs-number-input
        v-model="settings.arclightSpecials"
        @input="updateSettings"
      />
      <osrs-tooltip>
        <template #activator="{ on }">
          <v-img
            v-if="bgsObject"
            :src="`data:image/png;base64,${bgsObject.icon}`"
            v-on="on"
          />
        </template>
        <span>Bandos godsword specials damage</span> <br>
        <span>Reduces defence (and other stats) by this amount</span> <br>
        <span>Order: Defence > Strength > Attack > Magic > Ranged</span>
      </osrs-tooltip>
      <osrs-number-input
        v-model="settings.bgsSpecialDamage"
        @input="updateSettings"
      />
      <v-img
        contain
        src="../../assets/osrs/Slayer icon.png"
      />
      <osrs-tooltip>
        <template #activator="{ on }">
          <osrs-checkbox
            v-model="settings.onSlayerTask"
            @input="updateSettings"
            v-on="on"
          />
        </template>
        <span>Are you on a slayer task?</span>
      </osrs-tooltip>
      <osrs-tooltip>
        <template #activator="{ on }">
          <v-img
            contain
            src="../../assets/osrs/Hitpoints icon.png"
            v-on="on"
          />
        </template>
        <span>Your current hitpoints</span> <br>
        <span>Used for Dharok's set effect</span>
      </osrs-tooltip>
      <osrs-number-input
        v-model="settings.currentHitpoints"
        :min="1"
        :max="99"
        @input="updateSettings"
      />
    </div>
  </div>
</template>

<script>
import ItemsManager from '../../services/managers/items.manager';
import OsrsNumberInput from '../OsrsNumberInput.vue';
import OsrsCheckbox from '../OsrsCheckbox.vue';
import OsrsTooltip from '../OsrsTooltip.vue';

export default {
  name: 'PlayerSettings',
  components: { OsrsTooltip, OsrsCheckbox, OsrsNumberInput },
  data() {
    return {
      bgsId: 11804,
      bgsObject: undefined,
      dwhId: 13576,
      dwhObject: undefined,
      arclightId: 19675,
      arclightObject: undefined,
      settings: {
        bgsSpecialDamage: 0,
        dwhSpecials: 0,
        arclightSpecials: 0,
        onSlayerTask: true,
        currentHitpoints: 1,
      },
    };
  },
  created() {
    this.getBgs();
    this.getDwh();
    this.getArclight();
    this.updateSettings();
  },
  methods: {
    async getBgs() {
      this.bgsObject = await ItemsManager.getById(this.bgsId);
    },
    async getDwh() {
      this.dwhObject = await ItemsManager.getById(this.dwhId);
    },
    async getArclight() {
      this.arclightObject = await ItemsManager.getById(this.arclightId);
    },
    updateSettings() {
      this.$emit('settings-changed', {
        ...this.settings,
      });
    },
  },
};
</script>

<style scoped>
.player-settings-container {
  display: flex;
  flex-direction: column;
}

.player-settings-grid {
  display: grid;
  grid-template-columns: 32px 1fr;
  grid-auto-rows: 32px;
  grid-gap: 8px;
  align-items: center;
}
</style>
