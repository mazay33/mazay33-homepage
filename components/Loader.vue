<template>
  <div class="loading" v-if="isLoading">
    <div class="loading-spinner"></div>
  </div>
</template>

<script>
export default defineComponent({
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const isLoading = ref(props.isLoading);

    watch(
      () => props.isLoading,
      (val) => {
        isLoading.value = val;
      }
    );

    return {
      isLoading,
    };
  },
});
</script>

<style>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #202023;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-spinner {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 6px solid #ccc;
  border-top-color: #333;
  animation: loading-spinner 1s linear infinite;
}

@keyframes loading-spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>