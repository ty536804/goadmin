<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>导航管理</el-breadcrumb-item>
      <el-breadcrumb-item>导航列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row>
        <el-col :span="12">
          <el-button type="primary" @click="showAddDialog">添加导航</el-button>
        </el-col>
      </el-row>
      <template>
        <el-table
          :data="tableData"
          style="width: 100%"
          border
          ref="multipleTable"
          @selection-change="handleSelectionChange"
          :default-sort = "{prop: 'ID', order: 'descending'}"
          >
          <el-table-column
            type="index"
            label="ID"
            width="100"
            align="center">
          </el-table-column>
          <el-table-column
            prop="name"
            label="名称"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="base_url"
            label="跳转地址"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="is_show"
            label="是否展示"
            align="center"
            width="100"
            sortable>
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.is_show == 1 ? 'primary' : 'success'">
                <template v-if="scope.row.is_show == 1">
                  展示
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
                @click="showAddDialog(scope.$index, scope.row)">编辑</el-button>
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
    <!-- 添加分类对话框 -->
    <el-dialog
      title="添加用户"
      width="50%"
      :visible.sync="addCartdialogVisible" @close="addCateDialogClosed">
      <!-- 添加分类表单 -->
      <el-form :model="addNavForm" :rules="addNavRules" ref="addNavFormRef" label-width="100px">
        <el-form-item label="名称" prop="name">
          <el-input v-model="addNavForm.name"></el-input>
        </el-form-item>
        <el-form-item label="跳转地址" prop="base_url">
          <el-input v-model="addNavForm.base_url"></el-input>
        </el-form-item>
        <input type="hidden" name="id" v-model="addNavForm.id"/>
        <el-form-item label="状态">
          <el-radio-group v-model="addNavForm.is_show" >
            <el-radio :label="1">正常</el-radio>
            <el-radio :label="0">禁用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addCartdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addNav">确 定</el-button>
      </span>
    </el-dialog>
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
      // 添加分类表单数据
      addNavForm: {
        name: '',
        base_url: '',
        is_show: 1,
        id: ''
      },
      // 添加分类表单验证
      addNavRules: {
        name: [
          { required: true, message: '请添写名称', trigger: 'blur' }
        ],
        base_url: [
          { required: true, message: '请添写跳转地址', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.getNavs()
  },
  methods: {
    async getNavs() { // 获取导航列表
      const { data: res } = await this.$http.get('getNavs?page=' + this.pagenum)
      if (res.code === 200) {
        this.tableData = res.data
        this.total = 0
        this.pageSize = 0
      }
    },
    handleSelectionChange(val) { // 选中的值
      this.multipleSelection = val
    },
    showAddDialog (index, con) { // 添加、编辑按钮
      if (con !== undefined) {
        this.addNavForm.name = con.name
        this.addNavForm.is_show = con.is_show
        this.addNavForm.base_url = con.base_url
        this.addNavForm.id = con.id
        this.updateKey = index
      } else {
        this.addNavForm.name = ''
        this.addNavForm.is_show = 1
        this.addNavForm.base_url = ''
        this.addNavForm.id = ''
      }
      this.addCartdialogVisible = true
    },
    handleDelete (index, con, statues) { // 编辑 开启
      con.is_show = statues
      this.updateKey = index
      this.updateNav(con)
    },
    addCateDialogClosed () { // 弹出框取消
      this.$refs.addNavFormRef.resetFields()
    },
    addNav() {
      this.$refs.addNavFormRef.validate(async valid => {
        if (!valid) return false
        this.updateNav()
      })
    },
    async updateNav(con = '') {
      var _param = this.addNavForm
      if (con !== '') {
        _param = con
      }
      const { data: res } = await this.$http.post('addNav', this.$qs.stringify(_param))
      if (res.code === 200) {
        this.addCartdialogVisible = false
        if (con === '' && this.addNavForm.id === '') {
          this.tableData.push(this.$qs.parse(this.addNavForm))
        } else if (this.addNavForm.id !== '') {
          this.updateInitVal(this.addNavForm)
        } else {
          this.updateInitVal(con)
        }
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
    handleCurrentChange (newpagenum) {
      this.pagenum = newpagenum
      this.getNavs()
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
