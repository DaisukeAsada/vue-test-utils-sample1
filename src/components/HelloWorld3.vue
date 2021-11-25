<template>
  <nav>
    <a href="/profile" id="profile">My Profile</a>
    <a href="/admin" id="admin" v-show="admin"></a>
  </nav>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    admin: {
      type: Boolean,
      default: false
    }
  }
})
</script>
