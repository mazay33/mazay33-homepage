<script setup lang="ts">
definePageMeta({ layout: "blog" });
const { slug } = useRoute().params;

const story = await useAsyncStoryblok(
  slug && slug.length > 0 && slug !== "/" ? `blog/${slug}` : "all-articles",
  { version: useRoute().query._storyblok ? "draft" : "published" }
);
</script>

<template>
  <StoryblokComponent v-if="story && story.content" :blok="story.content" />
</template>
