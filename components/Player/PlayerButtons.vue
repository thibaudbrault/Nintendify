<template>
  <button @click="previous">Previous</button>
  <button @click="playPauseEvent">
    {{ audioText }}
  </button>
  <button @click="next">Next</button>
</template>

<script setup lang="ts">
import { TrackKey } from '~/types/Symbols'

const emit = defineEmits(['emitPlayPause'])
const trackNb = useTrackNb()
const { tracksLength, audioText } = inject(TrackKey)

const playPauseEvent = () => {
  emit('emitPlayPause')
}

const previous = () => {
  if (trackNb.value === 0) {
    trackNb.value = 0
  } else {
    trackNb.value--
  }
}

const next = () => {
  if (tracksLength.value) {
    if (trackNb.value === tracksLength.value - 1) {
      trackNb.value = tracksLength.value - 1
    } else {
      trackNb.value++
    }
  }
}
</script>

<style lang="scss" scoped></style>
