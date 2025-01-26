<template>
    <section class="intro-img">
      <div class="overlay"></div>
    <v-container class="d-flex justify-center align-center" style="height: 100vh;">
      <v-card class="glass-card pa-12 rounded-lg shadow-sm" elevation="3" max-width="600" color="transparent">
        <v-card-title class="text-h5 font-weight-bold text-center mb-4">Let's build something great !</v-card-title>
        <v-divider class="my-5"></v-divider>
        <v-form class="d-flex flex-column" @submit.prevent="userData">
          <v-radio-group inline>
            <v-radio label="Men" value="Men" class="mr-2"></v-radio>
             <v-radio label="Women" value="Women"></v-radio>
            </v-radio-group>
          <v-text-field v-model="form.size" label="Size" type="texte" name="size" variant="outlined" density="comfortable" color="primary" required></v-text-field>
          <v-text-field v-model="form.years" label="Years" type="texte" name="years" variant="outlined" density="comfortable" color="primary" required></v-text-field>
          <v-text-field v-model="form.weight" label="Weight" type="texte" name="weight" variant="outlined" density="comfortable" color="primary" required></v-text-field>
          <v-select v-model="form.activity" :items="items" density="comfortable" label="Activity"></v-select>
          <v-btn class="submit-btn" type="submit" :loading="loading" aria-label="Submit" color="primary">
            Go to dashboard
          </v-btn>
        </v-form>
      </v-card>
    </v-container>
    </section>
  </template>

  <script setup>
   import { ref } from 'vue';

   const loading = ref(false);
   const form = ref({ 
    sexe: '',
    size: null,
    years: null,
    weight: null,
    activity: ''
   });

   const items = ['Sendatary', 'Slightly active', 'Moderately active', 'Very active', 'Extremely active' ];

   const userData = async () => { 
    try { 
        loading.value = true;

    const response = await fetch('api/user', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sexe: form.sexe.value,
        size: form.size.value,
        years: form.years.value,
        weight: form.weight.value,
        activity: form.activity.value 
      }),
    });

    loading.value = false;
    } 
    catch (err) { 
        console.error(err.message, err.stack);
    }
   }
   </script>

<style>
.intro-img {
    position: relative;
    background: url('/images/city.jpg') center/cover no-repeat;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  
  .glass-card {
    background: rgba(255, 255, 255, 0.2); 
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px); 
    border: 1px solid rgba(255, 255, 255, 0.3); 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  </style>