<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/news' }">新闻列表</el-breadcrumb-item>
      <el-breadcrumb-item>新闻详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-form :model="addArticleForm" :rules="addArticleRules" ref="addArticleFormRef" label-width="100px">
          <el-form-item label="标题" prop="title">
            <el-input v-model="addArticleForm.title"></el-input>
          </el-form-item>
          <el-form-item label="显示位置" prop="nav_id">
            <div class="posi">
              <el-dropdown size="small" split-button v-model="addArticleForm.nav_id" @command="handlePosition">
                {{bposi}}
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="key" v-for="(item,key) in bposition" :key="key">{{item.name}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-form-item>
          <el-form-item label="来源" prop="com">
            <el-input v-model="addArticleForm.com"></el-input>
          </el-form-item>
          <el-form-item label="摘要" prop="summary">
            <el-input v-model="addArticleForm.summary" type="textarea" :autosize="{ minRows: 4, maxRows: 8}" placeholder="请输入摘要"></el-input>
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
                v-model="addArticleForm.thumb_img"
              >
                <el-button
                  type="primary"
                  size="small"
                  icon="el-icon-circle-plus-outline"
                  style="margin-left: 10px;"
                >上传文件</el-button>
              </el-upload>
          </el-form-item>
          <el-form-item label="发布者" prop="admin">
            <el-input v-model="addArticleForm.admin"></el-input>
          </el-form-item>
          <el-form-item label="是否热点">
            <el-radio-group v-model="addArticleForm.hot" >
              <el-radio :label="1">是</el-radio>
              <el-radio :label="2">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="内容" prop="content">
          <quill-editor
              v-model="addArticleForm.content">
          </quill-editor>
          </el-form-item>
          <el-form-item label="排序" prop="sort">
            <el-input v-model="addArticleForm.sort"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-radio-group v-model="addArticleForm.is_show" >
              <el-radio :label="1">正常</el-radio>
              <el-radio :label="2">禁用</el-radio>
            </el-radio-group>
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
      bposition: [],
      fileList: [],
      addArticleForm: {
        title: '',
        summary: '',
        id: '',
        type: '',
        nav_id: '',
        thumb_img: '',
        admin: '',
        hot: 1,
        content: '',
        sort: '',
        is_show: 1,
        com: ''
      },
      addArticleRules: {
        title: [
          { required: true, message: '标题不能为空', trigger: 'blur' }
        ],
        nav_id: [
          { required: true, message: '展示位置必须选择', trigger: 'blur' }
        ],
        thumb_img: [
          { required: true, message: '上传图片', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    if (this.$route.query.id !== undefined) {
      this.getArticle(this.$route.query.id)
    } else {
      this.addArticleForm.id = ''
      this.getArticle(0)
    }
  },
  methods: {
    handlePosition(command) {
      this.bposi = this.bposition[command].name
      this.addArticleForm.nav_id = this.bposition[command].id
    },
    async getArticle(id) {
      const { data: res } = await this.$http.post('getArticle?id='+id)
      if (res.code === 200) {
        this.addArticleForm.title = res.data.detail.title
        this.bposi = res.data.detail.nav.name
        this.addArticleForm.nav_id = res.data.detail.nav.id
        this.addArticleForm.com = res.data.detail.com
        this.addArticleForm.summary = res.data.detail.summary
        this.addArticleForm.thumb_img = res.data.detail.thumb_img
        this.fileList = id === 0 ? [] : [{name: res.data.detail.title,url:res.data.detail.thumb_img}]
        this.addArticleForm.admin = res.data.detail.admin
        this.addArticleForm.hot = res.data.detail.hot === 0 ? 2: res.data.detail.hot
        this.addArticleForm.sort = res.data.detail.sort
        this.addArticleForm.content = res.data.detail.content
        this.addArticleForm.is_show = res.data.detail.is_show
        this.bposition = res.data.list
        this.addArticleForm.id = res.data.detail.id
      }
    },
    onSubmit() {
      this.$refs.addArticleFormRef.validate(async valid => {
        if (!valid) return false
        const { data: res } = await this.$http.post('addArticle', this.$qs.stringify(this.addArticleForm))
        if (res.code === 200) {
          return this.$message.success(res.msg)
        } else {
          return this.$message.error(res.msg)
        }
      })
    },
    resetSiteForm() {
      this.$refs.addArticleFormRef.resetFields()
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
          that.addArticleForm.thumb_img = resdata.data
          that.$message.success("上传成功");
        } else {
          that.$message.error("上传失败");
        }
      })
      .catch(function(err) {
        that.$error(err);
      });
    }
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
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
</style>
