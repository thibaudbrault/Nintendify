<template>
  <aside>
    <h2>new albums</h2>
    <ol>
      <li v-for="album in albums">
        <NuxtLink :to="`/album/${album.name}`">
          <nuxt-img :src="album.image" width="50" height="50" />
          <p>{{ album.name }}</p>
        </NuxtLink>
      </li>
    </ol>
  </aside>
</template>

<script setup lang="ts">
import { IAlbum } from '~/types/TrackTypes'

const client = useSupabaseClient()

const { data: albums, pending } = await useAsyncData(
  'albums',
  async () =>
    client
      .from('albums')
      .select(`*`)
      .order('created_at', { ascending: false })
      .limit(3),
  {
    transform: (result) => result.data as IAlbum[],
  }
)

console.log(albums.value)
</script>

<style lang="postcss" scoped>
aside {
  @apply w-1/3 p-4 flex flex-col gap-4 absolute top-1/2 right-0 -translate-y-2/4 backdrop-blur-md;

  & h2 {
    @apply text-2xl capitalize font-semibold;
  }

  & ol {
    @apply flex flex-col gap-2;
    & li {
      @apply bg-zinc-200 p-2 rounded-xl;
      & a {
        @apply flex gap-2 items-center;
        & img {
          @apply h-12 w-12 object-cover rounded-md;
        }
        & p {
          @apply font-semibold capitalize;
        }
      }
    }
  }
}
</style>
