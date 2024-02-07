import { createRouter, createWebHistory, NavigationGuardWithThis, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { PageName, Role } from '../common/contant/contants';
import authMiddleware from './authMiddleware';
import VueRouteMiddleware, { GLOBAL_MIDDLEWARE_NAME } from './middleware';
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
    component: () => import('../views/Login/LoginView.vue'),
    meta: {
      // onlyWhenLoggedOut: true,
      public: true,
    },
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
        component: () => import('../views/Admin/Product/ProductView.vue'),
        props: true,
        meta: {
          role:Role.ADMIN
        },
      },
      {
        path: 'user',
        name:PageName.ADMIN_USER,
        component: () => import('../views/Admin/User/UserView.vue'),
        props: true ,
        meta: {
          role:Role.ADMIN
        },
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

router.beforeEach(
  VueRouteMiddleware({
    [GLOBAL_MIDDLEWARE_NAME]: authMiddleware,
  }) as NavigationGuardWithThis<unknown>,
);

export default router
