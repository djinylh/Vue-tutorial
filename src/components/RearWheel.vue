<script setup>
import Tire from './Tire.vue';
</script>
<template>
  <div class="rear-wheel">
    <span>REAR WHEEL</span>
    <Tire color="RED" />
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
