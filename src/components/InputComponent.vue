<template>
  <div class="input-rgb-container">
    <ol class="rgb-list">
      <li class="red-container">
        <label class="red-label" for="red-input">Red:
          <input id="red-input"
                 type="text"
                 maxlength="3"
                 minlength="1"
                 v-model="RgbState.red">
        </label>
      </li>
      <li class="green-container">
        <label class="green-label" for="green-input">Green:
          <input id="green-input"
                 type="text"
                 maxlength="3"
                 v-model="RgbState.green">
        </label>
      </li>
      <li class="blue-container">
        <label class="blue-label" for="blue-input">Blue:
          <input id="blue-input"
                 type="text"
                 maxlength="3"
                 minlength="1"
                 v-model="RgbState.blue">
        </label>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">

import { useRgbState } from '@/pinia/store/state/rgbState';

const RgbState = useRgbState();

</script>

<style scoped lang="scss">

.input-rgb-container {
  margin-top: 100px;
  height: 400px;
  max-width: 1200px;
  background-color: lavender;

  .rgb-list {
    max-width: 1200px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .red-container {
      max-width: 250px;
      display: flex;
      justify-content: center;

      .red-label {
        max-width: 250px;
        font-size: 25px;
        color: red;
        font-family: "Source Code Pro", monospace;
      }

      #red-input {
        font-size: 25px;
        max-width: 50%;
        font-family: "Source Code Pro", monospace;
        color: red;
        border-color: red;
      }
    }

    .green-container {
      max-width: 250px;
      display: flex;
      justify-content: center;

      .green-label {
        max-width: 250px;
        font-size: 25px;
        color: green;
        font-family: "Source Code Pro", monospace;
      }

      #green-input {
        font-size: 25px;
        max-width: 50%;
        font-family: "Source Code Pro", monospace;
        color: green;
        border-color: green;
      }
    }

    .blue-container {
      max-width: 250px;
      display: flex;
      justify-content: center;

      .blue-label {
        max-width: 250px;
        font-size: 25px;
        font-family: "Source Code Pro", monospace;
        color: blue;
      }

      #blue-input {
        font-size: 25px;
        max-width: 50%;
        font-family: "Source Code Pro", monospace;
        color: blue;
        border-color: blue;
      }
    }
  }
}

@media screen and (max-width: 768px ){
  .rgb-list {
    max-width: 1200px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }
}

</style>
