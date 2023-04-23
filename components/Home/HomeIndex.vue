<template>
  <section>
    <div class="homeTop">
      <HomeHighlight />
      <HomeAside />
    </div>
    <div class="homeTable">
      <HomeTable />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="postcss" scoped>
section {
  @apply h-full flex flex-col gap-8;

  & .homeTop {
    @apply h-1/3 relative;
  }
}
</style>
