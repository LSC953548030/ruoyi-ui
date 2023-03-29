import { createRouter, createWebHashHistory } from 'vue-router'
// import LoginView from '../views/login.vue'
//路由
const routes = [
  {
    path: '/login',
    name: "login",
    component: () => import("../page/login.vue")
  }, {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
