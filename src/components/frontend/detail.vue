<template>
  <div>
      <Header></Header>
      <section class="detail">
          <h1 class="detail_tit">{{title}}</h1>
          <p class="detail_date">{{detail_date}}</p>
          <p class="detail_line"></p>
          <section class="detail_con" v-html="detail_con"></section>
      </section>
      <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/frontend/layout/header.vue' // header
  import Footer from '@/components/frontend/layout/footer.vue' //底部
  export default {
    components:{
      Header,
      Footer
    },
    data() {
      return {
        title:'',
        detail_date:'',
        detail_con:''
      }
    },
    created() {
      if (this.$route.query.id !== undefined) {
        this.getDetail(this.$route.query.id)
      } else {
        return this.$router.push('/press');
      }
    },
    methods: {
      async getDetail(id) {
        const { data: res } = await this.$http.get("/newDetail?id="+id)
        if (res.code === 200) {
          this.title = res.data.detail.title
          var detail = res.data.detail.created_at
          this.detail_date = detail.substring(0,10)
          this.detail_con = res.data.detail.content
        }
      }
    }
  }
</script>

<style scoped>
  .detail_head {
      background: #fff;
  }
  body {
      background: #F0F2F5;
  }
  .detail{
      width: 1200px;
      margin:0 auto;
  }
  .detail_tit{
      width:100%;
      height:31px;
      font-size:24px;
      font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
      font-weight:bold;
      color:rgba(51,51,51,1);
      line-height:31px;
      margin-bottom:10px;
      margin-top:30px;
  }
  .detail_date{
      width:100%;
      height:21px;
      font-size:16px;
      font-family:MicrosoftYaHei;
      color:rgba(51,51,51,1);
      line-height:21px;
  }
  .detail_line{
      width:100%;
      text-align:left;
      height:1px;
      background:rgba(223,225,229,1);
      margin-top: 20px;
      margin-bottom: 30px;
  }
  .detail_con img{
      max-width: 1200px;
  }
</style>
