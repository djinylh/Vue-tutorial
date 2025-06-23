<script setup>
import FrontWheel from '@/components/FrontWheel.vue';
import RearWheel from '@/components/RearWheel.vue';
import { useCounterStore } from '@/stores/counter.js';
const CounterStore = useCounterStore();
</script>

<template>
  <h1>Hello Vue!</h1>
  <button @click="CounterStore.increment">회전</button>
  <div class="car">
    <FrontWheel />
    <FrontWheel />
  </div>

  <div class="car">
    <RearWheel />
    <RearWheel />
  </div>
</template>

<style scoped>
.car {
  display: flex;
  gap: 10px;
}
</style>
