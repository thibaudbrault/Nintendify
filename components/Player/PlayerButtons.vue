<template>
  <section>
    <div class="buttonContainer">
      <button title="Shuffle">
        <Icon name="game-icons:perspective-dice-six-faces-random" />
      </button>
      <button title="Previous" @click="previous(music[selected - 1])">
        <Icon name="game-icons:previous-button" />
      </button>
      <button title="Backwrad 10s" @click="backward">
        <Icon name="game-icons:fast-backward-button" />
      </button>
      <button class="playButton" title="Pause" @click="playPause">
        <Transition name="slide-up">
          <Icon
            v-if="isPlaying"
            class="buttonIcon"
            name="game-icons:pause-button"
          />
          <Icon v-else class="buttonIcon" name="game-icons:play-button" />
        </Transition>
      </button>
      <button title="Forward 10s" @click="forward">
        <Icon name="game-icons:fast-forward-button" />
      </button>
      <button title="Next" @click="next(music[selected + 1])">
        <Icon name="game-icons:next-button" />
      </button>
      <button title="Loop">
        <Icon name="game-icons:infinity" />
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
const { curTime, duration, isPlaying } = storeToRefs(useTrack)
const { playPause, backward, forward, previous, next } = useTrack

const selected = useSelected()

const { music } = inject('track')
</script>

<style lang="postcss" scoped>
section {
  @apply grid grid-rows-2 justify-items-center gap-2;

  & .buttonContainer {
    @apply flex items-center gap-5;
    & button {
      @apply text-2xl;
    }
    & .playButton {
      @apply relative w-16 h-16 flex justify-center items-center text-4xl bg-stone-950 rounded-full;

      & .buttonIcon {
        @apply absolute;
      }
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
