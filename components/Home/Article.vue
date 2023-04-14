<script setup>
const text = ref("Hello, I'm a frontend developer based in Russia! ");
</script>
<template>
  <article>
    <AutoType :text="text" />
    <div class="flex items-start justify-between">
      <div class="flex flex-col">
        <h2 class="font-['M_PLUS_Rounded_1c'] text-4xl font-bold">
          Andrew Mazaev
        </h2>
        <p>Digital Craftsman ( Artist / Developer / Designer )</p>
      </div>
      <img
        class="h-full max-h-[100px] w-full max-w-[100px] rounded-full border-[3px] border-gray-100 object-cover dark:border-gray-300"
        src="@/assets/images/image.jpg"
        alt=""
      />
    </div>

    <div class="flex flex-col justify-start">
      <h3
        class="my-4 font-['M_PLUS_Rounded_1c'] text-xl font-bold underline decoration-gray-500 decoration-4 underline-offset-8"
      >
        Work
      </h3>
      <p class="text-justify indent-4">
        Professional web developer capable professional looking and
        user-friendly websites from stratch and writes performance optimized,
        reusable and refactorable codes. Professionally developed 5 web
        applications with multiple Javascript frameworks. Hungry for knowledge,
        collaborative individual and possess analytical skills. Enjoys problem
        solving and willing to adapt to changes in the industry to stay on top.
      </p>
      <div class="mt-4 flex justify-center">
        <nuxt-link
          to="/works"
          class="inline-flex items-center justify-center rounded-lg bg-teal-500 px-4 py-2 font-bold text-white duration-200 hover:bg-teal-600 dark:bg-teal-200 dark:text-gray-800 dark:hover:bg-teal-300"
        >
          <span>My Portfolio</span>
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            class="h-4 w-4"
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
    <div class="flex flex-col gap-1">
      <div class="flex">
        <span class="mr-3 font-bold">2000</span>
        Born in Moscow, Russia
      </div>
      <div class="flex">
        <span class="mr-3 flex flex-col font-bold"
          >2018 <span class="text-center">-</span> <br />
          2021</span
        >
        Studied at the Moscow Aviation Institute in the department of "Control
        Systems, Computer Science, and Power Engineering". My major was
        "Software Engineering" under the faculty of "Software and Information
        Systems".
      </div>
      <div class="flex">
        <span class="mr-3 font-bold">2021</span>
        Worked at 53xapps. Moscow
      </div>
      <div class="flex">
        <span class="mr-3 font-bold">2022</span>
        <span>
          Worked at NewEraMedia. Created
          <nuxt-link
            class="text-blue-400 underline-offset-4 hover:underline dark:text-pink-400"
            to="/works/marketdata"
          >
            "MarketData".</nuxt-link
          ></span
        >
      </div>
      <div class="flex">
        <span class="mr-3 font-bold">2023 to present</span>
        Working as a freelancer
      </div>
    </div>

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
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            aria-hidden="true"
            focusable="false"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
            ></path>
          </svg>
          <span>@mazay33</span>
        </button>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/mazay33/">
        <button
          class="mx-4 inline-flex items-center gap-2 rounded p-2 font-bold text-teal-500 transition-all duration-200 hover:bg-teal-500/20 dark:text-teal-300 dark:hover:bg-teal-300/20"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            aria-hidden="true"
            focusable="false"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
            ></path>
            <path
              d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
            ></path>
          </svg>
          <span>@mazay33</span>
        </button>
      </a>
    </li>
  </ul>
  <div class="mt-4 flex items-center justify-center">
    <nuxt-link
      to="/contact"
      class="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-5 py-2 font-bold text-white duration-200 hover:bg-teal-600 dark:bg-teal-200 dark:text-gray-800 dark:hover:bg-teal-300"
    >
      <svg
        viewBox="0 0 24 24"
        focusable="false"
        class="h-4 w-4"
        aria-hidden="true"
      >
        <g fill="currentColor">
          <path
            d="M11.114,14.556a1.252,1.252,0,0,0,1.768,0L22.568,4.87a.5.5,0,0,0-.281-.849A1.966,1.966,0,0,0,22,4H2a1.966,1.966,0,0,0-.289.021.5.5,0,0,0-.281.849Z"
          ></path>
          <path
            d="M23.888,5.832a.182.182,0,0,0-.2.039l-6.2,6.2a.251.251,0,0,0,0,.354l5.043,5.043a.75.75,0,1,1-1.06,1.061l-5.043-5.043a.25.25,0,0,0-.354,0l-2.129,2.129a2.75,2.75,0,0,1-3.888,0L7.926,13.488a.251.251,0,0,0-.354,0L2.529,18.531a.75.75,0,0,1-1.06-1.061l5.043-5.043a.251.251,0,0,0,0-.354l-6.2-6.2a.18.18,0,0,0-.2-.039A.182.182,0,0,0,0,6V18a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6A.181.181,0,0,0,23.888,5.832Z"
          ></path>
        </g>
      </svg>
      <span>Contact me</span>
    </nuxt-link>
  </div>
</template>
