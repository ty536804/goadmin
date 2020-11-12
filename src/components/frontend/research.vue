<template>
<div>
    <Header></Header>
    <Banner :bannerData="bannerData"></Banner>
    <Select :teacherUrl="teacherUrl" :bzData="bzData"></Select>
    <Training :trainingData="trainingData"></Training>
    <Footer></Footer>
</div>
</template>

<script>
  import Header from '@/components/frontend/layout/header.vue' //导航
  import Banner from '@/components/frontend/layout/banner.vue' // banner
  import Select from '@/components/frontend/research/select.vue' //
  import Training from '@/components/frontend/research/kh.vue' //
  import Footer from '@/components/frontend/layout/footer.vue' //底部
  
  export default {
    components:{
      Header,
      Banner,
      Select,
      Training,
      Footer
    },
    data () {
      return {
        isShow:false,
        bannerData:[],
        teacherUrl:'',
        bzData:[],
        trainingData:[]
      }
    },
    created() {
      this.getResearch()
    },
    methods: {
      async getResearch () {
        var subjectData = sessionStorage.getItem("researchData")
        if (subjectData == null) {
          const { data: res } = await this.$http.get("/researchData")
          if (res.code === 200) {
            sessionStorage.setItem("researchData",JSON.stringify(res.data))
            this.bannerData = res.data.banner
            this.bzData = res.data.bz
            this.teacherUrl = res.data.teacher[0]['imgurl']
            this.trainingData = res.data.training
            this.isShow = true
          }
        } else {
          var res = JSON.parse(subjectData)
          this.bannerData = res.banner
          this.bzData = res.bz
          this.teacherUrl = res.teacher[0]['imgurl']
          this.trainingData = res.training
          this.isShow = true
        }
      }
    }
  }
</script>

<style>
</style>
