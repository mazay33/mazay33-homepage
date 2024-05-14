<template>
  <div
    class="relative mx-auto w-full max-w-6xl px-4 lg:translate-x-[11rem] lg:transform"
  >
    <div class="flex grid-cols-10 flex-col gap-10 md:grid">
      <div class="col-span-6 max-w-3xl px-4 3xl:col-span-7" v-editable="blok">
        <img
          v-if="blok.image"
          :src="blok.image.filename + '/m/1600x0'"
          :alt="blok.image.alt"
          class="mx-auto rounded-3xl object-cover"
        />
        <div class="container mx-auto mb-12">
          <div class="relative border-b border-white py-6 dark:border-gray-400">
            <h1
              class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            >
              {{ blok.title }}
            </h1>
            <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">
              {{ blok.description }}
            </p>
            <div class="mt-4 flex flex-wrap items-center gap-6">
              <nuxt-link
                class="focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 -mx-2.5 -my-1.5 inline-flex flex-shrink-0 items-center gap-x-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-gray-900 hover:bg-white focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:text-white dark:hover:bg-gray-900"
                :to="blok.author_github_url"
                rel="noopener noreferrer"
                target="_blank"
                ><span
                  class="relative inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm"
                  ><img
                    v-if="blok.author_image"
                    class="h-8 w-8 rounded-full text-sm"
                    :src="blok.author_image.filename + '/m/1600x0'"
                /></span>
                <div class="text-left">
                  <p class="font-medium">{{ blok.author }}</p>
                  <p class="leading-4 text-gray-500 dark:text-gray-400">
                    {{ blok.author_tag }}
                  </p>
                </div>
              </nuxt-link>
            </div>
          </div>

          <div class="mt-4" ref="articleRef">
            <article
              class="prose !prose-neutral max-w-full dark:!prose-invert prose-a:text-blue-400 dark:prose-a:text-pink-400"
              v-html="resolvedRichText"
            ></article>
          </div>
        </div>
      </div>

      <div class="cols-span-2 hidden pr-4 md:block 3xl:col-span-3">
        <div
          class="mockup-code sticky top-[80px] -mx-4 h-full max-h-[calc(100vh-140px)] overflow-y-auto p-4 shadow-lg"
        >
          <ul class="space-y-2 text-gray-100 dark:text-gray-300">
            <li
              :style="{ paddingLeft: getPadding(heading.level) }"
              v-for="heading in headings"
              :key="heading.id"
            >
              <a
                class="relative block cursor-pointer"
                :class="{
                  'text-blue-400 duration-100 dark:text-pink-400 ':
                    activeHeadings.includes(heading.id),
                }"
                @click="scrollToElement"
                :href="`#${heading.id}`"
                ><span
                  class="absolute top-2 mr-2 h-2 w-2 min-w-2 rounded-full bg-gray-300"
                />
                <span class="ml-4">{{ heading.text }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import cloneDeep from "clone-deep";
import hljs from "highlight.js";
import "highlight.js/styles/base16/material-darker.css";
import type { ArticleStoryblok, RichtextStoryblok } from "@/component-types-sb";

interface IHeading {
  id: string;
  level: string;
  text: string | null;
}

const offset = 80; // Header offset in pixels

const props = defineProps<{ blok: ArticleStoryblok }>();

const headings = ref<IHeading[]>([]);
const articleRef = ref<HTMLElement | null>(null);
const activeHeadings = ref<string[]>([]);

const mySchema = cloneDeep(RichTextSchema);
const myCustomCodeBlock = (node: RichtextStoryblok) => {
  return {
    tag: [
      {
        tag: "div",
        attrs: {
          class: "mockup-code",
        },
      },

      {
        tag: "pre",
        attrs: {
          class: "bg-inherit",
        },
      },

      {
        tag: "code",
        attrs: {
          ...node.attrs,
        },
      },
    ],
  };
};

const myCustomHeadingBlock = (node: RichtextStoryblok) => {
  return {
    tag: [
      {
        tag: "h" + node.attrs.level,
        attrs: {
          id: node.content && node.content[0].text,
        },
      },
    ],
  };
};

mySchema.nodes.code_block = myCustomCodeBlock as any;
mySchema.nodes.heading = myCustomHeadingBlock as any;

const resolvedRichText = renderRichText(props.blok?.content, {
  schema: mySchema,
});

const extractHeadings = () => {
  if (!articleRef.value) return;
  const headingElements = articleRef.value.querySelectorAll("h1, h2, h3");
  if (!headingElements) return;
  headings.value = Array.from(headingElements).map((heading) => ({
    id: heading.id,
    text: heading.textContent,
    level: heading.tagName,
  }));
};

const scrollToElement = (event: Event) => {
  event.preventDefault();

  const eventTarget = event.target as HTMLElement;

  const target = eventTarget.closest("a[href]") || eventTarget;
  const href = target.getAttribute("href");

  if (href && href.startsWith("#")) {
    const targetElement = document.getElementById(href.slice(1));
    if (targetElement) {
      window.scrollTo({
        top:
          targetElement.getBoundingClientRect().top + window.scrollY - offset,
        behavior: "smooth",
      });
    }
  } else {
    console.error("Href attribute is missing or invalid");
  }
};

const getPadding = (level: string) => {
  const paddingMap: Record<string, string> = {
    H1: "0px",
    H2: "0px",
    H3: "16px",
  };
  return paddingMap[level] || "0px";
};

let observer: IntersectionObserver | null = null;
const initIntersectionObserver = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          if (!activeHeadings.value.includes(id)) activeHeadings.value.push(id);
        } else {
          activeHeadings.value = activeHeadings.value.filter(
            (activeId) => activeId !== id
          );
        }
      });
    },
    { rootMargin: "-80px 0px -80px 0px", threshold: 0.1 }
  );

  document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((heading) => {
    if (!observer) return;
    observer.observe(heading);
  });
};

onMounted(() => {
  hljs.highlightAll();
  extractHeadings();
  initIntersectionObserver();
});

onUnmounted(() => {
  if (!observer) return;
  observer.disconnect();
});
</script>

<style>
.hljs {
  background: inherit;
}

pre code.hljs {
  padding-top: 0;
  padding-right: 0;
}
</style>
