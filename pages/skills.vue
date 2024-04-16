<script setup>
import IconVue from "@/assets/icons/vue.svg";
import IconNuxt from "@/assets/icons/nuxt.svg";
import IconJavascript from "@/assets/icons/javascript.svg";
import IconTypescript from "@/assets/icons/typescript.svg";
import IconThreeJs from "@/assets/icons/threejs.svg";
import IconTailwind from "@/assets/icons/tailwind.svg";
import IconSass from "@/assets/icons/sass.svg";
import IconSql from "@/assets/icons/postgres.svg";
import IconDocker from "@/assets/icons/docker.svg";
import IconExpress from "@/assets/icons/express-js.svg";
import IconNginx from "@/assets/icons/nginx.svg";
import IconNode from "@/assets/icons/nodejs.svg";

const skills = ref([
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
    text: "PostgreSQL",
  },
  {
    icon: IconNode,
    text: "Node.js",
  },
  {
    icon: IconExpress,
    text: "Express.js",
  },
  {
    icon: IconDocker,
    text: "Docker",
  },

  {
    icon: IconNginx,
    text: "Nginx",
  },
]);

const shuffleSkills = () => {
  skills.value.sort(() => Math.random() - 0.5);
};
</script>

<template>
  <div class="mx-auto w-full max-w-lg px-4">
    <h3
      class="my-4 font-['M_PLUS_Rounded_1c'] text-xl font-bold underline decoration-gray-500 decoration-4 underline-offset-8"
    >
      My technology
    </h3>
    <div
      class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
    >
      <transition-group name="list-complete">
        <div
          v-for="skill in skills"
          :key="skill.text"
          class="group flex flex-col items-center justify-center gap-1 rounded-xl bg-[#2d2d2dee]/10 px-4 pb-1 pt-2 duration-300 hover:rotate-12 dark:bg-[#2d2d2dee]/80"
        >
          <component :is="{ ...skill.icon }"></component>
          <p
            class="font-bold text-blue-500 duration-300 group-hover:text-pink-400 dark:text-pink-400 dark:group-hover:text-blue-400"
          >
            {{ skill.text }}
          </p>
        </div>
      </transition-group>
    </div>
    <div class="mt-10 flex items-center justify-center">
      <button
        class="rounded-xl bg-pink-400 px-6 py-4 text-xl font-bold text-white duration-300 hover:bg-pink-500 dark:bg-blue-400 dark:hover:bg-blue-500"
        @click="shuffleSkills()"
      >
        Click to shuffle!
      </button>
    </div>
  </div>
</template>

<style>
.list-complete-item {
  transition: all 0.8s ease;
  display: inline-block;
  margin-right: 10px;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}
</style>
