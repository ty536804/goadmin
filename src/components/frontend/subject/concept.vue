<template>
  <section class="pub concept">
      <h3>布罗卡斯课程理念</h3>
      <dl v-for="(item, itemKey) in conceptData" :key="itemKey.id">
          <dt class="concept_tit" v-if="itemKey==0 || itemKey==2">
              <h4>{{item.summary}}</h4>
              <ul v-html="item.content"></ul>
          </dt>
          <dd class="concept_img" v-if="itemKey==0 || itemKey==2">
              <img :src="item.thumb_img">
          </dd>
          <dd class="concept_img" v-if="itemKey==1 || itemKey==3">
              <img :src="item.thumb_img">
          </dd>
          <dt class="concept_tit" v-if="itemKey==1 || itemKey==3">
              <h4>{{item.summary}}</h4>
              <ul v-html="item.content"></ul>
          </dt>
      </dl>
  </section>
</template>

<script>
  export default {
    props:["conceptData"],
  }
</script>

<style>
  @import url("./css/concept.css");
</style>
