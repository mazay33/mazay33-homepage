// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: { pageTransition: { name: 'page', mode: 'out-in' } },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/google-fonts', '@vueuse/nuxt', '@kevinmarrec/nuxt-pwa'],
  pwa: {
    workbox: {
      enabled: true
    }
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
  googleFonts: {
    preload: true,
    families: {
      'M+PLUS+Rounded+1c': true,
    }
  }
})
