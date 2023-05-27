<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://www.instagram.com/atorreslinares/" target="_blank">
      <img src="./assets/tigre.png" class="tigre" alt="tigre" />
    </a>
  </div>
  <HelloWorld msg="Hugo Torres" />
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
