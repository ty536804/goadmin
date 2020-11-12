<template>
  <section class="pub learn">
    <h3>把知识带进教室 把教室带进生活</h3>
    <section class="pic_toddler_con">
        <li class="wow bounceInLeft bg-purple animated" style="visibility: visible; animation-name: bounceInLeft;">
            <img :src="classData[0]['imgurl']">
        </li>
        <li class="wow lightSpeedIn bg-yellow animated" style="visibility: visible; animation-name: lightSpeedIn;">
            <img :src="classData[1]['imgurl']">
        </li>
    </section>
    <section class="pic_toddler_con">
        <li class="wow rollIn animated" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: rollIn;">
            <img :src="classData[2]['imgurl']">
        </li>
        <li class="wow bounceInRight animated" data-wow-delay="1.0s" style="visibility: visible; animation-delay: 1.5s; animation-name: bounceInRight;">
            <img :src="classData[3]['imgurl']">
        </li>
    </section>
    <section class="pic_toddler_con">
        <li class="wow bounce bg-green animated" style="visibility: visible; animation-duration: 0.15s; animation-name: bounce;animation-delay: 0.5s;">
            <img :src="classData[4]['imgurl']">
        </li>
        <li class="wow bounceInUp bg-red animated" style="visibility: visible; animation-name: bounceInUp;">
            <img :src="classData[5]['imgurl']">
        </li>
        <li class="wow bounceInRight bg-purple animated" style="visibility: visible; animation-name: bounceInRight;">
            <img :src="classData[6]['imgurl']">
        </li>
    </section>
</section>
</template>

<script>
	import {WOW} from 'wowjs'

  export default {
    props:["classData"],
    watch:{
      cases() {
        this.$nextTick(() => { // 在dom渲染完后,再执行动画
          var wow = new WOW({
            live: false
          })
          wow.init()
        })
      }
    }
  }
</script>

<style scoped>
  @import url("./css/class.css");
</style>
