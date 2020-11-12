<template>
  <section class="broca_dl">
      <dl>
          <dt><strong>300</strong>+家校区</dt>
          <dd class="show_img"><img src="../img/ico_education@2x.png"></dd>
      </dl>
      <dl>
          <dt><strong>100</strong>+个城市</dt>
          <dd class="show_img"><img src="../img/ico_city@2x.png"></dd>
      </dl>
      <dl>
          <dt><strong>10</strong>万+名儿童</dt>
          <dd class="show_img"> <img src="../img/ico_education.png"></dd>
      </dl>
  </section>
</template>

<script>
</script>

<style scoped>
  .broca_dl dl{
      width: 91%;
      margin: 0 auto 59px auto;
      position: relative;
      height: 162px;
      background: #FFFFFF;
      box-shadow: 0px 5px 21px 0px #E3E3E3;
      border-radius: 9px;
  }
  .broca_dl dl:first-child{
    margin-top: -30px;
    background:#FFF url(./img/ico_education.png) no-repeat center right;
    background-size: 86px 95px;
  }
  .broca_dl dl:nth-child(2){
    background:#FFF url(./img/ico_city_10.png) no-repeat center right;
    background-size: 86px 95px;
  }
  .broca_dl dl:last-child{
    background:#FFF url(./img/ico_education_1.png) no-repeat center right;
    background-size: 86px 95px;
  }
  .broca_dl dl dd{
      width: 100%;
      height: 86px;
      text-align: center;
      position: absolute;
      bottom: -38px;
      justify-content: center;
  }
  .broca_dl dl dd img{
      width: 86px;
      height: 86px;
  }
  .broca_dl dl dt strong{
      font-size: 47px;
      font-family: MicrosoftYaHeiSemibold;
      color: #333333;
      line-height: 63px;
  }
  .broca_dl dl dt{
      height: 63px;
      font-size: 22px;
      font-family: MicrosoftYaHei;
      color: #333333;
      line-height: 30px;
      text-align: center;
      width: 100%;
      padding-top: 37px !important;
  }
</style>
