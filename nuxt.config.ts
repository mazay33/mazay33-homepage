// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: { pageTransition: { name: 'page', mode: 'out-in' } },
  modules: ['@nuxtjs/color-mode', '@vueuse/nuxt', '@kevinmarrec/nuxt-pwa', 'nuxt-svgo'],
  pwa: {
    // workbox: {
    //   enabled: true
    // }
  },
  colorMode: {
    preference: 'dark',
    classSuffix: ''
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
