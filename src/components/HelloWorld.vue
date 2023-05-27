<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})
const count = ref(0)
</script>

<template>
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
