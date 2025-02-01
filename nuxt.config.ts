import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  build: {
    transpile: ['vuetify'],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en', 
      },
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
        { name: 'author', content: 'Nûr' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/NutriWeb.ico' },
      ],
      title: 'NutriWeb',
    },
    
  },
  routeRules: {
    '/api/food': {
      proxy: {
        to: 'https://api.edamam.com/api/food-database/v2/parser', 
      }
    }
  },
  nitro: {
    devProxy: {
      "/api/food": {
        target: "https://api.edamam.com/api/food-database/v2/parser", 
        changeOrigin: true,
        prependPath: true, 
      },
    }
  },
  modules: [ 
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt'
  ], 
  vite: { 
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
