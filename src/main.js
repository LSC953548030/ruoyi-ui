import { createApp } from 'vue'
import App from './App.vue'
//导入路由
import router from './router'
//全局导入Element plus
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
//引入图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
//引入VForm 3库
import VForm3 from 'vform3-builds'  ;
// //引入VForm3样式
import 'vform3-builds/dist/designer.style.css'  ;

// import VForm from 'vform-builds'  //引入VForm库
 
// import 'vform-builds/dist/VFormDesigner.css'  //引入VForm样式

//导入请求组件
import axios from 'axios';
/* 注意：如果你的项目中有使用axios，请用下面一行代码将全局axios复位为你的axios！！ */
window.axios = axios

//设置默认请求地址
axios.defaults.baseURL = 'http://localhost:8080/';


const app = createApp(App);
app.use(router).use(ElementPlus)
.use(VForm3)
.mount('#app');

//全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
