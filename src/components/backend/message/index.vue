<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>留言管理</el-breadcrumb-item>
      <el-breadcrumb-item>留言列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
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
            width="55"
            align="center">
          </el-table-column>
          <el-table-column
            prop="mname"
            label="姓名"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="tel"
            label="电话"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="area"
            label="地区"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="created_at"
            label="留言时间"
            :filters="getMonth()"
            :filter-method="filterHandler"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="com"
            label="来源url"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="client"
            label="客户端类型"
            align="center"
            sortable>
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.client == 'pc' ? 'primary' : 'success'">
                <template v-if="scope.row.client == 'pc' ">
                  电脑
                </template>
                <template v-else>
                  移动
                </template>
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="IP地址"
           align="center" prop="ip">
          </el-table-column>
          <el-table-column label="留言内容"
           align="center" prop="content">
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
    this.getMessage()
  },
  methods: {
    async getMessage() { // 获取用户列表
      const { data: res } = await this.$http.post('messageData?page=' + this.pagenum,this.$qs.stringify(this.setParam()))
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
      this.getMessage()
    },
    getChannel(status) { // 留言板块
      const sta = Number(status)
      if (sta === 1) {
        console.log(sta, 11)
        return '首页'
      }
    },
    getMonth() {
      var _date = new Date()
      _date.setMonth(2)
      _date.setDate(0)
      var lastDay = new Date(_date).getDate()
      return [{ text: _date.getFullYear() + '-01-31', value: _date.getFullYear() + '-01-31' },
        { text: _date.getFullYear() + '-02-' + lastDay, value: _date.getFullYear() + '-02-' + lastDay },
        { text: _date.getFullYear() + '-03-31', value: _date.getFullYear() + '-03-31' },
        { text: _date.getFullYear() + '-04-30', value: _date.getFullYear() + '-04-30' },
        { text: _date.getFullYear() + '-05-31', value: _date.getFullYear() + '-05-31' },
        { text: _date.getFullYear() + '-06-30', value: _date.getFullYear() + '-06-30' },
        { text: _date.getFullYear() + '-07-31', value: _date.getFullYear() + '-07-31' },
        { text: _date.getFullYear() + '-08-31', value: _date.getFullYear() + '-08-31' },
        { text: _date.getFullYear() + '-09-30', value: _date.getFullYear() + '-09-30' },
        { text: _date.getFullYear() + '-10-31', value: _date.getFullYear() + '-10-31' },
        { text: _date.getFullYear() + '-11-30', value: _date.getFullYear() + '-11-30' },
        { text: _date.getFullYear() + '-12-31', value: _date.getFullYear() + '-12-31' }
      ]
    },
    filterHandler(row, column) {
      return row.area
    }
  }
}
</script>

<style scoped>
.el-table .warning-row {
  background: oldlace;
}
.el-table .success-row {
  background: #f0f9eb;
}
</style>
