import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const isOpen = ref(true)
  const toggleSidebar = () => {
    isOpen.value = !isOpen.value
  }

  return { isOpen, toggleSidebar }
})
