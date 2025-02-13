<template>
  <v-app>
    <v-main>
      <v-container fluid>

        <!-- Alerte de démarrage -->

        <v-dialog v-model="showInitialAlert" persistent max-width="600">
          <v-card class="pa-6 elevation-5 rounded-lg">
            <v-card-title class="d-flex align-center">
              <v-icon color="orange" size="32">mdi-alert</v-icon>
              <span class="text-h5 font-weight-bold ml-2">Warning</span>
            </v-card-title>
            <v-divider class="my-4"></v-divider>
            <v-card-text>
              As this site uses a free API (edamam API), you may not be able to add recipes to increase the calories
              consumed. If you need details of the code, it's all on github.
            </v-card-text>
            <v-card-actions class="d-flex justify-end">
              <v-btn color="primary" text @click="showInitialAlert = false">Next</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- Sections 1 et 2 -->
        <v-row justify="space-around">
          <v-col cols="12" md="5">
            <v-card class="pa-5 elevation-3 rounded-lg d-flex flex-column">

              <v-card-title class="text-h5 font-weight-bold text-center">
                <v-icon class="mr-2" color="primary">mdi-food-apple</v-icon>
                Daily Consumptions
              </v-card-title>

              <v-divider class="my-3"></v-divider>

              <v-row class="align-center justify-space-between">

                <v-col cols="6" class="d-flex justify-center">
                  <v-progress-circular :model-value="progressCalorie" :size="120" :width="10" color="blue-lighten-1">
                    <span class="font-weight-bold text-center">
                      {{ Math.round(userStore.recipes.totalCalories) }} /
                      {{ Math.round(userStore.form.calories) }} kcal
                    </span>
                  </v-progress-circular>
                </v-col>

                <v-col cols="6">
                  <v-list dense>
                    <v-list-item>
                      <v-icon class="mr-2" color="green">mdi-barley</v-icon>
                      <v-list-item-title>Carbs: <strong> {{ Math.round(userStore.recipes.totalCarbs) }} / {{
                        Math.round(userStore.goals.target_carbs) }}
                          g</strong></v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                      <v-icon class="mr-2" color="purple">mdi-oil</v-icon>

                      <v-list-item-title>Proteins: <strong>{{ Math.round(userStore.recipes.totalLipids) }} / {{
                        Math.round(userStore.goals.target_lipids) }}
                          g</strong></v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                      <v-icon class="mr-2" color="orange">mdi-food-steak</v-icon>
                      <v-list-item-title>Fats: <strong>{{ Math.round(userStore.recipes.totalProteins) }} / {{
                        Math.round(userStore.goals.target_proteins) }}
                          g</strong></v-list-item-title>
                    </v-list-item>


                  </v-list>
                </v-col>
              </v-row>
            </v-card>
          </v-col>


          <v-col cols="12" md="6">
            <v-card class="pa-4 elevation-3 rounded-lg">
              <v-card-title class="text-h5 font-weight-bold text-center">
                <v-icon class="mr-2" color="primary">mdi-hamburger</v-icon>
                Macros consumptions
              </v-card-title>
              <v-divider class="mb-10 mt-3"></v-divider>
              <v-row class="d-flex justify-center gap-4">
                <template v-for="(macro, macroIndex) in progressMacros" :key="macroIndex">
                  <div class="d-flex flex-column align-center">
                    <span class="text-center font-weight-bold">{{ macro.title }}</span>
                    <v-progress-circular :model-value="(macro.value / macro.target_value) * 100" :size="120" :width="10"
                      class="ma-5" :color="macro.color">
                      {{ Math.round(macro.value) }} / {{ Math.round(macro.target_value) }} g
                    </v-progress-circular>
                  </div>
                </template>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-container class="mt-6"></v-container>

        <!-- Sections 3 et 4 -->

        <v-row justify="space-around">
          <v-col cols="12" md="5">
            <v-card class="pa-4 elevation-3 rounded-lg">
              <v-card-title class="text-h5 font-weight-bold text-center">
                <v-icon class="mr-2" color="primary">mdi-flag</v-icon>
                Your goals
              </v-card-title>
              <v-divider class="my-4"></v-divider>
              <v-card-subtitle>Your actual goal is:
                {{ userStore.goals.goal || "Maintaining weight" }}</v-card-subtitle>
              <v-card-text>
                You need to consume {{ Math.round(userStore.form.calories) }} kcal per day to
                "{{ userStore.goals.goal }}" that includes :
              </v-card-text>
              <v-list>
                <v-list-item v-for="(macrosGoal, index) in macrosGoals" :key="index">
                  <template v-slot:prepend>
                    <v-icon :color="macrosGoal.color">{{ macrosGoal.icon }}</v-icon>
                  </template>
                  <v-list-item-title>
                    <strong>{{ Math.round(macrosGoal.value) }}g of {{ macrosGoal.texte }}</strong>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card max-height="355" class="pa-6 elevation-4 rounded-lg" outlined>

              <v-card-title class="d-flex align-center justify-center">
                <v-icon class="mr-2" color="primary">mdi-check</v-icon>
                <span class="text-h5 font-weight-bold">Dashboard Consumptions</span>
              </v-card-title>

              <v-divider class="my-4"></v-divider>

              <v-card-text>
                <div class="d-flex align-center">
                  <v-row>
                    <v-col>
                      <v-icon color="orange">mdi-fire</v-icon>
                      <span class="ml-2">Today you have consumed</span>
                    </v-col>
                    <v-col>
                      <v-icon class="float-right" icon="mdi-plus" @click="recipesSearch = true"></v-icon>
                    </v-col>
                  </v-row>
                </div>
                <div class="mt-2">
                  <v-progress-linear :model-value="progressCalorie" color="green" height="20" rounded class="mb-2">
                    <strong>{{ Math.round(userStore.recipes.totalCalories) }} / {{ Math.round(userStore.form.calories)
                      }}
                      kcal</strong>
                  </v-progress-linear>
                  <div class="d-flex justify-space-between">
                    <span>Consumed</span>
                    <span>Goal</span>
                  </div>
                </div>
              </v-card-text>
              <v-alert v-if="userStore.recipes.totalCalories > userStore.form.calories" type="success" colored-border
                class="mt-4" dismissible>
                Congratulations on achieving your daily goals, go back again tomorrow !
              </v-alert>
              <v-alert v-if="userStore.recipes.totalCalories < userStore.form.calories" type="warning" colored-border
                class="mt-4" dismissible>
                You don't have complete your daily goals, you need to consume {{ Math.round(userStore.form.calories -
                  userStore.recipes.totalCalories) }} kcal to complete your daily goals !
              </v-alert>
            </v-card>
          </v-col>
        </v-row>

      </v-container>
      <v-dialog v-model="recipesSearch" max-width="500">
        <v-card max-width="500" class="pa-4 ma-8 elevation-3 rounded-lg">
          <v-text-field v-model="selectedFood" label="Rechercher un aliment" placeholder="Ex: Apple, Banana, Rice..."
            @input="fetchFood"></v-text-field>
          <v-list v-if="foodList.length" max-height="200" class="overflow-auto">
            <v-list-item v-for="(item, index) in foodList" :key="index" @click="addToRecipes(item.food)">
              <v-list-item-content>
                <v-list-item-title>{{ item.food.label }}</v-list-item-title>
                <v-list-item-subtitle>
                  Calories: {{ Math.round(item.food.nutrients.ENERC_KCAL) }} kcal
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  Protéines: {{ item.food.nutrients.PROCNT }} g
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  Glucides: {{ item.food.nutrients.CHOCDF }} g
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  Lipides: {{ item.food.nutrients.FAT }} g
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-btn @click="endOfAddRecipes" color="primary" class="mt-4">Add recipes</v-btn>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>


