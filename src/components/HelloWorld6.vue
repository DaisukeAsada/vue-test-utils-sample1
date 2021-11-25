<template>
  <form @submit.prevent="submitForm">
    <input type="text" v-model="name">
    <button type="submit">Submit</button>
  </form>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup (props, context) {
    const name = ref<string>('')
    const submitForm = () => {
      context.emit('submitted', { name: name.value })
    }
    return {
      name,
      submitForm
    }
  }
})
</script>
