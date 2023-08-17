<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})
const count = ref(0)
</script>

<template>
  <div>
    <a href="https://www.instagram.com/atorreslinares/" target="_blank">
      <img src="./assets/tigre.png" class="tigre" alt="tigre" />
    </a>
  </div>
  <h1 class="message">{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.message:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
