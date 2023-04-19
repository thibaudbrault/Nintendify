<template>
  <TransitionGroup :name="transitionName">
    <PlayerInfo key="info" />
    <PlayerButtons key="buttons" />
    <PlayerFavorite key="favorite" />
  </TransitionGroup>
</template>

<script setup lang="ts">
import { provide, inject } from 'vue'
import type { Database } from '~/types/schema'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { storeToRefs } from 'pinia'

const client = useSupabaseClient<Database>()

const trackNb = useTrackNb()

const audio = ref<HTMLAudioElement | null>(null)
const curTrack = ref(null)
const curTime = ref<string | number | null>(null)
const duration = ref<string | null>(null)
const isTrackPlaying = ref<boolean>(false)
const transitionName = ref<string | null>(null)

// const title = useRoute().params.id

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
      const curMinutes = Math.floor(curTime.value / 60)
      const curSeconds = Math.floor(curTime.value % 60)
      const curReturnedSeconds =
        curSeconds < 10 ? `0${curSeconds}` : `${curSeconds}`
      const durMinutes = Math.floor(audio.value?.duration / 60)
      const durSeconds = Math.floor(audio.value?.duration % 60)
      const durReturnedSeconds =
        durSeconds < 10 ? `0${durSeconds}` : `${durSeconds}`
      curTime.value = `${curMinutes}:${curReturnedSeconds}`
      duration.value = `${durMinutes}:${durReturnedSeconds}`
    }
  }
}

const previous = () => {
  if (trackNb.value === 0) {
    trackNb.value = 0
  } else {
    transitionName.value = 'slide-right'
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
      transitionName.value = 'slide-left'
      trackNb.value++
    }
  }
  curTrack.value = music.value?.[trackNb.value]
  resetPlayer()
}

const backward = () => {
  if (audio.value?.currentTime) {
    audio.value.currentTime = audio.value?.currentTime - 10
  }
}

const forward = () => {
  if (audio.value?.currentTime) {
    audio.value.currentTime = audio.value?.currentTime + 10
  }
}

const tracksLength = computed(() => {
  return music.value?.length
})

provide('track', {
  isTrackPlaying,
  tracksLength,
  curTime,
  duration,
  music,
  playPause,
  previous,
  next,
  backward,
  forward,
})
</script>

<style lang="postcss" scoped>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(300px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-300px);
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(300px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-300px);
}
</style>
