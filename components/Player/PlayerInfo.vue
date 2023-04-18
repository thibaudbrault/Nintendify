<template>
  <section v-if="music" class="infoContainer">
    <nuxt-img :src="music[trackNb].albums.image" width="40" height="40" />
    <div>
      <h2>{{ music[trackNb].title }}</h2>
      <h3>{{ music[trackNb].albums.name }}</h3>
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { TrackKey } from '~/types/symbols.js'

const trackNb = useTrackNb()
const { music } = inject(TrackKey)
</script>

<style lang="postcss" scoped>
.infoContainer {
  @apply grid grid-cols-[1fr_2fr] items-center;

  & img {
    @apply rounded-md w-10 h-10 object-cover justify-self-center;
  }

  & div {
    @apply flex flex-col items-start;

    & h2 {
      @apply text-2xl font-semibold capitalize;
    }

    & h3 {
      @apply capitalize;
    }
  }
}
</style>
