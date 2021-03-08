<template>
  <osrs-container class="target-details-container">
    <monster-select
      v-model="target"
    />
    <monster-details
      :monster="computedTarget"
      :debuffed-monsters="debuffedTargets"
    />
  </osrs-container>
</template>

<script>
import OsrsContainer from '../OsrsContainer.vue';
import MonsterSelect from '../MonsterSelect.vue';
import MonsterDetails from './MonsterDetails.vue';

export default {
  name: 'TargetDetails',
  components: { MonsterDetails, MonsterSelect, OsrsContainer },
  props: {
    debuffedTargets: {
      type: Array,
      default: undefined,
    },
  },
  data() {
    return {
      target: undefined,
    };
  },
  computed: {
    computedTarget() {
      if (this.debuffedTarget) {
        return this.debuffedTarget;
      }
      return this.target;
    },
  },
  watch: {
    target: function targetChanged(target) {
      this.$emit('target-changed', target);
    },
  },
  methods: {
  },
};
</script>

<style scoped>
.target-details-container {
  position: relative;
  min-width: 350px;
  max-width: 400px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
