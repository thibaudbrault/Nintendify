<template>
  <main>
    <!-- <Navbar /> -->
    <Info :music="music" />
    <PlayerButtons
      :tracks-length="tracksLength"
      :audioText="audioText"
      @emitPlayPause="playPause"
    />
  </main>
</template>

<script setup lang="ts">
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
</script>

<style lang="scss" scoped></style>
