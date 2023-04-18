import { defineStore } from 'pinia'

export const usePlayerShownStore = defineStore('counter', () => {
  const isShown = ref<boolean>(false)
  const showPlayer = () => {
    isShown.value = true
  }

  const hidePlayer = () => {
    isShown.value = false
  }

  return { isShown, showPlayer, hidePlayer }
})
