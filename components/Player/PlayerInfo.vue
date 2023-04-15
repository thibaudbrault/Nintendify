<template>
  <div v-if="music" class="infoContainer">
    <nuxt-img :src="music[trackNb].img" width="400" height="400" />
    <div>
      <h2>{{ music[trackNb].title }}</h2>
      <h3>{{ music[trackNb].game }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { TrackKey } from '~/types/Symbols'

const trackNb = useTrackNb()
const { music } = inject(TrackKey)
</script>

<style lang="postcss" scoped>
.infoContainer {
  @apply flex items-center justify-center flex-col gap-4;

  & img {
    @apply rounded-3xl;
  }

  & div {
    @apply flex flex-col items-center gap-4;

    & h2 {
      @apply text-6xl capitalize;
    }

    & h3 {
      @apply text-2xl capitalize;
    }
  }
}
</style>
