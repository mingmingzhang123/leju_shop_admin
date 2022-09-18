<template>
  <div class="box">
    <h1>Login Form</h1>
    <p>
      <el-input
        placeholder="请输入用户名"
        v-model="form.username"
        prefix-icon="el-icon-user-solid"
        style="width: 300px"
      >
      </el-input>
    </p>
    <p>
      <el-input
        placeholder="请输入密码"
        show-password
        v-model="form.password"
        prefix-icon="el-icon-goods"
        style="width: 300px"
      >
      </el-input>
    </p>
    <el-button type="primary" style="width: 300px" @click="gotoHomepage"
      >login</el-button
    >
    <p>username:admin  password:123456</p>
  </div>
</template>
<script>
import {login} from "../utils/api"
export default {
  data() {
    return {
      // 表单
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    // 登录
    gotoHomepage() {
      login(this.form).then(res=>{
        sessionStorage.setItem('token',res.data.data.token)
        this.$router.push('/')
        console.log(res);
      })
      
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100vh;
  background-color: #2d3a4b;
  color: #fff;
  text-align: center;
  padding-top: 200px;

  p {
    margin: 20px;
  }
  ::v-deep .el-input__inner {
    background-color: #2d3a4b;
  }
}
</style>