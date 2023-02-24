<script>
import TypeIt from "typeit";

const element = ref("");
if (element.value !== "") {
  element.value === "";
}
export default {
  mounted() {
    new TypeIt("#element", {
      speed: 60,
      waitUntilVisible: true,
      startDelay: 1500,
      startDelete: true,
      afterComplete: function (instance) {
        instance.destroy();
      },
    })
      .type("Hello! I'm a frontend developer based in Russia!")
      .go();
  },
};
</script>

<template>
  <div class="mx-auto mx-4 -mt-28 w-full max-w-[500px] px-2">
    <div class="mb-6 rounded bg-white/10 p-3 text-center backdrop-blur-md">
      <span class="text-xl" id="element" ref="element"></span>
    </div>
  </div>
</template>
