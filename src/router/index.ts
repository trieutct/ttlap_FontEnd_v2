import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { PageName } from '../common/contant/contants';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: PageName.TRANG_CHU,
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/index',
    name: PageName.BLOG,
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/login',
    name: PageName.LOGIN_PAGE,
    component: () => import('../views/Login/LoginView.vue')
  },
  {
    path: '/404',
    name: PageName.NOT_FOUND_PAGE,
    component: () => import('../components/errors/NotFound.vue')
  },
  {
    path: '/admin',
    name: PageName.ADMIN,
    component: () => import('../views/IndexView.vue'),
    children: [
      {
        path: 'product',
        name:PageName.ADMIN_PRODUCT,
        component: () => import('../views/Admin/ProductView.vue'),
        props: true 
      },
      {
        path: 'user',
        name:PageName.ADMIN_USER,
        component: () => import('../views/Admin/UserView.vue'),
        props: true 
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
