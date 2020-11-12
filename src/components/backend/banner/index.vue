<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>Banner管理</el-breadcrumb-item>
      <el-breadcrumb-item>Banner列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row>
        <el-col :span="12">
          <el-button type="primary" @click="edit(0)">
        添加
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
            prop="bname"
            label="标题"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="nav.name"
            label="栏目位置"
            width="120"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="target_link"
            label="跳转地址"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="tag"
            label="标签"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="type"
            label="客户端类型"
            align="center"
            width="110"
            sortable>
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.type == 1 ? 'primary' : 'success'">
                <template v-if="scope.row.type == 1 ">
                  电脑
                </template>
                <template v-else>
                  移动
                </template>
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="备注"
           align="center" prop="info"
           :formatter="subSummary"
           >
          </el-table-column>
          <el-table-column
            prop="is_show"
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
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="edit(scope.row.id)">编辑</el-button>
                <template v-if="scope.row.is_show == 1">
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row,0)">禁止</el-button>
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
        <!-- <div style="margin-top: 20px">
            <el-button @click="toggleSelection(tableData)">全选</el-button>
            <el-button @click="toggleSelection()">取消</el-button>
        </div> -->
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
      pagenum: 1
    }
  },
  created() {
    this.getBanners()
  },
  methods: {
    edit(id) {
      if (id >=1) {
        return this.$router.push('/banners?id='+id);
      } else {
        return this.$router.push('/banners');
      }
    },
    async getBanners() { // 获取banner列表
      const { data: res } = await this.$http.get('getBanners?page=' + this.pagenum)
      if (res.code === 200) {
        this.tableData = res.data.list
        this.total = res.data.count
        this.pageSize = res.data.size
      }
    },
    handleDelete (index, con, statues) { // 编辑 开启
      this.inputParam(con, statues)
    },
    inputParam(con, statues = '') { // 公共参数
      this.addUserForm.nick_name = con.nick_name
      this.addUserForm.login_name = con.login_name
      this.addUserForm.email = con.email
      this.addUserForm.pwd = con.pwd
      this.addUserForm.tel = con.tel
      if (statues !== '') {
        this.addUserForm.statues = statues
      } else {
        this.addUserForm.statues = con.statues
      }
      this.addUserForm.id = con.id
    },
    handleCurrentChange (newpagenum) { // 分页请求数据
      this.pagenum = newpagenum
      this.getBanners()
    },
    getChannel(status) { // 留言板块
      const sta = Number(status)
      if (sta === 1) {
        console.log(sta, 11)
        return '首页'
      }
    },
    subSummary(row, column) {
      if (row.info == '' || row.info== undefined) {
        return ''
      }
      return row.info.substring(0, 20) + '...'
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
