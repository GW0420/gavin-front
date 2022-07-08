<template>
  <div class="w-full">
    <gw-search v-model="inputValue">
      <template #dropdown>
        <div>dropdown</div>
      </template>
    </gw-search>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const inputValue = ref('')
</script>

<style lang="scss" scoped></style>
