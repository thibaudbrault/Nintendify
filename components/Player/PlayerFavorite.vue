<template>
  <section>
    <button class="closeButton" @click="hidePlayer">
      <Icon name="iconoir:cancel" />
    </button>
  </section>
</template>

<script setup lang="ts">
import { usePlayerShownStore } from '~/stores/usePlayerShownStore'

const store = usePlayerShownStore()
const { hidePlayer } = store
</script>

<style lang="postcss" scoped>
section {
  @apply relative w-full h-full;
  & .closeButton {
    @apply absolute top-4 right-4;
  }
}
</style>
