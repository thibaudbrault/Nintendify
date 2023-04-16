<template>
  <section>
    <h1>Home</h1>
    <div class="homeHighlight">
      <HomeHighlight />
      <HomeAside />
    </div>
    <div class="homeList">
      <HomeList v-for="l in license" :license="l" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const license = inject('license')
</script>

<style lang="postcss" scoped>
section {
  @apply h-full flex flex-col gap-8;

  & .homeHighlight {
    @apply h-1/4 grid grid-cols-3 gap-4 justify-items-center;
  }

  & .homeList {
    @apply flex flex-col gap-4;
  }
}

h1 {
  @apply text-4xl font-semibold mb-2 pl-2;
}
</style>
