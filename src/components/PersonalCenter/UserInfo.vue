<template>
  <div id="userInfo">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人信息</span>
        <el-button style="float: right; padding: 5px 5px" type="primary" @click="dialogFormVisible = true"><i class="el-icon-edit"></i>修改</el-button>
      </div>
      <el-row class="tac" :gutter="20">
        <el-col :span="8" style="padding: 2%;text-align: center">
          <el-avatar :size="70"> user </el-avatar>

          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <el-button type="text" style="display: block;margin: 0 auto;">修改头像</el-button>
          </el-upload>
        </el-col>
        <el-col :span="16" style="border-left: rgb(235,238,245) 1px solid;padding-left: 10%">
          <div class="text item">用户名：<span>{{user_name}}</span></div>
          <div class="text item">手机号：<span>{{user_account}}</span></div>
          <div class="text item">密码：<span>{{user_password}}</span></div>
          <div class="text item">用户权限：<span>{{user_right}}</span></div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row>
        <div>收货地址</div>
        <div v-show="addressList.length === 0" class="empty-table" style="text-align: center">
          <i class="el-icon-map-location" style="color: #999999;font-size: 100px"></i>
          <p style="color: #999999">您还没有添加收货地址</p>
          <el-button @click="dialogFormVisible2 = true"><span>+新增收货地址</span></el-button>
        </div>
        <div v-show="addressList.length > 0">
          <ul>
            <li v-for="(item,key) in addressList" :key="key" style="margin-top: 10px;list-style-type:none;">
              {{key+1}}     {{item.name}}(收) {{item.phone}} {{item.address}}
            </li>
          </ul>
        </div>
      </el-row>
    </el-card>

<!--    弹出表单-->
<!--    修改个人信息-->
    <el-dialog title="修改个人信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="账号名" :label-width="formLabelWidth">
          <el-input v-model="form.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeUserInfo">确 定</el-button>
      </div>
    </el-dialog>

<!--    添加地址-->
    <el-dialog title="添加收货地址" :visible.sync="dialogFormVisible2">
      <el-form :model="form">
        <el-form-item label="详细地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off" style="width: 80%;"></el-input>
        </el-form-item>
        <el-form-item label="联系人名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off" style="width: 80%"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="AddAddressInfo">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      user_name: 'yaoyao',
      user_account: '178****9623',
      user_password: '***********',
      user_right: '普通用户',
      imageUrl: '',
      addressList: [
        // {address: '浙江理工大学', name: 'yaoyao', phone: '17816119623'},
        // {address: '浙江理工大学', name: 'yaoyao', phone: '17816119623'},
        // {address: '浙江理工大学', name: 'yaoyao', phone: '17816119623'},
        // {address: '浙江理工大学', name: 'yaoyao', phone: '17816119623'}
      ],
      dialogFormVisible: false,
      dialogFormVisible2: false,
      form: {
        name: '',
        account: '',
        password: '',
        rpassword: ''
      },
      form2: {
        address: '',
        name: '',
        phone: ''
      },
      formLabelWidth: '80px'
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    changeUserInfo () {
      if (true) {
        this.user_name = this.form.name
        this.user_account = this.form.account
        this.user_password = this.form.password
      } else {
        // 提示错误信息
      }
      this.dialogFormVisible = false
    },
    AddAddressInfo () {
      // 存入数据库，并显示在页面上
      this.dialogFormVisible2 = false
    }
  }
}
</script>

<style scoped>
  #userInfo{
    /*margin-top: 10%;*/
  }
  #userInfo .item{
    margin: 15px auto;
  }
  /*.el-divider-vertical {*/
  /*  display: inline-block;*/
  /*  width: 1px;*/
  /*  height: 55em;*/
  /*  margin: 0 8px;*/
  /*  vertical-align: middle;*/
  /*  position: relative;*/
  /*}*/
</style>
