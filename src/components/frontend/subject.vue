<template>
  <div>
      <Header></Header>
      <Banner :bannerData="bannerData"></Banner>
      <Case style="margin-top: 0;"></Case>
      <Concept :conceptData="conceptData"></Concept>
      <Subject></Subject>
      <Eight></Eight>
      <Xxlc :xxlcImg="xxlcImg"></Xxlc>
      <Class :classData="classData"></Class>
      <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/frontend/layout/header.vue' //导航
  import Banner from '@/components/frontend/layout/banner.vue' //banner
  import Subject from '@/components/frontend/index/subject.vue' //源于19世纪脑科学 布罗卡斯语言区理论体
  import Case from '@/components/frontend/index/case.vue' //10万+学员家长选择布罗卡斯智能英语的理由
  import Concept  from '@/components/frontend/subject/concept' //布罗卡斯课程理念
  import Eight  from '@/components/frontend/subject/eight.vue' //M.I.C.多维智能教学法与8大特色教学
  import Xxlc from '@/components/frontend/subject/xxlc.vue' //布罗卡斯课程理念
  import Class from '@/components/frontend/subject/class.vue' //布罗卡斯课程理念
  import Footer from '@/components/frontend/layout/footer.vue' //底部

  export default {
    components:{
      Header,
      Banner,
      Case,
      Concept,
      Subject,
      Eight,
      Xxlc,
      Class,
      Footer
    },
    created() {
      this.getSubject()
    },
    data() {
      return {
        isShow:false,
        bannerData:[],
        conceptData:[],
        xxlcImg:'',
        classData:[]
      }
    },
    methods:{
      async getSubject () {
        var subjectData = sessionStorage.getItem("subjectData")
        if (subjectData == null) {
          const { data: res } = await this.$http.get("/subjectData")
          if (res.code === 200) {
            sessionStorage.setItem("subjectData",JSON.stringify(res.data))
            this.bannerData = res.data.banner
            this.conceptData = res.data.concept
            this.xxlcImg = res.data.xxlc[0]['imgurl']
            this.classData = res.data.class
            this.isShow = true
          }
        } else {
          var res = JSON.parse(subjectData)
          this.bannerData = res.banner
          this.conceptData = res.concept
          this.xxlcImg = res.xxlc[0]['imgurl']
          this.classData = res.class
          this.isShow = true
        }
      }
    }
   }
</script>

<style>
</style>
