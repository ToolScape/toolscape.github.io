<template>
  <v-app class="toolscape-application-wrapper">
    <v-main class="">
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
@import './assets/fonts/stylesheet.css';
@import './assets/osrs-vars.css';

.osrs-text-plain-11 {
  font-family: "runescape_plain_11regular", "Roboto", sans-serif;
  text-shadow: 1px 1px 1px black;
  font-size: 24px;
  color: #ff9c1f;
  fill: #ff9c1f;
}

.osrs-text-bold-12 {
  font-family: "runescape_bold_12regular", "Roboto", sans-serif;
  text-shadow: 1px 1px 1px black;
  font-size: 24px;
  color: #ff9c1f;
  fill: #ff9c1f;
}

.osrs-text-plain-12 {
  font-family: "runescape_plain_12regular", "Roboto", sans-serif;
  text-shadow: 1px 1px 1px black;
  font-size: 24px;
  color: #ff9c1f;
  fill: #ff9c1f;
}

.osrs-text-quill-8 {
  font-family: "runescape_quill_8regular", "Roboto", sans-serif;
  text-shadow: 1px 1px 1px black;
  font-size: 24px;
  color: #ff9c1f;
  fill: #ff9c1f;
}
</style>

<style scoped>
.toolscape-application-wrapper {
  background: #0c0c0c !important;
}
</style>
