<template>
  <div class="m-auto flex min-h-screen flex-col">
    <TheHeader />
      <LazyAnimation class="md:pt-20 -mb-36" />
    <div class="md:mt-16 flex flex-1">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>
