<template>
  <div>
    <h2>{{ license.name }}</h2>
    <ul>
      <li v-for="album in license.albums">
        <nuxt-img :src="album.image" width="200" height="200" />
        <p>{{ album.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ILicense } from '~/types/TrackTypes'

const props = defineProps<{
  license: ILicense
}>()
const { license } = toRefs(props)
</script>

<style lang="postcss" scoped>
div {
  @apply bg-zinc-200 p-4;
  & h2 {
    @apply capitalize font-semibold;
  }

  & ul {
    & li {
      & img {
        @apply w-48 h-48 object-cover;
      }
    }
  }
}
</style>
