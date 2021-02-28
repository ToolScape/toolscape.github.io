<template>
  <div class="equipment-stats-container osrs-text-plain-12">
    <span class="equipment-stats-list-header osrs-text-bold-12">Attack bonus</span>
    <ul class="equipment-stats-list">
      <li class="equipment-stats-list-item">
        Stab: {{ parseBonus(bonuses.attack_stab) }}
      </li>
      <li class="equipment-stats-list-item">
        Slash: {{ parseBonus(bonuses.attack_slash) }}
      </li>
      <li class="equipment-stats-list-item">
        Crush: {{ parseBonus(bonuses.attack_crush) }}
      </li>
      <li class="equipment-stats-list-item">
        Magic: {{ parseBonus(bonuses.attack_magic) }}
      </li>
      <li class="equipment-stats-list-item">
        Range: {{ parseBonus(bonuses.attack_ranged) }}
      </li>
    </ul>
    <span class="equipment-stats-list-header osrs-text-bold-12">Defence bonus</span>
    <ul class="equipment-stats-list">
      <li class="equipment-stats-list-item">
        Stab: {{ parseBonus(bonuses.defence_stab) }}
      </li>
      <li class="equipment-stats-list-item">
        Slash: {{ parseBonus(bonuses.defence_slash) }}
      </li>
      <li class="equipment-stats-list-item">
        Crush: {{ parseBonus(bonuses.defence_crush) }}
      </li>
      <li class="equipment-stats-list-item">
        Magic: {{ parseBonus(bonuses.defence_magic) }}
      </li>
      <li class="equipment-stats-list-item">
        Range: {{ parseBonus(bonuses.defence_ranged) }}
      </li>
    </ul>
    <span class="equipment-stats-list-header osrs-text-bold-12">Other bonuses</span>
    <ul class="equipment-stats-list">
      <li class="equipment-stats-list-item">
        Melee strength: {{ parseBonus(bonuses.melee_strength) }}
      </li>
      <li class="equipment-stats-list-item">
        Ranged strength: {{ parseBonus(bonuses.ranged_strength) }}
      </li>
      <li class="equipment-stats-list-item">
        Magic damage: {{ parseBonus(bonuses.magic_damage, { magicDamage: true }) }}
      </li>
      <li class="equipment-stats-list-item">
        Prayer: {{ parseBonus(bonuses.prayer) }}
      </li>
    </ul>
    <span class="equipment-stats-list-header osrs-text-bold-12">Target-specific</span>
    <ul class="equipment-stats-list">
      <osrs-tooltip>
        <template #activator="{ on }">
          <li
            class="equipment-stats-list-item"
            v-on="on"
          >
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
          <li
            class="equipment-stats-list-item"
            v-on="on"
          >
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
    equipment: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    bonuses() {
      const skipBonuses = ['requirements', 'slot'];
      const bonuses = {
        attack_stab: 0,
        attack_slash: 0,
        attack_crush: 0,
        attack_magic: 0,
        attack_ranged: 0,
        defence_stab: 0,
        defence_slash: 0,
        defence_crush: 0,
        defence_magic: 0,
        defence_ranged: 0,
        melee_strength: 0,
        ranged_strength: 0,
        magic_damage: 0,
        prayer: 0,
        slayer: 1,
        undead: 1,
      };
      Object.values(this.equipment)
        .filter(Boolean)
        .forEach((item) => {
          const equipBonuses = item.equipment;
          Object.keys(equipBonuses)
            .filter((bonus) => skipBonuses.indexOf(bonus) === -1)
            .forEach((bonus) => {
              const bonusValue = equipBonuses[bonus];
              bonuses[bonus] += bonusValue;
            });
        });
      return bonuses;
    },
  },
  methods: {
    parseBonus(bonus = {}, { targetSpecific, magicDamage } = {}) {
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
  min-width: 140px;
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
