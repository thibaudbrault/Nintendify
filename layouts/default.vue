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

  <Transition name="fade">
    <footer v-if="isShown">
      <PlayerIndex />
    </footer>
  </Transition>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePlayerShownStore } from '~/stores/usePlayerShownStore'

const homeIcon = ref<string>('iconoir:home')
const albumIcon = ref<string>('iconoir:album-open')
const favIcon = ref<string>('iconoir:heart')
const userIcon = ref<string>('iconoir:user')

const store = usePlayerShownStore()
const { isShown } = storeToRefs(store)
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
  @apply m-4 bg-zinc-700 text-zinc-100 rounded-3xl;
}

footer {
  @apply w-full h-fit absolute bottom-0 left-0 p-4 grid grid-cols-[1fr_2fr_1fr] items-center backdrop-blur-xl gap-4;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
