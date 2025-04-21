import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLayout = defineStore('layout', {
  state: () => {
    return { sidebar: false, popup: null };
  },
  actions: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
      console.log('sidebar is: ', this.sidebar);
    },
    setPopup(obj) {
      this.popup = obj;
      console.log('popup is: ', obj);
    },
    closePopup() {
      this.popup = null;
      console.log('popup is: ', null);
    },
  },
});
