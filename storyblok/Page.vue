<template>
  <div v-editable="blok" class="mx-auto w-full max-w-3xl px-4 duration-500">
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
