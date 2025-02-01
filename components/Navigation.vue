<template>
  <v-app-bar color="blue">
    <template v-slot:prepend>
      <v-app-bar-nav-icon icon="mdi-nutrition"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Health & Fitness</v-app-bar-title>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in settings" :key="i">
          <NuxtLink :to="item.route" class="w-full text-decoration-none settings-navigation">
            <v-list-item-title class="cursor-pointer">{{ item.label }}</v-list-item-title>
          </NuxtLink>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
const settings = [
  { label: 'Settings', route: '/settings' },
  { label: 'Plans', route: '/goals' },
  { label: 'Log out', route: '/' } 
]
</script>

<style>
a { 
  color: white;
}
a:hover { 
  color: #007bff;
}
</style>
