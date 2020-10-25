<template>
  <div id="createOrder">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size: larger">提交订单</span>
      </div>
      <el-row class="tac" :gutter="20">
        <div class="titleTip"><i class="el-icon-location-information"></i> 收货地址 </div>
        <el-form :model="form" style="margin-top: 30px">
          <el-form-item label="详细地址" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off" style="width: 80%;"></el-input>
          </el-form-item>
          <el-form-item label="联系人名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" style="width: 30%"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off" style="width: 30%"></el-input>
          </el-form-item>
        </el-form>
        <el-divider></el-divider>
        <div>
          <div class="titleTip"><i class="el-icon-shopping-bag-1"></i> 确认商品信息 </div>

          <el-table
            :data="itemList"
            style="width: 100%">
            <el-table-column label="商品图片">
              <template slot-scope="scope">
                <el-popover placement="top-start" title="" trigger="hover">
                  <img :src="scope.row.pd_src" alt="" style="width: 150px;height: 150px">
                  <img slot="reference" :src="scope.row.pd_src" style="width: 30px;height: 30px">
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column prop="pd_name" label="商品名称"></el-table-column>
            <el-table-column prop="pd_price" label="单价"></el-table-column>
            <el-table-column label="数量">
              <template slot-scope="scope">
                <el-button size="mini">&nbsp;-&nbsp;</el-button>&nbsp;&nbsp;{{scope.row.pd_count}}<el-button size="mini">+</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="pd_total" label="小计"></el-table-column>
          </el-table>
          <div id="totalDiv">共计<span class="totalTip" v-text="totalCount"></span>件商品       总价：￥<span class="totalTip" v-text="totalPrice"></span></div>
        </div>
        <div id="footerBtns">
          <el-button>返回</el-button>
          <el-button id="submit" type="primary" @click="submitOrder">提交订单</el-button>
        </div>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'CreateOrder',
  data () {
    return {
      form: {
        address: '',
        name: '',
        phone: ''
      },
      formLabelWidth: '80px',
      itemList: [
        {pd_src: require('@/assets/images/s1.png'), pd_name: '经典系列红色时钟', pd_price: 580, pd_count: 1, pd_total: 580},
        {pd_src: require('@/assets/images/s2.png'), pd_name: '便携简约清扫扫帚', pd_price: 580, pd_count: 1, pd_total: 580},
        {pd_src: require('@/assets/images/s3.png'), pd_name: '黑色陶瓷研磨器皿', pd_price: 150, pd_count: 1, pd_total: 150}
      ],
      totalCount: 3,
      totalPrice: 1310
    }
  },
  methods: {
    submitOrder () {
      this.$confirm('是否支付订单', '提交订单成功！', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '支付成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消支付'
        })
      })
    }
  }
}
</script>

<style scoped>
  #createOrder .el-card{
    margin: 8% 10% 5% 10%;
  }
  .titleTip{
    font-size: large;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  #address{
    margin: 10px auto;
  }
  #totalDiv{
    text-align: right;
    position: relative;
    padding: 5px;
    top: 10px;
    right: 20px;
    width: 100%;
    /*background-color: #FAF8F8;*/
  }
  .totalTip{
    font-weight: bold;
    color: #1F1F1F;
  }
  #footerBtns{
    float: right;
    margin-top: 20px;
  }
</style>
