<template>
  <section v-if="pending">
    <p>Loading...</p>
  </section>
  <section v-else>
    <PlayerIndex @emit-play-pause="playPause" />
  </section>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { TrackKey } from '~/types/Symbols'
import { TMusic } from '~/types/TrackTypes'

const client = useSupabaseClient()
const trackNb = useTrackNb()
const audioText = ref<string>('iconoir:play')
const curTrack = ref<TMusic | null>(null)
const audio = ref<HTMLAudioElement | null>(null)

const { data: music, pending } = await useAsyncData(
  'Musics',
  async () => client.from('Musics').select('*').order('id'),
  {
    transform: (result) => result.data,
  }
)

onMounted(() => {
  if (music.value) curTrack.value = music.value?.[trackNb.value]
  if (curTrack.value) {
    audio.value = new Audio()
    audio.value.src = curTrack.value.link
    audio.value.onended = () => {
      next()
    }
  }
})

const playPause = () => {
  if (audio.value?.paused) {
    audioText.value = 'iconoir:pause'
    audio.value.play()
  } else {
    audioText.value = 'iconoir:play'
    audio.value?.pause()
  }
}

const resetPlayer = () => {
  if (audio.value) {
    audio.value.currentTime = 0
    audio.value.src = curTrack.value?.link
  }
}

const previous = () => {
  if (trackNb.value === 0) {
    trackNb.value = 0
  } else {
    trackNb.value--
  }
  curTrack.value = music.value?.[trackNb.value]
  resetPlayer()
}

const next = () => {
  if (tracksLength.value) {
    if (trackNb.value === tracksLength.value - 1) {
      trackNb.value = tracksLength.value - 1
    } else {
      trackNb.value++
    }
  }
  curTrack.value = music.value?.[trackNb.value]
  resetPlayer()
}

const tracksLength = computed(() => {
  return music.value?.length
})

provide(TrackKey, {
  audioText,
  tracksLength,
  music,
  playPause,
  previous,
  next,
})
</script>

<style lang="postcss" scoped>
section {
  @apply h-full flex flex-col justify-center items-center gap-10;
}
</style>
