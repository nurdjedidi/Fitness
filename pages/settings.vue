<template>
  <v-app>
    <Navigation />
    <v-navigation-drawer>
      <v-list-item prepend-avatar="https://placehold.co/600x400?text=Account" title="My account" nav></v-list-item>
      <v-list-item prepend-icon="mdi-account" @click="activeSection = 'user'">User data</v-list-item>
      <v-list-item prepend-icon="mdi-flag" @click="activeSection = 'goals'">Goals</v-list-item>
      <v-list-item prepend-icon="mdi-exit-run" @click="returnDashboard">Dashboard</v-list-item>
    </v-navigation-drawer>
    <v-main>
      <v-container v-if="activeSection === 'user'">
        <userData v-model:form="userStore.form" />
      </v-container>
      <v-container v-if="activeSection === 'goals'" class="d-flex align-center justify-center">
        <goalsData />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Navigation from '~/components/Navigation.vue';
import userData from '~/components/userData.vue';
import goalsData from '~/components/goalsData.vue';
import { ref } from 'vue';
import { useUserStore } from '~/stores/userStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();
const activeSection = ref('user');

const returnDashboard = async () => {
  router.push('/dashboard');
}
</script>

<style>
.v-list-item {
  margin: 10px;
  cursor: pointer;
}
</style>