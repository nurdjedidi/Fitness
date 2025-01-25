<template>
    <section class="intro-img">
      <div class="overlay"></div>
    <v-container class="d-flex justify-center align-center" style="height: 100vh;">
      <v-card class="glass-card pa-12 rounded-lg shadow-sm" elevation="3" max-width="600" color="transparent">
        <v-card-title class="text-h5 font-weight-bold text-center mb-4">Sign Up to create an Account</v-card-title>
        <v-form class="d-flex flex-column" @submit.prevent="signUp">
          <v-text-field v-model="form.email" label="Email" type="email" name="email" variant="outlined" density="comfortable" color="primary" required></v-text-field>
          <v-text-field v-model="form.password" :type="showPassword ? 'text' : 'password'"  label="Password" type="password" name="password" variant="outlined" density="comfortable" color="primary" required>
            <template v-slot:append-inner>
      <v-icon @click="togglePasswordVisibility" class="cursor-pointer">
        {{ showPassword ? 'mdi-eye' : 'mdi-eye-off' }}
      </v-icon>
    </template>
          </v-text-field>
          <NuxtLink class="signIn-link mb-6" to="/login">Already have an account?</NuxtLink>
          <v-btn class="submit-btn" type="submit" :loading="loading" aria-label="Sign Up">
            Sign Up
          </v-btn>
        </v-form>
      </v-card>
    </v-container>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({
    email: '',
    password: '',
  });
  const loading = ref(false);
  const showPassword = ref(false);
  
  const signUp = async () => {
  loading.value = true;

  const response = await fetch('api/signup', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: form.value.email,  
      password: form.value.password,  
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

if (data.error) {
  error.value = data.error;
} 
  loading.value = false;
};
  
  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
  };
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
  
  .submit-btn {
    background-color: #007bff;
    color: white;
    transition: background-color 0.3s;
  }
  
  .submit-btn:hover {
    background-color: #0056b3;
  }
  
  .signIn-link {
    text-decoration: none;
    color: blue;
  }
  
  .signIn-link:hover {
    color: #7D3C98;
  }
  </style>
  
    