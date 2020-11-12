<template>
  <section class="pub run_warp">
      <h3>采用国际前沿技术 第一代出国潮的推动者</h3>
      <section class="run_con">
          <dl v-for="(item,key) in runData" :key="key" :class="key==1 ? 'teaching' : '' ">
              <dt :style="{backgroundImage: 'url(' +item.thumb_img+ ')'}">
                  <section class="celebrity_desc">
                      <h5>{{item.name}}</h5>
                      <p>{{item.summary}}</p>
                  </section>
              </dt>
              <dd>{{item.content}}</dd>
          </dl>
      </section>
  </section>
</template>

<script>
  export default {
    props:["runData"],
    methods:{
      imgUrl(url) {
        return url
      }
    }
  }
</script>

<style scoped>
  @import url("./css/run.css");
</style>
