<template>
  <el-form ref="form" :model="form" :rules="loginRules" label-width="80px">
    <el-form-item label="用户名" style="margin-top: 40px; margin-right: 40px;">
      <el-input prefix-icon="UserFilled" v-model="form.userName" placeholder=请输入用户名></el-input>
    </el-form-item>
    <el-form-item label="密码" style=" margin-right: 40px;">
      <el-input prefix-icon="Lock" type="password" v-model="form.password" placeholder=请输入密码></el-input>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="form.rememberMe" style=" margin-right: 20px;">记住我</el-checkbox> | 
      <el-button type="text" @click="onForgotPassword" style=" margin-left: 20px;">忘记密码？</el-button>
    </el-form-item>
    <el-form-item>
      <el-button icon="CircleCheckFilled" type="primary" @click="onSubmit" style="margin-right: 20px;">登录</el-button>
      <el-button icon="EditPen" type="primary" @click="onRegister">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';

export default {
  name: 'login',
  data() {
    return {
      form: {
        userName: 'test',
        password: '123456',
        rememberMe: false
      }
    };
  },
  methods: {
    onSubmit() {
      axios.post('/api/user/login', this.form)
        .then(response => {
          const token = response.data;
          Cookies.set('token', token.data);
          this.router.push('/');
        }).catch(error =>{
          //todo 
          console.log("失败");
      
        });
    },
    onRegister() {
      // 模拟跳转到注册页面
      this.router.push('/register');
    }
  },
  //设置跳转路由
  setup() {
    const router = useRouter();
    return { router };
  }
};
</script>


<style>
/* 居中,悬浮效果 */
.el-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
body {
  background-image: url('../assets/login2.jpg');
  background-size: cover;
  background-position: center;
}
</style>