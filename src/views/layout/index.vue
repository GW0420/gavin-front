<template>
  <div class="h-screen">
    <Header class="h-header"></Header>
    <Main class="h-main"></Main>
    <Floating class="fixed bottom-10 right-2"></Floating>
  </div>
</template>

<script setup>
import Header from './components/header/index.vue'
import Main from './components/main.vue'
import Floating from './components/floating.vue'
</script>

<style lang="scss" scoped></style>
