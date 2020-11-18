<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>基础设置</el-breadcrumb-item>
      <el-breadcrumb-item>网站信息</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 内容区 -->
    <el-card>
      <el-form :model="site" label-width="80px" class="addform" :rules="siteRule" ref="siteFormRef">
        <el-form-item label="网站标题" prop="site_title">
          <el-input v-model="site.site_title" placeholder="网站标题"></el-input>
        </el-form-item>
        <input type="hidden" name="id" v-model="site.id"/>
        <el-form-item label="网站描述" prop="site_desc">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model="site.site_desc" placeholder="网站描述"></el-input>
        </el-form-item>
        <el-form-item label="关键字" prop="site_keyboard">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model="site.site_keyboard" placeholder="关键字"></el-input>
        </el-form-item>
        <el-form-item label="网站版权" prop="site_copyright">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model="site.site_copyright" placeholder="网站版权"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="site.site_tel" placeholder="手机号码"></el-input>
        </el-form-item>
        <el-form-item label="座机电话">
          <el-input v-model="site.land_line" placeholder="座机电话"></el-input>
        </el-form-item>
        <el-form-item label="400电话">
          <el-input v-model="site.client_tel" placeholder="400电话"></el-input>
        </el-form-item>
        <el-form-item label="网站邮箱" prop="site_email">
          <el-input v-model="site.site_email" placeholder="网站邮箱"></el-input>
        </el-form-item>
        <el-form-item label="公司地址" prop="site_address">
          <el-input v-model="site.site_address" placeholder="公司地址"></el-input>
        </el-form-item>
        <el-form-item label="备案号">
          <el-input v-model="site.record_number" placeholder="备案号"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="site.admin_tel" placeholder="接收短信手机号"></el-input>
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
      site: {
        site_title: '',
        site_desc: '',
        site_keyboard: '',
        site_copyright: '',
        site_tel: '',
        land_line: '',
        client_tel: '',
        site_email: '',
        site_address: '',
        record_number: '',
        admin_tel: '',
        id: 0,
        timestamp:Date.parse(new Date()) / 1000,
        version: "v1",
        client: "pc",
        sign: window.sessionStorage.getItem("sign")
      },
      siteRule: {
        site_title: [
          { required: true, message: '网站标题不能为空', trigger: 'blur' }
        ],
        site_desc: [
          { required: true, message: '网站描述不能为空', trigger: 'blur' }
        ],
        site_keyboard: [
          { required: true, message: '关键字不能为空', trigger: 'blur' }
        ],
        site_copyright: [
          { required: true, message: '版权不能为空', trigger: 'blur' }
        ],
        site_email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' }
        ],
        site_address: [
          { required: true, message: '地址不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.getSiteInfo()
  },
  methods: {
    async getSiteInfo() {
      const { data: res } = await this.$http.post('getSite',this.$qs.stringify(this.setParam()))
      if (res.code === 200) {
        this.site.site_title = res.data.site_title
        this.site.site_desc = res.data.site_desc
        this.site.site_keyboard = res.data.site_keyboard
        this.site.site_copyright = res.data.site_copyright
        this.site.site_tel = res.data.site_tel
        this.site.land_line = res.data.land_line
        this.site.client_tel = res.data.client_tel
        this.site.site_email = res.data.site_email
        this.site.site_address = res.data.site_address
        this.site.record_number = res.data.record_number
        this.site.admin_tel = res.data.admin_tel
        this.site.id = res.data.id
      }
    },
    onSubmit() {
      this.$refs.siteFormRef.validate(async valid => {
        if (!valid) return false
        const { data: res } = await this.$http.post('addSite', this.$qs.stringify(this.site))
        if (res.code === 200) {
          return this.$message.success(res.msg)
        } else {
          return this.$message.error(res.msg)
        }
      })
    },
    resetSiteForm() {
      this.$refs.siteFormRef.resetFields()
    }
  }
}
</script>

<style scoped>
  .el-card__body{
    padding-top: 20px !important;
  }
  .el-form-item{
    padding-right: 10px !important;
    margin-bottom: 15px;
  }
  .el-form-item__label,.el-input{
    font-size: 12px !important;
  }
  .el-breadcrumb {
      width: 100%;
      background: #fff;
      height: 37px;
      line-height: 37px !important;
      padding-left: 12px !important;
      box-sizing: border-box;
  }
</style>
