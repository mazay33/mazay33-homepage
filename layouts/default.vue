<template>
  <div class="m-auto flex min-h-screen flex-col">
    <TheHeader />
    <ClientOnly>
      <Animation class="md:pt-20 -mb-36" />
    </ClientOnly>
    <div class="md:mt-16 flex flex-1">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>
