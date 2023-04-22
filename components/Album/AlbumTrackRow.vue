<template>
  <button @click="playTrack">
    <div class="left">
      <p class="index">{{ index + 1 }}</p>
      <div class="nameContainer">
        <h2>{{ music.title }}</h2>
        <p>{{ album }}</p>
      </div>
    </div>
    <div class="right">
      <p>{{ isTrackTime }}</p>
    </div>
  </button>
</template>

<script setup lang="ts">
import { usePlayerStore } from '~/stores/usePlayerStore.js'
import { useTrackStore } from '~/stores/useTrackStore'

const props = defineProps({
  music: Object,
  index: Number,
  album: String,
})
const { music, index } = toRefs(props)

const selected = useSelected()
const isTrackTime = ref<string | null>(null)

const usePlayer = usePlayerStore()
const { showPlayer } = usePlayer

const useTrack = useTrackStore()
const { playPauseTrack } = useTrack

onMounted(() => {
  const audio = new Audio(music?.value?.link)
  audio.onloadedmetadata = () => {
    const minutes = Math.floor(audio.duration / 60)
    const seconds = Math.floor(audio.duration % 60)
    const total = seconds < 10 ? `0${seconds}` : `${seconds}`
    isTrackTime.value = `${minutes}:${total}`
  }
})

const playTrack = () => {
  showPlayer()
  selected.value = index?.value
  playPauseTrack(music?.value?.[selected.value])
}
</script>

<style lang="postcss" scoped>
button {
  @apply w-full p-4 my-2 flex items-center justify-between gap-6 rounded-md transition duration-300 hover:bg-stone-600;

  & .left {
    @apply flex items-center gap-6;

    & .index,
    h2 {
      @apply font-semibold text-xl capitalize;
    }

    & h2 {
      @apply transition duration-300 hover:text-red-500;
    }

    & .nameContainer {
      @apply flex flex-col items-start;

      & p {
        @apply text-sm capitalize opacity-50;
      }
    }
  }

  & .right {
    @apply opacity-50;
  }
}
</style>
