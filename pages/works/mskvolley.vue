<script lang="ts" setup>
useHead({
  title: "Works - MskVolley",
});
</script>

<template>
  <div class="mx-auto w-full max-w-lg px-4">
    <div class="mb-4 flex items-center gap-2">
      <nuxt-link
        to="/works"
        class="text-pink-400 underline-offset-4 hover:underline"
        >Works</nuxt-link
      >
      <span>></span>
      <h2 class="font-['M_PLUS_Rounded_1c'] text-xl font-bold">MskVolley</h2>
    </div>

    <p class="text-justify indent-4">
      The platform accepts applications from the team at the start of the
      championship, coordinates the conduct of matches and enters the results of
      the games. This eliminates routine and makes the process simple and fast.
      And the teams and organizers take the time to enjoy the game!
    </p>
    <ul class="m-4 flex flex-col gap-1">
      <li>
        <span
          class="mr-2 rounded bg-emerald-300/30 px-1 py-[2px] text-xs font-bold uppercase text-emerald-300"
          >Website</span
        >
        <a
          target="_blank"
          class="text-pink-400 underline-offset-4 hover:underline"
          href="https://mskvolley.ru/"
          >https://mskvolley.ru/</a
        >
      </li>
      <li>
        <span
          class="mr-2 rounded bg-emerald-300/30 px-1 py-[2px] text-xs font-bold uppercase text-emerald-300"
          >Stack</span
        >
        <span>Vue 3, Vuex, Vuetify</span>
      </li>
    </ul>
    <img class="rounded-xl p-2" src="@/assets/images/mvl-1.png" alt="" />
    <img class="rounded-xl p-2" src="@/assets/images/mvl-4.svg" alt="" />
    <img class="rounded-xl p-2" src="@/assets/images/mvl-3.svg" alt="" />
    <img class="rounded-xl p-2" src="@/assets/images/mvl-2.svg" alt="" />
  </div>
</template>
