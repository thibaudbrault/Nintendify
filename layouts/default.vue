<template>
  <aside>
    <div>
      <NuxtLink to="/" title="Home">
        <Icon :name="homeIcon" />
      </NuxtLink>
      <NuxtLink to="/album" title="Albums">
        <Icon :name="albumIcon" />
      </NuxtLink>
    </div>
    <hr />
    <div>
      <NuxtLink to="/favorites" title="Favorites">
        <Icon :name="favIcon" />
      </NuxtLink>
      <NuxtLink to="/profile" title="Profile">
        <Icon :name="userIcon" />
      </NuxtLink>
    </div>
  </aside>

  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">
const homeIcon = ref<string>('iconoir:home')
const albumIcon = ref<string>('iconoir:album-open')
const favIcon = ref<string>('iconoir:heart')
const userIcon = ref<string>('iconoir:user')
</script>

<style lang="postcss" scoped>
aside {
  @apply flex flex-col justify-center items-center gap-16;

  & hr {
    @apply bg-zinc-600 w-1/2 h-px;
  }

  & div {
    @apply flex flex-col gap-4;

    & a {
      @apply text-3xl transition duration-300 hover:text-indigo-500 text-zinc-400;
    }

    & .router-link-active {
      @apply text-zinc-50;
    }
  }
}

main {
  @apply m-4 bg-zinc-100 text-zinc-900 rounded-3xl;
}
</style>
