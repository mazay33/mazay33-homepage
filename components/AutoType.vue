<script setup>
const props = defineProps({
  text: String,
});
let autoTypingText = ref("");
const isTextTypingFinish = ref(false);

const startAutoTyping = () => {
  const typingInterval = 100;
  let currentIndex = 0;

  setInterval(() => {
    if (currentIndex >= props.text.length) {
      setTimeout(() => {
        isTextTypingFinish.value = true;
      }, 1000);
      return;
    }
    autoTypingText.value += props.text[currentIndex];
    currentIndex++;
  }, typingInterval);
};

onMounted(() => {
  setTimeout(() => {
    startAutoTyping();
  }, 2000);
});
</script>

<template>
  <div
    class="mb-6 flex h-12 items-center justify-center rounded bg-white/10 p-3 text-center backdrop-blur-md"
  >
    <span class="text-lg">{{ autoTypingText }}</span>
    <div v-if="!isTextTypingFinish" class="cursor-animation"></div>
  </div>
</template>

<style scoped>
.cursor-animation {
  display: inline-block;
  width: 1px;
  height: 16px;
  text-align: center;
  background-color: white;
  animation: blink 0.9s infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