<script setup>
import { ref, onMounted, watch } from "vue";
import axios from 'axios';
import { useUserStore } from '~/stores/userStore';
import { useRouter } from 'vue-router';

definePageMeta({
  layout: 'dashboard'
})

const router = useRouter();
const userStore = useUserStore();
const selectedFood = ref("");
const foodList = ref([]);
const searchQuery = ref('');
const ingredientsList = ref([]);
const recipesSearch = ref(false);
const showInitialAlert = ref(true);
const loading = ref(false);

const macrosGoals = [
  { texte: "carbohydrates", value: userStore.goals.target_carbs, icon: "mdi-barley", color: "green" },
  { texte: "lipids", value: userStore.goals.target_lipids, icon: "mdi-oil", color: "purple" },
  { texte: "proteins", value: userStore.goals.target_proteins, icon: "mdi-food-steak", color: "orange" },
]

const endOfAddRecipes = async () => {
  router.push('/dashboard');
}

// Récupération d'une base de donnée de recettes/aliments

const fetchFood = async () => {
  if (!searchQuery.value) {
    foodList.value = [];
  }

  try {
    const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser`, {
      params: {
        ingr: selectedFood.value,
        app_id: '3ae0b4bf',
        app_key: '3d500bf4ecc67e8d1d79c42348a13432',
      },
    });

    foodList.value = response.data
    console.log("Réponse complète de l'API : ", response.data);
    if (response.data && response.data.error) {
      console.warn("Erreur API : ", response.data.error);
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
    console.error("Erreur API :", error.response ? error.response.data : error.message);
  }
};

// Ajout d'une recette a la base de donnée

const addToRecipes = async (food) => {
  loading.value = true;
  try {
    if (!ingredientsList.value.some(item => item.label === food.label)) {
      ingredientsList.value.push(food);
    }
    const ingredient = {
      label: food.label,
      calories: Math.round(food.nutrients.ENERC_KCAL) || 0,
      proteins: food.nutrients.PROCNT || 0,
      carbs: food.nutrients.CHOCDF || 0,
      lipids: food.nutrients.FAT || 0,
    };

    userStore.addIngredient(ingredient);
    await userStore.saveRecipes();
  }
  catch (err) {
    console.error("Erreur lors de l'ajout du plat :", err.message, err.stack);
  }
  finally {
    loading.value = false;
  }
}

// Calcul des objectifs

const plans = async () => {
  let userNutrition = userStore.form.calories || 2000; // Valeur par défaut si vide
  let userGoal = userStore.goals.goal;

  // Vérifier si `goal` est un objet et extraire la valeur si nécessaire
  if (typeof userGoal === "object" && userGoal.goal) {
    userGoal = userGoal.goal;
  }

  console.log("🎯 Objectif utilisateur :", userGoal);
  console.log("⚡ Valeur actuelle de calories :", userNutrition);

  // Vérifie si l'objectif a changé et force la mise à jour
  if (userStore.lastGoal !== userGoal) {
    console.log("🔄 Changement de goal détecté :", userGoal);
    userStore.lastGoal = userGoal;
  }

  // Calcul des nouvelles calories
  let newCalories = userNutrition;
  if (userGoal === "Losing weight") {
    newCalories -= 550;
  } else if (userGoal === "Muscle gain") {
    newCalories += 550;
  }

  console.log("✅ Nouvelle valeur de calories :", newCalories);

  userStore.updateForm({ calories: newCalories })
  console.log(userStore.form)
}


// Suivi du progrés calorique

const progressCalorie = computed(() => {
  const totalCalories = parseFloat(userStore.recipes.totalCalories) || 0
  const goalCalories = parseFloat(userStore.form.calories) || 1
  console.log("goals calories", goalCalories)
  const percent = (totalCalories / goalCalories) * 100
  return Math.min(percent, 100)
});

const progressMacros = computed(() => {
  const goalCalories = parseFloat(userStore.form.calories) || 1;
  let weight = parseFloat(userStore.form.weight) || 70;

  let proteins = Math.round(weight * 2);
  let carbs = Math.round((goalCalories * 0.50) / 4);
  let lipids = Math.round((goalCalories * 0.25) / 9);

  userStore.goals.target_carbs = carbs;
  userStore.goals.target_lipids = lipids;
  userStore.goals.target_proteins = proteins;

  return [
    { title: "Carbs", value: userStore.recipes.totalCarbs || 0, target_value: userStore.goals.target_carbs, color: "#2CA6A4" },
    { title: "Lipids", value: userStore.recipes.totalLipids || 0, target_value: userStore.goals.target_lipids, color: "#A569BD" },
    { title: "Proteins", value: userStore.recipes.totalProteins || 0, target_value: userStore.goals.target_proteins, color: "#FFA500" },
  ];
});

// Monter les données au démarrage

onMounted(async () => {
  userStore.initializeStore();
  await plans()
});
</script>

<style scoped>
body {
  background-color: white;
}

.glucides::before {
  content: "\25A0";
  color: #007bff;
  font-size: 18px;
  margin-right: 10px;
}

.lipides::before {
  content: "\25A0";
  color: #405b77;
  font-size: 18px;
  margin-right: 10px;
}

.proteines::before {
  content: "\25A0";
  color: #0f7e4a;
  font-size: 18px;
  margin-right: 10px;
}
</style>