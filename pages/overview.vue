<template>
  <v-app>
    <div class="overview-page bg-gradient">
      <!-- Initial Alert -->
      <v-dialog v-model="showInitialAlert" persistent max-width="500">
        <v-card class="rounded-lg">
          <v-card-item>
            <template v-slot:prepend>
              <v-icon color="warning" size="32" class="me-3">mdi-alert</v-icon>
            </template>
            <v-card-title class="text-h5 font-weight-bold text-high-contrast">Note Importante</v-card-title>
          </v-card-item>
          <v-card-text class="pa-4 text-medium-contrast">
            Cette application utilise l'API gratuite Edamam, qui peut avoir des limitations sur l'ajout de recettes.
            Le code source complet est disponible sur GitHub pour référence.
          </v-card-text>
          <v-card-actions class="pa-4">
            <v-spacer></v-spacer>
            <v-btn color="primary" variant="elevated" @click="showInitialAlert = false">
              Compris
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-container fluid class="pa-6">
        <!-- Header -->
        <v-row class="mb-6">
          <v-col cols="12">
            <div class="text-h4 font-weight-bold mb-2 text-high-contrast">Tableau de Bord</div>
            <div class="text-subtitle-1 text-medium-contrast">
              Suivez votre progression et atteignez vos objectifs
            </div>
          </v-col>
        </v-row>

        <v-row>
          <!-- Main Section -->
          <v-col cols="12" lg="8">
            <!-- Calories Card -->
            <v-card class="mb-6 card-hover" elevation="2" rounded="lg">
              <v-card-item>
                <template v-slot:prepend>
                  <v-icon color="primary" size="32" icon="mdi-fire" class="me-4"></v-icon>
                </template>
                <v-card-title>
                  <div>
                    <div class="text-h5 mb-1 text-high-contrast">Calories Quotidiennes</div>
                    <div class="text-subtitle-1 text-medium-contrast">
                      {{ Math.round(userStore.recipes.totalCalories) }} / {{ Math.round(userStore.form.calories) }} kcal
                    </div>
                  </div>
                </v-card-title>
              </v-card-item>

              <v-card-text>
                <v-progress-linear :model-value="progressCalorie" :color="progressColor" height="20" rounded
                  class="mb-4">
                  <template v-slot:default="{ value }">
                    <div class="text-caption font-weight-bold text-light">{{ Math.round(value) }}%</div>
                  </template>
                </v-progress-linear>

                <v-alert :type="userStore.recipes.totalCalories >= userStore.form.calories ? 'success' : 'info'"
                  variant="tonal" class="mb-0" density="comfortable">
                  <template v-if="userStore.recipes.totalCalories >= userStore.form.calories">
                    <v-icon start icon="mdi-check-circle" class="me-2"></v-icon>
                    Félicitations ! Vous avez atteint votre objectif quotidien.
                  </template>
                  <template v-else>
                    <v-icon start icon="mdi-information" class="me-2"></v-icon>
                    Il vous reste {{ Math.round(userStore.form.calories - userStore.recipes.totalCalories) }} kcal pour
                    atteindre votre objectif
                  </template>
                </v-alert>
              </v-card-text>
            </v-card>

            <!-- Macronutrients Card -->
            <v-card class="mb-6 card-hover" elevation="2" rounded="lg">
              <v-card-item>
                <template v-slot:prepend>
                  <v-icon color="primary" size="32" icon="mdi-chart-donut" class="me-4"></v-icon>
                </template>
                <v-card-title>
                  <div>
                    <div class="text-h5 mb-1 text-high-contrast">Macronutriments</div>
                    <div class="text-subtitle-1 text-medium-contrast">Répartition journalière</div>
                  </div>
                </v-card-title>
              </v-card-item>

              <v-card-text>
                <v-row class="mt-2">
                  <v-col v-for="(macro, index) in macrosProgress" :key="index" cols="12" md="4">
                    <div class="d-flex flex-column align-center">
                      <div class="macro-progress mb-2">
                        <v-progress-circular :model-value="(macro.current / macro.target) * 100" :color="macro.color"
                          :size="100" :width="10">
                          <div class="d-flex flex-column align-center">
                            <span class="text-h6 text-high-contrast">{{ Math.round((macro.current / macro.target) * 100)
                            }}%</span>
                            <span class="text-caption text-medium-contrast">{{ macro.label }}</span>
                          </div>
                        </v-progress-circular>
                      </div>
                      <div class="text-subtitle-2 font-weight-medium text-medium-contrast">
                        {{ Math.round(macro.current) }} / {{ Math.round(macro.target) }}g
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <!-- Goals Card -->
            <v-card class="card-hover" elevation="2" rounded="lg">
              <v-card-item>
                <template v-slot:prepend>
                  <v-icon color="primary" size="32" icon="mdi-flag" class="me-4"></v-icon>
                </template>
                <v-card-title>
                  <div>
                    <div class="text-h5 mb-1 text-high-contrast">Objectif en Cours</div>
                    <div class="text-subtitle-1 text-medium-contrast">
                      {{ userStore.goals.goal || "Maintien du poids" }}
                    </div>
                  </div>
                </v-card-title>
              </v-card-item>

              <v-divider></v-divider>

              <v-card-text class="pt-4">
                <v-row>
                  <v-col cols="12" md="6">
                    <div class="d-flex align-center mb-4">
                      <v-icon color="primary" size="28" icon="mdi-target" class="me-3"></v-icon>
                      <div>
                        <div class="text-subtitle-1 text-medium-contrast">Objectif Calorique</div>
                        <div class="text-h5 text-high-contrast">{{ Math.round(userStore.form.calories) }} kcal</div>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-list density="compact" class="pa-0">
                      <v-list-item v-for="(macro, index) in macrosGoals" :key="index" class="px-0">
                        <template v-slot:prepend>
                          <v-icon :color="macro.color" :icon="macro.icon" class="me-3"></v-icon>
                        </template>
                        <v-list-item-title class="text-subtitle-1 text-high-contrast">
                          {{ Math.round(macro.value) }}g {{ macro.texte }}
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Food Search Section -->
          <v-col cols="12" lg="4">
            <v-card elevation="2" rounded="lg" class="sticky-card card-hover">
              <v-card-item>
                <template v-slot:prepend>
                  <v-icon color="primary" size="32" icon="mdi-food-apple" class="me-4"></v-icon>
                </template>
                <v-card-title>
                  <div>
                    <div class="text-h5 mb-1 text-high-contrast">Ajouter un Aliment</div>
                    <div class="text-subtitle-1 text-medium-contrast">Enregistrez vos repas</div>
                  </div>
                </v-card-title>
              </v-card-item>

              <v-card-text>
                <v-text-field v-model="selectedFood" label="Rechercher un aliment"
                  placeholder="Ex: Pomme, Banane, Riz..." variant="outlined" density="comfortable" hide-details
                  clearable class="mb-4 search-field" @input="fetchFood">
                  <template v-slot:prepend-inner>
                    <v-icon icon="mdi-magnify" color="primary"></v-icon>
                  </template>
                </v-text-field>

                <v-list v-if="foodList.length" class="food-list" border rounded="lg">
                  <v-list-item v-for="(item, index) in foodList" :key="index" @click="addToRecipes(item.food)"
                    class="food-item">
                    <template v-slot:prepend>
                      <v-icon icon="mdi-food" color="primary" class="me-2"></v-icon>
                    </template>

                    <v-list-item-title class="text-subtitle-1 font-weight-medium mb-2 text-high-contrast">
                      {{ item.food.label }}
                    </v-list-item-title>

                    <v-list-item-subtitle>
                      <div class="d-flex flex-wrap gap-2">
                        <v-chip size="small" color="primary" variant="tonal" class="font-weight-medium">
                          {{ Math.round(item.food.nutrients.ENERC_KCAL) }} kcal
                        </v-chip>
                        <v-chip size="small" color="success" variant="tonal" class="font-weight-medium">
                          P: {{ Math.round(item.food.nutrients.PROCNT) }}g
                        </v-chip>
                        <v-chip size="small" color="info" variant="tonal" class="font-weight-medium">
                          G: {{ Math.round(item.food.nutrients.CHOCDF) }}g
                        </v-chip>
                        <v-chip size="small" color="warning" variant="tonal" class="font-weight-medium">
                          L: {{ Math.round(item.food.nutrients.FAT) }}g
                        </v-chip>
                      </div>
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>

                <div v-else-if="selectedFood" class="d-flex justify-center align-center pa-4">
                  <v-progress-circular indeterminate color="primary"></v-progress-circular>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script setup>
