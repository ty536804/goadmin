<template>
  <section>
    <van-loading v-if="isShow" type="spinner"/></van-loading>
    <section v-if="!isShow">
      <Header></Header>
      <Banner :bannerData="bannerData"></Banner>
      <News></News>
      <Footer></Footer>
    </section>
  </section>
</template>

<script>
  import Header from '@/components/frontend/layout/header.vue' //导航
  import Banner from '@/components/frontend/layout/banner.vue' // banner
  import News from '@/components/frontend/press/news.vue' //
  import Footer from '@/components/frontend/layout/footer.vue' //底部

  export default {
    components:{
      Header,
      Banner,
      News,
      Footer
    },
    data() {
      return {
        bannerData:[],
        isShow:true
      }
    },
    created() {
        this.getNews()
    },
    methods: {
      async getNews () {
          const { data: res } = await this.$http.get("/newList")
          if (res.code === 200) {
            this.isShow = false
            this.bannerData = res.data.banner
          }
      },
    }
  }
</script>

<style scoped>
  .van-loading__spinner{
    left: 50%;
    margin-top: 20%;
    text-align: center;
  }
</style>
