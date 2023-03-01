<template>
  <div class="flex flex-col min-h-screen m-auto">
    <TheHeader />
    <Animation class="pt-20"/>
    <div class="flex flex-1 mt-16">
      <slot />
    </div>
    <!-- <TheFooter /> -->
  </div>
</template>
