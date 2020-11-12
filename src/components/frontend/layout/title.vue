<template>
  <section class="system_list">
      <h3 class="tit">
          <span class="tit_icon"></span>
          {{title}}
          <span class="tit_icon"></span>
      </h3>
  </section>
</template>

<script>
  export default {
    props:["title"]
  }
</script>

<style scoped>
  .system_list{
  	width: 100%;
  	margin: 0 auto;
  	height: 25px;
  	overflow: hidden;
  }
  .tit{
  	display: flex;
  	flex-flow: row;
  	justify-content: center;
  	height:25px;
  	font-size:18px;
  	font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
  	font-weight:bold;
  	color:rgba(9,57,105,1);
  	line-height:25px;
  }
  .tit_icon{
  	/* background: url("../img/ico_slash_l@2x.png") no-repeat 0 0; */
  	width: 20px;
  	height: 20px;
  	background-size: 20px 20px;
  }
  .tit span:first-child{
  	margin-right: 9px;
  }
  .tit span:last-child{
  	margin-left:9px;
  }
</style>
