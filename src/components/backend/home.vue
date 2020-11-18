<template>
  <el-container>
    <!-- 头部区 -->
    <el-header>
      <div>
        <!-- <img src="../assets/img/logo.png" alt="布卢卡斯" class="logo"> -->
        <span class="headTit">易乐教育-布卢卡斯</span>
      </div>
      <!-- <div class="taggle-button" @click="toggleCollapse">|||</div> -->
      <el-button type="infor" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体区 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
            <el-menu
              background-color="#fff"
              text-color="#686a76"
              active-text-color="#fff"
              unique-opened
              :collapse="isCollapse"
              :collapse-transition="false"
              router
              :default-active="avitvePath">
              <!-- 一级菜单 -->
              <el-submenu :index="item.id + '' " v-for="item in menuList" :key="item.id">
                <!-- 一级菜单的模板区域 -->
                <template slot="title">
                  <!-- 图标 -->
                  <i :class=" 'fa '+ item.icon"></i>
                  <!-- 文本 -->
                  <span class="sidebarName">{{item.name}}</span>
                </template>
                <!-- 二级菜单 -->
                <el-menu-item :index="'/' + subItem.path"
                v-for="subItem in item.child"
                :key="subItem.id"
                @click="saveNavState('/' + subItem.path)">
                  <template slot="title">
                    <!-- 图标 -->
                    <i :class=" 'fa '+ subItem.icon"></i>
                    <!-- 文本 -->
                    <span class="sidebarName">{{subItem.power_name}}</span>
                  </template>
                </el-menu-item>
              </el-submenu>
            </el-menu>
      </el-aside>
      <!-- 左侧内容 -->
      <el-main>
        <!-- 路由展位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      menuList: [],
      isCollapse: false,
      avitvePath: ''
    }
  },
  created () {
    if (this.getSign()) {
      this.$router.push('/login')
    }
    this.getMenuList()
    this.avitvePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout: function () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    async getMenuList () {
      var _sgin = this.getParam()
      const param = {
        timestamp: Date.parse(new Date()) / 1000,
        version: 'v1',
        client:'pc',
        sign:_sgin.toString()
      }
      const { data: res } = await this.$http.post('/menus',this.$qs.stringify(param))
      this.menuList = res.data
    },
    // 点击按钮 展开与收缩
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    // 保存状态
    saveNavState (activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.avitvePath = activePath
    }
  }
}
</script>

<style>
  .el-submenu__title,.el-menu-item{
    height: 37px !important;
    line-height: 37px !important;
  }
  .el-container {
    height: 100%;
  }
  .el-header {
    background: linear-gradient(to left, #7b4397, #2196f3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 20px;
    > div {
      display: flex;
      align-items: center;
      span {
        margin-left: 15px;
      }
    }
  }
  .logo {
    width: 146px;
    height: 53px;
    margin-top: 12px;
    float: left;
  }
  .headTit{
    line-height: 66px;
    height: 60px;
    display: inline-block;
  }
  .el-aside {
    background: #fff;
    font-size: 14px;
    .el-menu{
      border-right: none;
    }
  }
  .el-main {
     background: #EAEDF1;
  }
  .taggle-button{
    background-color: #4A5064;
    color: #fff;
    font-size: 10px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
  }
  .sidebarName{
    font-size: 12px;
  }
  .fa{
    padding-right: 10px;
  }
  .el-submenu__title:hover, .el-menu-item:hover,.el-menu--inline .is-active {
    background: linear-gradient(to left, #7c8ce4, #2196f3) !important;
    color: #fff !important;
    border-color: #7b4397 !important;
    border-left: 4px solid transparent;
    transition: all 0.3s;
  }
  .is-opened .el-submenu__title .el-icon-arrow-down, .el-submenu__title:hover .el-icon-arrow-down, .el-menu-item:hover .el-icon-arrow-down{
    color: #fff;
  }
  .el-submenu{
    width: 100%;
    box-sizing: border-box;
  }
  .el-main{
    background: #edf5f9;
  }
</style>
