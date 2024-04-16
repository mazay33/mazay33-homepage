<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: "Andrew Mazaev - Homepage",
  meta: [
    {
      name: "Andrew Mazaev - Homepage",
      content: "Frontend developer portfolio",
    },
    {
      name: "description",
      content: "Andrew Mazaev's Frontend developer portfolio",
    },
    { name: "yandex-verification", content: "e30623a7d948f5da" },
  ],
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>
