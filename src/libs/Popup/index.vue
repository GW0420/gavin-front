<template>
  <div class="">
    <!-- teleport -->
    <teleport to="body">
      <!-- 蒙版 -->
      <transition name="mask">
        <div
          v-if="popupModel"
          class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
          @click="emits('update:popupModel', false)"
        ></div>
      </transition>
      <!-- 内容 -->
      <transition name="popup">
        <div v-if="popupModel" v-bind="$attrs" class="w-screen bg-white z-50 fixed bottom-0">
          <slot name="popup"></slot>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { useScrollLock } from '@vueuse/core'
import { watch } from 'vue'

const props = defineProps({
  popupModel: {
    required: true,
    type: Boolean
  }
})

const emits = defineEmits(['update:popupModel'])

// ------ 滚动锁定 ------
const isLocked = useScrollLock(document.body)
watch(
  () => props.popupModel,
  val => {
    isLocked.value = val
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped></style>
