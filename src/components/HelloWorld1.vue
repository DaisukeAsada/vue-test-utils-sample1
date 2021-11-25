<template>
    <div class="hello">Hello {{ msg }}</div>
    <div>{{ upperCaseUserName }}</div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue'

export default defineComponent({
  props: {
    msg: {
      type: String
    }
  },
  setup () {
    const count = ref<number>(3)
    const user = reactive({
      name: 'John'
    })

    const upperCaseUserName = computed(() => {
      return user.name.toUpperCase()
    })

    return {
      count,
      user,
      upperCaseUserName
    }
  }
})
</script>
