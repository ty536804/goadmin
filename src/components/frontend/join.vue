<template>
    <div>
        <Header></Header>
        <Banner :bannerData="bannerData"></Banner>
        <Join></Join>
        <Brand></Brand>
        <America></America>
        <More></More>
        <Online></Online>
        <Subject></Subject>
        <Learn></Learn>
        <Six></Six>
        <Vs></Vs>
        <Team></Team>
        <Show></Show>
        <Ppry></Ppry>
        <Footer></Footer>
    </div>
</template>

<script>
  import Header from '@/components/frontend/layout/header.vue' //导航
  import Banner from '@/components/frontend/layout/banner.vue' //banner
  import Join from '@/components/frontend/join/join.vue' // 表单
  import Brand from '@/components/frontend/join/brand_con.vue' // 品牌介绍
  import America from '@/components/frontend/join/america.vue' //十三五
  import More from '@/components/frontend/join/more.vue' //多维情景教学模式
  import Online from '@/components/frontend/join/online.vue' //BROCA强大的线上系统
  import Subject from '@/components/frontend/join/subject.vue' //BROCA课程体系
  import Learn from '@/components/frontend/join/learn.vue' //学习场景
  import Six from '@/components/frontend/join/six.vue' //BROCA英语六大优势
  import Vs from '@/components/frontend/join/vs.vue' //BROCA英语VS传统英语
  import Team from '@/components/frontend/join/team.vue' //贯穿全程的六大支持团队
  import Show from '@/components/frontend/join/show.vue' //
  import Ppry from '@/components/frontend/join/ppry.vue' //
  import Footer from '@/components/frontend/layout/footer.vue' //底部
  
  export default {
    components:{
      Header,
      Banner,
      Join,
      Brand,
      America,
      More,
      Online,
      Subject,
      Learn,
      Six,
      Vs,
      Team,
      Show,
      Ppry,
      Footer
    },
    data() {
      return {
        bannerData:[{
          imgurl:"http://img.cdn.mofashuxue.com/banner11.png?imageslim"
        },{
          imgurl:"http://img.cdn.mofashuxue.com/banner22.png?imageslim"
        }]
      }
    },
    created() {
        // this.getIndex()
    },
    methods: {
      async getIndex () {
        const { data: res } = await this.$http.get("/frontEnd")
        if (res.code === 200) {
          sessionStorage.setItem("indexData",JSON.stringify(res.data))
          this.bannerData = res.data.banner
        }
      }
    }
  }
</script>

<style>
</style>
