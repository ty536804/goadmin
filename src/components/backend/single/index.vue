<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>单页管理</el-breadcrumb-item>
      <el-breadcrumb-item>单页列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row>
        <el-col :span="12">
          <el-button type="primary" @click="signleDetail(0)">添加
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
            prop="nav.name"
            label="位置"
            width="100"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="name"
            label="标题"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="summary"
            label="摘要"
            sortable
            :formatter="subSummary"
            align="center">
          </el-table-column>
          <el-table-column
            prop="thumb_img"
            label="缩率图"
            sortable
            width="100"
            align="center">
            <template slot-scope="scope">
              <el-image :src="scope.row.thumb_img" style="width: 50px;"></el-image>
            </template>
          </el-table-column>
          <el-table-column
          label="内容"
          sortable
          width="100"
          align="center"
          :formatter="subCon"
          prop="content">
          </el-table-column>
          <el-table-column label="客户端类型"
          width="110"
          sortable
          align="center" prop="client_type">
           <template slot-scope="scope">
             <el-tag
               :type="scope.row.client_type == 2 ? 'danger' : 'success'">
               <template v-if="scope.row.client_type == 2">
                 电脑
               </template>
               <template v-else>
                 移动
               </template>
             </el-tag>
           </template>
          </el-table-column>
          <el-table-column
            prop="tag"
            label="标签"
            width="80"
            sortable
            align="center">
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                size="mini" @click="signleDetail(scope.row.id)">编辑</el-button>
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
      pagenum: 1,
      updateKey: 0
    }
  },
  created() {
    this.getSingleList()
  },
  methods: {
    signleDetail(id) {
      if (id >=1) {
        return this.$router.push('/singles?id='+id);
      } else {
        return this.$router.push('/singles');
      }
    },
    async getSingleList() { // 获取用户列表
      const { data: res } = await this.$http.post('singleList?page=' + this.pagenum,this.$qs.stringify(this.setParam()))
      if (res.code === 200) {
        this.tableData = res.data.list
        this.total = res.data.count
        this.pageSize = res.data.size
      }
    },
    handleDelete (index, con, statues) { // 编辑 开启
      con.is_show = statues
      this.updateKey = index
      this.updateNew(con)
    },
    async updateNew(con) {
      const { data: res } = await this.$http.post('addArticle', this.$qs.stringify(con))
      if (res.code === 200) {
        this.updateInitVal(con)
        return this.$message.success(res.msg)
      } else {
        return this.$message.error(res.msg)
      }
    },
    updateInitVal(newData) { // 局部刷新
      const con = this.$qs.parse(this.tableData[this.updateKey])
      for (const i in con) {
        for (const j in newData) {
          if (i === j) {
            this.tableData[this.updateKey][j] = newData[j]
          }
        }
      }
    },
    handleCurrentChange (newpagenum) { // 分页请求数据
      this.pagenum = newpagenum
      this.getSingleList()
    },
    subCon(row, column) {
      return row.content.substring(0, 20) + '...'
    },
    subSummary(row, column) {
      return row.content.substring(0, 20) + '...'
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
.edit{
  text-decoration: none;
  display: inline-block;
}
</style>
