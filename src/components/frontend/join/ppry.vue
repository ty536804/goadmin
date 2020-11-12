<template>
  <div>
    <section class="pub ppry">
	  <section class="system_list">
		  <h3 class="tit">
			  <span class="tit_icon"></span>
			  品牌荣誉
			  <span class="tit_icon"></span>
		  </h3>
	  </section>
    </section>
    <section class="brand_ul pub">
      <div id="btn-left" class="arrow-btn dasabled" @click="prev"></div>
      <div class="slider">
        <ul>
          <li><img src="http://img.cdn.mofashuxue.com/pic_medal1@2x.png?imageslim"></li>
          <li><img src="http://img.cdn.mofashuxue.com/pic_medal2@2x.png?imageslim"></li>
          <li><img src="http://img.cdn.mofashuxue.com/pic_medal3@2x.png?imageslim"></li>
          <li><img src="http://img.mofashuxue.com/pic_medal4.png?imageslim"></li>
          <li><img src="http://img.mofashuxue.com/pic_medal5.png?imageslim"></li>
          <li><img src="http://img.mofashuxue.com/pic_medal6.png?imageslim"></li>
          <li><img src="http://img.mofashuxue.com/pic_medal7.png?imageslim"></li>
          <li><img src="http://img.mofashuxue.com/pic_medal8.png?imageslim"></li>
          <li><img src="http://img.mofashuxue.com/pic_medal9.png?imageslim"></li>
          <li><img src="http://img.mofashuxue.com/pic_medal10.png?imageslim" ></li>
        </ul>
      </div>
      <div id="btn-right" class="arrow-btn" @click="next"></div>
    </section>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    data() {
      return {
        slider:'',
        sliderChildL:0,
        slider_width:0,
        speed:4,
        slider_count:0
      }
    },
    mounted() {
      this.slider = $('.slider ul')
      this.sliderChildL = $('.slider ul li').length
      this.slider_width = $('.slider ul li').width();
      this.slider.width(this.sliderChildL * this.slider_width)
      if (this.sliderChildL < 4) {
          $('#btn-right').css({cursor: 'auto'});
      }
    },
    methods:{
       next() {
         if (this.sliderChildL < 4 || this.slider_count >= this.sliderChildL - 4) {
               return false;
           }
           this.slider_count++;
           this.slider.animate({left: '-=' + this.slider_width + 'px'}, 'slow');
           this.slider_pic();
       },
       prev() {
         if (this.slider_count <= 0) {
               return false;
           }
           this.slider_count--;
           this.slider.animate({left: '+=' + this.slider_width + 'px'}, 'slow');
           this.slider_pic();
       },
       slider_pic() {
         if (this.slider_count >= this.sliderChildL - 4) {
                 $('#btn-right').css({cursor: 'auto'});
             }
             else if (this.slider_count > 0 && this.slider_count <= this.sliderChildL - 4) {
                 $('#btn-left').css({cursor: 'pointer'});
                 $('#btn-right').css({cursor: 'pointer'});
             }
             else if (this.slider_count <= 0) {
                 $('#btn-left').css({cursor: 'auto'});
             }
       }
    }
  }
</script>

<style scoped>
  @import url("./css/ppry.css");
</style>
