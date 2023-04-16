<template>
  <NuxtLink :to="`/album/${album.name}`">
    <nuxt-img :src="album.image" width="125" height="125" />
    <h2>{{ album.name }}</h2>
  </NuxtLink>
</template>

<script setup lang="ts">
import { IAlbum } from '~/types/TrackTypes'

const props = defineProps<{
  album: IAlbum
}>()
const { album } = toRefs(props)

console.log(album.value)
</script>

<style lang="postcss" scoped>
a {
  @apply flex flex-col items-center justify-between gap-4;
  & img {
    @apply rounded-3xl w-32 h-32 object-cover;
  }

  & h2 {
    @apply text-xl capitalize;
  }
}
</style>
