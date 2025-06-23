<script setup>
import { onMounted, onUnmounted, onUpdated, reactive } from 'vue';

onMounted({
  message: 'Hello!',
});
onUpdated(() => {
  console.log('속성값이 변경되었다면', state.message);
});

onUnmounted(() => {
  alert('나 가유~~~');
});
</script>

<template>
  <h1>Chapter8.vue</h1>
  <div>
    {{ onMounted.message }}
  </div>
  <div>
    <input type="text" v-model="onMounted.message" />
  </div>
</template>

<style scoped></style>
