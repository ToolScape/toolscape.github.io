<template>
  <div>
    <osrs-tabs v-model="selectedTab">
      <osrs-tab>
        <v-img
          src="../../assets/osrs/Spellbook.png"
        />
      </osrs-tab>
      <osrs-tab>
        <v-img
          src="../../assets/osrs/Ancient_spellbook.png"
        />
      </osrs-tab>
      <osrs-tab>Other</osrs-tab>
    </osrs-tabs>
    <osrs-tab-items v-model="selectedTab">
      <osrs-tab-item>
        <div class="standard-spellbook-grid">
          <osrs-tooltip
            v-for="spell of elementalSpells"
            :key="spell.name"
            class="spell-slot"
            font-size="32px"
            @click="selectSpell(spell)"
          >
            <template #activator="{ on }">
              <v-img
                contain
                :src="`data:image/png;base64,${spell.icon}`"
                v-on="on"
              />
            </template>
            <span>{{ spell.name }}</span>
          </osrs-tooltip>
        </div>
      </osrs-tab-item>
      <osrs-tab-item>
        <div class="ancient-spellbook-grid">
          <osrs-tooltip
            v-for="spell of ancientSpells"
            :key="spell.name"
            font-size="32px"
            @click="selectSpell(spell)"
          >
            <template #activator="{ on }">
              <v-img
                contain
                :src="`data:image/png;base64,${spell.icon}`"
                v-on="on"
              />
            </template>
            <span>{{ spell.name }}</span>
          </osrs-tooltip>
        </div>
      </osrs-tab-item>
      <osrs-tab-item>
        <div class="other-spellbook-grid">
          <osrs-tooltip
            v-for="spell of otherSpells"
            :key="spell.name"
            font-size="32px"
            @click="selectSpell(spell)"
          >
            <template #activator="{ on }">
              <v-img
                contain
                :src="`data:image/png;base64,${spell.icon}`"
                v-on="on"
              />
            </template>
            <span>{{ spell.name }}</span>
          </osrs-tooltip>
        </div>
      </osrs-tab-item>
    </osrs-tab-items>
  </div>
</template>

<script>
import SpellsManager from '../../services/managers/spells.manager';
import OsrsTabs from '../OsrsTabs/OsrsTabs.vue';
import OsrsTab from '../OsrsTabs/OsrsTab.vue';
import OsrsTabItems from '../OsrsTabs/OsrsTabItems.vue';
import OsrsTabItem from '../OsrsTabs/OsrsTabItem.vue';
import OsrsTooltip from '../OsrsTooltip.vue';

export default {
  name: 'SpellSelection',
  components: {
    OsrsTooltip,
    OsrsTabItem,
    OsrsTabItems,
    OsrsTab,
    OsrsTabs,
  },
  data() {
    return {
      selectedTab: 0,
      elementalSpells: [],
      ancientSpells: [],
      godSpells: [],
      otherSpells: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.elementalSpells = SpellsManager.getByAttributes(['elemental', 'standard']);
      this.ancientSpells = SpellsManager.getByAttributes(['ancients']);
      this.godSpells = SpellsManager.getByAttributes(['god']);
      const otherSpells = [
        'Magic dart',
        'Iban Blast',
        'Crumble Undead',
      ];
      this.otherSpells = otherSpells.map((i) => SpellsManager.getByName(i));
    },
    selectSpell(spell) {
      this.$emit('spell-selected', spell);
    },
  },
};
</script>

<style scoped>
.standard-spellbook-grid,
.ancient-spellbook-grid,
.other-spellbook-grid {
  display: grid;
  grid-template-columns: 32px 32px 32px 32px;
  grid-auto-rows: 32px;
  grid-gap: 16px;
  margin-top: 16px;
  min-height: 250px;
}

.spell-slot {
  cursor: pointer;
  user-select: none;
}
</style>
