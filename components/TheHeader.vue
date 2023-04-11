<script setup lang="ts">
type Theme = "light" | "dark";
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
const mobileMenu = ref(false);
</script>

<template>
  <header
    class="transtition-all duration-400 fixed z-10 w-full bg-white/25 backdrop-blur-md dark:bg-[#20202380]"
  >
    <div class="mx-auto flex max-w-3xl items-center justify-between p-2">
      <transition name="fade"
        ><div
          v-if="mobileMenu"
          class="fixed right-4 top-16 w-full max-w-[150px] rounded-md border border-gray-700/10 bg-white dark:border-white/20 dark:bg-[#2D3748]"
        >
          <ul class="flex flex-col gap-1">
            <nuxt-link @click="mobileMenu = !mobileMenu" to="/works">
              <li class="p-2">
                <span>Works</span>
              </li>
            </nuxt-link>
            <nuxt-link @click="mobileMenu = !mobileMenu" to="/skills">
              <li class="p-2">
                <span>Skills</span>
              </li>
            </nuxt-link>
            <nuxt-link @click="mobileMenu = !mobileMenu" to="/contact">
              <li class="p-2">
                <span>Contact</span>
              </li>
            </nuxt-link>
            <a
              @click="mobileMenu = !mobileMenu"
              target="_blank"
              href="https://github.com/mazay33"
            >
              <li class="flex items-center gap-2 p-2">
                <span>Source</span>
              </li>
            </a>
          </ul>
        </div>
      </transition>
      <div class="mr-5 flex items-center gap-1 p-2">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>file_type_nuxt</title>
          <path
            d="M10.648,25.734a1.465,1.465,0,0,1-.157-.942H3.847L13.716,7.417l4.159,7.41,1.308-.976L15.076,6.467A1.752,1.752,0,0,0,13.7,5.56a1.531,1.531,0,0,0-1.343.924l-10,17.593a1.729,1.729,0,0,0-.087,1.656,1.526,1.526,0,0,0,1.456.706H12.1a1.523,1.523,0,0,1-1.456-.7Z"
            style="fill: #00c58e"
          />
          <path
            d="M29.636,24.112,21.589,9.823a1.692,1.692,0,0,0-1.351-.907,1.489,1.489,0,0,0-1.308.907l-1.064,1.7v3.3l2.371-4.071,7.951,14.071H25.163a1.377,1.377,0,0,1-.122.837l-.026.052a1.729,1.729,0,0,1-1.456.732h4.734a1.72,1.72,0,0,0,1.456-.732,1.548,1.548,0,0,0-.122-1.6Z"
            style="fill: #108775"
          />
          <path
            d="M25.233,25.7l.026-.052.07-.139a1.278,1.278,0,0,0,.061-.7,2.11,2.11,0,0,0-.27-.724l-6.286-10.9-.95-1.656h-.017l-.959,1.648-6.277,10.9a2.18,2.18,0,0,0-.244.715,1.438,1.438,0,0,0,.148.942,1.563,1.563,0,0,0,1.482.7H23.725a1.79,1.79,0,0,0,1.508-.741ZM17.866,14.836,23.62,24.8H12.112Z"
            style="fill: #2f495e"
          />
        </svg>
        <h1
          class="font-['M_PLUS_Rounded_1c'] text-lg font-bold tracking-tighter"
        >
          <nuxt-link to="/">Andrew Mazaev</nuxt-link>
        </h1>
      </div>
      <ul class="hidden flex-grow items-center gap-3 md:flex">
        <li class="p-2">
          <nuxt-link to="/works">Works</nuxt-link>
        </li>
        <li class="p-2">
          <nuxt-link to="/skills">Skills</nuxt-link>
        </li>
        <li class="p-2">
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
        <li class="flex items-center gap-2 p-2">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            aria-hidden="true"
            focusable="false"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
            ></path>
          </svg>
          <a target="_blank" href="https://github.com/mazay33">Source</a>
        </li>
      </ul>
      <div class="flex gap-3">
        <button
          class="ml-5"
          @click="
            setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')
          "
        >
          <transition-group name="fade">
            <svg
              v-if="$colorMode.value == 'dark'"
              xmlns="http://www.w3.org/2000/svg"
              class="ml-auto h-8 w-8 text-gray-50"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"
              />
            </svg>
          </transition-group>
        </button>
        <svg
          @click="mobileMenu = !mobileMenu"
          height="1em"
          width="1em"
          viewBox="0 0 24 24"
          focusable="true"
          class="block h-8 w-8 cursor-pointer text-gray-800 dark:text-gray-50 md:hidden"
          :class="mobileMenu ? 'text-gray-500 transition-all duration-300' : ''"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
          ></path>
        </svg>
      </div>
    </div>
  </header>
</template>

<style scoped>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}
.fade-leave-active {
  position: absolute;
}
</style>
