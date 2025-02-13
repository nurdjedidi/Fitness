<template>
  <v-app>
    <Navigation />
    <v-navigation-drawer app rail expand-on-hover>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Overview" value="overview" to="/overview" nuxt></v-list-item>
        <v-list-item prepend-icon="mdi-lock" title="Fitness" value="Fitness" @click="activeDialog = true"></v-list-item>
        <v-list-item prepend-icon="mdi-lock" title="Healthy Food" value="Healthy" @click="activeDialog = true"></v-list-item>
        <v-list-item prepend-icon="mdi-flag" title="Goals" value="Goals" to="/goals" nuxt></v-list-item>
        <v-list-item prepend-icon="mdi-cog-outline" title="Settings" value="Settings" to="/settings" nuxt></v-list-item>
        <v-list-item prepend-icon="mdi-logout" title="Logout" value="Logout" to="/" nuxt></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-dialog max-width="600" v-model="activeDialog">
      <v-card class="pa-6 elevation-5 rounded-lg">
            <v-card-title class="d-flex align-center">
              <v-icon color="orange" size="32">mdi-alert</v-icon>
              <span class="text-h5 font-weight-bold ml-2">This item is unavailable</span>
            </v-card-title>
            <v-divider class="my-4"></v-divider>
            <v-card-text>
              This item is unavailable for now, thank you for your interest for our product
            </v-card-text>
            <v-card-actions class="d-flex justify-end">
              <v-btn color="primary" text @click="activeDialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
    </v-dialog>

    <v-main>
      <v-container fluid>
        <NuxtPage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Navigation from '~/components/Navigation.vue'
import { ref } from 'vue'

const activeDialog = ref(false)
</script>
