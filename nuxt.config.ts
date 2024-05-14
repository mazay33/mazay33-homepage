// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "nuxt-svgo",
    "@vueuse/motion/nuxt",
    ["@storyblok/nuxt", { accessToken: process.env.NUXT_STOTYBLOK_TOKEN }],
    "@nuxt/content",
  ],

  ssr: true,

  colorMode: {
    preference: "dark",
    classSuffix: "",
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
