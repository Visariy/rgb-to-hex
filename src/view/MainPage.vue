<template>
  <div class="container">
    <header-component/>
    <input-component/>
    <output-component/>
  </div>
</template>

<script setup lang="ts">

import HeaderComponent from '@/components/HeaderComponent.vue';

import InputComponent from '@/components/InputComponent.vue';

import OutputComponent from '@/components/OutputComponent.vue';

</script>

<style lang="scss" scoped>

ol{
  list-style-type: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

</style>
