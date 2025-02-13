<template>
  <v-app>
    <v-app-bar color="transparent" elevation="0" class="custom-header">
        <v-app-bar-title class="logo d-flex align-center ml-3">
           NutriWeb
        </v-app-bar-title>
        <template v-slot:prepend>
          <v-app-bar-nav-icon icon="mdi-nutrition"></v-app-bar-nav-icon>
        </template>
        <v-spacer></v-spacer>
        <NuxtLink to="/login">
          <v-btn color="primary" class="login-btn d-sm-none d-md-flex" variant="outlined">Login</v-btn>
        </NuxtLink>
        <NuxtLink to="/signup">
          <v-btn color="primary" class="signup-btn" variant="outlined">Sign Up</v-btn>
        </NuxtLink>
    </v-app-bar>
    <section class="intro-img">
      <div class="overlay"></div>
      <v-container class="intro-text">
        <h1>Welcome to NutriWeb</h1>
        <p>Your health is our priority.</p>
        <NuxtLink to="/login">
          <v-btn elevation="2" class="try-btn">Try for free!</v-btn>
        </NuxtLink>
      </v-container>
    </section>
  </v-app>
</template>

<style scoped>
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

.custom-header {
  padding: 10px 0;
}

.header-container {
  width: 100%;
  padding: 0 16px; 
}

.login-btn, .signup-btn, .btn-try {
  font-weight: 600;
  margin-right: 15px;
}

.intro-text {
  position: relative;
  color: white;
  font-size: 1.8rem;
  text-align: center;
  font-weight: bold;
  max-width: 600px;
}

.intro-text h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.intro-text p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
</style>
