<template>
  <header>
    <h1>Hello</h1>
  </header>

  <slot />

  <footer>
    <p>footer</p>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
