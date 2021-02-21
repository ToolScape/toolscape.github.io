<template>
  <v-container fluid>
    <item-select
      v-model="selectedWeapon"
      :item-slots="['weapon', '2h']"
    />
    <item-select
      :item-slots="['shield']"
    />
  </v-container>
</template>

<script>
import ItemSelect from '../components/ItemSelect.vue';

export default {
  name: 'DpsCalc',
  components: { ItemSelect },
  data() {
    return {
      selectedWeapon: undefined,
    };
  },
};
</script>
