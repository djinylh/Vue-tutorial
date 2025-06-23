<script setup>
import Tire from './Tire.vue';
import { useCounterStore } from '@/stores/counter.js';
const CounterStore = useCounterStore();
</script>
<template>
  <div class="rear-wheel">
    <span>REAR WHEEL</span>
    <Tire color="RED" />
    <div>TIMES: {{ CounterStore.count }}</div>
  </div>
</template>
<!--  -->
<style scoped>
.rear-wheel {
  display: flex;
  border: 1px solid black;
  border-radius: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
}
</style>
