<template>
<div>
    <Header></Header>
    <Banner :bannerData="bannerData"></Banner>
    <Learn :learnImg="learnImg"></Learn>
    <Children :childrenData="childrenData"></Children>
    <Auto :moreImg="moreImg" :autoData="autoData"></Auto>
    <Footer style="margin-top: -100px;"></Footer>
</div>
</template>

<script>
  import Header from '@/components/frontend/layout/header.vue' //导航
  import Banner from '@/components/frontend/layout/banner.vue' // banner
  import Learn from '@/components/frontend/learn/learn.vue' //
  import Children from '@/components/frontend/learn/children.vue' //
  import Auto from '@/components/frontend/learn/auto.vue' //
  import Footer from '@/components/frontend/layout/footer.vue' //底部

  export default {
    components:{
      Header,
      Banner,
      Learn,
      Children,
      Auto,
      Footer
    },
    data () {
      return {
        isShow:false,
        bannerData:[],
        childrenData:[],
        learnImg:'',
        moreImg:'',
        autoData:[]
      }
    },
    created() {
      this.getLearn()
    },
    methods: {
      async getLearn () {
        var subjectData = sessionStorage.getItem("learnData")
        if (subjectData == null) {
          const { data: res } = await this.$http.get("/learnData")
          if (res.code === 200) {
            sessionStorage.setItem("learnData",JSON.stringify(res.data))
            this.bannerData = res.data.banner
            this.childrenData = res.data.children
            this.learnImg = res.data.learn[0]['imgurl']
            this.moreImg = res.data.more[0]['imgurl']
            this.autoData = res.data.auto
            this.isShow = true
          }
        } else {
          var res = JSON.parse(subjectData)
          this.bannerData = res.banner
          this.childrenData = res.children
          this.learnImg = res.learn[0]['imgurl']
          this.moreImg = res.more[0]['imgurl']
          this.autoData = res.auto
          this.isShow = true
        }
      }
    }
  }
</script>

<style>
</style>
