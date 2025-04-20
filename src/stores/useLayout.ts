import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLayout = defineStore('layout', () => {
  const sidebar = ref(false)
  function toggleSidebar() {
    sidebar.value = !sidebar.value
    console.log('sidebr is: ', sidebar.value)
  }

  return { sidebar, toggleSidebar }
})
