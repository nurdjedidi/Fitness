<template>
  <section class="health-form-page">
    <v-container class="d-flex align-center" style="min-height: 100vh;">
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-card class="health-card pa-8 rounded-lg" elevation="3">
            <v-card-item class="text-center mb-6">
              <v-card-title class="text-h4 font-weight-bold mb-2 text-white">
                Customize Your Experience
              </v-card-title>
              <v-card-subtitle class="text-white">
                Help us create your personalized nutrition plan
              </v-card-subtitle>
            </v-card-item>

            <v-form @submit.prevent="userData">
              <v-row>
                <v-col cols="12">
                  <div class="text-subtitle-1 mb-3 text-white">Gender</div>
                  <v-radio-group v-model="form.sexe" inline class="mb-4"
                    :rules="[v => !!v || 'Please select your gender']">
                    <v-radio label="Male" value="homme" color="primary"></v-radio>
                    <v-radio label="Female" value="femme" color="primary"></v-radio>
                  </v-radio-group>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field v-model="form.size" label="Height (cm)" type="number" variant="outlined"
                    density="comfortable" color="primary" min="100" max="250" :rules="[
                      v => !!v || 'Height is required',
                      v => (v && v >= 100 && v <= 250) || 'Height must be between 100 and 250 cm'
                    ]" required></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field v-model="form.weight" label="Weight (kg)" type="number" variant="outlined"
                    density="comfortable" color="primary" min="30" max="250" :rules="[
                      v => !!v || 'Weight is required',
                      v => (v && v >= 30 && v <= 250) || 'Weight must be between 30 and 250 kg'
                    ]" required></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field v-model="form.years" label="Age" type="number" variant="outlined" density="comfortable"
                    color="primary" min="15" max="100" :rules="[
                      v => !!v || 'Age is required',
                      v => (v && v >= 15 && v <= 100) || 'Age must be between 15 and 100 years'
                    ]" required></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-select v-model="form.activity" :items="activityLevels" item-title="text" item-value="value"
                    label="Activity Level" variant="outlined" density="comfortable" color="primary"
                    :rules="[v => !!v || 'Activity level is required']" required>
                    <template v-slot:prepend-inner>
                      <v-icon color="primary">mdi-run</v-icon>
                    </template>
                  </v-select>
                </v-col>
              </v-row>

              <v-divider class="my-6"></v-divider>

              <div class="d-flex justify-end">
                <v-btn color="primary" size="large" type="submit" :loading="loading" min-width="200">
                  <v-icon start>mdi-check</v-icon>
                  Continue
                </v-btn>
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/userStore';

definePageMeta({
  layout: 'empty'
})

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

const activityLevels = [
  { text: 'Sedentary (little or no exercise)', value: 'sedentaire' },
  { text: 'Lightly active (light exercise 1-3 times/week)', value: 'legerement_actif' },
  { text: 'Moderately active (moderate exercise 3-5 times/week)', value: 'moderement_actif' },
  { text: 'Very active (intense exercise 6-7 times/week)', value: 'tres_actif' },
  { text: 'Extremely active (very intense exercise, physical work)', value: 'extremement_actif' }
];

const calculateBaseCalories = ({ sexe, size, years, weight }) => {
  return sexe === 'homme'
    ? 10 * weight + 6.25 * size - 5 * years + 5
    : 10 * weight + 6.25 * size - 5 * years - 161;
};

const adjustCaloriesForActivity = (baseCalories, activity) => {
  const activityFactors = {
    'sedentaire': 1.2,
    'legerement_actif': 1.375,
    'moderement_actif': 1.55,
    'tres_actif': 1.725,
    'extremement_actif': 1.9
  };
  return baseCalories * (activityFactors[activity] || 1.2);
};

const userData = async () => {
  try {
    loading.value = true;
    const { sexe, size, years, weight, activity } = form.value;

    if (!sexe || !size || !years || !weight || !activity) {
      throw new Error('All fields must be filled.');
    }

    const baseCalories = calculateBaseCalories(form.value);
    const totalCalories = adjustCaloriesForActivity(baseCalories, activity);

    const macros = {
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
    router.push('/overview');
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.health-form-page {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
}

.health-card {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

:deep(.v-field) {
  border-radius: 8px !important;
}

:deep(.v-btn) {
  border-radius: 8px;
}

:deep(.v-radio-group .v-radio) {
  margin-right: 1rem;
}

.text-white {
  color: #ffffff !important;
}
</style>
