<template>
  <section class="wan_warp">
    <h3>10万+学员家长<br>选择布罗卡斯智能英语的理由</h3>
    <section class="wan_con">
      <section class="cwl">
          <section class="cwc">
              <h4 class="smallTit">布罗卡斯英语</h4>
              <p class="smallSlogan">Broca English Course</p>
              <ul>
                  <li>AI智学系统跟进每个孩子学习成果及习惯，因材施教</li>
                  <li>结合实体课堂人机双师互教，直接提分快速有效</li>
                  <li>知识点螺旋重叠式递增，注重交流，阅读和运用</li>
                  <li>电子课件涵盖1000+专属儿童英文游戏</li>
                  <li>AI小程序植入真人外教辅助复习</li>
                  <li>AI小程序激励系统锻炼孩子项目管理能力</li>
              </ul>
          </section>
      </section>
      <section class="cwm"></section>
      <section class="cwr">
          <section class="cwc">
              <h4 class="smallTit">其他英语课程</h4>
              <p class="smallSlogan">Other English Course</p>
              <ul>
                  <li>没有AI系统</li>
                  <li>只有老师实体教授，没有人机互动</li>
                  <li>单纯模块化教学内容，抽象不易理解</li>
                  <li>课件只是简单的动画、图片或PPT无法实现互动</li>
                  <li>小程序或APP真人外教视频不多</li>
                  <li>小程序或APP内容单一</li>
              </ul>
          </section>
      </section>
    </section>
  </section>
</template>

<script>
</script>

<style scoped>
  .wan_warp{
    width: 100%;
    height: 897px;
  }
  .wan_con{
    position: relative;
    height: 792px;
  }
  h3{
    width: 100%;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
    line-height: 25px;
    text-align: center;
    margin: 40px auto 15px;
    display: inline-block;
  }
  .cwl{
      width: 100%;
      background: #CB161D url("../img/bg_BROCA.png") no-repeat top 20px  right 52px;
      background-size:273px 77px;
      height: 396px;
      margin: 0 auto;
  }
  .cwr{
      width: 100%;
      background: #014B99 url("../img/bg_ENGLISH.png") no-repeat top 73px  left 12px;
      background-size: 353px 77px;
      height: 396px;
  }
  .smallTit{
    width:100%;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 22px;
    text-align: center;
    margin-top: 30px;
    display: inline-block;
  }
  .smallSlogan{
    width: 100%;
    height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 17px;
    text-align: center;
  }
  .cwc ul{
      margin: 34px auto 0;
      width: 100%;
  }
  .cwc ul li{
      margin-bottom: 15px;
      width: 100%;
      text-align: center;
      height: 20px;
      font-size: 14px;
      line-height: 20px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
  }
  .cwm{
      width: 88px;
      height: 105px;
      background:url("../img/pic_vs.png") no-repeat 0 0  ;
      background-size: 88px 105px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
  }
  .cwr .cwc .smallTit{
    margin-top: 83px;
  }
</style>
