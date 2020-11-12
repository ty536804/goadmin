<template>
  <div>
    <section class="new_ul">
      <a v-for="(item,key) in newsData" :key="key" @click="signleDetail(item.id)">
        <dl><dt><img :src="item.thumb_img"></dt>
        <dd>
          <section class='new_left'>
            <p class="date">{{getDate(item.created_at)}}<span class="new_left_line"></span></p>
            <p class="year">{{getYear(item.created_at)}}</p>
          </section>
         <section class="new_right"><h3>{{item.title}}</h3>
         <p>{{item.summary}}</p><span class="read">阅读原文</span>
         </section></dd></dl>
      </a>
      </section>
      <section style="width: 1200px;margin: 0 auto">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            :page-size="pageSize"
            :hide-on-single-page="true"
            layout="prev, pager, next"
            :total="total">
          </el-pagination>
      </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pageSize:0,
        total:0,
        newsData:[],
      }
    },
    mounted() {
       this.getNews(0)
    },
    methods:{
      handleCurrentChange (newpagenum) { // 分页请求数据
        this.pagenum = newpagenum
        this.getNews(newpagenum)
      },
      getDate(time) {
        return time.substring(5,10)
      },
      getYear(time) {
        return time.substring(0,4)
      },
      async getNews (page) {
        const { data: res } = await this.$http.get("/newList?page="+page)
        if (res.code === 200) {
          this.pageSize = res.data.pageSize,
          this.newsData = res.data.list
          this.total = res.data.count
        }
      },
      signleDetail(id) {
        return this.$router.push('/detail?id='+id);
      }
    }
  }
</script>

<style scoped>
  @import url("./css/news.css");
</style>
