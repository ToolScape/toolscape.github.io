<template>
  <div class="stance-selector-container">
    <span class="osrs-text-quill-8 stance-selector-header">
      {{ weapon.name }}
    </span>
    <div
      class="stance-selector-stances"
    >
      <osrs-tooltip
        v-for="(stance, index) in stances"
        :key="index"
        font-size="32px"
      >
        <template #activator="{ on }">
          <osrs-flat-button
            :active="selectedStance === stance"
            class="stance-selector-stance osrs-text"
            @click="stanceSelected(stance)"
            v-on="on"
          >
            {{ capitalize(stance.combat_style) }}
          </osrs-flat-button>
        </template>
        <span>
          <span v-if="stance.attack_style">
            ({{capitalize(stance.attack_style) }}) <br>
          </span>
          <span v-if="!stance.attack_style && stance.combat_style">
            ({{ capitalize(stance.combat_style) }}) <br>
          </span>
          <span v-if="stance.attack_type">
            ({{ capitalize(stance.attack_type) }}) <br>
          </span>
          <template v-if="stance.experience">
            <span
              v-for="experience in parseExperience(stance.experience)"
              :key="experience"
            >
              ({{ capitalize(experience) }} XP) <br>
            </span>
          </template>
        </span>
      </osrs-tooltip>
    </div>
    <span class="osrs-text-quill-8 stance-selector-footer">
      Category: {{ category }}
    </span>
  </div>
</template>

<script>
import { capitalize } from 'lodash';
import OsrsFlatButton from '../OsrsFlatButton.vue';
import OsrsTooltip from '../OsrsTooltip.vue';

export default {
  name: 'StanceSelector',
  components: { OsrsTooltip, OsrsFlatButton },
  props: {
    equippedWeapon: {
      type: Object,
      default: undefined,
    },
  },
  data() {
    return {
      selectedStance: undefined,
    };
  },
  computed: {
    weapon() {
      let weapon = this.equippedWeapon;
      if (!weapon) {
        weapon = {
          name: 'Unarmed',
          weapon: {
            attack_speed: 4,
            stances: [
              {
                attack_style: 'accurate',
                attack_type: 'crush',
                combat_style: 'punch',
                experience: 'attack',
              },
              {
                attack_style: 'aggressive',
                attack_type: 'crush',
                combat_style: 'kick',
                experience: 'strength',
              },
              {
                attack_style: 'defensive',
                attack_type: 'crush',
                combat_style: 'block',
                experience: 'defence',
              },
            ],
            weapon_type: 'unarmed',
          },
        };
      }
      return weapon;
    },
    stances() {
      return this.weapon.weapon.stances.filter((i) => i.combat_style.indexOf('(defensive)') === -1);
    },
    category() {
      let category = this.weapon.weapon.weapon_type;
      category = category.replace('_', ' ');
      return capitalize(category);
    },
  },
  watch: {
    weapon: {
      immediate: true,
      handler: function weaponChanged() {
        [this.selectedStance] = this.stances;
      },
    },
  },
  methods: {
    capitalize,
    stanceSelected(stance) {
      this.selectedStance = stance;
      this.$emit('stance-changed', stance);
    },
    parseExperience(experience) {
      return experience.split(' and ');
    },
  },
};
</script>

<style scoped>
.stance-selector-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stance-selector-stances {
  width: calc(128px * 2 + 10px);
  margin: 20px 5px;
  display: grid;
  grid-template-columns: 128px 128px;
  grid-auto-rows: 64px;
  gap: 4px;
  place-items: center;
}

.stance-selector-stance {
  width: 128px;
}

.stance-selector-header {
  font-size: 16px;
}

.stance-selector-footer {
  font-size: 16px;
}
</style>
