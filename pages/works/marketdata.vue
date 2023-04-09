<script lang="ts" setup>
useHead({
  title: "Works - MarketData",
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
      <h2 class="font-['M_PLUS_Rounded_1c'] text-xl font-bold">MarketData</h2>
    </div>

    <p class="text-justify indent-4">
      A highly accurate internal analytics service that helps you sell on
      Wildberries. With this service, you can track important metrics such as
      sales, revenue, conversion rates, and customer behavior to make informed
      decisions about your product listings and marketing strategies.
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
          href="https://market-dt.ru/"
          >https://market-dt.ru/</a
        >
      </li>
      <li>
        <span
          class="mr-2 rounded bg-emerald-300/30 px-1 py-[2px] text-xs font-bold uppercase text-emerald-300"
          >Stack</span
        >
        <span>Vue 3, Vuex, SCSS, ApexChart.js</span>
      </li>
    </ul>
    <img class="rounded-xl p-2" src="@/assets/images/md-1.jpg" alt="" />
    <img class="rounded-xl p-2" src="@/assets/images/md-2.jpg" alt="" />
    <img class="rounded-xl p-2" src="@/assets/images/md-3.jpg" alt="" />
  </div>
</template>
