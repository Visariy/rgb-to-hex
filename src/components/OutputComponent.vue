<template>
  <div class="hex-container">
    <span class="HEX" v-if="HexState.hex.length > 0">{{ HexState.hex }}</span>
    <span class="HEX" v-else>Please enter RGB values</span>
  </div>
  <div class="color-container">
    <div id="color">
    </div>
  </div>
</template>

<script setup lang="ts">

import { useHexState } from '@/pinia/store/state/hexState';

import { useRgbState } from '@/pinia/store/state/rgbState';

import { watch } from 'vue';

const HexState = useHexState();

const RgbState = useRgbState();

const RgbToHex = () => {
  for (let i = 0; i < RgbState.rgbArray.length; i += 1) {
    if (RgbState.rgbArray[i].value < 0) {
      RgbState.rgbArray[i].value = 1;
    } else if (RgbState.rgbArray[i].value > 255) {
      RgbState.rgbArray[i].value = 255;
    }
  }
  const redToHex = (RgbState.rgbArray[0].value << 16);

  const greenToHex = (RgbState.rgbArray[1].value << 8);

  const blueToHex = (RgbState.rgbArray[2].value << 0);

  HexState.hex = `#${((1 << 24) + redToHex + greenToHex + blueToHex).toString(16).slice(1).toUpperCase()}`;
};

const showColor = () => {
  if (HexState.hex.length > 0) {
    const colorBox = document.getElementById('color');
    colorBox!.style.backgroundColor = HexState.hex;
  }
};

watch(RgbState.rgbArray, () => {
  RgbToHex();
  showColor();
});

</script>

<style scoped lang="scss">

.hex-container{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cornflowerblue;
  .HEX{
    font-size: 25px;
    font-style: italic;
    border: 1px solid white;
    padding: 10px 30px;
    font-family: "Source Code Pro", monospace;
    color: white;
  }
}
.color-container{
  display: flex;
  justify-content: center;
  margin-top: 50px;
  #color{
    width: 300px;
    height: 200px;
  }
}

@media screen and (max-height: 900px) {
  .color-container{
    padding-bottom: 50px;
  }
}

</style>
