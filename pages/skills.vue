<script setup lang="ts">
import IconVue from "@/assets/icons/vue.svg";
import IconNuxt from "@/assets/icons/nuxt.svg";
import IconJavascript from "@/assets/icons/javascript.svg";
import IconTypescript from "@/assets/icons/typescript.svg";
import IconThreeJs from "@/assets/icons/threejs.svg";
import IconTailwind from "@/assets/icons/tailwind.svg";
import IconSass from "@/assets/icons/sass.svg";
import IconSql from "@/assets/icons/sql.svg";

const skills = [
  {
    icon: IconVue,
    text: "Vue (2/3)",
  },
  {
    icon: IconNuxt,
    text: "Nuxt 3",
  },
  {
    icon: IconJavascript,
    text: "Javascript",
  },
  {
    icon: IconTypescript,
    text: "Typescript",
  },
  {
    icon: IconThreeJs,
    text: "ThreeJs",
  },
  {
    icon: IconTailwind,
    text: "Tailwind",
  },
  {
    icon: IconSass,
    text: "Sass/Scss",
  },
  {
    icon: IconSql,
    text: "SQL",
  },
];
</script>

<template>
  <div class="mx-auto w-full max-w-lg px-4">
    <h3
      class="my-4 font-['M_PLUS_Rounded_1c'] text-xl font-bold underline decoration-gray-500 decoration-4 underline-offset-8"
    >
      My technology
    </h3>
    <div
      class="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4"
    >
      <div
        v-for="skill in skills"
        class="group flex flex-col items-center justify-center gap-1 rounded-xl bg-[#2d2d2dee]/10 px-4 pb-1 pt-2 duration-300 hover:rotate-12 dark:bg-[#2d2d2dee]/80"
      >
        <component :is="skill.icon"></component>
        <p
          class="font-bold text-blue-500 duration-300 group-hover:text-pink-400 dark:text-pink-400 dark:group-hover:text-blue-400"
        >
          {{ skill.text }}
        </p>
      </div>
    </div>
  </div>
</template>
