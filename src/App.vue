<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld msg="M3t1ch3" />

  <router-view></router-view>
</template>

<style scoped>
.tigre {
  height: 16em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.tigre:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
