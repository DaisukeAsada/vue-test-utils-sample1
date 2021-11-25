<template>
  <h2>ユーザ一覧</h2>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  setup () {
    const users = ref([])
    onMounted(() => {
      axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        users.value = response.data
      })
    })
    return {
      users
    }
  }
})
</script>
