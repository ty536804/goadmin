<template>
  <section class="pub news" style="display: block;">
      <h3>新闻动态</h3>
      <section class="six_reason">
        <dl v-for="(item,key) in newData" :key="key">
          <a :href="getUrl(item.id)">
            <dt class="weui-desktop-mass-appmsg__thumb" :style="{backgroundImage: 'url(' +item.thumb_img+ ')'}"></dt>
            <dd>
              <h5>{{item.title}}</h5>
              <p>{{item.summary}}</p>
            </dd>
          </a>
        </dl>
      </section>
      <p class="more_btn"><a href="/news" class="more">更多内容</a></p>
  </section>
</template>

<script>
  export default {
    props:["newData"],
    methods:{
      getUrl(id){
        return '/detail?id='+id
      }
    }
  }
</script>

<style scoped>
  @import url("./css/news.css");
</style>
