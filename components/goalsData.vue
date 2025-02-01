<template>
    <v-app>
        <v-container class="d-flex justify-center align-center" style="height: 100vh;">
      <v-card class="pa-12 rounded-lg shadow-lg" width="600">
        <v-card-title class="text-center text-h5 font-weight-bold">Your goals</v-card-title>
        <v-divider class="my-4"></v-divider>
                <v-card-title>
                  Health & fitness
                </v-card-title>
  
                <v-card-subtitle>
                 Health program
                </v-card-subtitle>
  
                <v-card-text>
                  Your actual plan is {{ userStore.goals.goal }}
                </v-card-text>
  
                <v-card-text class="text-h6 font-weight-bold">
                  0€
                </v-card-text>
  
                <v-card-actions>
                  <v-btn color="primary" :loading="loading" @click="returnGoals">
                    Change
                  </v-btn>
                  <v-btn text @click="">
                    Read more
                  </v-btn></v-card-actions>

      </v-card>
    </v-container>
    </v-app>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '~/stores/userStore';

  const userStore = useUserStore()
  const router = useRouter();

  const dialogVisible = ref(false);
  
  const formulas = ref([
    {
      title: 'Health & fitness',
      subtitle: 'Health program',
      description: 'your actual plan is',
      price: 9.99, 
      image: 'https://placehold.co/600x400?text=Goals'
    },
  ])

const returnGoals = async () => { 
  dialogVisible.value = false
  router.push('/goals')
}
  </script>