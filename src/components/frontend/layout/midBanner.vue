<template>
  <div class="setting_banner">
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,key) in threeBanner" :key="key">
                  <img :src="item.Imgurl" alt="">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    props:["threeBanner"]
  }
</script>

<style>
</style>
