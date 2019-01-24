<template>
    <div class="dashbord-container">
      <div class="dashbord-text">name: {{name}}}</div>
      <div class="dashbord-text">roles: <span v-for="role in roles" :key="role">{{role}}</span></div>
      <!--<button class="breathe-btn"></button>-->
      <div><img class="breathe-img" src="../../assets/logo.png" alt=""></div>
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

<style scoped rel="stylesheet/less" lang="less">
  .animation( @name, @duration, @timing, @delay, @count ) {
    animation: @name @duration @timing @delay @count;
    -webkit-animation: @name @duration @timing @delay @count;
  }

  @keyframes breath {
    0% {
      opacity: .5;
      transform: scale(1);
      -webkit-transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.5);
      -webkit-transform: scale(1.5);
    }
    100% {
      opacity: .5;
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }

  @-webkit-keyframes breath {
    0% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
    50% {
      transform: scale(1.5);
      -webkit-transform: scale(1.5);
    }
    100% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
  .breathe-img{
    width: 50px;
    height: 50px;
    .animation(breath, 2s, linear, 0s, infinite);
  }
</style>
