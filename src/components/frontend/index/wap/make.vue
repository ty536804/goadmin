<template>
  <section class="make">
    <h3>联合世界名校和美国优质教育资源倾力打造</h3>
    <van-image
    class="uc"
    src="http://img.cdn.brocaedu.com/2020102910100429.png"
    />
    <van-image
    class="uc"
    src="http://img.cdn.brocaedu.com/2020102910100654.png"
    />
    <section class="ul_img">
      <van-image
      src="http://img.cdn.brocaedu.com/2020102910100521.png"
      />
      <van-image
      src="http://img.cdn.brocaedu.com/2020102910100554.png"
      />
      <van-image
      src="http://img.cdn.brocaedu.com/2020102910100619.png"
      />
    </section>
  </section>
</template>

<style scoped>
  .make{
    width: 100%;
    height: 767px;
    background: #F9FAFC;
  }
  h3{
    width: 100%;
    height: 25px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
    line-height: 25px;
    text-align: center;
    margin: 30px auto 15px auto;
    display: inline-block;
  }
  .uc{
    margin: 0 auto;
    width: 100%;
    padding: 0 15px !important;
  }
  .ul_img {
    width: 100%;
    padding: 0 15px !important;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    margin-top: 16px;
  }
  .ul_img .van-image:first-child{
    margin-right: 9px;
  }
  .ul_img .van-image:last-child{
    margin-left: 9px;
  }
</style>
