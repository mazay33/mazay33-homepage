<script setup>
const props = defineProps({
  text: String,
});
</script>

<template>
  <div
    class="mb-6 flex items-center justify-center rounded-md bg-white/50 p-3 text-center backdrop-blur-md dark:bg-white/10"
  >
    <p class="min-h-7 md:text-lg">{{ props.text }}</p>
  </div>
</template>

<style scoped></style>
