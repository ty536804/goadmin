<template>
  <div>
    <div class="hader">
      <!-- 面包屑导航区 -->
      <el-card>
        <div class="head-card">
          <blockquote class="quote">
            欢迎管理员： admin！当前时间:2020:10:09 14:55:25
          </blockquote>
        </div>
      </el-card>
      <el-card class="con">
        <div slot="header" class="clearfix">
          <span>系统信息</span>
        </div>
        <table>
          <tr>
            <td>操作系统</td>
            <td>linux</td>
          </tr>
          <tr>
            <td>GO版本</td>
            <td>go1.14.7</td>
          </tr>
          <tr>
            <td>MYSQL版本</td>
            <td>8.0.20</td>
          </tr>
          <tr>
            <td>GIN版本</td>
            <td>v1.6.3</td>
          </tr>
        </table>
      </el-card>
      <el-card class="con">
        <div slot="header" class="clearfix">
          <span>开发团队</span>
        </div>
        <table>
          <tr>
            <td>开发者</td>
            <td>晓彬(283817727@qq.com)</td>
          </tr>
        </table>
      </el-card>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  table{
    width: 98%;
    border: 1px solid #EBEEF5;
    margin: 10px auto;
  }
  tr{
    width: 100%;
  }
  tr td{
    width: 50%;
    font-size: 12px;
    padding: 9px 15px !important;
    min-height: 20px;
    border-bottom: 1px solid #EBEEF5;
  }
  tr td:last-child{
    border-left: 1px solid #EBEEF5;
  }
  tr:last-child td{
    border-bottom: none !important;
  }
  .con{
    margin-top: 15px;
  }
  .el-card__header span{
    height: 42px;
    width: 100%;
    display: inline-block;
    line-height: 42px;
    padding: 0 15px !important;
    color: #333;
    border-radius: 2px 2px 0 0;
    font-size: 14px;
  }
  .head-card{
    position: relative;
    padding: 10px 15px !important;
    line-height: 24px;
  }
  .quote{
    margin-bottom: 10px;
    padding: 15px;
    line-height: 22px;
    border-left: 5px solid #009688;
    border-radius: 0 2px 2px 0;
    background-color: #f2f2f2;
    font-size: 12px;
  }
</style>
