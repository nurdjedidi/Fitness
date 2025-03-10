<template>
  <v-container fluid class="settings-page pa-6">
    <v-row class="mb-6">
      <v-col cols="12">
        <div class="text-h4 font-weight-bold mb-2">Paramètres</div>
        <div class="text-subtitle-1 text-medium-emphasis">Gérez vos informations personnelles et vos objectifs</div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="3">
        <v-card class="settings-nav" elevation="3">
          <v-list>
            <v-list-item v-for="(item, index) in navigationItems" :key="index" :value="item.value"
              :active="activeSection === item.value" @click="activeSection = item.value" rounded="lg" class="mb-2">
              <template v-slot:prepend>
                <v-icon :icon="item.icon" color="primary"></v-icon>
              </template>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>

          <v-divider class="my-4"></v-divider>

          <v-list>
            <v-list-item color="error" rounded="lg" @click="confirmLogout = true">
              <template v-slot:prepend>
                <v-icon icon="mdi-logout" color="error"></v-icon>
              </template>
              <v-list-item-title>Déconnexion</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-col cols="12" md="9">
        <v-card class="settings-content h-100" elevation="3">
          <v-window v-model="activeSection">
            <v-window-item value="profile">
              <v-card-item>
                <v-card-title class="text-h5 font-weight-bold">
                  <v-icon start color="primary">mdi-account</v-icon>
                  Profil Personnel
                </v-card-title>
              </v-card-item>
              <v-card-text>
                <userData v-model:form="userStore.form" />
              </v-card-text>
            </v-window-item>

            <v-window-item value="goals">
              <v-card-item>
                <v-card-title class="text-h5 font-weight-bold">
                  <v-icon start color="primary">mdi-flag</v-icon>
                  Objectifs
                </v-card-title>
              </v-card-item>
              <v-card-text>
                <goalsData />
              </v-card-text>
            </v-window-item>

            <v-window-item value="notifications">
              <v-card-item>
                <v-card-title class="text-h5 font-weight-bold">
                  <v-icon start color="primary">mdi-bell</v-icon>
                  Notifications
                </v-card-title>
              </v-card-item>
              <v-card-text>
                <v-list>
                  <v-list-subheader>Préférences de notification</v-list-subheader>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-checkbox-btn v-model="notifications.daily"></v-checkbox-btn>
                    </template>
                    <v-list-item-title>Rappels quotidiens</v-list-item-title>
                    <v-list-item-subtitle>Recevez des rappels quotidiens pour suivre vos
                      objectifs</v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-checkbox-btn v-model="notifications.progress"></v-checkbox-btn>
                    </template>
                    <v-list-item-title>Mises à jour de progression</v-list-item-title>
                    <v-list-item-subtitle>Soyez notifié de vos progrès hebdomadaires</v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-checkbox-btn v-model="notifications.tips"></v-checkbox-btn>
                    </template>
                    <v-list-item-title>Conseils et astuces</v-list-item-title>
                    <v-list-item-subtitle>Recevez des conseils nutritionnels et d'entraînement</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>

    <!-- Dialog de confirmation de déconnexion -->
    <v-dialog v-model="confirmLogout" max-width="400">
      <v-card>
        <v-card-item>
          <template v-slot:prepend>
            <v-icon color="error" size="32">mdi-logout</v-icon>
          </template>
          <v-card-title>Confirmer la déconnexion</v-card-title>
          <v-card-subtitle>Êtes-vous sûr de vouloir vous déconnecter ?</v-card-subtitle>
        </v-card-item>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey-darken-1" variant="text" @click="confirmLogout = false">
            Annuler
          </v-btn>
          <v-btn color="error" variant="elevated" @click="handleLogout">
            Déconnexion
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import goalsData from '~/components/goalsData.vue';
import userData from '~/components/userData.vue';
import { useUserStore } from '~/stores/userStore';

definePageMeta({
  layout: 'dashboard'
})

const router = useRouter();
const userStore = useUserStore();
const activeSection = ref('profile');
const confirmLogout = ref(false);

const notifications = ref({
  daily: true,
  progress: true,
  tips: false
});

const navigationItems = [
  {
    title: 'Profil',
    value: 'profile',
    icon: 'mdi-account'
  },
  {
    title: 'Objectifs',
    value: 'goals',
    icon: 'mdi-flag'
  },
  {
    title: 'Notifications',
    value: 'notifications',
    icon: 'mdi-bell'
  }
];

const handleLogout = async () => {
  try {
    await userStore.signout();
    router.push('/login');
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
  }
};
</script>

<style scoped>
.settings-page {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
}

.settings-nav {
  background: white;
  border-radius: 16px;
}

.settings-content {
  background: white;
  border-radius: 16px;
}

:deep(.v-list-item--active) {
  background-color: rgb(var(--v-theme-primary), 0.1);
}

:deep(.v-list-item) {
  margin-bottom: 4px;
  transition: background-color 0.2s ease;
}

:deep(.v-list-item:hover) {
  background-color: rgb(var(--v-theme-primary), 0.05);
}

:deep(.v-card-title) {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>