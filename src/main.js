import { createApp } from 'vue'
import App from './App.vue'
//导入路由
import router from './router'
//全局导入Element plus
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css'
//导入请求组件
import axios from 'axios';


//设置默认请求地址
axios.defaults.baseURL = 'http://localhost:8080/';


createApp(App).use(router).use(ElementPlus).mount('#app')
