<template>
  <section v-if="album">
    <div class="albumHeader">
      <nuxt-img :src="album.image" width="200" height="200" />
      <h1>{{ title }}</h1>
      <p>{{ album.consoles?.fullName }}</p>
    </div>
    <ul>
      <li v-for="(music, index) in album.musics">
        <button @click="selectTrack(index)">{{ music.title }}</button>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { useSelected } from '~/composables/useSelected'
import { useFetchStore } from '~/stores/useFetchStore'
import { usePlayerShownStore } from '~/stores/usePlayerShownStore'

const route = useRoute()
const title = route.params.id

const selected = useSelected()

const musicsStore = useFetchStore()
const { data: album } = await useAsyncData('album', () =>
  musicsStore.fetchAlbum(title as string)
)

const { data: music } = await useAsyncData('music', () =>
  musicsStore.fetchMusics(title as string)
)

const store = usePlayerShownStore()
const { showPlayer } = store

const selectTrack = (id: number) => {
  showPlayer()
  selected.value = id
}
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