import axios from 'axios';
import { computed, ref } from "vue";
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/userStore';

definePageMeta({
  layout: 'dashboard'
})

const router = useRouter();
const userStore = useUserStore();
const selectedFood = ref("");
const foodList = ref([]);
const showInitialAlert = ref(true);
const loading = ref(false);

const progressCalorie = computed(() => {
  const calories = userStore.recipes.totalCalories || 0;
  const target = userStore.form.calories || 1;
  return (calories / target) * 100;
});

const progressColor = computed(() => {
  const progress = progressCalorie.value;
  if (progress >= 100) return 'success';
  if (progress >= 80) return 'warning';
  return 'primary';
});

const macrosProgress = computed(() => [
  {
    label: 'Glucides',
    current: userStore.recipes.totalCarbs || 0,
    target: userStore.goals.target_carbs || 0,
    color: 'success'
  },
  {
    label: 'Protéines',
    current: userStore.recipes.totalProteins || 0,
    target: userStore.goals.target_proteins || 0,
    color: 'warning'
  },
  {
    label: 'Lipides',
    current: userStore.recipes.totalLipids || 0,
    target: userStore.goals.target_lipids || 0,
    color: 'error'
  }
]);

const macrosGoals = [
  { texte: "glucides", value: userStore.goals.target_carbs || 0, icon: "mdi-barley", color: "success" },
  { texte: "protéines", value: userStore.goals.target_proteins || 0, icon: "mdi-food-steak", color: "warning" },
  { texte: "lipides", value: userStore.goals.target_lipids || 0, icon: "mdi-oil", color: "error" }
];

