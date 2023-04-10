<template>
  <main>
    <!-- <Navbar /> -->
    <Info :music="music" />
    <PlayerButtons :audio="audio" :tracksLength="tracksLength" />
  </main>
</template>

<script setup lang="ts">
let audio = ref<HTMLAudioElement | null>(null);
let tracksLength = ref<number | null>(null);
const trackNb = useTrackNb();

const { data: music } = await useFetch("/api/nes/SMB/musics", {
  transform: (_music) => _music.data,
});

onMounted(() => {
  if (music.value) {
    tracksLength.value = music.value.length;
    audio.value = new Audio(music.value[trackNb.value].link);
  }
});
</script>

<style lang="scss" scoped></style>
