<script setup lang="ts">
import { ref } from 'vue';
import AppDay from '@/components/AppDay.vue'

const today = ref<string>('')

today.value = new Date().toISOString()
</script>

<template>
  <div class="w-full">
    <ul class="grid grid-cols-3 grid-rows-2 gap-2 w-full h-screen">
      <li class="border rounded-xl"><AppDay day="Lunes" /></li>
      <li class="border rounded-xl"><AppDay day="Martes" /></li>
      <li class="border rounded-xl"><AppDay day="Miercoles" /></li>
      <li class="border rounded-xl"><AppDay day="Jueves" /></li>
      <li class="border rounded-xl"><AppDay day="Viernes" /></li>
      <li class="border rounded-xl"><AppDay day="Finde" /></li>
    </ul>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
