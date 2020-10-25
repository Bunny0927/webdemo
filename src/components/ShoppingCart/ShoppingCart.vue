<template>
  <div id="shoppingCart">
    <div class="outer9">
      <div class="inter1">
        <h1>购物车</h1>
      </div>
      <div class="inter2">
        <div class="inter21">
          <input type="checkbox" class="checkAll"><span class="s1">全选</span>
          <span class="s2">商品名称</span><span class="s3">单价</span>
          <span class="count">数量</span><span class="total">小计</span><span class="del">操作</span>
        </div>
        <div class="inter22">
          <ul>
            <li v-for="item in itemList" :key="item.pd_name">
              <input type="checkbox" class="check"><img :src=item.pd_src alt="">
              <span class="s1">{{item.pd_name}}</span><span class="money">¥</span>
              <span class="price">{{item.pd_price}}</span><input type="button" value="-" class="sub">
              <span class="count">{{item.pd_count}}</span><input type="button" value="+" class="add">
              <span class="money1">¥</span><span class="total">{{item.pd_total}}</span>
              <span class="del">删除</span>
            </li>
<!--            <li>-->
<!--              <input type="checkbox" class="check"><img src="@/assets/images/s2.png" alt="">-->
<!--              <span class="s1">便携简约清扫扫帚</span><span class="money">¥</span>-->
<!--              <span class="price">580</span><input type="button" value="-" class="sub">-->
<!--              <span class="count">1</span><input type="button" value="+" class="add">-->
<!--              <span class="money1">¥</span><span class="total">580</span>-->
<!--              <span class="del">删除</span>-->
<!--            </li>-->
<!--            <li>-->
<!--              <input type="checkbox" class="check"><img src="@/assets/images/s3.png" alt="">-->
<!--              <span class="s1">黑色陶瓷研磨器皿</span> <span class="money">¥</span>-->
<!--              <span class="price">150</span><input type="button" value="-" class="sub">-->
<!--              <span class="count">1</span><input type="button" value="+" class="add">-->
<!--              <span class="money1">¥</span><span class="total">150</span>-->
<!--              <span class="del">删除</span>-->
<!--            </li>-->
          </ul>
        </div>
        <div class="inter23">
          <div class="picture">
            <img src="@/assets/images/购物车.png" alt="">
          </div>
          <p>您的购物车还没有商品，快去挑选心爱的商品吧！</p>
          <a href=""><span>去逛逛</span></a>
        </div>
      </div>
      <div class="inter3">
        <div class="inter31">
          <div class="last">
            <a href="./青竹登录.html">确认结算</a>
          </div>
          <input type="checkbox" class="checkAll"><span class="s1">全选</span>
          <span class="ss1">删除</span><span class="ss2">清除下架商品</span>
          <div class="foot">
            已选<span class="totalCount">0</span>件
            合计(不含运费) : <span class="totalPrice">¥0</span>元<br>
            <span class="ss3">已优惠 : <span class="ss4"> ¥0</span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data () {
    return {
      itemList: [
        {pd_src: require('@/assets/images/s1.png'), pd_name: '经典系列红色时钟', pd_price: 580, pd_count: 1, pd_total: 580},
        {pd_src: require('@/assets/images/s2.png'), pd_name: '便携简约清扫扫帚', pd_price: 580, pd_count: 1, pd_total: 580},
        {pd_src: require('@/assets/images/s3.png'), pd_name: '黑色陶瓷研磨器皿', pd_price: 150, pd_count: 1, pd_total: 150}
      ]
    }
  }
}
</script>

<style scoped>
  @import "../../../src/assets/css/shoppingCart.css";
  @import "../../../src/assets/css/reset.css";
</style>
