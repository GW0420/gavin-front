<template>
  <MobileNavigationBar v-if="isMobileTerminal" />
</template>

<script setup>
import { onMounted } from 'vue'
import { isMobileTerminal } from '@/utils/flexible'
import MobileNavigationBar from './mobile/index.vue'
import { getCategory } from '@/api/category'

const getCategoryData = async () => {
  const res = await getCategory()
}

onMounted(() => {
  getCategoryData()
})
</script>
