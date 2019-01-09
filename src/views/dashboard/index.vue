<template>
    <div class="dashbord-container">
      <div class="dashbord-text">name: {{name}}}</div>
      <div class="dashbord-text">roles: <span v-for="role in roles" :key="role">{{role}}</span></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style scoped>

</style>
