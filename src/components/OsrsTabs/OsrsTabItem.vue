<template>
  <v-item
    v-slot="{ active }"
    class="osrs-tab-item"
  >
    <div
      class="osrs-tab-item-container"
      :class="{'osrs-active-tab-item': active}"
    >
      <slot />
    </div>
  </v-item>
</template>

<script>
export default {
  name: 'OsrsTabItem',
};
</script>

<style scoped>
.osrs-tab-item-container {
  background: var(--osrs-brown);
  display: none;
  justify-content: center;
  align-items: center;
}

.osrs-tab-item-container.osrs-active-tab-item {
  display: flex;
}
</style>
