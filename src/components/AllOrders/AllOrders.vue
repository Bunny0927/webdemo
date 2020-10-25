<template>
<div id="allOrders">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>所有订单</span>
      <el-button style="float: right; padding: 5px 5px" type="primary"><i class="el-icon-edit"></i>修改</el-button>
    </div>
    <el-row class="tac" :gutter="20">
    </el-row>
  </el-card>
</div>
</template>

<script>
export default {
  name: 'AllOrders'
}
</script>

<style scoped>
</style>
