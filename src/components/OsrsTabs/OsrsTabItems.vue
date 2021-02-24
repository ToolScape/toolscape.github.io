<template>
  <div class="osrs-tab-items-container">
    <v-item-group
      :value="value"
      class="osrs-tabs-container-item-group"
    >
      <slot />
    </v-item-group>
  </div>
</template>

<script>
export default {
  name: 'OsrsTabItems',
  props: {
    value: {
      type: undefined,
      default: undefined,
    },
  },
};
</script>

<style scoped>
.osrs-tab-items-container {
}

.osrs-tabs-container-item-group {
  width: 100%;
}
</style>
