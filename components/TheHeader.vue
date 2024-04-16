<script setup lang="ts">
type Theme = "light" | "dark";
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
const mobileMenu = ref(false);
</script>

<template>
  <header
    class="transtition-all duration-400 fixed z-50 w-full bg-white/25 backdrop-blur-md dark:bg-[#20202380]"
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
              href="https://github.com/mazay33/mazay33-homepage"
            >
              <li class="flex items-center gap-2 p-2">
                <span>View Source</span>
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
          <a target="_blank" href="https://github.com/mazay33/mazay33-homepage"
            >Source</a
          >
        </li>
      </ul>
      <div class="flex gap-3">
        <label class="swap swap-rotate">
          <input
            @click="
              setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')
            "
            type="checkbox"
          />

          <svg
            class="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>

          <svg
            class="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
          </svg>
        </label>

        <label
          class="btn btn-circle swap swap-rotate border-none bg-inherit md:hidden"
        >
          <input type="checkbox" @click="mobileMenu = !mobileMenu" />

          <svg
            class="swap-off fill-current text-gray-800 dark:text-gray-50"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
            />
          </svg>

          <!-- close icon -->
          <svg
            class="swap-on fill-current text-gray-800 dark:text-gray-50"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon
              points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
            />
          </svg>
        </label>
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
