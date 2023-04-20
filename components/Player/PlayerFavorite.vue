<template>
  <section>
    <button class="closeButton" @click="exitPlayer">
      <Icon name="iconoir:cancel" />
    </button>
  </section>
</template>

<script setup lang="ts">
import { usePlayerStore } from '~/stores/usePlayerStore.js'
import { useTrackStore } from '~/stores/useTrackStore'
import { storeToRefs } from 'pinia'

const usePlayer = usePlayerStore()
const { hidePlayer } = usePlayer

const useTrack = useTrackStore()

const { isPlaying, audio, curTrack } = storeToRefs(useTrack)

const exitPlayer = () => {
  hidePlayer()
  audio.value?.pause()
}
</script>

<style lang="postcss" scoped>
section {
  @apply relative w-full h-full;
  & .closeButton {
    @apply absolute top-4 right-4 text-3xl;
  }
}
</style>
