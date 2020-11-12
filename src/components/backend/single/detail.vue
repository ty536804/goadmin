<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/single' }">单页列表</el-breadcrumb-item>
      <el-breadcrumb-item>单页详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-form :model="addSingleForm" :rules="addSingleRules" ref="addSingleFormRef" label-width="100px">
          <el-form-item label="标题" prop="name">
            <el-input v-model="addSingleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="显示位置" prop="nav_id">
            <div class="posi">
              <el-dropdown size="small" split-button v-model="addSingleForm.nav_id" @command="handlePosition">
                {{bposi}}
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="key" v-for="(item,key) in bposition" :key="key">{{item.name}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-form-item>
          <el-form-item label="摘要" prop="summary">
            <el-input v-model="addSingleForm.summary"></el-input>
          </el-form-item>
          <el-form-item label="标签" prop="tag">
            <el-input v-model="addSingleForm.tag"></el-input>
          </el-form-item>
          <input type="hidden" name="id" v-model="addSingleForm.id"/>
          <el-form-item label="客户端类型" prop="client_type">
            <el-dropdown size="small" split-button v-model="addSingleForm.client_type" @command="handleCommand">
              {{type}}
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="1">PC</el-dropdown-item>
                <el-dropdown-item command="2">WAP</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-form-item>
          <el-form-item label="上传图片" prop="thumb_img">
              <el-upload
                action="aaaa"
                accept="image/*"
                :http-request="fileUpload"
                :on-success="handleSuccess"
                list-type="picture"
                :limit="1"
                :on-exceed="handleExceed"
                :file-list="fileList"
                :on-remove="handleRemove"
                v-model="addSingleForm.thumb_img"
              >
                <el-button
                  type="primary"
                  size="small"
                  icon="el-icon-circle-plus-outline"
                  style="margin-left: 10px;"
                >上传文件</el-button>
              </el-upload>
          </el-form-item>
          <el-form-item label="内容" prop="content">
          <quill-editor
              v-model="addSingleForm.content">
          </quill-editor>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button @click="resetSiteForm">取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

export default {
  components:{quillEditor},
  data() {
    return {
      type: 'PC',
      bposi: '请选择',
      fileList:[],
      bposition: [],
      editorOption: {},
      disabled: false,
      addSingleForm: {
        name: '',
        tag: '',
        id: '',
        client_type: 1,
        nav_id: '',
        summary: '',
        content: '',
        thumb_img: ''
      },
      addSingleRules: {
        name: [
          { required: true, message: '标题不能为空', trigger: 'blur' }
        ],
        nav_id: [
          { required: true, message: '展示位置必须选择', trigger: 'blur' }
        ],
        tag: [
          { required: true, message: '标签不能为空', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    if (this.$route.query.id !== undefined) {
      this.getSingle(this.$route.query.id)
    } else {
      this.addSingleForm.id = ''
      this.getSingle(0)
    }
  },
  methods: {
    handleCommand(command) {
      if (Number(command) === 1) {
        this.type = 'PC'
        this.addSingleForm.client_type = command
      } else if (Number(command) === 2) {
        this.type = 'WAP'
        this.addSingleForm.client_type = command
      } else {
        this.addSingleForm.client_type = 1
        this.type = 'PC'
      }
    },
    handlePosition(command) {
      this.bposi = this.bposition[command].name
      this.addSingleForm.nav_id = this.bposition[command].id
    },
    async getSingle(id) {
      const { data: res } = await this.$http.post('getSingle?id='+id)
      if (res.code === 200) {
        this.addSingleForm.name = res.data.detail.name
        this.addSingleForm.summary = res.data.detail.summary
        this.addSingleForm.tag = res.data.detail.tag
        this.addSingleForm.nav_id = res.data.detail.nav_id
        this.bposi = id === 0 ? '请选择' : res.data.detail.nav.name
        this.addSingleForm.client_type = res.data.detail.client_type
        this.handleCommand(res.data.detail.client_type)
        this.addSingleForm.content = res.data.detail.content
        this.addSingleForm.thumb_img = res.data.detail.thumb_img
        this.addSingleForm.id = res.data.detail.id
        this.bposition = res.data.list
        this.fileList = id === 0 ? [] : [{name: res.data.detail.name,url:res.data.detail.thumb_img}]
      }
    },
    onSubmit() {
      this.$refs.addSingleFormRef.validate(async valid => {
        if (!valid) return false
        const { data: res } = await this.$http.post('addSingle', this.$qs.stringify(this.addSingleForm))
        if (res.code === 200) {
          return this.$message.success(res.msg)
        } else {
          return this.$message.error(res.msg)
        }
      })
    },
    resetSiteForm() {
      this.$refs.addSingleFormRef.resetFields()
    },
    handleSuccess(response, file, fileList) {
      // console.log(response, file, fileList)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，请删除当前文件之后再进行上传`);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    fileUpload(params) {//上传图片
      const file = params.file;
      const form = new FormData();
      // 文件对象
      form.append("file", file);
      var that = this;
      this.$http({
        method: "post",
        data: form,
        url: that.baseURL+'upload',
        headers: { "content-type": "multipart/form-data" }
      })
      .then(function(response) {
        let resdata = response.data;
        if (resdata.code === 200) {
          that.addSingleForm.thumb_img = resdata.data
          that.$message.success("上传成功");
        } else {
          that.$message.error("上传失败");
        }
      })
      .catch(function(err) {
        that.$error(err);
      });
    },
  }
}
</script>

<style>
  .el-upload .el-upload__input{
    display: none !important;
  }
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown-menu__item{
  float: left;
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
}
.el-dropdown{
  box-sizing: border-box;
}
.el-dropdown-menu{
  left: 340px !important;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 88px;
  height: 88px;
  line-height: 88px;
  text-align: center;
}
.avatar {
  width: 88px;
  height: 88px;
  display: block;
}
.panel-default>.panel-heading {
    color: #333;
    background-color: #f5f5f5;
    border-color: #ddd;
}
.panel-heading {
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
</style>
