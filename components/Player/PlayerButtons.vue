<template>
  <div>
    <button @click="previous">
      <Icon name="iconoir:skip-prev" />
    </button>
    <button @click="playPause">
      <Icon :name="audioText" />
    </button>
    <button @click="next">
      <Icon name="iconoir:skip-next" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { TrackKey } from '~/types/Symbols'

const { audioText, playPause, previous, next } = inject(TrackKey)
</script>

<style lang="postcss" scoped>
div {
  @apply flex items-center justify-center gap-4 px-14 py-1 bg-zinc-900 text-zinc-100 rounded-3xl;

  & button {
    @apply text-4xl;
  }
}
</style>
