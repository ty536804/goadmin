<template>
  <section class="pub index_join">
      <h3>无缝衔接课前、课中、课后，更符合中国孩子的学习习惯</h3>
      <p>对标国内英语知识点，接轨国际前沿课程</p>
      <section class="index_join_con">
          <dl v-for="(item,key) in joinData" :key="key">
              <dt>
                  <img :src="item.thumb_img">
                  <h4>{{item.name}}</h4>
                  <p>{{item.summary}}</p>
              </dt>
              <dd>
                  <ul v-html="item.content"  class="index_ul"></ul>
              </dd>
          </dl>
      </section>
  </section>
</template>

<script>
  import $ from 'jquery'
  export default {
    props:["joinData"],
    mounted() {
      this.show()
    },
    methods: {
      show() {
        $('.index_join_con dl').on("mouseover",function () {
            let _key =  Number($(this).index())
            $('.index_join_con dl').eq(_key).css({'transform':'scale(1)','transition':'all 0.7s ease 0.1s'})
            $('.index_join_con dl').eq(Number(_key) == 1 ? 0 : 1).css({"transform":" scale(0.8)","transition":" all 0.7s ease 0.1s"})
        })
      }
    }
  }
</script>

<style>
  @import url("./css/join.css");
</style>
