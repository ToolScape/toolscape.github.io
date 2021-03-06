<template>
  <osrs-autocomplete
    :value="value"
    :items="monsters"
    :value-comparator="comparisonFn"
    @input="$emit('input', $event)"
  >
    <template #item="{ item }">
      <div class="monster-select-item">
        <span>{{ item.name }}</span>
        <v-spacer></v-spacer>
        <v-img
          contain
          max-width="20"
          max-height="20"
          class="mx-2"
          src="../assets/osrs/Combat icon.png"
          alt="Combat level"
        />
        {{ item.combat_level }}
        <v-img
          contain
          max-width="20"
          max-height="20"
          class="mx-2"
          src="../assets/osrs/Hitpoints icon.png"
          alt="Hitpoints"
        />
        {{ item.hitpoints }}
      </div>
    </template>
    <template #prepend>
      <v-img
        contain
        max-width="20"
        max-height="20"
        class="me-2"
        src="../assets/osrs/Monster Examine.png"
        alt="Monster"
      />
    </template>
  </osrs-autocomplete>
</template>

<script>
import MonstersManager from '../services/managers/monsters.manager';
import OsrsAutocomplete from './OsrsAutocomplete.vue';

export default {
  name: 'MonsterSelect',
  components: { OsrsAutocomplete },
  props: {
    value: {
      type: undefined,
      default: undefined,
    },
  },
  data() {
    return {
      monsters: [],
    };
  },
  computed: {
    comparisonFn() {
      return function compare(monster1, monster2) {
        if (monster1.name !== monster2.name) return false;

        const propsToCompare = [
          'combat_level',
          'hitpoints',
          'defence_crush',
          'defence_magic',
          'defence_ranged',
          'defence_slash',
          'defence_stab',
          'defence_level',
          'magic_level',
        ];

        for (let i = 0; i < propsToCompare.length; i++) {
          const prop = propsToCompare[i];
          if (monster1[prop] !== monster2[prop]) {
            return false;
          }
        }

        return true;
      };
    },
  },
  mounted() {
    this.fetchMonsters();
  },
  methods: {
    async fetchMonsters() {
      this.monsters = await MonstersManager.getAll();
    },
  },
};
</script>

<style scoped>
.monster-title {
  display: flex;
}

.monster-select-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
