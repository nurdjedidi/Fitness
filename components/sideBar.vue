<template>
  <v-navigation-drawer app rail expand-on-hover>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-view-dashboard" title="Overview" value="overview" to="/settings" nuxt></v-list-item>
      <v-list-item prepend-icon="mdi-dumbbell" title="Fitness" value="Fitness" to="/fitness" nuxt></v-list-item>
      <v-list-item prepend-icon="mdi-blender-outline" title="Healthy Food" value="Healthy" to="/healthyFood" nuxt></v-list-item>
      <v-list-item prepend-icon="mdi-flag" title="Goals" value="Goals" to="/goals" nuxt></v-list-item>
      <v-list-item prepend-icon="mdi-cog-outline" title="Settings" value="Settings" to="/settings" nuxt></v-list-item>
      <v-list-item prepend-icon="mdi-logout" title="Logout" value="Logout" to="/" nuxt></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';

const activeSection = ref('overview');
const sections = ref({ 
  overview: '',
  fitness: '',
  healthy: '',
  goals: '',
  settings: ''
})
</script>
