<template>
  <div class="wrapper">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Nintendify',
  ogTitle: 'Nintendify',
  description: "Music player for Nintendo games' musics",
  ogDescription: "Music player for Nintendo games' musics",
})
</script>

<style lang="postcss" scoped>
.wrapper {
  @apply grid grid-cols-[10vw_1fr] min-h-screen bg-stone-950 text-stone-200;
}
</style>
