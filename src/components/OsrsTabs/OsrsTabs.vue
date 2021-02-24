<template>
  <div class="osrs-tabs-container">
    <v-slide-group
      mandatory
      :value="value"
      class="osrs-tabs-container-slide-group"
      @change="$emit('input', $event)"
    >
      <slot />
    </v-slide-group>
  </div>
</template>

<script>
export default {
  name: 'OsrsTabs',
  props: {
    value: {
      type: undefined,
      default: undefined,
    },
  },
  data() {
    return {
      selectedTab: 0,
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.osrs-tabs-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  overflow: hidden;
}

.osrs-tabs-container-slide-group {
  width: 100%;
}
</style>
