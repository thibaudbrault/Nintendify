<template>
  <section>
    <nuxt-img src="/nature.jpg" width="300" height="300" />
    <h2>Track title</h2>
    <h3>Track game</h3>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & img {
    border-radius: 50%;
  }
}
</style>
