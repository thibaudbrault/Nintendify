<template>
  <section>
    <div class="albumsHeader">
      <nuxt-img
        :src="albums[Math.floor(Math.random() * albums?.length)].image"
      />
      <h1>Albums</h1>
    </div>
    <div class="albumsList">
      <details v-for="album in albums">
        <AlbumElement :album="album" />
      </details>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IAlbum } from '~/types/TrackTypes'

const client = useSupabaseClient()

const { data: albums, pending } = await useAsyncData(
  'albums',
  async () =>
    client
      .from('albums')
      .select(`*, musics (*)`)
      .order('id', { foreignTable: 'musics' }),
  {
    transform: (result) => result.data as IAlbum[],
  }
)
</script>

<style lang="postcss" scoped>
section {
  @apply p-4 flex flex-col gap-8;

  & .albumsHeader {
    @apply flex items-baseline gap-4;
    & h1 {
      @apply text-6xl text-indigo-700 font-semibold;
    }
    & img {
      @apply w-14 h-14 rounded-xl;
    }
  }

  & .albumsList {
    @apply flex flex-col gap-4;

    & details {
      @apply bg-zinc-200 w-full;
    }
  }
}
</style>
