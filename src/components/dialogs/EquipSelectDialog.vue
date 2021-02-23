<template>
  <v-dialog
    max-width="600px"
    :value="dialog"
    @input="close"
  >
    <div class="equip-select-dialog-container">
      <item-select
        v-if="dialog"
        :value="selectedItem"
        :item-slots="itemSlots"
        @input="selectItem"
      />
    </div>
  </v-dialog>
</template>

<script>
import ItemSelect from '../ItemSelect.vue';

export default {
  name: 'EquipSelectDialog',
  components: { ItemSelect },
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    itemSlots: {
      type: Array,
      default: undefined,
    },
    selectedItem: {
      type: Object,
      default: undefined,
    },
  },
  methods: {
    open() {
      this.$emit('update:dialog', true);
    },
    close() {
      this.$emit('update:dialog', false);
    },
    selectItem(item) {
      this.$emit('item-selected', item);
      this.close();
    },
  },
};
</script>

<style scoped>
.equip-select-dialog-container {
  display: flex;
  align-items: center;
  padding: 0 20px;
}
</style>
