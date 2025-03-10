<template>
  <v-app>
    <section class="auth-page bg-gradient">
      <div class="auth-container">
        <div class="auth-content">
          <div class="auth-left">
            <div class="auth-overlay"></div>
            <div class="auth-text">
              <h1 class="text-h3 font-weight-bold text-light mb-4">Rejoignez-nous</h1>
              <p class="text-h6 text-light">Commencez votre parcours vers une meilleure santé dès aujourd'hui.</p>
            </div>
          </div>

          <div class="auth-right">
            <v-card class="auth-card pa-8" elevation="2" max-width="400">
              <v-card-title class="text-h5 font-weight-bold mb-6 text-high-contrast">Créer un compte</v-card-title>

              <v-form @submit.prevent="handleSignup">
                <v-text-field v-model="form.name" label="Nom complet" variant="outlined" density="comfortable"
                  color="primary" class="mb-4" :rules="[v => !!v || 'Le nom est requis']" required></v-text-field>

                <v-text-field v-model="form.email" label="Email" type="email" variant="outlined" density="comfortable"
                  color="primary" class="mb-4"
                  :rules="[v => !!v || 'L\'email est requis', v => /.+@.+\..+/.test(v) || 'L\'email doit être valide']"
                  required></v-text-field>

                <v-text-field v-model="form.password" :type="showPassword ? 'text' : 'password'" label="Mot de passe"
                  variant="outlined" density="comfortable" color="primary" class="mb-4"
                  :rules="[v => !!v || 'Le mot de passe est requis', v => v.length >= 8 || 'Le mot de passe doit contenir au moins 8 caractères']"
                  required>
                  <template v-slot:append-inner>
                    <v-icon @click="togglePasswordVisibility" :icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      class="cursor-pointer"></v-icon>
                  </template>
                </v-text-field>

                <v-text-field v-model="form.confirmPassword" :type="showPassword ? 'text' : 'password'"
                  label="Confirmer le mot de passe" variant="outlined" density="comfortable" color="primary"
                  class="mb-6"
                  :rules="[v => !!v || 'La confirmation du mot de passe est requise', v => v === form.password || 'Les mots de passe ne correspondent pas']"
                  required></v-text-field>

                <div class="d-flex flex-column gap-4">
                  <v-btn block color="primary" size="large" type="submit" :loading="loading"
                    class="text-none text-subtitle-1 text-light" elevation="2">
                    Créer un compte
                  </v-btn>

                  <div class="text-center">
                    <NuxtLink to="/login" class="text-decoration-none text-medium-contrast">
                      Déjà un compte ? Se connecter
                    </NuxtLink>
                  </div>
                </div>
              </v-form>
            </v-card>
          </div>
        </div>
      </div>
    </section>
  </v-app>
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
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const loading = ref(false);
const showPassword = ref(false);

const handleSignup = async () => {
  loading.value = true;
  try {
    await userStore.signup(form.value);
    router.push('/overview');
  } catch (err) {
    console.error(err.message);
    alert(err.message);
  } finally {
    loading.value = false;
  }
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>

<style scoped>
.auth-page {
  min-height: 100vh;
}

.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: var(--spacing-xl);
}

.auth-content {
  display: flex;
  max-width: 1000px;
  width: 100%;
  background: var(--bg-card);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.auth-left {
  position: relative;
  flex: 1;
  background: url('/images/fitness-bg.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xl);
}

.auth-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(var(--primary-color), 0.9) 0%, rgba(var(--secondary-color), 0.9) 100%);
}

.auth-text {
  position: relative;
  z-index: 1;
  text-align: left;
}

.auth-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xl);
}

.auth-card {
  width: 100%;
  background: transparent !important;
}

:deep(.v-field) {
  border-radius: var(--border-radius-md) !important;
}

:deep(.v-btn) {
  font-weight: 600 !important;
}

:deep(.v-field__input) {
  font-size: 1rem !important;
  color: var(--text-primary) !important;
}

:deep(.v-label) {
  font-size: 0.95rem !important;
  color: var(--text-secondary) !important;
}

@media (max-width: 959px) {
  .auth-content {
    flex-direction: column;
  }

  .auth-left {
    padding: var(--spacing-lg);
    min-height: 200px;
  }

  .auth-text {
    text-align: center;
  }

  .auth-text h1 {
    font-size: 1.75rem !important;
  }

  .auth-text p {
    font-size: 1rem !important;
  }

  .auth-right {
    padding: var(--spacing-lg);
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .auth-content {
    background: var(--bg-card);
  }

  .auth-overlay {
    opacity: 0.95;
  }

  :deep(.v-field__input) {
    color: var(--text-light) !important;
  }

  :deep(.v-label) {
    color: var(--text-secondary) !important;
  }
}
</style>