<template>
  <NuxtLayout name="dashboard">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '~/stores/userStore'

const userStore = useUserStore()

onMounted(async () => {
  if (userStore.isAuthenticated) {
    await userStore.loadNutrition()
  }
})
</script>
