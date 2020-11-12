<template>
  <section class="footer_warp">
      <footer>
          <section class="footer_con pub">
              <section class="footer_left">
                  <p class="ico_logo"><img src="./img/ico_logo.png" class="lazy" style=""></p>
                  <section class="footer_left_con">
                      <section class="footer_about">
                          <dl>
                              <dt>
                                  <p class="bottom_con">关于我们</p>
                                  <span class="bottom_line"></span>
                              </dt>
                              <dd>
                                  <img src="http://img.mofashuxue.com/pic_code.png?imageslim">
                                  <span class="gzh">布罗卡斯英语公众号</span>
                              </dd>
                          </dl>
                      </section>
                      <section class="footer_right_con">
                          <section class="sqdh">
                              <p class="bottom_con">授权电话</p>
                              <span class="bottom_line"></span>
                          </section>
                          <section class="bottom_phone">
                              <img  src="./img/ico_phone.png">
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
                      </section>
                  </section>
              </section>
              <section class="footer_right">
                  <section class="banner_form">
                      <form method="post" action="#" name="myform" class="footer_con_right" id="myform">
                          <input type="hidden" name="com" class="c-com">
                          <h3 class="join_tit">填写表单</h3>
                          <section class="form_tit">
                              <span>姓名：</span>
                              <input type="text" placeholder="" name="mname" class="c-area" v-model="mname">
                          </section>
                          <section class="form_tit">
                              <span>电话：</span>
                              <input type="text" placeholder="" name="tel" class="c-tel" v-model="tel">
                          </section>
                          <section class="form_tit">
                              <span>地区：</span>
                              <input type="text" placeholder="" name="area" class="c-city" v-model="area">
                          </section>
                          <a class="bottom_submit btn" @click="onSub">提交</a>
                      </form>
                  </section>
              </section>
          </section>
          <section class="copyright pub">北京易乐教育科技有限公司 © 2017 All Rights Reserved. 京ICP备20014303号（投资有风险，加盟需谨慎）</section>
      </footer>
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
    methods:{
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
      		// const _53code = document.createElement('script')
      		// _53code.src = 'https://tb.53kf.com/code/code/f254c44bb9e44bf955808e53f506bf9f3/1'
      		// const _53s = document.getElementsByTagName('script')[0]
      		// _53s.parentNode.insertBefore(_53code, _53s)

      		const cnzz = ((document.location.protocol === 'https:') ? 'https://' : 'http://')
      		document.write(unescape("%3Cspan id='cnzz_stat_icon_1278531036'%3E%3C/span%3E%3Cscript src='" + cnzz + "v1.cnzz.com/z_stat.php%3Fid%3D1278531036%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"))

      		const hm = document.createElement('script')
      		hm.src = 'https://hm.baidu.com/hm.js?febf43d38231ff9679bf5c333f757867'
      		const s = document.getElementsByTagName('script')[0]
      		s.parentNode.insertBefore(hm, s)
      }
    }
  }
</script>

<style scoped>
  .footer_right .join_tit{
    color: #333 !important;
    display: inline-block;
    font-size: 36px;
  }
  .ico_logo{
    text-align: center;
    margin-bottom: 15px;
  }
  .ico_logo img{
    width: 292px;
    height: 102px;
  }
  .sqdh{
    width: 100%;
    height: 28px;
  }
  .footer_right_con{
    margin-left: 37px;
    width: 350px;
  }
  .footer_right{
    margin-top: -30px;
  }
  .bottom_line{
    width:32px;
    height:2px;
    background:#fff;
    border-radius:1px;
    float: left;
    display: inline-block;
    margin-top: 1px;
  }
  .bottom_phone img{
    width: 33px;
    height: 33px;
    float: left;
    margin-right: 10px;
  }
  .bottom_phone p{
    width:100%;
    text-align: left;
    height:37px;
    font-size:28px;
    font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
    font-weight:bold;
    line-height:37px;
  }
  .bottom_address img{
    width: 31px;
    height: 32px;
    float: left;
    margin-right: 10px;
  }
  .bottom_address p{
      width:100%;
    text-align: left;
    height:30px;
    font-size:16px;
    font-family:MicrosoftYaHei;
    color:rgba(255,255,255,1);
    line-height:30px;
  }
</style>
