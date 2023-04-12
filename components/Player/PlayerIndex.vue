<template>
  <!-- <PlayerNavbar /> -->
  <PlayerInfo />
  <PlayerButtons @emit-play-pause="playPause" />
</template>

<script setup lang="ts">
const props = defineProps<{
  playPause: () => void
}>()
const { playPause } = toRefs(props)
</script>

<style scoped></style>
