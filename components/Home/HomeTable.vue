import { IAlbum } from '~/types/TrackTypes';
<template>
  <h2>Popular Albums</h2>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Album Name</th>
        <th>Console</th>
        <th>License</th>
        <th>Tracks</th>
        <th>Likes</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(album, index) in albums" :key="album.name">
        <td>{{ index + 1 }}</td>
        <td>
          <div>
            <nuxt-img :src="album.image" />
            <NuxtLink :to="`/album/${album.name}`">{{ album.name }}</NuxtLink>
          </div>
        </td>
        <td>
          {{ album.consoles?.name.replace('other', '/') }}
        </td>
        <td>{{ album.license?.name }}</td>
        <td>{{ album.musics?.length }}</td>
        <td>likes</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useFetchStore } from '~/stores/useFetchStore'

const useFetch = useFetchStore()
const { data: albums } = await useAsyncData('albums', () =>
  useFetch.fetchAlbumsFull()
)
</script>

<style lang="postcss" scoped>
h2 {
  @apply font-semibold text-4xl w-11/12 mx-auto pb-6;
}

table {
  @apply w-11/12 my-0 mx-auto border-collapse text-center text-lg table-auto;

  & thead {
    @apply text-stone-400;
    & tr {
      & th {
        @apply py-4 font-semibold;
      }
    }
  }

  & tbody {
    @apply capitalize;
    & tr {
      & td {
        @apply min-w-[100px] align-middle  py-4;
        & div {
          @apply flex items-center justify-start gap-2;
          & img {
            @apply w-10 h-10 rounded-md object-cover;
          }

          & a {
            @apply font-semibold;
          }
        }
      }
    }
  }

  & tr {
    @apply border-b border-stone-500;
  }
}
</style>
