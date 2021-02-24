<template>
  <div class="equipment-stats-container osrs-text-plain-12">
    <span class="equipment-stats-list-header osrs-text-bold-12">Attack bonus</span>
    <ul class="equipment-stats-list">
      <li class="equipment-stats-list-item">
        Stab: {{ parseBonus(bonuses.attackStab) }}
      </li>
      <li class="equipment-stats-list-item">
        Slash: {{ parseBonus(bonuses.attackSlash) }}
      </li>
      <li class="equipment-stats-list-item">
        Crush: {{ parseBonus(bonuses.attackCrush) }}
      </li>
      <li class="equipment-stats-list-item">
        Magic: {{ parseBonus(bonuses.attackMagic) }}
      </li>
      <li class="equipment-stats-list-item">
        Range: {{ parseBonus(bonuses.attackRanged) }}
      </li>
    </ul>
    <span class="equipment-stats-list-header osrs-text-bold-12">Defence bonus</span>
    <ul class="equipment-stats-list">
      <li class="equipment-stats-list-item">
        Stab: {{ parseBonus(bonuses.defenceStab) }}
      </li>
      <li class="equipment-stats-list-item">
        Slash: {{ parseBonus(bonuses.defenceSlash) }}
      </li>
      <li class="equipment-stats-list-item">
        Crush: {{ parseBonus(bonuses.defenceCrush) }}
      </li>
      <li class="equipment-stats-list-item">
        Magic: {{ parseBonus(bonuses.defenceMagic) }}
      </li>
      <li class="equipment-stats-list-item">
        Range: {{ parseBonus(bonuses.defenceRanged) }}
      </li>
    </ul>
    <span class="equipment-stats-list-header osrs-text-bold-12">Other bonuses</span>
    <ul class="equipment-stats-list">
      <li class="equipment-stats-list-item">
        Melee strength: {{ parseBonus(bonuses.meleeStrength) }}
      </li>
      <li class="equipment-stats-list-item">
        Ranged strength: {{ parseBonus(bonuses.rangedStrength) }}
      </li>
      <li class="equipment-stats-list-item">
        Magic damage: {{ parseBonus(bonuses.magicDamage, { magicDamage: true }) }}
      </li>
      <li class="equipment-stats-list-item">
        Prayer: {{ parseBonus(bonuses.prayer) }}
      </li>
    </ul>
    <span class="equipment-stats-list-header osrs-text-bold-12">Target-specific</span>
    <ul class="equipment-stats-list">
      <osrs-tooltip>
        <template #activator="{ on }">
          <li class="equipment-stats-list-item" v-on="on">
            Undead: {{ parseBonus(bonuses.undead, { targetSpecific: true }) }}
          </li>
        </template>
        <span>
          Increases your damage against undead creatures <br>
          Does not stack with slayer bonus
        </span>
      </osrs-tooltip>
      <osrs-tooltip>
        <template #activator="{ on }">
          <li class="equipment-stats-list-item" v-on="on">
            Slayer: {{ parseBonus(bonuses.slayer, { targetSpecific: true }) }}
          </li>
        </template>
        <span>
          Increases your damage against your slayer target <br>
          Does not stack with undead bonus
        </span>
      </osrs-tooltip>
    </ul>
  </div>
</template>

<script>
import OsrsTooltip from '../OsrsTooltip.vue';

export default {
  name: 'EquipmentStats',
  components: { OsrsTooltip },
  props: {
    bonuses: {
      type: Object,
      default: undefined,
    },
  },
  methods: {
    parseBonus(bonus, { targetSpecific, magicDamage } = {}) {
      if (targetSpecific) {
        return `${(bonus - 1) * 100}%`;
      }
      if (magicDamage) {
        return `${(bonus).toFixed(1)}%`;
      }
      return bonus >= 0 ? `+${bonus}` : bonus;
    },
  },
};
</script>

<style scoped>
.equipment-stats-container {
  display: flex;
  flex-direction: column;
}

.equipment-stats-list-header {
  line-height: 1em;
  font-size: 16px;
}

.equipment-stats-list {
  list-style: none;
  padding-left: 8px;
}

.equipment-stats-list-item {
  line-height: 1em;
  font-size: 16px;
}
</style>
