<template>
<div>
    <Header></Header>
    <Banner :bannerData="bannerData"></Banner>
    <Learn :learnImg="learnImg"></Learn>
    <Brocae></Brocae>
    <All></All>
    <Footer></Footer>
</div>
</template>

<script>
  import Header from '@/components/frontend/layout/header.vue' //导航
  import Banner from '@/components/frontend/layout/banner.vue' // banner
  import Learn from '@/components/frontend/learn/learn.vue' //
  import Brocae from '@/components/frontend/national/brocae.vue' //
  import All from '@/components/frontend/national/all.vue' //
  import Footer from '@/components/frontend/layout/footer.vue' //底部
  
  export default {
    components:{
      Header,
      Banner,
      Learn,
      Brocae,
      All,
      Footer
    },
    data () {
      return {
        isShow:false,
        bannerData:[],
        learnImg:''
      }
    },
    created() {
      this.getNational()
    },
    methods: {
      async getNational () {
        var subjectData = null;//sessionStorage.getItem("nationalData")
        if (subjectData == null) {
          const { data: res } = await this.$http.get("/nationalData")
          if (res.code === 200) {
            sessionStorage.setItem("nationalData",JSON.stringify(res.data))
            this.bannerData = res.data.banner
            this.learnImg = res.data.bird[0]['imgurl']
            this.isShow = true
          }
        } else {
          var res = JSON.parse(subjectData)
          this.bannerData = res.banner
          this.isShow = true
          this.learnImg = res.bird[0]['imgurl']
        }
      }
    }
  }
</script>

<style>
</style>
