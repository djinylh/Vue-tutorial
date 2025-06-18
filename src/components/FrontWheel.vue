<script setup>
import Tire from './Tire.vue';
</script>
<template>
  <div class="front-wheel">
    <span>FRONT WHEEL</span>
    <Tire color="GREEN" />
  </div>
</template>
<!--  -->
<style scoped>
.front-wheel {
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
