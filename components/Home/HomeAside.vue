<template>
  <aside>
    <h2>new albums</h2>
    <ol>
      <li v-for="album in albums" :key="album.name">
        <NuxtLink :to="`/album/${album.name}`">
          <nuxt-img :src="album.image" width="50" height="50" />
          <p>{{ album.name }}</p>
        </NuxtLink>
      </li>
    </ol>
  </aside>
</template>

<script setup lang="ts">
import { useFetchStore } from '~/stores/useFetchStore'

const useFetch = useFetchStore()
const { data: albums } = await useAsyncData('music', () =>
  useFetch.fetchAlbumsWithLimit()
)
</script>

<style lang="postcss" scoped>
aside {
  @apply w-1/3 p-4 flex flex-col gap-4 absolute top-1/2 right-0 -translate-y-2/4 backdrop-blur-md text-stone-950;

  & h2 {
    @apply text-2xl capitalize font-semibold;
  }

  & ol {
    @apply flex flex-col gap-2;
    & li {
      @apply bg-stone-200 p-2 rounded-xl transition duration-300 hover:bg-stone-950 hover:text-stone-200;
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
