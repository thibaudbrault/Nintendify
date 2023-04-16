import { defineStore } from 'pinia'
import { IMusic } from '~/types/TrackTypes'

export const usePlayerStore = defineStore('player', () => {
  const trackNb = useTrackNb()
  const audio = ref<HTMLAudioElement | null>(null)
  const audioText = ref<string>('iconoir:play')
  const curTrack = ref<IMusic | null>(null)

  const tracksLength = computed(() => {
    return music.value?.length
  })

  function playPause() {
    console.log('hello')
    if (audio.value?.paused) {
      audioText.value = 'iconoir:pause'
      audio.value.play()
    } else {
      audioText.value = 'iconoir:play'
      audio.value?.pause()
    }
  }

  function resetPlayer() {
    if (audio.value) {
      audio.value.currentTime = 0
      audio.value.src = curTrack.value?.link
    }
  }

  function previous() {
    if (trackNb.value === 0) {
      trackNb.value = 0
    } else {
      trackNb.value--
    }
    curTrack.value = music.value?.[trackNb.value]
    resetPlayer()
  }

  function next(music) {
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

  return { audioText, playPause, previous, next }
})
