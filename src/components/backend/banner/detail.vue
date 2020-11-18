<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/banner' }">Banner列表</el-breadcrumb-item>
      <el-breadcrumb-item>Banner详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-form :model="addBannerForm" :rules="addBannerRules" ref="addBannerFormRef" label-width="100px">
          <el-form-item label="标题" prop="bname">
            <el-input v-model="addBannerForm.bname"></el-input>
          </el-form-item>
          <el-form-item label="标签" prop="tag">
            <el-input v-model="addBannerForm.tag"></el-input>
          </el-form-item>
          <input type="hidden" name="id" v-model="addBannerForm.id"/>
          <el-form-item label="客户端类型" prop="type">
            <el-dropdown size="small" split-button v-model="addBannerForm.type" @command="handleCommand">
              {{type}}
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="1">PC</el-dropdown-item>
                <el-dropdown-item command="2">WAP</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-form-item>
          <el-form-item label="链接" prop="target_link">
            <el-input v-model="addBannerForm.target_link"></el-input>
          </el-form-item>
          <el-form-item label="显示位置" prop="bposition">
            <div class="posi">
              <el-dropdown size="small" split-button v-model="addBannerForm.bposition" @command="handlePosition">
                {{bposi}}
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="key" v-for="(item,key) in bposition" :key="key">{{item.name}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-form-item>
          <el-form-item label="上传图片" prop="imgurl">
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
              v-model="addBannerForm.imgurl"
            >
              <el-button
                type="primary"
                size="small"
                icon="el-icon-circle-plus-outline"
                style="margin-left: 10px;"
              >上传文件</el-button>
            </el-upload>

          </el-form-item>
          <el-form-item label="备注" prop="info">
            <el-input v-model="addBannerForm.info" type="textarea" :autosize="{ minRows: 4, maxRows: 8}"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-radio-group v-model="addBannerForm.is_show" >
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
export default {
  data() {
    return {
      type: 'PC',
      bposi: '请选择',
      bposition: [],
      fileList:[],
      addBannerForm: {
        bname: '',
        tag: '',
        id: '',
        type: 1,
        target_link: '',
        bposition: '',
        imgurl: '',
        info: '',
        is_show: 1,
        timestamp:Date.parse(new Date()) / 1000,
        version: "v1",
        client: "pc",
        sign: window.sessionStorage.getItem("sign")
      },
      addBannerRules: {
        bname: [
          { required: true, message: '标题不能为空', trigger: 'blur' }
        ],
        bposition: [
          { required: true, message: '展示位置必须选择', trigger: 'blur' }
        ],
        tag: [
          { required: true, message: '标签不能为空', trigger: 'blur' }
        ],
        imgurl: [
          { required: true, message: '上传图片', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    if (this.$route.query.id !== undefined) {
      this.getBanner(this.$route.query.id)
    } else {
      this.addBannerForm.id = ''
      this.getBanner(0)
    }
  },
  methods: {
    handleCommand(command) {
      if (Number(command) === 1) {
        this.type = 'PC'
        this.addBannerForm.type = command
      } else if (Number(command) === 2) {
        this.type = 'WAP'
        this.addBannerForm.type = command
      } else {
        this.addBannerForm.type = 1
        this.type = 'PC'
      }
    },
    handlePosition(command) {
      this.bposi = this.bposition[command].name
      this.addBannerForm.bposition = this.bposition[command].id
    },
    async getBanner(id) {
      const { data: res } = await this.$http.post('getBanner?id='+id,this.$qs.stringify(this.setParam()))
      if (res.code === 200) {
        this.addBannerForm.bname = res.data.detail.bname
        this.addBannerForm.tag = res.data.detail.tag
        this.addBannerForm.type = res.data.detail.type
        this.handleCommand(res.data.detail.type)
        this.addBannerForm.target_link = res.data.detail.target_link
        this.addBannerForm.is_show = res.data.detail.is_show
        this.addBannerForm.bposition = res.data.detail.bposition
        this.bposi = id === 0 ? '请选择' : res.data.detail.nav.name
        this.bposition = res.data.list
        this.fileList = id === 0 ? [] : [{name: res.data.detail.bname,url:res.data.detail.imgurl}],
        this.addBannerForm.info = res.data.detail.info
        this.addBannerForm.imgurl = res.data.detail.imgurl
      }
    },
    onSubmit() {
      this.$refs.addBannerFormRef.validate(async valid => {
        if (!valid) return false
        const { data: res } = await this.$http.post('AddBanner', this.$qs.stringify(this.addBannerForm))
        if (res.code === 200) {
          return this.$message.success(res.msg)
        } else if (res.code === 500) {
          return this.$message.error(res.msg)
        } else {
          return this.$message.error(res.msg)
        }
      })
    },
    resetSiteForm() {
        this.$refs.addBannerFormRef.resetFields()
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
          form.append("timestamp", Date.parse(new Date()) / 1000);
          form.append("version", "v1");
          form.append("client", "pc");
          form.append("sign", window.sessionStorage.getItem("sign"));
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
              that.addBannerForm.imgurl = resdata.data
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
