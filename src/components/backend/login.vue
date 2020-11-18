<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../../assets/logo.png" />
      </div>
      <!-- 登录表单区域 -->
      <el-form :model="loginForm" class="login_form" :rules="loginFormRules" ref="loginFormRef">
        <!-- 用户名 -->
        <el-form-item prop="uname">
          <el-input v-model="loginForm.uname" placeholder="用户名"  prefix-icon="el-icon-s-custom"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="pword">
          <el-input v-model="loginForm.pword" placeholder="密码" prefix-icon="el-icon-s-goods" type="password"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
           <el-button type="primary" @click="login">登录</el-button>
           <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        uname: '',
        pword: ''
      },
      loginFormRules: {
        uname: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        pword: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 重置
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return false
        // 如果某个方法的返回值是promise，用await简化这次promise操作
        const param = {
          uname: this.loginForm.uname,
          pword: this.loginForm.pword,
          timestamp: Date.parse(new Date()) / 1000,
          version: 'v1',
          client:'pc',
          sign:""
        }
        var _sgin = this.getParam()
        var that = this;
        const { data: res } = await this.$http.post('login', this.$qs.stringify(param))
        if (res.code !== 200) {
          return this.$message.error(res.msg)
        }
        if (res.code === 200 && _sgin ==res.msg) {
          window.sessionStorage.setItem('sign', _sgin.toString())
          this.$router.push('/welcome')
        }
      })
    }
  }
}
</script>

<style scoped>
  .login_container{
    background-color: #2b4b6b;
    height: 100%;
  }
  .login_box{
    width: 450px;
    height: 300px;
    background: #fff;
    border-radius: 3px;
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .avatar_box {
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: #fff;
    }
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #eee;
    }
  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .btns{
    display: flex;
    justify-content:center;
  }
</style>
