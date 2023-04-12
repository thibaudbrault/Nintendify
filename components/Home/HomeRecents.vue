<template>
  <ul>
    <li v-for="data in FakeData">
      <nuxt-img src="/nature.jpg" width="70" height="70" />
      <p>{{ data }}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { FakeData } from '~/data/DataArrays'
console.log(FakeData)
</script>

<style scoped></style>
