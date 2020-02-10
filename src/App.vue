<template>
    <v-app>
        <v-navigation-drawer v-model="mainDrawer" app>
            <v-list nav>
                <v-list-item to="/">
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            Home
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            Home, sweet home
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/tbowmaxhit">
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            Tbow max hit
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            How high can you go?
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="mainDrawer = !mainDrawer"></v-app-bar-nav-icon>
            <v-toolbar-title>ToolScape</v-toolbar-title>
        </v-app-bar>
        <v-content>
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-content>
        <v-footer>

        </v-footer>
    </v-app>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'App',

        components: {},

        data: () => ({
            "mainDrawer": false
        }),
    });
</script>

<style>
    html { overflow-y: auto }
</style>
