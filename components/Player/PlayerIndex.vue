<template>
  <PlayerInfo key="info" />
  <PlayerButtons key="buttons" />
  <PlayerFavorite key="favorite" />
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { useFetchStore } from '~/stores/useFetchStore'
import { useTrackStore } from '~/stores/useTrackStore'

const selected = useSelected()

const route = useRoute()
const title = route.params.id

const musicsStore = useFetchStore()
const { data: music } = await useAsyncData('music', () =>
  musicsStore.fetchMusics(title as string)
)

const useTrack = useTrackStore()
const { loadTrack } = useTrack

onMounted(() => {
  loadTrack(music.value?.[selected.value])
})

watchEffect(() => {
  if (music.value) {
    loadTrack(music.value[selected.value])
  }
})

provide('track', {
  music,
})
</script>
