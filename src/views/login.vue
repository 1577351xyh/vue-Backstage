<template>
  <div class="row">
    <el-form :model="form">
      <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>
import http from '../api/http'

export default {
  data() {
    return {
      form: {
        email: '564146958@qq.com',
        password: '123446'
      }
    }
  },
  methods: {
    login() {
      this.loginAsiox()
    },
    async loginAsiox() {
      let res = await http.login(this.form)
      if(res.data.code===200){
          this.$notify({
          title: '登录成功',
          type: 'success'
        });
        setTimeout(()=>{
          this.$router.push('/home')
        },100)
      }
    }
  }
}
</script>
<style scope>
.row {
  max-width: 30%;
  height: 50%;
  margin: auto;
}
</style>
