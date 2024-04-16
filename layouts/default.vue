<script setup lang="ts">
// const asd = defineAsyncComponent({
//   loader: () => import("@/components/VoxelDog.vue"),
// });
</script>

<template>
  <div class="m-auto flex min-h-screen flex-col">
    <TheHeader />
    <LazyVoxelDog
      class="m-auto -mb-[64px] mt-[24px] xs:-mb-[140px] xs:-mt-[10px] md:-mb-[200px] md:-mt-[60px]"
    />

    <div class="flex flex-1 z-50">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>
