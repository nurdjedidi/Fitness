<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :rail="rail" permanent class="gradient-background" elevation="4">
      <v-list-item prepend-icon="mdi-nutrition" :title="rail ? '' : 'NutriWeb'" nav class="mb-4">
        <template v-slot:append>
          <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"
            :class="{ 'rotate-180': !rail }"></v-btn>
        </template>
      </v-list-item>

      <v-divider class="mb-2"></v-divider>

      <v-list density="compact" nav>
        <v-list-item v-for="(item, i) in menuItems" :key="i" :value="item" :to="item.to" rounded="lg" class="mb-1">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-divider class="mb-2"></v-divider>
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-cog" to="/settings" rounded="lg" class="mb-1">
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>
          <v-list-item prepend-icon="mdi-logout" to="/login" nuxt rounded="lg" class="mb-1">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-3">
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/userStore'

const router = useRouter()
const userStore = useUserStore()
const drawer = ref(true)
const rail = ref(false)

const menuItems = [
  {
    title: 'Overview',
    icon: 'mdi-view-dashboard',
    to: '/overview'
  },
  {
    title: 'Goals',
    icon: 'mdi-target',
    to: '/goals'
  },
  {
    title: 'Health Form',
    icon: 'mdi-heart-pulse',
    to: '/healthForm'
  }
]
</script>

<style scoped>
.gradient-background {
  background: linear-gradient(135deg, #1976D2 0%, #64B5F6 100%);
}

.v-list-item {
  transition: all 0.3s ease;
}

.v-list-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.v-list-item.v-list-item--active {
  background-color: rgba(255, 255, 255, 0.2);
}

.rotate-180 {
  transform: rotate(180deg);
}

:deep(.v-list-item__prepend > .v-icon) {
  color: white;
}

:deep(.v-list-item-title) {
  color: white;
}

.v-navigation-drawer {
  border-right: none;
}
</style>
