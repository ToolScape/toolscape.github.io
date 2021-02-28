<template>
  <div
    ref="osrsTooltipContainer"
    class="osrs-tooltip-container"
    :style="cssVars"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
    @click="$emit('click')"
  >
    <slot
      name="activator"
      v-bind="$attrs"
      v-on="$listeners"
    />
    <div
      class="osrs-tooltip osrs-text-plain-11"
      :class="{'show-osrs-tooltip': hover}"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OsrsTooltip',
  props: {
    fontSize: {
      type: String,
      default: '18px',
    },
  },
  data() {
    return {
      hover: false,
    };
  },
  computed: {
    cssVars() {
      return `
        --osrs-tooltip-font-size: ${this.fontSize};
      `;
    },
  },
  methods: {
    onMouseOver() {
      this.hover = true;
    },
    onMouseLeave() {
      this.hover = false;
    },
  },
};
</script>

<style scoped>
.osrs-tooltip-container {
  --osrs-tooltip-font-size: 18px;
}

.osrs-tooltip-container {
  position: relative;
  display: flex;
}

.osrs-tooltip {
  visibility: hidden;
  position: absolute;
  top: 110%;
  left: 5px;
  background: #ffffa0;
  border: 1px solid black;
  padding: 0 2px;
  color: black;
  text-shadow: none;
  font-size: var(--osrs-tooltip-font-size);
  line-height: .9em;
  z-index: 10;
  user-select: none;
  pointer-events: none;
  white-space: nowrap;
}

.osrs-tooltip.show-osrs-tooltip {
  visibility: visible;
}
</style>
