<template>
  <div class="grid-container">
    <header>
      <h1>Name</h1>
      <button>Connect</button>
    </header>

    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/favorites">Favorites</NuxtLink>
    </nav>

    <main>
      <slot />
    </main>

    <footer>
      <p>footer</p>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="postcss" scoped>
.grid-container {
  @apply h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto];
}

header,
main,
footer {
  @apply row-span-1 col-span-1;
}

nav {
  @apply row-span-full;
}
</style>
