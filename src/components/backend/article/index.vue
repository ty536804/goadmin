<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>新闻管理</el-breadcrumb-item>
      <el-breadcrumb-item>新闻列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row>
        <el-col :span="12">
          <el-button type="primary" @click="edit(0)">添加
          </el-button>
        </el-col>
      </el-row>
      <template>
        <el-table
          :data="tableData"
          style="width: 100%"
          border
          ref="multipleTable"
          :default-sort = "{prop: 'ID', order: 'descending'}"
          >
          <el-table-column
            prop="id"
            label="ID"
            width="80"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="title"
            label="标题"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="summary"
            label="摘要"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="thumb_img"
            label="缩率图"
            sortable
            align="center">
            <template slot-scope="scope">
              <el-image :src="scope.row.thumb_img"></el-image>
            </template>
          </el-table-column>
          <el-table-column
            prop="admin"
            label="发布者"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
          label="来源"
          sortable
          width="90"
          align="center"
          prop="com">
          </el-table-column>
          <el-table-column
            prop="是否展示"
            label="状态"
            align="center"
            width="80"
            sortable>
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.is_show == 1 ? 'primary' : 'success'">
                <template v-if="scope.row.is_show == 1">
                  启用
                </template>
                <template v-else>
                  禁止
                </template>
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="是否热点"
          width="100"
          sortable
          align="center" prop="hot">
           <template slot-scope="scope">
             <el-tag
               :type="scope.row.hot == 1 ? 'danger' : 'info'">
               <template v-if="scope.row.hot == 1">
                 是
               </template>
               <template v-else>
                 否
               </template>
             </el-tag>
           </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="edit(scope.row.id)">编辑</el-button>
                <template v-if="scope.row.is_show == 1">
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row,2)">禁止</el-button>
                </template>
                <template v-else>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row,1)">启用</el-button>
                </template>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        :hide-on-single-page="true"
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      total: 0,
      multipleSelection: [],
      addCartdialogVisible: false,
      search: '',
      pageSize: 10,
      pagenum: 1,
      updateKey: 0,
    }
  },
  created() {
    this.getNews()
  },
  methods: {
    edit(id) {
      if (id >=1) {
        return this.$router.push('/new?id='+id);
      } else {
        return this.$router.push('/new');
      }
    },
    async getNews() { // 获取用户列表
      const { data: res } = await this.$http.post('articleList?page=' + this.pagenum)
      if (res.code === 200) {
        this.tableData = res.data.list
        this.total = res.data.count
        this.pageSize = res.data.size
      }
    },
    async handleDelete (index, con, statues) { // 编辑 开启
      const { data: res } = await this.$http.post('editStatus?id='+con.id+'&is_show='+statues)
      if (res.code === 200) {
        this.tableData[index].is_show = statues // 局部刷新
        return this.$message.success(res.msg)
      } else {
        return this.$message.error(res.msg)
      }
    },
    handleCurrentChange (newpagenum) { // 分页请求数据
      this.pagenum = newpagenum
      this.getNews()
    }
  }
}
</script>

<style>
.el-pager .more{
  width: fit-content !important;
  color: #303133 !important;
  box-shadow:none
}
.targetUrl{
  color: #fff;
  text-decoration: none;
}
</style>
