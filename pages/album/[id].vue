<template>
  <section v-if="album">
    <div class="albumHeader">
      <nuxt-img :src="album.image" width="200" height="200" />
      <h1>{{ title }}</h1>
      <p>{{ album.consoles?.fullName }}</p>
    </div>
    <ul>
      <li v-for="(music, index) in album.musics" :key="music.title">
        <AlbumTrackRow :music="music" :index="index" :album="title" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { useFetchStore } from '~/stores/useFetchStore'

const route = useRoute()
const title = route.params.id

const musicsStore = useFetchStore()
const { data: album } = await useAsyncData('album', () =>
  musicsStore.fetchAlbum(title as string)
)
</script>

<style lang="postcss" scoped>
section {
  @apply flex flex-col p-8 gap-12;

  & .albumHeader {
    @apply flex flex-col items-center gap-4;
    & img {
      @apply w-52 h-52 rounded-md object-cover;
    }

    & h1 {
      @apply text-5xl capitalize font-semibold;
    }
  }
}
</style>
