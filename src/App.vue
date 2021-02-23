<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
@import url('./assets/fonts/stylesheet.css');

.osrs-text {
  font-family: "runescape_plain_11regular", "Roboto", sans-serif;
  text-shadow: 1px 1px 0 black;
  font-size: 24px;
  color: #ff9c1f;
  fill: #ff9c1f;
}
</style>

<style scoped>
</style>
