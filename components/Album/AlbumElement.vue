<template>
  <summary>
    {{ album.name }}
  </summary>
  <ul>
    <li v-for="music in album.musics">
      <NuxtLink :to="`/track/${music.title}`">
        {{ music.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { IAlbum } from '~/types/trackTypes.js'

const props = defineProps<{
  album: IAlbum
}>()
const { album } = toRefs(props)

console.log(album)
</script>

<style lang="postcss" scoped>
summary {
  @apply text-2xl font-semibold capitalize cursor-pointer;
}

ul {
  @apply py-2;
  & li {
    @apply py-1 px-2 capitalize;
  }
}
</style>
