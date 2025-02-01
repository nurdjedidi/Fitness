<template>
  <section class="intro-img">
    <div class="overlay"></div>
    <v-container class="d-flex justify-center align-center" style="height: 100vh;">
      <v-card class="glass-card pa-12 rounded-lg shadow-sm" elevation="3" max-width="600" color="transparent">
        <v-card-title class="text-h5 font-weight-bold text-center mb-4">
          Let's build something great !
        </v-card-title>
        <v-divider class="my-5"></v-divider>
        <v-form class="d-flex flex-column" @submit.prevent="userData">
          <v-radio-group v-model="form.sexe" inline>
            <v-radio label="Men" value="Men" class="mr-2"></v-radio>
            <v-radio label="Women" value="Women"></v-radio>
          </v-radio-group>
          <v-text-field v-model="form.size" label="Size" type="text" name="size" variant="outlined"
            density="comfortable" color="primary" required></v-text-field>
          <v-text-field v-model="form.years" label="Years" type="text" name="years" variant="outlined"
            density="comfortable" color="primary" required></v-text-field>
          <v-text-field v-model="form.weight" label="Weight" type="text" name="weight" variant="outlined"
            density="comfortable" color="primary" required></v-text-field>
          <v-select v-model="form.activity" :items="items" density="comfortable" label="Activity" required></v-select>
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
import { useUserStore } from '~/stores/userStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();

const form = ref({
  sexe: '',
  size: null,
  years: null,
  weight: null,
  activity: '',
  calories: null,
  macros: {
    proteins: 0,
    carbs: 0,
    lipids: 0
  },
});

const loading = ref(false);
const items = ['Sedentary', 'Slightly active', 'Moderately active', 'Very active', 'Extremely active'];

const calculateBaseCalories = ({ sexe, size, years, weight }) => {
  return sexe === 'Men'
    ? 10 * weight + 6.25 * size - 5 * years + 5
    : 10 * weight + 6.25 * size - 5 * years - 161;
};

const adjustCaloriesForActivity = (baseCalories, activity) => {
  const activityFactors = {
    Sedentary: 1.2,
    'Slightly active': 1.375,
    'Moderately active': 1.55,
    'Very active': 1.725,
    'Extremely active': 1.9
  };
  return baseCalories * (activityFactors[activity] || 1.2);
};

const userData = async () => {
  try {
    loading.value = true;
    const { sexe, size, years, weight, activity } = form.value;

    if (!sexe || !size || !years || !weight || !activity) {
      throw new Error('Tous les champs doivent être remplis.');
    }

    const baseCalories = calculateBaseCalories(form.value);
    const totalCalories = adjustCaloriesForActivity(baseCalories, activity);

    let macros = {
      proteins: Math.round((totalCalories * 0.30) / 4),
      carbs: Math.round((totalCalories * 0.50) / 4),
      lipids: Math.round((totalCalories * 0.20) / 9),
    };

    const dataToSave = {
      ...form.value,
      calories: totalCalories,
      macros,
    };

    userStore.updateForm(dataToSave);

    await userStore.saveNutrition();

    router.push('/dashboard');
  } catch (err) {
    console.error('Erreur:', err.message, err.stack);
  } finally {
    loading.value = false;
  }
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
</style>