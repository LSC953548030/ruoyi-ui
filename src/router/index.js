import { createRouter, createWebHistory  } from 'vue-router'
// import LoginView from '../views/login.vue'
//路由
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/VForm.vue')
  },{
    path: '/login',
    name: "login",
    component: () => import("../page/login.vue")
  }
]

const router = createRouter({
  history: createWebHistory (),
  routes
})

export default router
