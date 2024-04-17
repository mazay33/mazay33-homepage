// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: { pageTransition: { name: 'page', mode: 'out-in', appear: true } },
  modules: ['@nuxtjs/color-mode', '@vueuse/nuxt', '@kevinmarrec/nuxt-pwa', 'nuxt-svgo', '@vueuse/motion/nuxt'],
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
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            }
          }
        }
      }
    }
  }

})
