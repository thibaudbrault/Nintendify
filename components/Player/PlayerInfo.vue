<template>
  <section v-if="music">
    <nuxt-img src="/nature.jpg" width="300" height="300" />
    <h2>{{ music[trackNb].title }}</h2>
    <h3>{{ music[trackNb].game }}</h3>
  </section>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { TrackKey } from '~/types/Symbols'

type Props = {
  music: any
}

const trackNb = useTrackNb()
const { music } = inject(TrackKey)
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
