/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "storyblok/**/*.{vue,js}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "480px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",

      "3xl": "1600px",
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
