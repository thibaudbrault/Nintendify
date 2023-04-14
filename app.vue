<template>
  <div class="wrapper">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply grid grid-cols-[10vw_1fr] min-h-screen bg-zinc-900 text-zinc-100;
}
</style>
