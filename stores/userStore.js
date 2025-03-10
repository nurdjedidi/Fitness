import { defineStore } from 'pinia';
export const useUserStore = defineStore('user', {
  state: () => ({
    form: {
      sexe: '',
      size: null,
      years: null,
      weight: null,
      activity: '',
      calories: null,
      macros: {
        carbs: 0,
        lipids: 0,
        proteins: 0
      },
      adjusted: false,
    },
    goals: {
      goal: '',
      target_calories: 0,
      target_carbs: 0,
      target_lipids: 0,
      target_proteins: 0
    },
    recipes: {
      recipeNames: [],
      add_calories: 0,
      totalCalories: 0,
      totalCarbs: 0,
      totalLipids: 0,
      totalProteins: 0,
      lastResetDate: null,
    },
    lastGoal: '',
    token: ''
  }),
  getters: {
    isAuthenticated: (state) => !!state.token
  },
  actions: {

    initializeStore() {
      const savedToken = localStorage.getItem('token');
      if (savedToken) {
        this.token = savedToken;
        this.loadNutrition();
      }
    },

    // Fonction de mise a jour du token, des formualaires et de la connection

    setToken(newToken) {
      this.token = newToken;
      localStorage.setItem('token', newToken);
    },
    logout() {
      this.token = ''
      this.form = { sexe: '', size: null, years: null, weight: null, activity: '', calories: null }
      this.goals = {
        goal: '',
        target_calories: 0,
        target_carbs: 0,
        target_lipids: 0,
        target_proteins: 0
      }
    },
    updateForm(newData) {
      this.$patch({
        form: {
          ...this.form,
          ...newData
        }
      });
    },

    // Processus d'inscription

    async signup({ name, email, password }) {
      try {
        const response = await $fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: { name, email, password },
        })

        if (!response.success) {
          throw new Error(response.error || 'Inscription échouée')
        }

        this.setToken(response.token)
        await this.loadNutrition()
        return response
      } catch (err) {
        console.error('Erreur signup :', err)
        throw new Error(err.message || 'Une erreur est survenue l\'inscription')
      }
    },

    // Processus de connection

    async signin(email, password) {
      try {
        const response = await $fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: { email, password },
        })

        if (!response.success) {
          throw new Error(response.error || 'Connexion échouée')
        }

        this.setToken(response.token)
        await this.loadNutrition()
        return response
      } catch (err) {
        console.error('Erreur signin :', err)
        throw new Error(err.message || 'Une erreur est survenue lors de la connexion')
      }
    },

    // Insertion des données de l'utilisateur

    async saveNutrition() {
      console.log('Contexte du store dans saveNutrition:', this);
      try {
        const response = await $fetch('/api/user', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
          body: this.form,
        })

        if (!response.success) {
          throw new Error(response.error || 'Enregistrement échoué')
        }

        console.log('Enregistrement OK, insertId = ', response.insertId)
      } catch (err) {
        console.error('Erreur saveNutrition :', err)
      }
    },

    // Mise a jour des données de l'utilisateur 

    async updateUserData(updatedForm) {
      try {
        const response = await $fetch('/api/updateData', {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json',
          },
          body: updatedForm
        })

        this.form = {
          ...this.form,
          ...response.data
        }
      }
      catch (err) {
        console.error('Erreur updateUserData :', err)
        throw err
      }
    },

    // Ajout des objectifs de l'utilsiateur

    async addUserGoals() {
      try {
        const response = await $fetch('/api/addGoals', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json',
          },
          body: {
            goals: this.goals.goal,
          },
        })
        const goalsData = Array.isArray(response.data.goals) && response.data.goals.length > 0
          ? response.data.goals[0]
          : {};

        this.$patch({
          goals: goalsData,
        });
      }
      catch (err) {
        console.error('Erreur addUserGoalsData :', err.stack)
        throw err
      }
    },

    async updateUserGoals() {
      try {
        const response = await $fetch('/api/updateGoals', {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json',
          },
          body: {
            goals: this.goals.goal,
          },
        })
        const goalsData = Array.isArray(response.data.goals) && response.data.goals.length > 0
          ? response.data.goals[0]
          : {};

        this.$patch({
          goals: goalsData,
        });
      }
      catch (err) {
        console.error('Erreur updateUserGoalsData :', err.stack)
        throw err
      }
    },

    // Ajout et mise a jour des recettes de l'utilisateur 

    addIngredient(ingredient) {
      if (!this.recipes.recipeNames) {
        this.recipes.recipeNames = []
      }
      this.recipes.recipeNames = [
        ...this.recipes.recipeNames,
        ingredient.label
      ]
      this.recipes.totalCalories += ingredient.calories;
      this.recipes.totalProteins += ingredient.proteins;
      this.recipes.totalCarbs += ingredient.carbs;
      this.recipes.totalLipids += ingredient.lipids;
    },

    async saveRecipes() {
      try {
        const response = await $fetch('/api/addRecipes', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json',
          },
          body: {
            names: this.recipes.recipeNames,
            calories: this.recipes.totalCalories,
            proteins: this.recipes.totalProteins,
            carbs: this.recipes.totalCarbs,
            lipids: this.recipes.totalLipids
          }
        });
        return response;
      } catch (err) {
        console.error('Erreur:', err);
      }
    },

    resetDailyCalories() {
      this.recipes = {
        recipeNames: [],
        totalCalories: 0,
        totalCarbs: 0,
        totalLipids: 0,
        totalProteins: 0,
      };
      console.log('Calories quotidiennes réinitialisées.');
    },

    // Requête GET pour recuperer les données a afficher par défaut

    async loadNutrition() {
      console.log("Token utilisé :", this.token);

      try {
        const response = await $fetch('/api/getData', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });

        console.log(response)

        if (!response.success) {
          throw new Error(response.error || 'Aucune donnée trouvée')
        }

        const nutritionData = Array.isArray(response.data.nutrition) && response.data.nutrition.length > 0
          ? response.data.nutrition[0]
          : {};

        const goalsData = Array.isArray(response.data.goals) && response.data.goals.length > 0
          ? response.data.goals[0]
          : {};

        const recipesData = Array.isArray(response.data.recipes) && response.data.recipes.length > 0
          ? response.data.recipes[0]
          : {};

        this.$patch({
          form: nutritionData,
          goals: goalsData,
          recipes: recipesData
        });
      } catch (err) {
        console.error('Erreur loadNutrition :', err.message, err.stack)
      }
    },
  },
});
