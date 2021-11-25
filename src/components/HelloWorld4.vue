<template>
  <p>Count is: {{ count }}</p>
  <button @click="increment()">+</button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const count = ref<number>(0)
    const increment = () => {
      count.value++
    }
    return {
      count,
      increment
    }
  }
})
</script>
