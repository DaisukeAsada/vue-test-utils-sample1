<template>
  <button @click="increment()">+</button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup (props, context) {
    const count = ref<number>(0)
    const increment = () => {
      count.value++
      context.emit('incrementCount', count.value, 'test')
    }
    return {
      count,
      increment
    }
  }
})
</script>
