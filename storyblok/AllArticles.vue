<template>
  <h2 class="mb-4 font-['M_PLUS_Rounded_1c'] text-xl font-bold">
    {{ blok.headline }}
  </h2>

  <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
    <nuxt-link
      v-for="(blok, i) in articles"
      :key="blok.uuid"
      :to="`/blog/${blok.slug}`"
      class="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-xl ring-gray-200 duration-200 hover:bg-gray-100/50 dark:bg-slate-900/50 dark:hover:bg-slate-900"
    >
      <div class="post__image">
        <img
          class="duration-150 group-hover:scale-110"
          v-if="blok.content?.image"
          :src="blok.content.image.filename + '/m/1600x0'"
          :alt="blok.content.image.alt"
        />
      </div>

      <div class="flex-1 px-3 py-2">
        <p
          class="flex items-center gap-1.5 truncate font-semibold text-gray-900 dark:text-white"
        >
          {{ blok.content?.title }}
        </p>
        <p
          class="mt-1 line-clamp-2 text-[13px] text-gray-500 dark:text-gray-400"
        >
          {{ blok.content?.description }}
        </p>
      </div>
      <div class="px-3 py-2">
        <div class="flex items-center justify-between gap-3">
          <time class="text-gray-500 dark:text-gray-400">{{
            blok.content?.created &&
            useDateFormat(blok.content?.created, "MM-DD-YYYY").value
          }}</time>
          <div class="inline-flex flex-row-reverse justify-end">
            <p
              class="relative -me-1.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs ring-2 ring-white transition-transform first:me-0 dark:ring-gray-900 lg:hover:scale-110 lg:hover:ring-emerald-500 dark:lg:hover:ring-emerald-400"
            >
              <img
                v-if="blok.content?.author_image"
                class="h-6 w-6 rounded-full text-xs"
                :src="blok.content?.author_image.filename + '/m/1600x0'"
              />
            </p>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import type {
  AllArticlesStoryblok,
  ArticleStoryblok,
} from "~/component-types-sb";

interface IStories {
  cv: number;
  links: unknown[];
  rels: unknown[];
  stories: ArticleStoryblok[];
}

defineProps<{ blok: AllArticlesStoryblok }>();

const articles = ref<ArticleStoryblok[]>();
const storyblokApi = useStoryblokApi();

const { data }: { data: IStories } = await storyblokApi.get("cdn/stories", {
  version: useRoute().query._storyblok ? "draft" : "published",
  starts_with: "blog",
  is_startpage: false,
});

articles.value = data.stories;
</script>

<style>
.post {
  position: relative;
}
.post__image {
  position: relative;
  overflow: hidden;
}
.post__image:after {
  content: "";
  padding-top: 51%;
  display: block;
  pointer-events: none;
  background-color: inherit;
}

.post__image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
