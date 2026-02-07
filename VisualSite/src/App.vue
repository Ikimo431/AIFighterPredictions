<script setup lang="ts">
import PositionSelector from './components/PositionSelector.vue';
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <PositionSelector :width=500 :height=500></PositionSelector>
</template>

<style scoped>
  
</style>
