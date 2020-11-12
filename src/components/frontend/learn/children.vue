<template>
  <section class="pub imgList">
      <img v-for="(item,key) in this.childrenData" :src="item.imgurl" :key="key"/>
  </section>
</template>

<script>
  export default {
    props:["childrenData"]
  }
</script>

<style scoped>
  @import url("./css/children.css");
</style>
