<template>
  <div
    v-editable="blok"
    class="container mx-auto my-12 grid place-items-center gap-12 md:grid-cols-3"
  >
    <StoryblokComponent
      v-for="blok in blok.columns"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
