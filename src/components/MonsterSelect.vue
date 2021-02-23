<template>
  <v-autocomplete
    item-text="name"
    return-object
    clearable
    :items="monsters"
    :value="value"
    @input="$emit('input', $event)"
  >
    <template #item="{ item }">
      <v-list-item-content>
        <v-list-item-title class="monster-title">
          <v-img
            contain
            max-width="20"
            max-height="20"
            class="me-2"
            src="../assets/osrs/Monster Examine.png"
            alt="Monster"
          />
          {{ item.name }}
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
        </v-list-item-title>
        <v-list-item-subtitle v-text="item.examine" />
      </v-list-item-content>
    </template>
  </v-autocomplete>
</template>

<script>
import MonstersManager from '../services/managers/monsters.manager';

export default {
  name: 'MonsterSelect',
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
</style>
