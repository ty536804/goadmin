<template>
  <section>
    <footer>
      <section class="footer_con pub" id="fedbook">
          <section class="footer_right">
              <section class="footer_banner_form">
                  <form method="post" action="" name="myform" id="myform">
                      <input type="hidden" name="com" class="c-com" value="">
                      <h3 class="footer_join_tit">免费领取 加盟资料</h3>
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
                          <van-button round block type="info" native-type="submit">
                            提交
                          </van-button>
                      </van-form>
                      <p class="promise">我们承诺您的信息将严格保密请放心填写</p>
                  </form>
              </section>
          </section>
          <section class="footer_left">
              <p class="ico_logo">
                <van-image
                width="146"
                height="57"
                src="http://img.mofashuxue.com/ico_logo.png?imageslim"
                />
              </p>
              <section class="footer_left_con">
                  <section class="footer_right_con">
                      <section class="sqdh">
                          <p class="bottom_con">授权电话</p>
                          <span class="bottom_line"></span>
                      </section>
                      <section class="bottom_phone">
                          <img src="./img/ico_phone.png">
                          <p>400 175 9669</p>
                      </section>
                      <section class="sqdh zbdz">
                          <p class="bottom_con">总部地址</p>
                          <span class="bottom_line"></span>
                      </section>
                      <section class="bottom_address">
                          <img src="./img/ico_address.png" class="lazy" style="">
                          <p>北京市海淀区首体南路22号楼国兴大厦16A</p>
                      </section>
                      <section style="font-size: 12px;transform: scale(0.6);width: 100%;display: inline-block;text-align: center;">
                          投资有风险，加盟需谨慎
                      </section>
                  </section>
              </section>
          </section>
      </section>
    </footer>
  <div class="foot-box">
    <a href="tel:4001759669">免费电话</a>
    <a href="#fedbook" style="background-color: rgb(157, 200, 22)">留言咨询</a>
  </div>
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
    mounted() {
       // 创建53
      const _53code = document.createElement('script')
      _53code.src = 'https://tb.53kf.com/code/code/f254c44bb9e44bf955808e53f506bf9f3/1'
      _53code.language = 'JavaScript'
      document.body.appendChild(_53code)
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
      },
      customerServer() {
      		var _53code = document.createElement('script')
      		_53code.src = 'https://tb.53kf.com/code/code/f254c44bb9e44bf955808e53f506bf9f3/1'
      		var _53s = document.getElementsByTagName('script')[0]
      		_53s.parentNode.insertBefore(_53code, _53s)

      		var cnzz = ((document.location.protocol === 'https:') ? 'https://' : 'http://')
      		document.write(unescape("%3Cspan id='cnzz_stat_icon_1278531036'%3E%3C/span%3E%3Cscript src='" + cnzz + "v1.cnzz.com/z_stat.php%3Fid%3D1278531036%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"))

      		var hm = document.createElement('script')
      		hm.src = 'https://hm.baidu.com/hm.js?febf43d38231ff9679bf5c333f757867'
      		var s = document.getElementsByTagName('script')[0]
      		s.parentNode.insertBefore(hm, s)
      }
    }
  }
</script>

