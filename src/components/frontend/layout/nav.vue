<template>
  <nav>
      <section class="nav_head">
          <p class="head_logo">
              <img src="./img/nav_logo.png" />
              <span class="slogan">学习因科技而高效</span>
          </p>
          <section class="home_icon" @click="showMenu">
              <img :src="isShow ? './img/clone.png' : './img/home_icon_breadnav_nor.png' " class="navicon"/>
          </section>
          <ul class="home_nav" v-if="isShow">
              <a href="/">首页</a>
              <a href="/sub">课程体系</a>
              <a href="/le"  class="sub">教学教研</a>
              <a href="/ai" class="le">AI智学系统</a>
              <a href="/cam">全国中心</a>
              <a href="/authorize" class="authorize">招商加盟</a>
              <a href="/list"  class="new">新闻资讯</a>
          </ul>
      </section>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        isShow:false
      }
    },
    methods:{
      showMenu:function() {
        if(!this.isShow) {
            this.isShow = true;
        }else{
            this.isShow = false;
        }
      }
    }
  }
</script>

<style scoped>
  nav{
  	width: 100%;
  	margin: 10px auto 9px auto;
  }
  .slogan {
  	margin-left: 12px;
  }

  .home_icon{
  	position: relative;
  	cursor: pointer;
  	text-align: right;
  }
  .navicon{
  	width: 26px;
  	height: 26px;
  }
  .nav_head {
  	width: 91%;
  	height: 30px;
  	margin: 0 auto;
  }
  .head_logo img{
  	width: 82px;
  	float: left;
  }
  .head_logo .slogan{
  	float: left;
  	color: #16397A;
  	font-size: 14px;
  	line-height: 30px;
  }

  .home_nav {
  	position: absolute;
  	width: 170px;
  	background: #fff;
  	top: 48px;
  	z-index: 9;
  	right: 0;
  }
  .home_nav a{
  	width: 100%;
  	float: left;
  	text-align: center;
  	height: 50px;
  	line-height: 50px;
  	color: #333;
  	font-size: 1rem;
  	font-weight: 400;
  	border-bottom: 1px solid #F0F0F0;
  	text-decoration: none;
  }

  .home_nav a:hover{
  	text-decoration: none;
  }
  .home_nav a:first-child{
  	border-left: 5px solid #DC4236;
  }
  .authorize{
  	border-left: 5px solid #7D4698;
  }
  .le {
  	border-left: 5px solid #4FB459;
  }
  .om {
  	border-left: 5px solid #00A0E9;
  }
  .sub {
      border-left: 5px solid #F8B42D;
  }
</style>
