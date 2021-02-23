<template>
  <div class="stance-selector-container">
    <span>{{ weapon.name }}</span>
    <div
      :class="{ 'staff': isStaff, 'other': !isStaff }"
      class="stance-selector-stances"
    >
      <div
        v-for="stance in stances"
        :key="stance.combat_style"
        class="stance-selector-stance osrs-text"
        @click="stanceSelected(stance)"
      >
        {{ capitalize(stance.combat_style) }}
      </div>
    </div>
    <span>Category: {{ category }}</span>
  </div>
</template>

<script>
import { capitalize } from 'lodash';

export default {
  name: 'StanceSelector',
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
              },
              {
                attack_style: 'aggressive',
                attack_type: 'crush',
                combat_style: 'kick',
              },
              {
                attack_style: 'defensive',
                attack_type: 'crush',
                combat_style: 'block',
              },
            ],
            weapon_type: 'unarmed',
          },
        };
      }
      return weapon;
    },
    stances() {
      return this.weapon.weapon.stances;
    },
    category() {
      let category = this.weapon.weapon.weapon_type;
      category = category.replace('_', ' ');
      return capitalize(category);
    },
    isStaff() {
      return this.category.toLowerCase() === 'staff';
    },
  },
  methods: {
    capitalize,
    stanceSelected(stance) {
      console.log(stance);
    },
  },
};
</script>

<style scoped>
.stance-selector-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: darkgrey;
}

.stance-selector-stances {
  width: 200px;
  height: 100px;
}

.stance-selector-stances.other {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-auto-rows: 40px;
  place-items: center;
}

.stance-selector-stances.staff {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
}

.stance-selector-stance {
  display: inline-block;
}

.stance-selector-stances.staff .stance-selector-stance {
  flex: 1;
  height: 100px;
  max-width: 100px;
}
</style>