<style scoped>
  footer{
  	background-size:contain;
  	-webkit-background-size: cover;
  	-o-background-size: cover;
  	background: url("./img/bg_black.png") no-repeat top center;
  	-moz-background-size: 100% 100%;
  	background-size: 100% 100%;
  	padding-bottom: 45px !important;
  }
  .footer_con{
  	width: 100%;
  	margin: 0 auto;
  	display: flex;
  	justify-content: space-around;
  }
  .footer_right{
  	width: 100%;
  	justify-content: center;
  }
  .footer_left{
  	margin: 20px auto 23px auto;
  	width: 100%;
  }
  .ico_logo{
  	text-align: center;
  	margin-bottom: 8px;
  }
  .footer_about{
  	flex: 1;
  	flex-flow: column;
  }
  .footer_about dl{
  	width: 135px;
  }
  .footer_about dl dt{
  	width:100%;
  	font-size:16px;
  	font-family:MicrosoftYaHei;
  	color:#fff;
  	height: 28px;
  }
  .bottom_con{
  	text-align: center;
  	line-height:24px;
  	width: 100%;
  	display: inline-block;
  	font-size: 12px;
  }
  .bottom_line{
  	width: 23px;
  	height: 1px;
  	background: #fff;
  	border-radius: 1px;
  	display: block;
  	margin: 0 auto;
  }
  .footer_about dl dd{
  	margin-top: 10px;
  }
  .footer_about dl dd img{
  	width: 135px;
  	height: 135px;
  }
  .gzh{
  	width:100%;
  	display: inline-block;
  	height:24px;
  	font-size:12px;
  	font-family:MicrosoftYaHei;
  	color:#fff;
  	line-height:24px;
  	text-align: center;
  }
  .footer_left_con{
  	color: #fff;
  	display: flex;
  	flex-flow: row;
  	justify-content: space-between;
  }

  .bottom_phone p{
  	height: 25px;
  	font-size: 13px;
  	font-family: MicrosoftYaHei-Bold,MicrosoftYaHei;
  	font-weight: bold;
  	line-height: 25px;
  	display: inline-block;
  }
  .zbdz{
  	margin-top: 6px;
  }
  .bottom_address{
  	margin-top: 5px;
  	height: 25px;
  	display: flex;
  	width: 100%;
  	flex-flow: row;
  	justify-content: center;
  }
  .bottom_address img{
  	width: 16px;
  	height: 16px;
  	margin-right: 5px;
  	display: inline-block;
  	margin-top: 2.5px;
  }
  .bottom_address p{
  	height:25px;
  	font-size:12px;
  	font-family:MicrosoftYaHei;
  	color:rgba(255,255,255,1);
  	line-height:25px;
  	display: inline-block;
  }
  .footer_right_con{
  	width: 100%;
  	text-align: center;
  }

  .copyright{
  	width:100%;
  	height:30px;
  	background:rgba(161,27,18,1);
  	font-size:9px;
  	font-family:PingFangSC-Regular,PingFang SC;
  	font-weight:400;
  	color:rgba(255,255,255,1);
  	text-align: center;
  	line-height:30px;
  	justify-content: center;
  }
  .foot-box{position: fixed;
  	bottom: 0;
  	z-index: 999;
  	height: 50px;
  	line-height:50px;
  	text-align: center;
  	width: 100%;
  }
  .foot-box a{
  	display: inline-block;
  	width: 50%;
  	font-size: 16px;
  	color: #fff;
  	background-color: rgb(247, 171, 0);
  	float: left;
    }
  .form_tit input:focus{
  	outline: none;
  	background: #fff;
  }
  .footer_banner_form{
  	width:91%;
  	height:319px;
  	background:#fff;
  	border-radius: 10px;
  	border: 1px solid #CB161D;
  	background:#fff;
  	margin: 0 auto;
  }
  .van-cell{
  	margin:0 auto 10px auto;
  	background: #FFFFFF;
  	border-radius: 10px;
  	border: 1px solid #CB161D;
    width: 93%;
  }
  .van-button--info {
    width: 93%;
    height: 44px;
    background: linear-gradient(270deg, #CB161D 0%, #FF5D72 100%);
    border-radius: 23px;
    border:none;
    margin: 0 auto;
  }
  .promise{
  	width:100%;
  	height:24px;
  	font-size:12px;
  	font-family:MicrosoftYaHei;
  	color:rgba(102,102,102,1);
  	line-height:19px;
  	text-align: center;
  	margin: 7px auto;
  }
  .footer_join_tit{
  	width:100%;
  	height: 28px;
  	font-size: 20px;
  	font-family: PingFangSC-Semibold, PingFang SC;
  	font-weight: 600;
  	color: #CB161D;
  	line-height: 28px;
    text-align: center;
    margin: 25px auto 9px;
  }
  .form_tit span{
  	width:42px;
  	height:33px;
  	font-size:14px;
  	color: #172D78;
  	font-family:MicrosoftYaHei;
  	line-height:33px;
  	margin: 0 0 6px 19px;
  	display: inline-block;
  }
  .form_tit input{
  	width: 160px;
  	border: none;
  	background: #fff;
  	outline: none;
  }
  .form_tit input:focus{
  	outline: none;
  	border: none;
  	background: #fff;
  }
  .sqdh{
  	width: 100%;
  	height: 28px;
  }
  .bottom_phone{
  	height: 25px;
  	display: flex;
  	width: 100%;
  	flex-flow: row;
  	justify-content: center;
  }
  .bottom_phone img{
  	width: 17px;
  	height: 17px;
  	margin-right: 5px;
  	display: inline-block;
  	margin-top: 2.5px;
  }

  .bottom_phone p{
  	height: 25px;
  	font-size: 18px;
  	font-family: MicrosoftYaHei-Bold,MicrosoftYaHei;
  	font-weight: bold;
  	line-height: 25px;
  	display: inline-block;
  }

  .button {
  	width: 1000px;
  	margin: 0 auto;
  	bottom: 43px;
  	position: relative;
  }



  .subBtn {
  	width: 100%;
  	height: 33px;
  	display: flex;
  	justify-content: center;
  }
</style>
