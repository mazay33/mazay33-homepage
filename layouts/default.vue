<template>
  <div class="m-auto flex min-h-screen flex-col">
    <TheHeader />
    <ClientOnly>
      <Animation class="pt-20" />
    </ClientOnly>
    <div class="mt-16 flex flex-1">
      <slot />
    </div>
    <!-- <TheFooter /> -->
  </div>
</template>
