<template>
  <div class="wrapper">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply grid grid-cols-[10vw_1fr] min-h-screen bg-stone-950 text-stone-200;
}
</style>
