<template>
  <div class="login" :style="{backgroundImage:'url('+require('../../assets/images/background.png')+')'}">
    <div class="main">
      <h2>登录</h2>
      <form>
        <!-- 用户名 type属性值是text指的是文本框-->
        <input type="text" placeholder="手机/邮箱/用户名" class = "in1" >
        <!-- 密码 type属性值是password指的是密码框-->
        <input type="password" placeholder="登录密码">
        <!-- 注册和忘记密码 -->
        <p>
          <router-link to="/Register" class = "l">
            注册
          </router-link>
          <router-link to="/Register" class = "r">
            忘记密码
          </router-link>
        </p>
        <!-- input的type值如果是button，指的是按钮 -->
        <input type="button" value = "登陆" class = "btn_d" @click="login()">
        <input type="button" value = "用短信登陆" class = "btn_p">
      </form>
      <div class = "acc">
        <h3>社交账号登录</h3>
        <p>
          <a href="#" class = "a1"></a>
          <a href="#" class = "a2"></a>
          <a href="#" class = "a3"></a>
          <a href="#" class = "a4"></a>
          <a href="#" class = "a5"></a>
          <a href="#" class = "a6"></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login () {
      // 输入合法性检测
      this.$router.push('/Index')
    }
  }
}
</script>

<style scoped>
  @import "../../../src/assets/css/reset.css";
  @import "../../../src/assets/css/common.css";
  @import "../../../src/assets/css/login.css";
  .login{
    background-size: 100% 100%;
  }
</style>
