<template>
  <section>
    <h1>Albums</h1>
    <ul>
      <li v-for="album in albums">
        <AlbumElement :album="album" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { IAlbum } from '~/types/TrackTypes'

const client = useSupabaseClient()

const { data: albums, pending } = await useAsyncData(
  'albums',
  async () => client.from('albums').select(`*, musics (*)`).order('id'),
  {
    transform: (result) => result.data as IAlbum[],
  }
)
</script>

<style lang="postcss" scoped>
section {
  @apply p-4 flex flex-col gap-8;

  & h1 {
    @apply text-6xl text-indigo-700 font-semibold;
  }

  & ul {
    @apply flex items-center justify-between flex-wrap gap-4;

    & li {
      @apply bg-zinc-200 w-fit px-2 py-8 rounded-3xl transition duration-300 hover:scale-105;
    }
  }
}
</style>
