import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/IndexView.vue'),
    children: [
      {
        path: 'product',
        component: () => import('../views/Admin/ProductView.vue'),
        props: true 
      },
      {
        path: 'user',
        component: () => import('../views/Admin/UserView.vue'),
        props: true 
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
