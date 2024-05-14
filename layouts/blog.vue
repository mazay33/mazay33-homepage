<script setup lang="ts"></script>

<template>
  <div class="m-auto flex min-h-screen flex-col">
    <TheHeader />

    <div class="z-40 mt-20 flex flex-1">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>
