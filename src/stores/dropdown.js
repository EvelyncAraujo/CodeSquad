import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDropdownStore = defineStore("dropdown", () => {
  const isOpen = ref(false);

  const toggleDropdown = async () => {
    isOpen.value = !isOpen.value;
  };
  return { toggleDropdown, isOpen };
});

