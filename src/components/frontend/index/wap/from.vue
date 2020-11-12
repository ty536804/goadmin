<template>
  <section class="wap_banner_form">
    <h3 class="btit">了解更多布罗卡斯智能英语资讯 请填写表单</h3>
    <p class="bdesc">稍后我们的客服专员将会致电于您</p>
    <van-form @submit="onSub">
      <van-field
        v-model="mname"
        name="姓名"
        placeholder="姓名"
      />
      <van-field
        v-model="tel"
        name="电话"
        placeholder="电话"
      />
      <van-field
        v-model="area"
        name="地区"
        placeholder="地区"
      />
      <div style="margin: 10px 0 0 0;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        mname:'',
        tel:'',
        area:''
      }
    },
    methods: {
      async onSub() {
          if (this.mname=="") {
              return this.$message.error("姓名不能为空")
          }
          if (this.tel=="") {
              return this.$message.error("电话不能为空")
          }
          if (this.tel.length < 6) {
              return this.$message.error("请填写有效的电话号码")
          }
          if (this.area=="") {
              return this.$message.error("区域不能为空")
          }
          var param = {
            mname:this.mname,
            area:this.area,
            tel:this.tel
          }
          const { data: res } = await this.$http.post("AddMessage",this.$qs.stringify(param))
          if (res.code === 200) {
            return this.$message.success(res.msg)
          }
          return this.$message.error(res.msg)
        }
      }
  }
</script>

<style scoped>
  .wap_banner_form{
    width:91%;
    height: 361px;
    background: linear-gradient(270deg, #FF2837 0%, #CB161D 100%);
    box-shadow: 0px 10px 15px 0px #FFD0D0;
    border-radius: 10px;
    padding: 0 15px !important;
    margin: -15px auto 0;
    box-sizing: border-box;
    position: relative;
  }
  .btit{
    width: 100%;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 25px;
    padding: 25px 15px 10px 15px !important;
  }
  .bdesc{
    width: 100%;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 20px;
    padding: 0 15px 10px 15px!important;
  }
  .van-cell{
    border-radius: 5px;
    margin-top: 10px;
  }
  .van-button--info{
    width: 100%;
    height: 44px;
    border-radius: 22px;
    border: 1px solid #FFFFFF;
    background: linear-gradient(270deg, #FF2837 0%, #CB161D 100%);
  }
</style>
