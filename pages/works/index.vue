<script setup>
import photo_md from "@/assets/images/md-1.jpg";
const works = [
  {
    title: "MarketData",
    desc: "A highly accurate internal analytics service that helps you sell on Wildberries.",
    img: photo_md,
  },
];
</script>

<template>
  <div class="mx-auto w-full max-w-lg px-4">
    <h2 class="mb-4 font-['M_PLUS_Rounded_1c'] text-xl font-bold">Works</h2>
    <div class="grid grid-cols-2 gap-6">
      <nuxt-link
        v-for="work in works"
        :key="work.title"
        :to="`/works/${work.title.toLowerCase()}`"
        class="flex flex-col items-center justify-center"
      >
        <img
          class="aspect-[16/9] max-h-32 max-w-full rounded object-cover object-top"
          :src="work.img"
          alt=""
        />
        <p class="mt-2 text-xl font-bold">{{ work.title }}</p>
        <p class="text-center text-sm">
          {{ work.desc }}
        </p>
      </nuxt-link>
    </div>
  </div>
</template>
<style></style>
