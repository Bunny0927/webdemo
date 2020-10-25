<template>
  <div id="header">
    <!-- header部分开始 -->
    <div class="header">
      <div class="header_c inner_c">
        <h1 class="logo">
          青竹商城
        </h1>
        <dl class = "allType">
          <dt><a href="#">查看所有类型</a></dt>
          <dd>
            <div class = "dd_inn">
              <ul class = "dd_cont">
                <li><a href="#">不锈钢</a></li>
                <li><a href="#">原料水泥</a></li>
                <li><a href="#">塑料</a></li>
                <li><a href="#">木质</a></li>
                <li><a href="#">陶瓷</a></li>
              </ul>
              <ul class="pro">
                <li>
                  <a href="#">
                    <div class="pic">
                      <img src="@/assets/images/img25.png" alt="">
                    </div>
                    <div class="content">
                      <h3>简约木质餐盘</h3>
                      <span>￥200</span>
                    </div>
                  </a>
                  <div class="mask">
                    <a href="#" class = "btn">查看详情</a>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <div class="pic">
                      <img src="@/assets/images/img26.png" alt="">
                    </div>
                    <div class="content">
                      <h3>简约木质餐盘</h3>
                      <span>￥200</span>
                    </div>
                  </a>
                  <div class="mask">
                    <a href="#" class = "btn">查看详情</a>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <div class="pic">
                      <img src="@/assets/images/img27.png" alt="">
                    </div>
                    <div class="content">
                      <h3>简约木质餐盘</h3>
                      <span>￥200</span>
                    </div>
                  </a>
                  <div class="mask">
                    <a href="#" class = "btn">查看详情</a>
                  </div>
                </li>
              </ul>
            </div>
          </dd>
        </dl>
        <ul class="nav">
          <li><router-link to="/Index">首页</router-link></li>
          <li><router-link to="/AllProducts">所有产品</router-link></li>
          <li><router-link to="/PersonalCenter">个人中心</router-link></li>
        </ul>
        <div class="reg">
          <div class="ico">
            <span class = "ico_c"></span>
            <div class="settle">
              <p class="con">0件商品 共计：<span>￥0</span></p>
              <router-link to="ShoppingCart" class="btn">结算</router-link>
            </div>
            <span class = "con">0</span>
          </div>
          <div class = "reg_c">
            <router-link to="/Login">登陆</router-link>
            <span>&nbsp;|&nbsp;</span>
            <router-link to="/Register">注册</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- header部分结束 -->

    <!-- 返回顶部 -->
    <div class="lingpin_top">
      <a href="#" class = "qq">QQ<br/>客服</a>
      <a href="#" class = "wx">微信<br/>客服</a>
      <a href="#" class = "top_c">↑</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style scoped>
  @import "../../../src/assets/css/reset.css";
  @import "../../../src/assets/css/common.css";
  .lingpin_top{
    z-index: 9999;
  }
</style>
