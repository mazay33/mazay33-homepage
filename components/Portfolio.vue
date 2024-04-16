<script setup>
const text = ref("Hello, I'm a frontend developer based in Russia! ");

const { data: portfolio } = await useFetch("/api/portfolio");
</script>
<template>
  <article>
    <AutoType :text="text" />
    <div class="flex items-start justify-between">
      <div class="flex flex-col">
        <h2 class="font-['M_PLUS_Rounded_1c'] text-3xl font-bold md:text-4xl">
          {{ portfolio.name }}
        </h2>
        <p>{{ portfolio.occupation }} ( {{ portfolio.roles.join(" | ") }} )</p>
      </div>

      <div class="avatar">
        <div class="w-24 rounded-full border-[3px] border-gray-100">
          <img src="@/assets/images/image.jpg" />
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-start">
      <h3
        class="my-4 font-['M_PLUS_Rounded_1c'] text-xl font-bold underline decoration-gray-500 decoration-4 underline-offset-8"
      >
        Work
      </h3>
      <p class="text-justify indent-4">
        {{ portfolio.work.description }}
      </p>
      <div class="mt-4 flex justify-center">
        <nuxt-link
          to="/works"
          class="btn border-none bg-teal-500 text-base font-bold text-white duration-200 hover:bg-teal-600 dark:bg-teal-200 dark:text-gray-800 dark:hover:bg-teal-300"
        >
          My Portfolio
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            class="h-6 w-6"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
            ></path>
          </svg>
        </nuxt-link>
      </div>
    </div>

    <h3
      class="my-4 font-['M_PLUS_Rounded_1c'] text-xl font-bold underline decoration-gray-500 decoration-4 underline-offset-8"
    >
      Bio
    </h3>

    <ul
      class="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact"
    >
      <li v-for="item in portfolio.work.portfolio.timeline" :key="item.year">
        <hr v-if="item.year !== portfolio.work.portfolio.timeline[0].year" />
        <div class="timeline-middle">
          <IconCheck />
        </div>
        <div class="timeline-end mb-10">
          <time class="font-mono italic">{{ item.year }}</time>
          <div class="text-lg font-black">{{ item.title }}</div>
          <div v-if="item.description">{{ item.description }}</div>
          <nuxt-link
            v-if="item.link"
            class="text-blue-400 underline-offset-4 hover:underline dark:text-pink-400"
            :to="item.link"
          >
            {{ item.linkText }}
          </nuxt-link>
        </div>
        <hr
          v-if="
            item.year !==
            portfolio.work.portfolio.timeline[
              portfolio.work.portfolio.timeline.length - 1
            ].year
          "
        />
      </li>
    </ul>

    <h3
      class="my-4 font-['M_PLUS_Rounded_1c'] text-xl font-bold underline decoration-gray-500 decoration-4 underline-offset-8"
    >
      I ♥
    </h3>
    <p class="text-justify indent-4">
      Art, Music,
      <a
        target="_blank"
        class="text-blue-400 underline-offset-4 hover:underline dark:text-pink-400"
        href="https://mazay33.com/"
        >Photography</a
      >, Football
    </p>
  </article>

  <h3
    class="my-4 font-['M_PLUS_Rounded_1c'] text-xl font-bold underline decoration-gray-500 decoration-4 underline-offset-8"
  >
    On the web
  </h3>
  <ul>
    <li>
      <a href="https://github.com/mazay33">
        <button
          class="mx-4 inline-flex items-center gap-2 rounded p-2 font-bold text-teal-500 transition-all duration-200 hover:bg-teal-500/20 dark:text-teal-300 dark:hover:bg-teal-300/20"
        >
          <IconGithub />
          <span>@mazay33</span>
        </button>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/mazay33/">
        <button
          class="mx-4 inline-flex items-center gap-2 rounded p-2 font-bold text-teal-500 transition-all duration-200 hover:bg-teal-500/20 dark:text-teal-300 dark:hover:bg-teal-300/20"
        >
          <IconInstagram />
          <span>@mazay33</span>
        </button>
      </a>
    </li>
  </ul>
  <div class="mt-4 flex items-center justify-center">
    <nuxt-link
      to="/contact"
      class="btn h-10 min-h-10 border-none bg-teal-500 font-bold text-white duration-200 hover:bg-teal-600 dark:bg-teal-200 dark:text-gray-800 dark:hover:bg-teal-300"
    >
      <IconLetter />
      Contact me
    </nuxt-link>
  </div>
</template>

<style>
.timeline-vertical:where(.timeline-snap-icon) > li {
  --timeline-col-start: minmax(0, 0);
  --timeline-row-start: 0.5rem;
}
</style>
