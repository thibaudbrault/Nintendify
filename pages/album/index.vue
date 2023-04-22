<template>
  <section>
    <div class="albumsHeader">
      <h1>Albums</h1>
    </div>
    <ul class="albumsList">
      <li v-for="album in albums">
        <NuxtLink :to="`/album/${album.name}`">
          {{ album.name }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { useFetchStore } from '~/stores/useFetchStore'

const musicsStore = useFetchStore()
const { data: albums } = await useAsyncData('albums', () =>
  musicsStore.fetchAlbums()
)
</script>

<style lang="postcss" scoped>
section {
  @apply p-4 flex flex-col gap-8;

  & .albumsHeader {
    @apply flex items-baseline gap-4;
    & h1 {
      @apply text-6xl text-red-500 font-semibold;
    }
  }

  & .albumsList {
    @apply flex gap-4;
  }
}
</style>
