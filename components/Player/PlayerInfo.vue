<template>
  <section v-if="music" class="infoContainer">
    <nuxt-img :src="music[selected].albums.image" width="40" height="40" />
    <div>
      <h2>{{ music[selected].title }}</h2>
      <h3>{{ music[selected].albums.name }}</h3>
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const selected = useSelected()

const { music } = inject('track')
</script>

<style lang="postcss" scoped>
.infoContainer {
  @apply grid grid-cols-[1fr_2fr] items-center;

  & img {
    @apply rounded-md w-10 h-10 object-cover justify-self-center;
  }

  & div {
    @apply flex flex-col items-start;

    & h2 {
      @apply text-2xl font-semibold capitalize;
    }

    & h3 {
      @apply capitalize;
    }
  }
}
</style>
