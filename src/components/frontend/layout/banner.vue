<template>
  <el-carousel indicator-position="outside" height="444px">
      <el-carousel-item v-for="(item,key) in bannerData" :key="key">
        <img :src="item.imgurl">
      </el-carousel-item>
    </el-carousel>
</template>

<script>
  export default {
    props:["bannerData"]
  }
</script>

<style>
  .el-carousel__container img{
   width: 100%;
   height: 100%;
  }
  .el-carousel__indicators--outside{
    display: none;
  }
</style>
