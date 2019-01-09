<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>hello {{user}}}!!</div>
    <input v-validate="'required|email'" name="email" type="text"><span>{{ errorBags.first('email') }}</span><br>
    <el-form :model="formdata" label-width="80px" class="form">
      <el-form-item label="参数一">
        <el-input v-model="formdata.param1"></el-input>
      </el-form-item>
      <el-form-item label="参数二">
        <el-input v-model="formdata.param2"></el-input>
      </el-form-item>
      <el-form-item label="参数二">
        <el-button @click="onsubmit()">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { getUserInfo, sentForm } from '@/api/about'
export default {
  data () {
    return {
      user: '',
      formdata: {
        param1: 1,
        param2: 2
      }
    }
  },
  created () {
    getUserInfo().then(res => {
      this.user = res.body.name
    })
  },
  methods: {
    onsubmit () {
      sentForm(this.formdata).then(res => {
        console.log(res.body)
      })
    }
  }
}
</script>
<style scoped lang="less">
 .el-form{
   width: 300px;
 }
</style>
