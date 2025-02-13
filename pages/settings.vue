<template>
  <v-app>
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
import userData from '~/components/userData.vue';
import goalsData from '~/components/goalsData.vue';
import { ref } from 'vue';
import { useUserStore } from '~/stores/userStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();
const activeSection = ref('user');

definePageMeta({
  layout: 'dashboard'
})

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