// store/useDropdownStore.js
import { defineStore } from 'pinia';

export const useDropdownStore = defineStore('dropdown', {
  state: () => ({
    isOpen: false, // Estado que controla a visibilidade do dropdown
  }),
  actions: {
    toggleDropdown() {
      this.isOpen = !this.isOpen; // Alterna o estado de visibilidade
    },
  },
});
