<template>
  <section v-if="album">
    <div class="albumHeader">
      <nuxt-img :src="album.image" width="200" height="200" />
      <div class="textContainer">
        <h1>{{ title }}</h1>
        <div>
          <p>
            <span v-if="album.consoles?.name !== 'other'">
              {{ album.consoles?.fullName }} /
            </span>
            <span>{{ album.year }}</span>
          </p>
          <p>{{ album.musics?.length }} songs</p>
        </div>
      </div>
    </div>
    <ul>
      <li v-for="(music, index) in album.musics" :key="music.title">
        <AlbumTrackRow :music="music" :index="index" :album="title" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { useFetchStore } from '~/stores/useFetchStore'

const route = useRoute()
const title = route.params.id

const musicsStore = useFetchStore()
const { data: album } = await useAsyncData('album', () =>
  musicsStore.fetchAlbum(title as string)
)
</script>

<style lang="postcss" scoped>
section {
  @apply flex flex-col p-8 gap-12;

  & .albumHeader {
    @apply flex items-center justify-start gap-4;
    & img {
      @apply w-52 h-52 rounded-md object-cover;
    }

    & .textContainer {
      @apply flex flex-col justify-between gap-6;
      & h1 {
        @apply text-6xl capitalize font-semibold;
      }
    }
  }

  & ul {
    @apply pb-[10vh] border-t border-t-stone-600;
  }
}
</style>
