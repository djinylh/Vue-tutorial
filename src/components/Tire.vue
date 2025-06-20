<script setup>
//props는 외부에서 들어오는 데이터
const props = defineProps({
  color: String, //타입지정
});
// color로 주는 값을 String(문자열)로 데이터를 받아올 수 있다.
</script>

<template>
  <!-- :style 이것은 vue 문법
  중괄호 두개 겹쳐져 있는 것은 콧수염(Mustache 표현식) 
  -->
  <div :style="{ color: props.color }">{{ props.color || 'BLACK!!' }}TIRE</div>
  <!-- <div style="background-color: beige">{{ props.color || 'BLACK!!' }}TIRE</div> -->
</template>
<style scoped></style>
