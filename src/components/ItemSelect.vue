<template>
  <v-autocomplete
    item-text="name"
    return-object
    clearable
    auto-select-first
    autofocus
    :items="items"
    :value="value"
    @input="$emit('input', $event)"
  >
    <template #item="{ item }">
      <v-list-item-avatar tile>
        <v-img
          contain
          :src="`data:image/png;base64,${item.icon}`"
        />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-text="item.name" />
        <v-list-item-subtitle v-text="item.examine" />
      </v-list-item-content>
    </template>
  </v-autocomplete>
</template>

<script>
import ItemsManager from '../services/managers/items.manager';

export default {
  name: 'ItemSelect',
  props: {
    value: {
      type: undefined,
      default: undefined,
    },
    itemSlots: {
      type: Array,
      required: false,
      default: undefined,
    },
  },
  data() {
    return {
      items: [],
    };
  },
  watch: {
    itemSlots: function itemSlots() {
      this.items = [];
      this.fetchItems();
    },
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
    async fetchItems() {
      this.items = await ItemsManager.getBySlots(this.itemSlots);
    },
  },
};
</script>
