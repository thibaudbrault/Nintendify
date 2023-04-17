<template>
  <div v-if="music" class="infoContainer">
    <nuxt-img :src="music[trackNb].albums.image" width="400" height="400" />
    <div>
      <h2>{{ music[trackNb].title }}</h2>
      <h3>{{ music[trackNb].albums.name }}</h3>
    </div>
    <p>{{ curTime }} / {{ duration }}</p>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { TrackKey } from '~/types/Symbols'

const trackNb = useTrackNb()
const { music, curTime, duration } = inject(TrackKey)
</script>

<style lang="postcss" scoped>
.infoContainer {
  @apply flex items-center justify-center flex-col gap-4;

  & img {
    @apply rounded-3xl w-96 h-96 object-cover;
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
