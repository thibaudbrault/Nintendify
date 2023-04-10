<template>
  <button @click="previous">Previous</button>
  <button @click="playPause">
    {{ audioText }}
  </button>
  <button @click="next">Next</button>
</template>

<script setup lang="ts">
const trackNb = useTrackNb();
const { audio, tracksLength } = defineProps<{
  audio: HTMLAudioElement | null;
  tracksLength: number | null;
}>();
let audioText = ref<string>("play");
let isPlaying = ref<boolean>(false);

const playPause = () => {
  if (audio) {
    isPlaying.value = !isPlaying.value;
    if (!isPlaying.value) {
      audioText.value = "play";
      audio.pause();
    } else {
      audioText.value = "pause";
      audio.play();
    }
  }
};

const previous = () => {
  if (trackNb.value === 0) {
    trackNb.value = 0;
  } else {
    trackNb.value--;
  }
};

const next = () => {
  if (trackNb.value === tracksLength) {
    trackNb.value = tracksLength;
  } else {
    trackNb.value++;
  }
};
</script>

<style lang="scss" scoped></style>
