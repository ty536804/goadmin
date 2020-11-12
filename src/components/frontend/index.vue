<template>
  <div>
    <div v-if="!isPhone">
      <van-skeleton title :row="11" :loading="isShow">
        <Header></Header>
        <Banner :bannerData="bannerData"></Banner>
        <Form></Form>
        <Area></Area>
        <Make :makeData="makeData"></Make>
        <Case></Case>
        <Run :runData="runData"></Run>
        <Love :loveData="loveData" :moreLove="moreLove"></Love>
        <Join :joinData="joinData"></Join>
        <Subject></Subject>
        <News :newData="newData"></News>
        <Footer></Footer>
      </van-skeleton>
    </div>
    <div v-if="isPhone">
      <van-skeleton title :row="13" :loading="isShow">
        <WapNav></WapNav>
        <WapBanner></WapBanner>
        <WapFrom></WapFrom>
        <WapSe></WapSe>
        <WapNum></WapNum>
        <WapTx></WapTx>
        <WapMake></WapMake>
        <WapWan></WapWan>
        <WapChild></WapChild>
        <WapChange></WapChange>
        <WapBefore></WapBefore>
        <WapEn></WapEn>
        <WapFooter></WapFooter>
      </van-skeleton>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/frontend/layout/header.vue' //header
  import Banner from '@/components/frontend/layout/banner.vue' // banner
  import Form from '@/components/frontend/index/form.vue' //布罗卡斯智能英语
  import Area from '@/components/frontend/index/area.vue' //布罗卡斯语言区理论体系
  import Make from '@/components/frontend/index/make.vue' //联合世界名校和美国优质教育资源倾力打造
  import Case from '@/components/frontend/index/case.vue' //10万+学员家长选择布罗卡斯智能英语的理由
  import Run from '@/components/frontend/index/run.vue' //第一代出国潮的推动者
  import Love from '@/components/frontend/index/love.vue' //并非改善 而是革新 OMO多维情景授课与学习，让孩子从此更爱说英语
  import Join from '@/components/frontend/index/join.vue' //无缝衔接课前、课中、课后，更符合中国孩子的学习习惯 对标国内英语知识点，接轨国际前沿课程
  import Subject from '@/components/frontend/index/subject.vue' //源于19世纪脑科学 布罗卡斯语言区理论体
  import News from '@/components/frontend/index/news.vue' //公司动态
  import Footer from '@/components/frontend/layout/footer.vue' //底部
  //移动端
  import WapNav from '@/components/frontend/layout/nav.vue' //底部
  import WapBanner from '@/components/frontend/index/wap/banner.vue' //
  import WapFrom from '@/components/frontend/index/wap/from.vue' //
  import WapSe from '@/components/frontend/index/wap/select.vue' // 布罗卡斯智能英语 孩子信赖 妈妈优选
  import WapNum from '@/components/frontend/index/wap/num.vue' // 300
  import WapTx from '@/components/frontend/index/wap/tx.vue' // 源于19世纪脑科学
  import WapMake from '@/components/frontend/index/wap/make.vue' //联合世界名校和美国优质教育资源倾力打造
  import WapWan from '@/components/frontend/index/wap/wan.vue' //10万+学员家长选择布罗卡斯智能英语的理由
  import WapChild from '@/components/frontend/index/wap/child.vue' // 300
  import WapChange from '@/components/frontend/index/wap/change.vue' // 并非改善 而是革新
  import WapBefore from '@/components/frontend/index/wap/before.vue' // 7-15岁少儿英语
  import WapEn from '@/components/frontend/index/wap/english.vue' // 布罗卡斯梯度进阶课程体系 夯实基础 循序
  import WapFooter from '@/components/frontend/layout/wapFooter.vue' //底部

  export default {
    components:{
      Header,
      Banner,
      Form,
      Area,
      Make,
      Case,
      Run,
      Love,
      Join,
      Subject,
      News,
      Footer,
      WapNav,
      WapBanner,
      WapFrom,
      WapSe,
      WapNum,
      WapTx,
      WapMake,
      WapWan,
      WapChild,
      WapChange,
      WapBefore,
      WapEn,
      WapFooter
    },
    data() {
      return {
        isShow:true,
        loveData:[],
        moreLove:[],
        runData:[],
        newData:[],
        makeData:[],
        bannerData:[],
        joinData:[],
        isPhone:false
      }
    },
    mounted() {
        this.isMobile()
    },
    methods: {
      isMobile() {
        var that = this;
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
          that.isShow = false;
          that.isPhone = true;
        } else {
          that.isPhone = false;
          that.getIndex()
        }
      },
      async getIndex () {
        var indexData = sessionStorage.getItem("indexData")
        if (indexData == null) {
          const { data: res } = await this.$http.get("/frontEnd")
          if (res.code === 200) {
            sessionStorage.setItem("indexData",JSON.stringify(res.data))
            this.bannerData = res.data.banner
            this.loveData = res.data.love
            this.moreLove = res.data.love1
            this.runData = res.data.cctv
            this.newData = res.data.list
            this.makeData = res.data.make
            this.joinData = res.data.join
            this.isShow = false
          }
        } else {
            var res = JSON.parse(indexData)
            this.bannerData = res.banner
            this.loveData = res.love
            this.moreLove = res.love1
            this.runData = res.cctv
            this.newData = res.list
            this.makeData = res.make
            this.joinData = res.join
            this.isShow = false
        }
      }
    }
  }
</script>

<style>
</style>
