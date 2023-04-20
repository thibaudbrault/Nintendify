<template>
  <button @click="playTrack">
    <p class="index">{{ index }}</p>
    <div class="nameContainer">
      <h2>{{ music.title }}</h2>
      <p>{{ album }}</p>
    </div>
  </button>
</template>

<script setup lang="ts">
import { usePlayerStore } from '~/stores/usePlayerStore.js'

const props = defineProps({
  music: Object,
  index: Number,
  album: String,
})

const selected = useSelected()

const { music, index } = toRefs(props)
const usePlayer = usePlayerStore()
const { showPlayer } = usePlayer

const playTrack = () => {
  showPlayer()
  selected.value = index?.value
}
console.log(music?.value)
</script>

<style lang="postcss" scoped>
button {
  @apply w-full p-4 my-2 flex items-center gap-6 rounded-md transition duration-300 hover:bg-zinc-600;

  & .index,
  h2 {
    @apply font-semibold text-xl capitalize;
  }

  & .nameContainer {
    @apply flex flex-col items-start;

    & p {
      @apply text-sm capitalize opacity-50;
    }
  }
}
</style>
