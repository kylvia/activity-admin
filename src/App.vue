<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { getUserInfo } from '@/api/about'
export default {
  created () {
    getUserInfo().then(res => {
      this.user = res.body.name
    })
  }
}
</script>
