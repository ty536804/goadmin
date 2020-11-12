<template>
  <section class="change">
    <h3>
      并非改善 而是革新<br/>OMO多维情景授课与学习<br/>让孩子从此更爱说英语
    </h3>
    <section class="lcf">
      <dl>
          <dt>人机双师互教</dt>
          <dd>
            <van-image
            height="125"
            src="http://img.cdn.brocaedu.com/202010281044931.png"/>
            </dd>
      </dl>
      <dl>
          <dt>AI学习系统</dt>
          <dd>
            <van-image
            height="125"
            src="http://img.cdn.brocaedu.com/202010281045207.png"/>
            </dd>
      </dl>
      <dl>
          <dt>中外教互动课堂</dt>
          <dd>
            <van-image
            height="125"
            src="http://img.cdn.brocaedu.com/202010281045301.png"
            /></dd>
      </dl>
      <dl>
          <dt>全情景智能点读</dt>
          <dd>
            <van-image
            height="125"
            src="http://img.cdn.brocaedu.com/202010281045440.png"
            /></dd>
      </dl>
      <dl>
          <dt>多维度题库练习</dt>
          <dd>
            <van-image
            height="125"
            src="http://img.cdn.brocaedu.com/202010281045525.png"
            /></dd>
      </dl>
      <dl>
          <dt>美国分级阅读RAZ外教直播课</dt>
          <dd>
            <van-image
            height="125"
            src="http://img.cdn.brocaedu.com/202010281045631.png"
            /></dd>
      </dl>
    </section>
  </section>
</template>

<style scoped>
  .change {
   width: 100%;
    height: 680px;
    background: #F9FAFC;
    margin-top: 20px;
  }
  h3{
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
    line-height: 25px;
    display: inline-block;
    margin: 30px auto 20px;
  }
  .lcf{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
    padding: 0 15px !important;
  }
  .lcf dl{
    width: 48%;
    margin-bottom: 10px;
  }
  .lcf dl dt{
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 10px 10px 0px 0px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
  }
  .lcf dl:first-child dt{
      background: linear-gradient(270deg, #FF2837 0%, #CB161D 100%);
      box-shadow: 0px 15px 20px 0px #FFD0D0;
  }
  .lcf dl:nth-child(2) dt{
      background: linear-gradient(270deg, #FC8E2F 0%, #F85515 100%);
      border-radius: 10px 10px 0px 0px;
  }
  .lcf dl:nth-child(3) dt{
      background: linear-gradient(270deg, #FBE7AB 0%, #F6CB73 100%);
      border-radius: 10px 10px 0px 0px;
  }
  .lcf dl:nth-child(4) dt{
      background: linear-gradient(270deg, #22DFDD 0%, #0FBCB8 100%);
      border-radius: 10px 10px 0px 0px;
  }
  .lcf dl:nth-child(5) dt{
      background: linear-gradient(270deg, #32ECFD 0%, #17D3FA 100%);
      border-radius: 10px 10px 0px 0px;
  }
  .lcf dl:last-child dt{
      background: linear-gradient(270deg, #0282C9 0%, #014B99 100%);
      border-radius: 10px 10px 0px 0px;
  }
</style>
