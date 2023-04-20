import { defineStore } from 'pinia'

export const useTrackStore = defineStore('track', () => {
  const trackNb = useTrackNb()
  const isPlaying = ref<boolean>(false)
  const audio = ref<HTMLAudioElement | null>(null)
  const curTrack = ref(null)
  const curAlbum = ref(null)
  const curTime = ref<string | number>('0:00')
  const duration = ref<string | null>(null)

  const loadTrack = (track) => {
    // curAlbum.value = album
    curTrack.value = track
    if (audio.value && audio.value.src) {
      audio.value.pause()
      isPlaying.value = false
      audio.value.src = ''
    }
    audio.value = new Audio()
    audio.value.src = track.link
    // audio.value.onended = () => {
    //   next(curTrack.value)
    //   isPlaying.value = true
    // }
    audio.value.onloadedmetadata = () => {
      calculateTime()
    }
    audio.value.ontimeupdate = () => {
      calculateTime()
    }
  }

  const playPause = () => {
    if (audio.value?.paused) {
      audio.value.play()
      isPlaying.value = true
    } else {
      audio.value?.pause()
      isPlaying.value = false
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

  const previous = (curTrack) => {
    if (trackNb.value === 0) {
      trackNb.value = 0
    } else {
      trackNb.value--
    }
  }

  const next = (curTrack) => {}

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

  const resetState = () => {
    isPlaying.value = false
    audio.value = null
    curTrack.value = null
    curAlbum.value = null
    curTime.value = '0:00'
    duration.value = null
  }

  return {
    isPlaying,
    audio,
    curTrack,
    curAlbum,
    curTime,
    duration,
    loadTrack,
    calculateTime,
    playPause,
    previous,
    next,
    backward,
    forward,
    resetState,
  }
})
