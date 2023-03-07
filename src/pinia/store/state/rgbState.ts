import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRgbState = defineStore('RgbState', () => {
  const red = ref(0);

  const green = ref(0);

  const blue = ref(0);

  const rgbArray = ref([red, green, blue]);
  return {
    red, green, blue, rgbArray,
  };
});
