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
import { IMusic } from '~/types/TrackTypes'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { storeToRefs } from 'pinia'

const client = useSupabaseClient()

const trackNb = useTrackNb()

const audio = ref<HTMLAudioElement | null>(null)
const curTrack = ref<IMusic | null>(null)
const curTime = ref<string | number | null>(null)
const duration = ref<string | null>(null)
const isTrackPlaying = ref<boolean>(false)

const title = useRoute().params.id

const { data: music, pending } = await useAsyncData(
  'musics',
  async () =>
    client.from('musics').select('*, albums(image, name)').order('id'),
  {
    transform: (result) => result.data,
  }
)

// const player = usePlayerStore()
// const { playPause, next } = storeToRefs(player)

onMounted(() => {
  if (music.value) curTrack.value = music.value?.[trackNb.value]
  if (curTrack.value) {
    audio.value = new Audio()
    audio.value.src = curTrack.value.link
    audio.value.onended = () => {
      next()
      isTrackPlaying.value = true
    }
    audio.value.onloadedmetadata = () => {
      calculateTime()
    }
    audio.value.ontimeupdate = () => {
      calculateTime()
    }
  }
})

const playPause = () => {
  if (audio.value?.paused) {
    audio.value.play()
    isTrackPlaying.value = true
  } else {
    audio.value?.pause()
    isTrackPlaying.value = false
  }
}

const resetPlayer = () => {
  if (audio.value) {
    audio.value.currentTime = 0
    audio.value.src = curTrack.value?.link
    setTimeout(() => {
      if (isTrackPlaying.value) {
        audio.value?.play()
      } else {
        audio.value?.pause()
      }
    }, 300)
  }
}

const calculateTime = () => {
  if (audio.value) {
    curTime.value = audio.value?.currentTime
    if (curTime.value) {
      const minutes = Math.floor(curTime.value / 60)
      const seconds = Math.floor(curTime.value % 60)
      const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
      const totalMinutes = Math.floor(audio.value?.duration / 60)
      const totalSeconds = Math.floor(audio.value?.duration % 60)
      const totalReturnedSeconds =
        totalSeconds < 10 ? `0${totalSeconds}` : `${totalSeconds}`
      curTime.value = `${minutes}:${returnedSeconds}`
      duration.value = `${totalMinutes}:${totalReturnedSeconds}`
    }
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
  isTrackPlaying,
  tracksLength,
  curTime,
  duration,
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
