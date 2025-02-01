<template>
    <v-container class="d-flex justify-center align-center" style="height: 100vh;">
      <v-card class="pa-12 rounded-lg shadow-lg" width="600">
        <v-card-title class="text-center text-h5 font-weight-bold">User Data</v-card-title>
        <v-divider class="my-4"></v-divider>
        <v-form @submit.prevent="handleUpdateUserData">
          <v-radio-group v-model="userStore.form.sexe" class="d-flex justify-center mb-4" inline>
            <v-radio label="Men" value="Men"></v-radio>
            <v-radio label="Women" value="Women"></v-radio>
          </v-radio-group>
          <v-row class="mb-4" dense>
            <v-col cols="12" md="6">
              <v-text-field v-model="userStore.form.size" label="Size" density="comfortable"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="userStore.form.years" label="Age" density="comfortable"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mb-4" dense>
            <v-col cols="12" md="6">
              <v-text-field v-model="userStore.form.weight" label="Weight" density="comfortable"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                v-model="userStore.form.activity"
                :items="items"
                density="comfortable"
                label="Activity"
              ></v-select>
            </v-col>
          </v-row>
          <v-btn type="submit" color="primary" class="mt-4 mx-auto d-block" elevation="2">
            Update
          </v-btn>
        </v-form>
      </v-card>
    </v-container>
  </template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/userStore'

const userStore = useUserStore()
const router = useRouter()

const loading = ref(false)

const activity = [
  'Sendentary',
  'Slightly active',
  'Moderately active',
  'Very active',
  'Extremely active',
];

const items = ['Sendentary', 'Slightly active', 'Moderately active', 'Very active', 'Extremely active' ];

const handleUpdateUserData = async () => { 
    loading.value = true
  try {
    await userStore.updateUserData(userStore.form)
    router.push('/dashboard') 
  } catch (err) {
    console.error(err.message)
  } finally {
    loading.value = false
  }
}

</script>