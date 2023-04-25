<template>
  <section>
    <div class="albumsHeader">
      <h1>Albums</h1>
      <input
        id="search"
        v-model="search"
        type="text"
        name="search"
        placeholder="Search"
      />
    </div>
    <ul class="albumsList">
      <li v-for="result in results" :key="result.item.name">
        <NuxtLink :to="`/album/${result.item.name}`">
          {{ result.item.name }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Albums - Nintendify',
  ogTitle: 'Albums - Nintendify',
  description: 'List of albums available on Nintendify',
  ogDescription: 'List of albums available on Nintendify',
})

import { useFuse } from '@vueuse/integrations/useFuse'
import { useFetchStore } from '~/stores/useFetchStore'

const search = ref<string>('')

const useFetch = useFetchStore()
const { data: albums } = await useAsyncData('albums', () =>
  useFetch.fetchAlbums()
)

const options = computed(() => ({
  fuseOptions: {
    keys: ['name'],
  },
  resultLimit: 3,
  matchAllWhenSearchEmpty: true,
}))

const { results } = useFuse(search, albums.value, options.value)
</script>

<style lang="postcss" scoped>
section {
  @apply p-4 flex flex-col gap-8;

  & .albumsHeader {
    @apply w-full flex items-end gap-6;
    & h1 {
      @apply text-6xl text-red-500 font-semibold;
    }

    & input {
      @apply w-full rounded-md p-2 bg-transparent border border-stone-100;
    }
  }

  & .albumsList {
    @apply h-52 grid grid-cols-4 gap-8;

    & li {
      @apply w-full h-48 bg-stone-600 text-center rounded-md capitalize font-semibold p-4;

      & a {
        @apply w-full h-full flex items-center justify-center text-xl;
      }
    }
  }
}
</style>
