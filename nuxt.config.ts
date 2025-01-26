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
        { name: 'description', content: 'Je suis Nûr, développeur web spécialisé en programmation fullstack. Découvrez mes projets, compétences, et comment me contacter.' },
        { name: 'keywords', content: 'développeur web fullstack, HTML, CSS, JavaScript, Vue, Node.js, MySQL, API' },
        { name: 'robots', content: 'index, follow' },
        { name: 'referrer', content: 'no-referrer' },
        { property: 'og:title', content: 'Portfolio de Nûr - Développeur Web' },
        { property: 'og:description', content: 'Découvrez mes projets en développement web, mes compétences en HTML, CSS, JavaScript, et plus encore.' },
        { property: 'og:url', content: 'https://portfolionurdjedd.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Portfolio | Nûr' },
        { property: 'og:image', content: '/images/Vignette.avif' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'fr_FR' },
      ],
      script: [
        {
          src: "https://accounts.google.com/gsi/client", 
        async: true, 
        defer: true
        }
      ],
      title: 'Portfolio | Nûr',
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
        target: "https://api.edamam.com/api/food-database/v2/parser", // L'API cible
        changeOrigin: true, // Pour changer l'origine des requêtes
        prependPath: true, // Pour que le chemin soit correctement préfixé
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
  ], 
  vite: { 
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
