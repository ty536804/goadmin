<template>
  <section class="pub select">
    <section class="selectL">
        <section class="selectL_con">
            <h3 class="bz">教师选拔标准</h3>
            <dl v-for="(item,key) in bzData" :key="key">
                <dt>
                    <img :src="item.imgurl" />
                </dt>
                <dd>
                    <h3 :class="key ==0 ? 'zzzy' : '' ">{{item.bname}}</h3>
                    <p v-html="item.info"></p>
                </dd>
            </dl>
        </section>
    </section>
    <section class="selectR">
        <img :src="teacherUrl">
    </section>
</section>
</template>

<script>
  export default{
    props:["bzData","teacherUrl"]
  }
</script>

<style scoped>
  @import url("./css/select.css");
</style>
