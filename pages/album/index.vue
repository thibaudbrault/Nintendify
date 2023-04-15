import { IAlbum } from '../../types/TrackTypes';
<template>
  <section>
    <h1>Albums</h1>
    <ul>
      <li v-for="album in albums">
        <NuxtLink :to="'/album/' + album.name">
          <nuxt-img :src="album.image" width="125" height="125" />
          <h2>{{ album.name }}</h2>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const client = useSupabaseClient()

const { data: albums, pending } = await useAsyncData(
  'albums',
  async () => client.from('albums').select('*').order('id'),
  {
    transform: (result) => result.data,
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
    & li {
      @apply flex flex-col items-center justify-between bg-zinc-200 w-fit px-2 py-8 rounded-3xl transition duration-300 hover:scale-105;

      & a {
        @apply flex flex-col items-center justify-between gap-4;
        & img {
          @apply rounded-3xl;
        }

        & h2 {
          @apply text-xl capitalize;
        }
      }
    }
  }
}
</style>
