<template>
  <section class="pub school">
      <img :src="learnImg">
  </section>
</template>

<script>
  export default {
    props:["learnImg"]
  }
</script>

<style scoped>
  @import url("./css/learn.css");
</style>
