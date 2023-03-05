<template>
  <div>
    <Loader v-if="isLoading" :isLoading="isLoading" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.7s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(100vh);
}
</style>
