<script setup>
import photo_md from "@/assets/images/md-1.jpg";
import photo_mazay33 from "@/assets/images/mazay33-1.png";
import photo_mvl from "@/assets/images/mvl-1.png";
useHead({
  title: "Works",
});
const works = [
  {
    title: "MarketData",
    desc: "A highly accurate internal analytics service that helps you sell on Wildberries.",
    img: photo_md,
  },
  {
    title: "Mazay33",
    desc: "Portfolio website with photo gallery.",
    img: photo_mazay33,
  },
  {
    title: "MskVolley",
    desc: "Development of a web platform for automating the volleyball league championship",
    img: photo_mvl,
  },
];
</script>

<template>
  <div class="mx-auto w-full max-w-lg px-4">
    <h2  v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :delay="100" class="mb-4 font-['M_PLUS_Rounded_1c'] text-xl font-bold">Works</h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <nuxt-link
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :delay="i * 150"
        v-for="(work, i) in works"
        :key="work.title"
        :to="`/works/${work.title.toLowerCase().trim()}`"
        class="mb-auto flex flex-col justify-center md:items-center"
      >
        <img
          class="aspect-[16/9] max-w-full rounded-xl object-cover object-top shadow md:max-h-32"
          :src="work.img"
          alt=""
        />
        <p class="mt-2 text-center text-xl font-bold">{{ work.title }}</p>
        <p class="text-center text-sm">
          {{ work.desc }}
        </p>
      </nuxt-link>
    </div>
  </div>
</template>
<style></style>
