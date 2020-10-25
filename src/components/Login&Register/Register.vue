<template>
  <div class="login" :style="{backgroundImage:'url('+require('../../assets/images/background.png')+')'}">
    <div class="main">
      <h2>注册</h2>
      <form>
        <!-- 用户名 type属性值是text指的是文本框-->
        <input type="text" placeholder="手机/邮箱/用户名" class = "in1" >
        <!-- 密码 type属性值是password指的是密码框-->
        <input type="password" placeholder="设置密码">
        <input type="password" placeholder="确认密码">
        <!-- 注册和忘记密码 -->
        <p class = "zc">
          已有账号？请
          <router-link to="/Login" class = "l">
            直接登录
          </router-link>
        </p>
        <!-- input的type值如果是button，指的是按钮 -->
        <input type="button" value = "注册" class = "btn_d">
        <input type="button" value = "用短信验证码注册" class = "btn_p">
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
  name: 'Register'
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
