<template>
  <main>
    <PlayerIndex @emit-play-pause="playPause" />
  </main>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { TrackKey } from '~/types/Symbols'

const audio = ref<HTMLAudioElement | null>(null)
const trackNb = useTrackNb()
const isPlaying = ref<boolean>(false)
const audioText = ref<string>('play')

const { data: music } = await useFetch('/api/nes/SMB/musics', {
  transform: (_music) => _music.data,
})

onMounted(() => {
  if (music.value) {
    audio.value = new Audio(music.value[trackNb.value].link)
  }
})

const playPause = () => {
  if (audio) {
    isPlaying.value = !isPlaying.value
    if (!isPlaying.value) {
      audioText.value = 'play'
      audio.value?.pause()
    } else {
      audioText.value = 'pause'
      audio.value?.play()
    }
  }
}

const tracksLength = computed(() => {
  return music.value?.length
})

provide(TrackKey, {
  audioText,
  tracksLength,
  music,
})
</script>

<style lang="scss" scoped></style>
