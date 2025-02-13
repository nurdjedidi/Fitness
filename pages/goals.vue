<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="(formula, index) in formulas" :key="index" cols="12" sm="6" md="4">
            <v-card elevation="2">
              <v-img :src="formula.image" height="200px" cover></v-img>

              <v-card-title>
                {{ formula.title }}
              </v-card-title>

              <v-card-subtitle>
                {{ formula.subtitle }}
              </v-card-subtitle>

              <v-card-text>
                {{ formula.description }}
              </v-card-text>

              <v-card-text class="text-h6 font-weight-bold">
                {{ formula.price }} €
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" :loading="loading" @click="addGoals(formula)">
                  Try
                </v-btn>
                <v-btn text @click="">
                  Read more
                </v-btn>
                <v-dialog v-model="dialogVisible" width="auto">
                  <v-card max-width="400" prepend-icon="mdi-nutrition" title="Thanks for your purchase !"
                    text="Your goals was succesfully registered !">
                    <template v-slot:actions>
                      <v-btn class="ms-auto" text="Ok" @click="returnDashboard"></v-btn>
                    </template>
                  </v-card>
                </v-dialog>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '~/stores/userStore';
import { useRouter } from 'vue-router';

definePageMeta({
  layout: 'dashboard'
})

const router = useRouter();
const userStore = useUserStore()

const dialogVisible = ref(false);
const loading = ref(false);

const formulas = ref([
  {
    title: 'Losing weight',
    subtitle: 'Diet and Sport Programme',
    description: 'A complete formula for losing weight by following a balanced eating plan and appropriate exercise.',
    price: 9.99,
    image: 'https://placehold.co/600x400?text=Losing+weight'
  },
  {
    title: 'Muscle gain',
    subtitle: 'Intensive training',
    description: 'Programme dedicated to building muscle mass. Includes targeted exercises and nutritional advice..',
    price: 19.99,
    image: 'https://placehold.co/600x400?text=Muscle+gain'
  },
  {
    title: 'Detox & Well-being',
    subtitle: 'Healthy eating and hydration',
    description: 'Formula focused on detoxifying the body. Nutrient-rich recipes, hydration plans and wellness advice.',
    price: 29.99,
    image: 'https://placehold.co/600x400?text=Detox'
  }
])

const addGoals = async (formula) => {
  loading.value = true;
  try {
    if (typeof userStore.goals !== 'object') {
      userStore.goals = { goal: '' };
    }
    userStore.goals.goal = formula.title;

    if (!userStore.goals.goal || userStore.goals.goal.trim() === '') {
      console.log("Ajout d'un nouvel objectif...");
      await userStore.addUserGoals();
    } else {
      console.log("Mise à jour de l'objectif...");
      await userStore.updateUserGoals();
    }

    dialogVisible.value = true;
  } catch (err) {
    console.error(err.message, err.stack);
  } finally {
    loading.value = false;
  }
};

const returnDashboard = async () => {
  dialogVisible.value = false
  router.push('/dashboard')
}
</script>