<template>
  <section v-if="album">
    <div class="albumHeader">
      <nuxt-img :src="album.image" width="200" height="200" />
      <h1>{{ title }}</h1>
      <p>{{ album.consoles?.fullName }}</p>
    </div>
    <ul>
      <li v-for="music in album.musics">
        <button @click="showPlayer">{{ music.title }}</button>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { Database } from '~/types/schema'
import { usePlayerShownStore } from '~/stores/usePlayerShownStore'

const route = useRoute()
const title = route.params.id

const store = usePlayerShownStore()
const { showPlayer } = store

const client = useSupabaseClient<Database>()

const { data: album, pending } = await useAsyncData(
  'album',
  async () =>
    client
      .from('albums')
      .select('*, musics(*), license(name), consoles(name, fullName)')
      .eq('name', title)
      .order('id', { foreignTable: 'musics' })
      .limit(1)
      .single(),
  {
    transform: (result) => result.data,
  }
)

console.log(album.value)
</script>

<style lang="postcss" scoped>
section {
  @apply flex flex-col p-8 gap-12;

  & .albumHeader {
    @apply flex flex-col items-center gap-4;
    & img {
      @apply w-52 h-52 rounded-md;
    }

    & h1 {
      @apply text-5xl capitalize font-semibold;
    }
  }
}
</style>
