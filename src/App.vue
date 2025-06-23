<script setup></script>

<template>
  <div>
    <div class="header">
      <router-link class="view" to="/component"> 화면 전환 1 </router-link>

      <router-link class="view" to="/mustache"> 화면 전환 2 </router-link>

      <router-link class="view" to="/chapter3">chapter3</router-link>

      <router-link class="view" to="/chapter4">chapter4</router-link>

      <router-link class="view" to="/chapter5">chapter5</router-link>

      <router-link class="view" to="/chapter8">chapter8</router-link>
    </div>

    <div class="router-view">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  gap: 10px;
  height: 50px;
}
</style>
