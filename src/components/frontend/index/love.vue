<template>
  <section class="pub love">
      <h3>并非改善 而是革新</h3>
      <p class="love_small_tit">OMO多维情景授课与学习，让孩子从此更爱说英语</p>
      <section class="love_con lcf">
          <dl v-for="(item, key) in loveData" :key="key">
              <dt>{{item.summary}}</dt>
              <dd><img :src="imgUrl(item.thumb_img)"></dd>
          </dl>
      </section>
      <section class="love_con lcb">
          <dl v-for="(item, key) in moreLove" :key="key">
              <dt>{{item.summary}}</dt>
              <dd><img :src="imgUrl(item.thumb_img)"></dd>
          </dl>
      </section>
  </section>
</template>

<script>
  export default {
    props:["loveData", "moreLove"],
    methods:{
      imgUrl(url) {
        return url
      }
    }
  }
</script>

<style scoped>
  @import url("./css/love.css");
</style>
