<script setup>
const message = 'There';
const mesaageObj = { name: 'kim', age: 20 };
const pageId = 'history';
let loading = false;
const parent = 'fruits';
const child = 'item';
const fruitList = ['사과', '바나나', '딸기', '배'];
</script>

<template>
  <h1>Mustache.vue</h1>
  <div>
    Hello,
    <span>
      {{ message }}
    </span>
  </div>

  <!-- 
    v-text는 directive '디렉티브'라고 부른다. 
    v - 시작하는 속성은 전부 디렉티브이다. 
    -->

  <div>
    Hello,
    <span v-text="mesaageObj.name"></span>
  </div>
  <div :id="pageId">페이지 아이디 div</div>
  <form>
    <input type="text" placeholder="아이디" :readonly="loading" />
    <br />
    <input type="password" placeholder="비밀번호" :readonly="loading" />
  </form>
  <button :disabled="loading">로그인</button>
  <ul :class="parent">
    <li :key="idx" v-for="(item, idx) in fruitList" :class="item">
      {{ item }}
    </li>
  </ul>
</template>

<style scoped>
#history {
  color: red;
}
</style>
