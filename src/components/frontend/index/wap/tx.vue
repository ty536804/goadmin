<template>
  <section class="pub subject_warp">
      <h3>源于19世纪脑科学<br/>布罗卡斯语言区理论体系</h3>
      <section class="tx_warp">
        <section class="subject_con_l">
            <section class="loop">
                <h4>Broca’s Area</h4>
                <section class="dottedCircle">
                </section>
                <section class="dottedcircle1">
                </section>
            </section>
            <section class="pic_brain">
                <section class="heart"></section>
                <section class="heart_circle"></section>
            </section>
        </section>
        <section class="tx_desc">
          1861年法国脑科学家布罗卡斯发现“布罗卡斯区” 负责语言的学习和储存，1996年美国康奈尔大学研究证实并发表于《nature》，同年哈佛大学通过科学扫描技术确认布罗卡斯区在幼儿时期3周岁左右开始发育，12岁左右发育基本成熟关闭。
        </section>
      </section>
  </section>
</template>

<script>
</script>

<style scoped>
  .subject_warp{
      width: 100%;
      height: 446px;
      margin-bottom: 40px;
  }
  .subject_warp h3{
      width: 100%;
      font-size: 18px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #333333;
      line-height: 25px;
      margin: 0 auto 15px;
      text-align: center;
      padding-top: 41px !important;
  }
  .tx_warp{
    width: 100%;
    height:340px;
    background: #014B99;
  }
  .tx_desc{
    width: 100%;
    height: 100px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 20px;
    padding: 20px 15px 0 15px !important;
  }
  .subject_con_l{
      justify-content: center;
      display: flex;
      width: 100%;
      height:184px;
  }
  .heart {
      animation:heartbeat 1s infinite;
      -webkit-animation:heartbeat 1s infinite;
      width: 50px;
      height: 50px;
      background: #CB161D;
      position: relative;
      filter:drop-shadow(0px 0px 20px rgb(203, 22, 29));
      filter: opacity(0.2);
      transform: rotate(45deg);
      left: 78px;
      border-radius: 99px;
      top: 64px;
  }
  .heart_circle{
      width: 30px;
      height: 30px;
      background: #CB161D;
      border-radius: 50px;
      margin-top: 24px;
      margin-left: 88px;
      opacity: 0.2;
  }
  @keyframes heartbeat {
      0% {
          transform:rotate(45deg) scale(0.8,0.8);
          opacity:1;
      }
      25% {
          transform:rotate(45deg) scale(1,1);
          opacity:0.8;
      }
      100% {
          transform:rotate(45deg) scale(0.8,0.8);
          opacity:1;
      }
  }
  .dottedCircle {
      width: 76px;
      height: 76px;
      display: block;
      background: url("../img/dottedcircle2_hover.png") no-repeat 0 0;
      border-radius: 76px;
      background-size: 76px 76px;
      position: absolute;
      top: 0;
      left:19px;
     -webkit-transform: rotate(360deg);
      animation: rotation 8s linear infinite;
      -moz-animation: rotation 8s linear infinite;
      -webkit-animation: rotation 8s linear infinite;
      -o-animation: rotation 8s linear infinite;
  }
  .dottedcircle1{
      width: 60px;
      height: 60px;
      display: block;
      background: url("../img/dottedcircle2_hover.png") no-repeat 0 0;
      border-radius: 50px;
      background-size: 60px 60px;
      position: absolute;
      top: 7.5px;
      left:26.5px;
      animation: dottedrotation 5s linear infinite;
      -moz-animation: dottedrotation 5s linear infinite;
      -webkit-animation: dottedrotation 5s linear infinite;
      -o-animation: dottedrotation 5s linear infinite;
  }

  @-webkit-keyframes dottedrotation {
      from {
          -webkit-transform: rotate(0deg);
      }
      to {
          -webkit-transform: rotate(-360deg);
      }
  }

  .loop {
    width: 143px;
    color: #FFFFFF;
    height: 79px;
    position: relative;
    top: 39px;
    box-sizing: border-box;
  }
  /*top: 65px;*/
  @-webkit-keyframes rotation {
      from {
          -webkit-transform: rotate(0deg);
      }
      to {
          -webkit-transform: rotate(360deg);
      }
  }
  .loop h4{
      width: 112%;
      height: 76px;
      font-size: 16px;
      font-family: Helvetica;
      color: #FFFFFF;
      line-height: 76px;
      text-align: center;
  }
  .pic_brain{
      background: url("../img/pic_brain@2x.png") no-repeat;
      margin: 25px 0 0 15px;
      background-size: 95%;
      height: 159px;
      width: 350px;
  }
  .subject_desc{
      width: 755px;
      height: 120px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: #FFFFFF;
      line-height: 30px;
      margin: 0 auto;
      text-align: center;
  }
</style>
