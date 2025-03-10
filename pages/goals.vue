<template>
  <v-container fluid class="goals-page pa-6">
    <v-row class="mb-6">
      <v-col cols="12">
        <div class="text-h4 font-weight-bold mb-2">Choisissez Votre Objectif</div>
        <div class="text-subtitle-1 text-medium-emphasis">Sélectionnez le programme qui correspond le mieux à vos
          objectifs de fitness</div>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="(formula, index) in formulas" :key="index" cols="12" sm="6" md="4">
        <v-card class="h-100 goal-card" elevation="3"
          :class="{ 'selected-goal': userStore.goals?.goal === formula.title }">
          <v-img :src="formula.image" height="200" cover class="goal-image">
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
              </div>
            </template>
          </v-img>

          <v-card-item>
            <template v-slot:prepend>
              <v-icon :icon="formula.icon" color="primary" size="32"></v-icon>
            </template>
            <v-card-title>{{ formula.title }}</v-card-title>
            <v-card-subtitle>{{ formula.subtitle }}</v-card-subtitle>
          </v-card-item>

          <v-card-text class="text-body-1">
            {{ formula.description }}
          </v-card-text>

          <v-card-text>
            <v-chip v-for="(feature, idx) in formula.features" :key="idx" class="me-2 mb-2" color="primary"
              variant="tonal" size="small">
              {{ feature }}
            </v-chip>
          </v-card-text>

          <v-card-text class="d-flex align-center justify-space-between pt-0">
            <span class="text-h6 font-weight-bold">{{ formula.price }} €</span>
            <v-chip v-if="userStore.goals?.goal === formula.title" color="success" variant="tonal">
              Programme actuel
            </v-chip>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="pa-4">
            <v-btn block color="primary" variant="elevated" :loading="loading" @click="addGoals(formula)"
              :disabled="userStore.goals?.goal === formula.title">
              <v-icon start>{{ userStore.goals?.goal === formula.title ? 'mdi-check' : 'mdi-lightning-bolt' }}</v-icon>
              {{ userStore.goals?.goal === formula.title ? 'Programme Actif' : 'Commencer' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Dialog de confirmation -->
    <v-dialog v-model="dialogVisible" max-width="400">
      <v-card class="pa-4">
        <v-card-item>
          <template v-slot:prepend>
            <v-icon color="success" size="32">mdi-check-circle</v-icon>
          </template>
          <v-card-title>Objectif Enregistré !</v-card-title>
          <v-card-subtitle>Votre nouveau programme a été activé avec succès.</v-card-subtitle>
        </v-card-item>

        <v-card-text class="pt-4">
          Vous pouvez maintenant commencer à suivre votre progression dans le tableau de bord.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="elevated" @click="returnDashboard">
            Aller au tableau de bord
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/userStore';

definePageMeta({
  layout: 'dashboard'
})

const router = useRouter();
const userStore = useUserStore();

const dialogVisible = ref(false);
const loading = ref(false);

const formulas = ref([
  {
    title: 'Perte de poids',
    subtitle: 'Programme Nutrition & Sport',
    description: 'Un programme complet pour perdre du poids en suivant un plan alimentaire équilibré et des exercices adaptés.',
    price: 9.99,
    icon: 'mdi-scale-bathroom',
    image: '/images/weight-loss.jpg',
    features: ['Plan alimentaire', 'Exercices guidés', 'Suivi des calories', 'Conseils nutritionnels']
  },
  {
    title: 'Prise de masse',
    subtitle: 'Entraînement Intensif',
    description: 'Programme dédié à la prise de masse musculaire. Inclut des exercices ciblés et des conseils nutritionnels.',
    price: 19.99,
    icon: 'mdi-weight-lifter',
    image: '/images/muscle-gain.jpg',
    features: ['Programme musculation', 'Plan protéiné', 'Exercices avancés', 'Suivi progression']
  },
  {
    title: 'Bien-être',
    subtitle: 'Alimentation & Hydratation',
    description: 'Programme axé sur le bien-être général. Recettes riches en nutriments, plans d\'hydratation et conseils bien-être.',
    price: 29.99,
    icon: 'mdi-sprout',
    image: '/images/wellness.jpg',
    features: ['Recettes healthy', 'Méditation', 'Yoga', 'Conseils lifestyle']
  }
]);

const addGoals = async (formula) => {
  loading.value = true;
  try {
    if (typeof userStore.goals !== 'object') {
      userStore.goals = { goal: '' };
    }
    userStore.goals.goal = formula.title;

    if (!userStore.goals.goal || userStore.goals.goal.trim() === '') {
      await userStore.addUserGoals();
    } else {
      await userStore.updateUserGoals();
    }

    dialogVisible.value = true;
  } catch (err) {
    console.error('Erreur:', err.message);
  } finally {
    loading.value = false;
  }
};

const returnDashboard = () => {
  dialogVisible.value = false;
  router.push('/overview');
};
</script>

<style scoped>
.goals-page {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
}

.goal-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(var(--v-theme-primary), 0.1);
}

.goal-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1) !important;
}

.selected-goal {
  border: 2px solid rgb(var(--v-theme-primary));
}

.goal-image {
  position: relative;
}

.goal-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
}

:deep(.v-card-title) {
  line-height: 1.4;
}

:deep(.v-card-subtitle) {
  opacity: 0.8;
}
</style>