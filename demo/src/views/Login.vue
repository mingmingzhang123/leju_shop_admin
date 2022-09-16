<template>
  <div class="box">
    <h1>Login Form</h1>
    <p>
      <el-input
        placeholder="请输入用户名"
        v-model="form.name"
        prefix-icon="el-icon-user-solid"
        style="width: 300px"
      >
      </el-input>
    </p>
    <p>
      <el-input
        placeholder="请输入密码"
        v-model="form.password"
        prefix-icon="el-icon-goods"
        suffix-icon="el-icon-more"
        style="width: 300px"
      >
      </el-input>
    </p>
    <el-button type="primary" style="width: 300px" @click="gotoHomepage"
      >login</el-button
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 表单
      form: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    // 登录
    gotoHomepage() {
      if (this.form.name == "admin" || this.form.password == "123456") {
        localStorage.setItem("token",this.form)
        this.$router.push("/");
      } else {
        alert("请输入正确的账号");
      }
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