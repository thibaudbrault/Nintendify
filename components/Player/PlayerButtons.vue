<template>
  <section>
    <div class="buttonContainer">
      <button :class="{ random: isRandom }" title="Shuffle" @click="playRandom">
        <Icon name="fad:shuffle" />
      </button>
      <button title="Previous" @click="previous(music[selected - 1])">
        <Icon name="fad:prev" />
      </button>
      <button title="Backwrad 10s" @click="backward">
        <Icon name="fad:backward" />
      </button>
      <button class="playButton" title="Pause" @click="playPause">
        <Transition name="slide-up">
          <Icon v-if="isPlaying" class="buttonIcon" name="fad:pause" />
          <Icon v-else class="buttonIcon" name="fad:play" />
        </Transition>
      </button>
      <button title="Forward 10s" @click="forward">
        <Icon name="fad:forward" />
      </button>
      <button title="Next" @click="next(music[selected + 1])">
        <Icon name="fad:next" />
      </button>
      <button :class="{ loop: isLooping }" title="Loop" @click="playLoop">
        <Icon name="fad:loop" />
      </button>
    </div>
    <div class="barContainer">
      <p>{{ curTime }}</p>
      <div />
      <p>{{ duration }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { storeToRefs } from 'pinia'
import { useTrackStore } from '~/stores/useTrackStore'

const useTrack = useTrackStore()
const { curTime, duration, isPlaying, isLooping, isRandom } =
  storeToRefs(useTrack)
const { playPause, backward, forward, previous, next, loop, random } = useTrack

const selected = useSelected()

const playRandom = () => {
  isRandom.value = !isRandom.value
  random()
}

const playLoop = () => {
  isLooping.value = !isLooping.value
  loop()
}

const { music } = inject('track')
</script>

<style lang="postcss" scoped>
section {
  @apply grid grid-rows-2 justify-items-center gap-2;

  & .buttonContainer {
    @apply flex items-center gap-5;
    & button {
      @apply text-3xl;
    }
    & .playButton {
      @apply relative w-16 h-16 flex justify-center items-center text-5xl bg-stone-950 rounded-full;

      & .buttonIcon {
        @apply absolute;
      }
    }

    & .loop,
    .random {
      @apply text-red-500 transition duration-300;
    }
  }

  & .barContainer {
    @apply w-full flex items-center justify-center gap-2;

    & div {
      @apply h-3 w-9/12 bg-stone-100 rounded-3xl;
    }
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
