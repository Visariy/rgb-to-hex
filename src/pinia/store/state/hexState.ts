import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useHexState = defineStore('hexState', () => {
  const hex = ref('');
  return { hex };
});
