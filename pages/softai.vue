<template>
  <v-app>
    <div class="response-ai">

    </div>
    <v-container class="prompt-container d-flex flex-column align-center justify-center pa-6">
      <h1 class="text-h4 font-weight-bold mb-5">Generate your best snippets powered by AI</h1>
      <v-textarea
        v-model="prompt"
        label="Enter your requirements"
        no-resize
        outlined
        max-width="600"
        rows="3"
      ></v-textarea>
      <v-btn
        class="mt-4"
        color="primary"
        @click="generateSnippet"
        :loading="isLoading"
        :disabled="isLoading || !prompt"
        rounded
      >
        Generate Snippet
      </v-btn>
    </v-container>
  </v-app>
</template>

<script setup>
  const prompt = ref('');
  const snippet = ref(null); 
  const isLoading = ref(false);

  const generateSnippet = async () => {
  isLoading.value = true; 
  snippet.value = null;
  
  try {
    const response = await fetch('/api/softai', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: prompt.value }),
    });

    if (response.ok) {
      const data = await response.json();
      snippet.value = data.message || 'No snippet generated'; 
    } else {
      console.error('Error:', response.statusText);
      snippet.value = 'Error generating snippet.';
    }
  } catch (error) {
    console.error('Error:', error);
    snippet.value = 'Error generating snippet.';
  } finally {
    isLoading.value = false; 
  }
};
  </script>

<style scoped>
.v-container {
  max-width: 800px;
  text-align: center;
}

.v-textarea {
  font-size: 16px;
}

.v-btn {
  font-size: 18px;
  font-weight: bold;
}

pre {
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 4px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.v-card {
  background-color: #f9f9f9;
  border-radius: 8px;
}

.prompt-container { 
  margin-top: 15%;
}
</style>
