import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', () => {
  const isShown = ref<boolean>(false)
  const showPlayer = () => {
    isShown.value = true
  }

  const hidePlayer = () => {
    isShown.value = false
  }

  return { isShown, showPlayer, hidePlayer }
})
