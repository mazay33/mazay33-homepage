<script setup lang="ts">
type Theme = "light" | "dark";
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
const mobileMenu = ref(false);

const checkbox = ref();
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
            <nuxt-link
              @click="(checkbox = !checkbox), (mobileMenu = !mobileMenu)"
              to="/works"
            >
              <li class="p-2">
                <span>Works</span>
              </li>
            </nuxt-link>
            <nuxt-link
              @click="(checkbox = !checkbox), (mobileMenu = !mobileMenu)"
              to="/skills"
            >
              <li class="p-2">
                <span>Skills</span>
              </li>
            </nuxt-link>
            <nuxt-link
              @click="(checkbox = !checkbox), (mobileMenu = !mobileMenu)"
              to="/contact"
            >
              <li class="p-2">
                <span>Contact</span>
              </li>
            </nuxt-link>
            <a
              @click="checkbox = !checkbox"
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
        <IconNuxt />
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
          <icon-github />

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
          <IconLight />
          <IconDark />
        </label>

        <label
          class="btn btn-circle swap swap-rotate border-none bg-inherit md:hidden"
        >
          <input
            v-model="checkbox"
            type="checkbox"
            @click="mobileMenu = !mobileMenu"
          />
          <IconBurger />
          <IconClose />
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
