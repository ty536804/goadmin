<template>
  <section class="pub training">
    <h3>培训&考核</h3>
    <section class="training_con" v-for="(item,key) in trainingData" :key="key" :class="key==1 ? 'training_b' : ''  ">
        <dl>
            <dt>
                <img :src="item.thumb_img">
            </dt>
            <dd>
                <h4>{{item.name}}</h4>
                <p class="training_con_t">{{item.summary}}</p>
                <p>{{item.content}}</p>
            </dd>
        </dl>
    </section>
</section>
</template>

<script>
  export default {
    props:["trainingData"]
  }
</script>

<style scoped>
  @import url("./css/kh.css");
</style>
