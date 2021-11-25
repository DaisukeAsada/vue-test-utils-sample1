<template>
  <h1>Vue Test Utilsの使い方</h1>
  <user-list></user-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import UserList from '@/components/UserList.vue'

export default defineComponent({
  components: {
    UserList
  }
})
</script>