const fetchFood = async () => {
  if (!selectedFood.value) {
    foodList.value = [];
    return;
  }

  try {
    const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser`, {
      params: {
        ingr: selectedFood.value,
        app_id: process.env.NUXT_EDAMAM_APP_ID,
        app_key: process.env.NUXT_EDAMAM_APP_KEY
      }
    });

    foodList.value = response.data
    console.log("Complete API response: ", response.data);
    if (response.data && response.data.error) {
      console.warn("API Error: ", response.data.error);
    }

    if (response.data && response.data.hints) {
      foodList.value = response.data.hints.map((hint) => ({
        food: hint.food,
        measures: hint.measures,
      }));
      console.log(foodList.value);
    } else {
      foodList.value = [];
    }
  } catch (error) {
    console.error('Search error:', error);
  }
};

const addToRecipes = (food) => {
  userStore.addRecipe({
    name: food.label,
    calories: food.nutrients.ENERC_KCAL,
    proteins: food.nutrients.PROCNT,
    carbs: food.nutrients.CHOCDF,
    lipids: food.nutrients.FAT
  });
  selectedFood.value = "";
  foodList.value = [];
};
</script>

<style scoped>
.sticky-card {
  position: sticky;
  top: var(--spacing-xl);
}

.macro-progress {
  position: relative;
  display: inline-flex;
  padding: var(--spacing-md);
  background: var(--bg-overlay);
  border-radius: 50%;
  transition: transform var(--transition-normal);
}

.macro-progress:hover {
  transform: scale(1.05);
}

.food-list {
  max-height: calc(100vh - 400px);
  overflow-y: auto;
  border: var(--border-width) solid var(--border-color) !important;
  border-radius: var(--border-radius-md) !important;
}

.food-item {
  transition: all var(--transition-normal);
  cursor: pointer;
  border-radius: var(--border-radius-sm);
}

.food-item:hover {
  background-color: var(--bg-overlay);
}

.search-field {
  border-radius: var(--border-radius-md);
}

:deep(.v-alert) {
  border: none !important;
}

:deep(.v-alert.bg-success) {
  background-color: var(--success-light) !important;
  color: var(--success-dark) !important;
}

:deep(.v-alert.bg-info) {
  background-color: var(--info-light) !important;
  color: var(--info-dark) !important;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-overlay: rgba(255, 255, 255, 0.05);
  }

  .food-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  :deep(.v-alert.bg-success) {
    background-color: rgba(46, 125, 50, 0.2) !important;
    color: #81c784 !important;
  }

  :deep(.v-alert.bg-info) {
    background-color: rgba(2, 136, 209, 0.2) !important;
    color: #4fc3f7 !important;
  }
}
</style>