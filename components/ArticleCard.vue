<template>
  <div v-editable="blok">
    <img
      :src="blok.image.filename + '/m/1600x0'"
      :alt="blok.image.alt"
      class="mx-auto w-3/4 object-cover"
    />
    <div class="container mx-auto mb-12">
      <h1 class="mb-4 mt-12 text-6xl font-bold text-gray-800">
        {{ blok.title }}
      </h1>
      <h2 class="mb-4 text-2xl font-bold text-gray-500">
        {{ blok.description }}
      </h2>
      <div class="mb-3 text-gray-600">
        Written by: <b>{{ blok.author }}</b>
      </div>
      <div v-html="resolvedRichText"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });

console.log("blok", props.blok);

const resolvedRichText = computed(() => renderRichText(props.blok.content));
</script>
