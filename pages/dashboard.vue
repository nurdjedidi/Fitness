<template>
  <v-app>
    <v-app-bar color="blue">
        <template v-slot:prepend>
          <v-app-bar-nav-icon icon="mdi-nutrition"></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title>Health & fitness</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col class="pa-2">
        <v-card max-width="400" class="pa-4 ma-8 elevation-3 rounded-lg">
        <v-card-title class="text-h5 font-weight-bold text-center">
          Daily Consumptions
        </v-card-title>
        <v-divider class="my-4"></v-divider>
        <v-row>
          <v-col cols="6" class="d-flex align-center justify-center">
            <v-progress-circular
              :model-value="60"
              :size="120"
              :width="10"
              color="blue-lighten-1"
            >
              /
            </v-progress-circular>
          </v-col>
          <v-col class="pa-2">
            <v-list>
      <v-list-item v-for="(macro, index) in macros" :key="index" :class="macro.class">
         <v-list-item-title>{{ macro.name }}</v-list-item-title>
        </v-list-item>
       </v-list>
          </v-col>
        </v-row>
      </v-card>
      </v-col>
      <v-col>
      <v-card max-width="800" max-height="400" class="pa-4 ma-8 elevation-3 overflow-auto rounded-lg">
        <v-card-title class="text-h5 font-weight-bold text-center">
        Consumption dashboard
      </v-card-title>
      <v-divider class="my-4"></v-divider>
      <v-row>
        <v-col col="6">
      <v-text-field
      v-model="selectedFood"
      width="200"
      label="Rechercher un aliment"
      placeholder="Ex: Apple, Banana, Rice..."
      @input="fetchFood"
      item-value="label"  
      item-text="label"
    ></v-text-field>
    <v-list v-if="foodList.length">
          <v-list-item
            v-for="(item, index) in foodList"
            :key="index"
            v-model="ingredients"
            @click="addToRecipes(item.food)"
            class="d-flex align-center justify-space-between"
          >
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
            </v-list-item>
          </v-list>
          </v-col>
          <v-col>
            <v-card-subtitle>Recipes</v-card-subtitle>
            <v-list>
              <v-list-item v-for="(ingredients, index) in ingredientsList" :key="index">
                <v-list-item-title>
                  {{ ingredients.label }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          </v-row>
          </v-card>
          </v-col>
          </v-row>
          </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch } from "vue";
import axios from 'axios';

const selectedFood = ref("");
const foodList = ref([]);
const searchQuery = ref('');
const ingredientsList = ref([]);

const macros = ref([
  { name: "Glucides", class: "glucides" },
  { name: "Lipides", class: "lipides" },
  { name: "Protéines", class: "proteines" }
]);

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

const addToRecipes = (food) => {
  if (!food) return;

  if (!ingredientsList.value.some(item => item.label === food.label)) {
    ingredientsList.value.push(food);
  }
};
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