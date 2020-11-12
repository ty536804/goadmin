<template>
  <section class="pub make_warp" v-if="makeData.length > 0">
      <h3>联合世界名校和美国优质教育资源倾力打造</h3>
      <section class="make_img">
          <img :src="getImg(this.makeData[0]['imgurl'])">
          <section class="mid">
              <img :src="getImg(this.makeData[1]['imgurl'])"  class="mid wow fadeInDown animated animated" data-wow-duration="0.6s">
              <img :src="getImg(this.makeData[2]['imgurl'])" class="mid wow fadeInDown animated animated" data-wow-duration="0.7s">
              <img :src="getImg(this.makeData[3]['imgurl'])"  class="mid wow fadeInDown animated animated" data-wow-duration="0.8s">
          </section>
          <img :src="getImg(this.makeData[4]['imgurl'])">
      </section>
  </section>
</template>

<script>
export default {
	props:["makeData"],
	methods: {
	  getImg(url) {
		return url
	  }
	}
}
</script>

<style scoped>
  @import url("./css/make.css");
</style>
