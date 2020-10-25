<template>
  <div id="personalCenter">
    <el-row class="tac" :gutter="20">
      <el-col :span="5" id="leftNav">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          open="2"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="1">
            <i class="el-icon-s-custom"></i>
            <span slot="title"><router-link to="/PersonalCenter/UserInfo">个人信息</router-link></span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>我的订单</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1"><router-link to="/PersonalCenter/AllOrders">所有订单</router-link></el-menu-item>
              <el-menu-item index="1-2"><router-link to="/PersonalCenter/ToBePaid">待支付</router-link></el-menu-item>
              <el-menu-item index="1-3"><router-link to="/PersonalCenter/PaymentSuccessful">已支付</router-link></el-menu-item>
              <el-menu-item index="1-4"><router-link to="/PersonalCenter/PaymentFailed">支付失败</router-link></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="15" id="content">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'PersonalCenter',
  data () {
    return {
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  #personalCenter{
    background-color: rgb(242,242,242);
  }
  #leftNav,#content{
    margin-top: 8%;
    margin-bottom: 5%;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
</style>
