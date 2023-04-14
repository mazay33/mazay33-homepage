<script lang="ts" setup>
useHead({
  title: "Works - Mazay33",
});
</script>

<template>
  <div class="mx-auto w-full max-w-lg px-4">
    <div class="mb-4 flex items-center gap-2">
      <nuxt-link
        to="/works"
        class="text-blue-400 underline-offset-4 hover:underline dark:text-pink-400"
        >Works</nuxt-link
      >
      <span>></span>
      <h2 class="font-['M_PLUS_Rounded_1c'] text-xl font-bold">Mazay33</h2>
    </div>

    <p class="text-justify indent-4"></p>
    <ul class="m-4 flex flex-col gap-1">
      <li>
        <span
          class="mr-2 rounded bg-emerald-300/30 px-1 py-[2px] text-xs font-bold uppercase text-gray-600 dark:text-emerald-300"
          >Website</span
        >
        <a
          target="_blank"
          class="text-blue-400 underline-offset-4 hover:underline dark:text-pink-400"
          href="https://mazay33.com/"
          >https://mazay33.com/</a
        >
      </li>
      <li>
        <span
          class="mr-2 rounded bg-emerald-300/30 px-1 py-[2px] text-xs font-bold uppercase text-gray-600 dark:text-emerald-300"
          >Stack</span
        >
        <span>Vue 3, SCSS</span>
      </li>
    </ul>
    <img class="rounded-xl p-2" src="@/assets/images/mazay33-1.png" alt="" />
    <img class="rounded-xl p-2" src="@/assets/images/mazay33-2.png" alt="" />
    <img class="rounded-xl p-2" src="@/assets/images/mazay33-3.png" alt="" />
    <img class="rounded-xl p-2" src="@/assets/images/mazay33-4.png" alt="" />
  </div>
</template>
