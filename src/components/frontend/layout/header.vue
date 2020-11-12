<template>
  <nav class="nav">
      <p><img src="./img/logo.png"></p>
      <div class="links">
        <li v-for="(item,key) in linkData" :key="key">
          <router-link :to="item.base_url" :class="isShow ==item.base_url ? 'actTit' : '' " >{{item.name}}
          <p class="nav_line" v-if="isShow ==item.base_url">
            <span class="nav_line"></span>
          </p>
          </router-link>
        </li>
        <li><router-link to="#" class="ico_phone">400-175-9669</router-link></li>
      </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        linkData:[],
        isShow:'/'
      }
    },
    mounted() {
      let _nav= "";
      let _currentUrl = 'http://'+window.location.host
      let currentUrl = window.location.href.substr(_currentUrl.length,window.location.href.length)
      this.isShow = currentUrl
      this.getLink();
    },
    methods: {
      async getLink() {
        var searches = sessionStorage.getItem("linkData")
        if (searches == null) {
          const { data: res } = await this.$http.get("/menuList")
          if (res.code === 200) {
            this.linkData = res.data.menu
            sessionStorage.setItem('linkData',JSON.stringify(res.data.menu))
          }
        } else {
          this.linkData = JSON.parse(searches)
        }
      }
    }
  }
</script>

<style scoped>
  a:hover,a:link{
    text-decoration: none;
  }
  .links li:last-child a{
    cursor: default;
  }
</style>
