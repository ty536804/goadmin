<template>
  <section class="pub brocae_warp">
      <!--了解更多布罗卡斯智能英语资讯 请填写表单-->
      <section class="header_more_form">
          <section class="mfl">
              <h3>了解更多布罗卡斯智能英语资讯 请填写表单</h3>
              <p>稍后我们的客服专员将会致电于您</p>
          </section>
          <section class="mfr">
            <input placeholder="姓名" name="mname" class="c-area" v-model="mname">
            <input placeholder="电话" name="tel" class="c-tel" v-model="tel">
            <input placeholder="地区" name="area" class="c-city" v-model="area">
            <p>
                <button class="headBtn" @click="onSub">提交</button>
            </p>
          </section>
      </section>
      <section class="brocae_con">
          <h3>布罗卡斯智能英语 孩子信赖 妈妈优选</h3>
          <ul class="brocea_li">
              <li>布罗卡斯智能英语在中国100+座城市发展300+家校区，每年都有超过数10万+名儿童在此学习，</li>
              <li>通过人机互教陪伴孩子快乐地学习英语、轻松提分，并快速提升孩子综合英语能力， </li>
              <li>受到广大家长和学员的一致好评，已然成为中国精英家庭英语学习的优选。</li>
          </ul>
          <section class="broca_dl">
              <dl>
                  <dt><strong>300</strong>家校区</dt>
                  <dd class="show_img"><img src="./img/ico_education@2x.png"></dd>
              </dl>
              <dl>
                  <dt><strong>100</strong>+个城市</dt>
                  <dd class="show_img"><img src="./img/ico_city@2x.png"></dd>
              </dl>
              <dl>
                  <dt><strong>10</strong>万+名儿童</dt>
                  <dd class="show_img"> <img src="./img/ico_education.png"></dd>
              </dl>
          </section>
      </section>
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
      }
    }
  }
</script>

<style scoped>
  @import url("./css/form.css");
</style>
