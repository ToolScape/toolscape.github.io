<template>
  <v-container>
    <v-btn @click="checkForUpdates">
      Check for updates
    </v-btn>
  </v-container>
</template>

<script>
import DataManager from '../services/data-manager';

export default {
  name: 'DataManager',
  data() {
    return {
      contents: [],
      content: undefined,
    };
  },
  methods: {
    async checkForUpdates() {
      const t0 = performance.now();
      await DataManager.checkForUpdates().then((updates) => {
        console.log('Update required for ', updates);
        DataManager.update(updates);
      });
      const t1 = performance.now();
      console.log(`Updating took ${t1 - t0} milliseconds`);
    },
  },
};
</script>
