<template>
  <section v-if="music">
    <nuxt-img src="/nature.jpg" width="300" height="300" />
    <h2>{{ music[trackNb].title }}</h2>
    <h3>{{ music[trackNb].game }}</h3>
  </section>
</template>

<script setup lang="ts">
const trackNb = useTrackNb()
const { music } = defineProps<{
  music: any
}>()
</script>

<style lang="scss" scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & img {
    border-radius: 50%;
  }
}
</style>
