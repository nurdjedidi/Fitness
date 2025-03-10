<template>
  <v-app>
    <div class="landing-page bg-gradient">
      <!-- Header -->
      <v-app-bar elevation="0" height="80" class="landing-header">
        <v-container class="d-flex align-center">
          <div class="d-flex align-center">
            <v-icon icon="mdi-nutrition" color="primary" size="32" class="me-2"></v-icon>
            <span class="text-h5 font-weight-bold gradient-text text-blue">NutriWeb</span>
          </div>

          <v-spacer></v-spacer>

          <div class="d-none d-sm-flex align-center">
            <NuxtLink to="/login" class="text-decoration-none me-4">
              <v-btn variant="tonal" color="primary" class="font-weight-medium">
                Connexion
              </v-btn>
            </NuxtLink>
            <NuxtLink to="/signup" class="text-decoration-none">
              <v-btn color="primary" class="font-weight-medium">
                S'inscrire
              </v-btn>
            </NuxtLink>
          </div>

          <v-app-bar-nav-icon class="d-flex d-sm-none" @click="drawer = true"></v-app-bar-nav-icon>
        </v-container>
      </v-app-bar>

      <!-- Navigation Drawer Mobile -->
      <v-navigation-drawer v-model="drawer" location="right" temporary>
        <v-list>
          <v-list-item prepend-icon="mdi-login" title="Connexion" to="/login" class="text-high-contrast"></v-list-item>
          <v-list-item prepend-icon="mdi-account-plus" title="S'inscrire" to="/signup"
            class="text-high-contrast"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- Hero Section -->
      <section class="hero-section">
        <v-container class="h-100">
          <v-row class="h-100" align="center">
            <v-col cols="12" md="6" class="hero-content">
              <h1 class="text-h2 font-weight-bold mb-6 text-high-contrast">
                Votre Parcours vers une Meilleure Santé
              </h1>
              <p class="text-h6 text-medium-contrast mb-8">
                Atteignez vos objectifs de santé avec notre plateforme de suivi nutritionnel personnalisée.
              </p>
              <div class="d-flex flex-wrap gap-4">
                <NuxtLink to="/signup" class="text-decoration-none">
                  <v-btn color="primary" size="x-large" class="px-8 text-light elevation-2">
                    <v-icon start>mdi-rocket</v-icon>
                    Commencer Gratuitement
                  </v-btn>
                </NuxtLink>
              </div>
            </v-col>

            <v-col cols="12" md="6" class="d-none d-md-flex justify-center">
              <v-img src="" max-width="500" class="hero-image" alt="Illustration fitness">
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </div>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </v-container>

        <div class="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="var(--bg-card)" fill-opacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="features-section">
        <v-container class="py-16">
          <v-row justify="center" class="mb-12">
            <v-col cols="12" md="8" class="text-center">
              <h2 class="text-h3 font-weight-bold mb-4 text-high-contrast">Fonctionnalités Principales</h2>
              <p class="text-subtitle-1 text-medium-contrast">
                Découvrez les outils qui vous aideront à atteindre vos objectifs de santé
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col v-for="(feature, index) in features" :key="index" cols="12" md="4">
              <v-card class="feature-card h-100 card-hover" elevation="0">
                <v-card-item>
                  <template v-slot:prepend>
                    <v-icon :icon="feature.icon" color="primary" size="32" class="mb-4"></v-icon>
                  </template>
                  <v-card-title class="text-h5 font-weight-bold text-high-contrast">
                    {{ feature.title }}
                  </v-card-title>
                  <v-card-text class="text-body-1 text-medium-contrast">
                    {{ feature.description }}
                  </v-card-text>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Footer -->
      <v-footer class="bg-surface-variant">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center">
              <div class="text-body-2 text-medium-contrast">
                © {{ new Date().getFullYear() }} NutriWeb. Tous droits réservés.
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </div>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

definePageMeta({
  layout: 'empty'
});

const drawer = ref(false);

const features = [
  {
    icon: 'mdi-food-apple',
    title: 'Suivi Nutritionnel',
    description: 'Suivez facilement vos apports caloriques et nutritionnels quotidiens avec notre interface intuitive.'
  },
  {
    icon: 'mdi-chart-line',
    title: 'Analyse de Progression',
    description: 'Visualisez vos progrès et ajustez vos objectifs grâce à des graphiques détaillés.'
  },
  {
    icon: 'mdi-account-group',
    title: 'Conseils Personnalisés',
    description: 'Recevez des recommandations adaptées à vos objectifs et à votre mode de vie.'
  }
];

const scrollToFeatures = () => {
  document.getElementById('features').scrollIntoView({
    behavior: 'smooth'
  });
};
</script>

<style scoped>
.landing-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95) !important;
  border-bottom: var(--border-width) solid var(--border-color);
  z-index: 100;
}

.gradient-text {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-text-fill-color: transparent;
}

.hero-section {
  position: relative;
  min-height: 100vh;
  padding-top: 80px;
  display: flex;
  align-items: center;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-image {
  animation: float 6s ease-in-out infinite;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15));
}

.hero-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

.features-section {
  background: var(--bg-card);
  position: relative;
  z-index: 2;
}

.feature-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

:deep(.v-card-title) {
  color: #1a237e;
}

:deep(.v-card-text) {
  color: #37474f !important;
}

:deep(.text-medium-emphasis) {
  color: #37474f !important;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

@media (max-width: 600px) {
  .hero-section {
    padding-top: 64px;
    text-align: center;
  }

  .hero-content {
    padding: var(--spacing-lg);
  }

  .hero-content .d-flex {
    justify-content: center;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-gradient-start: #1a1a1a;
    --bg-gradient-end: #2c2c2c;
    --bg-card: #2c2c2c;
    --text-primary: #ffffff;
    --text-secondary: #e0e0e0;
    --border-color: rgba(255, 255, 255, 0.12);
  }
}
</style>
