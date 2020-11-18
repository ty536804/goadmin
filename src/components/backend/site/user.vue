<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>基础设置</el-breadcrumb-item>
      <el-breadcrumb-item>会员列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row>
        <el-col :span="12">
          <el-button type="primary" @click="showAddDialog">添加用户</el-button>
        </el-col>
        <!-- <el-col :span="12">
          <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="search"
              @input="searchUser"
              >
            </el-input>
        </el-col> -->
      </el-row>
      <template>
        <el-table
          :data="tableData"
          style="width: 100%"
          border
          ref="multipleTable"
          @selection-change="handleSelectionChange"
          :row-class-name="tableRowClassName"
          :default-sort = "{prop: 'ID', order: 'descending'}"
          >
          <el-table-column
            label="ID"
            prop="id"
            width="100"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="login_name"
            label="用户名"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="nick_name"
            label="昵称"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="tel"
            label="手机"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="email"
            label="邮箱"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="statues"
            label="状态"
            align="center"
            width="90"
            sortable>
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.statues == 1 ? 'primary' : 'success'">
                <template v-if="scope.row.statues == 1">
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
                @click="showAddDialog(scope.$index, scope.row)">编辑</el-button>
                <template v-if="scope.row.statues == 1">
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
    <!-- 添加分类对话框 -->
    <el-dialog
      title="添加用户"
      width="50%"
      :visible.sync="addCartdialogVisible" @close="addCateDialogClosed">
      <!-- 添加分类表单 -->
      <el-form :model="addUserForm" :rules="addUserRules" ref="addUserFormRef" label-width="100px">
        <el-form-item label="用户名称" prop="nick_name">
          <el-input v-model="addUserForm.nick_name"></el-input>
        </el-form-item>
        <el-form-item label="登陆账号" prop="login_name">
          <el-input v-model="addUserForm.login_name"></el-input>
        </el-form-item>
        <input type="hidden" name="id" v-model="addUserForm.id"/>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addUserForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="addUserForm.pwd"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="tel">
          <el-input v-model="addUserForm.tel"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="addUserForm.statues" >
            <el-radio :label="1">正常</el-radio>
            <el-radio :label="2">禁用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addCartdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    let sendEmail = (rule, value, callback) => {
        var regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if (value !== '' && !regEmail.test(value)) {
            callback(new Error('邮箱格式不正确'))
        } else {
          callback()
        }
    };
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
      addUserForm: {
        nick_name: '',
        login_name: '',
        email: '',
        pwd: '',
        tel: '',
        statues: '2',
        id: '',
        timestamp:Date.parse(new Date()) / 1000,
        version: "v1",
        client: "pc",
        sign: window.sessionStorage.getItem("sign")
      },
      // 添加分类表单验证
      addUserRules: {
        nick_name: [
          { required: true, message: '请添写用户名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        login_name: [
          { required: true, message: '请添写登陆账号', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请添写邮箱', trigger: 'blur' },
          { validator: sendEmail, trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请添写密码', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '请添写手机号码', trigger: 'blur' },
          { min: 11, max: 11, message: '长度在11个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    async getUser() { // 获取用户列表
      const { data: res } = await this.$http.post('userData?page=' + this.pagenum,this.$qs.stringify(this.setParam()))
      if (res.code === 200) {
        this.tableData = res.data.list
        this.total = res.data.count
        this.pageSize = res.data.size
      } else {
        return this.$message.error(res.msg)
      }
    },
    toggleSelection(rows) {
      if (rows) { // 全选
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row, true)
        })
      } else { // 取消
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) { // 选中的值
      this.multipleSelection = val
    },
    showAddDialog (index, con) { // 添加、编辑按钮
      if (con !== undefined) {
        this.addUserForm.nick_name = con.nick_name
        this.addUserForm.login_name = con.login_name
        this.addUserForm.email = con.email
        this.addUserForm.pwd = con.pwd
        this.addUserForm.tel = con.tel
        this.addUserForm.statues = con.statues
        this.addUserForm.id = con.id
        this.updateKey = index
      } else {
        this.addUserForm.nick_name = ''
        this.addUserForm.login_name = ''
        this.addUserForm.email = ''
        this.addUserForm.pwd = ''
        this.addUserForm.tel = ''
        this.addUserForm.id = ''
        this.addUserForm.statues = 2
      }
      this.addCartdialogVisible = true
    },
    handleDelete (index, con, statues) { // 编辑 开启
      con.statues = statues
      this.updateKey = index
      this.updateUser(con)
    },
    addCateDialogClosed () { // 弹出框取消
      this.$refs.addUserFormRef.resetFields()
    },
    addUser() {
      this.$refs.addUserFormRef.validate(async valid => {
        if (!valid) return false
        this.updateUser()
      })
    },
    async updateUser(con = '') {
      var _param = this.addUserForm
      if (con !== '') {
        _param = this.addParam(con)
      }
      const { data: res } = await this.$http.post('AddUser', this.$qs.stringify(_param))
      if (res.code === 200) {
          this.addCartdialogVisible = false
        if (con === '' && this.addUserForm.id === '') {
          this.addUserForm.id = res.data
          this.tableData.push(this.$qs.parse(this.addUserForm))
        } else if (this.addUserForm.id !== '') {
          this.updateInitVal(this.addUserForm)
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
            console.log()
            this.tableData[this.updateKey][j] = newData[j]
          }
        }
      }
    },
    searchUser() {
      console.log(this.search)
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    handleCurrentChange (newpagenum) {
      this.pagenum = newpagenum
      this.getUser()
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
