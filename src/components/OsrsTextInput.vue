<template>
  <div class="osrs-text-input-container">
    <div class="osrs-text-input-prepend">
      <slot name="prepend" />
    </div>
    <input
      ref="internalInput"
      :value="value"
      class="osrs-text-input osrs-text-plain-11"
      type="text"
      @input="$emit('input', $event.target.value)"
      @keyup="detectEnter"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
      @keydown="$emit('keydown', $event)"
    >
    <div class="osrs-text-input-append">
      <slot name="append" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OsrsTextInput',
  props: {
    value: {
      type: undefined,
      default: undefined,
    },
  },
  methods: {
    detectEnter(event) {
      if (event.key === 'Enter') {
        this.$emit('enter-pressed');
      }
    },
    focus() {
      this.$refs.internalInput.focus();
    },
    blur() {
      this.$refs.internalInput.blur();
    },
  },
};
</script>

<style scoped>
.osrs-text-input-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 8px 4px;
  width: 100%;
}

.osrs-text-input {
  appearance: none;
  outline: none;
  background: var(--osrs-dark-brown);
  border-radius: 8px;
  box-shadow: 2px 2px 1px rgba(0,0,0, 0.5) inset;
  caret-color: var(--osrs-orange);
  text-indent: 10px;
  color: var(--osrs-orange);
  max-width: 100%;
  flex: 1;
}

.osrs-text-input-prepend {
  margin-right: 5px;
}

.osrs-text-input-append {
  margin-left: 5px;
  display: flex;
  align-items: center;
}
</style>
