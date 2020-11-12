<template>
  <section class="pub auto" :style="{backgroundImage:'url('+moreImg+')'}" style="background-position: top center;">
    <section class="auto_con">
        <dl class="auto_detail" v-for="(item,key) in autoData" :key="key" :class="key<3 ? 'mt7' : '' ">
            <dt>
                <img :src="item.thumb_img"/>
            </dt>
            <dd>
              <h3>{{item.name}}</h3>
              <span></span>
              <ul v-html="item.content"></ul>
            </dd>
        </dl>
    </section>
  </section>
</template>

<script>
  export default {
    props:["moreImg","autoData"]
  }
</script>

<style>
  @import url("./css/auto.css");
</style>
