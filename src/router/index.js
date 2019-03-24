import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/views/layout/Layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true, affix: true }
      },
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

export const asyncRoutes = [
  {
    path: '/european-table',
    component: Layout,
    redirect: 'noredirect',
    children: [
      {
        path: '',
        component: () => import('@/views/table/publicTable'),
        name: 'europeanTable',
        meta: { title: '中国VS欧盟标准', icon: 'oumeng' }
      }
    ]
  },
  {
    path: '/korea-table',
    component: Layout,
    redirect: 'noredirect',
    children: [
      {
        path: '',
        component: () => import('@/views/table/publicTable'),
        name: 'koreaTable',
        meta: { title: '中国VS韩国标准', icon: 'america' }
      }
    ]
  },
  {
    path: '/user-table',
    component: Layout,
    redirect: 'noredirect',
    children: [
      {
        path: '',
        component: () => import('@/views/table/userTable'),
        name: 'userTable',
        meta: { title: '用户管理', icon: 'user' }
      }
    ]
  },
  {
    path: '/answer-table',
    component: Layout,
    redirect: 'noredirect',
    children: [
      {
        path: '',
        component: () => import('@/views/table/answerTable'),
        name: 'answerTable',
        meta: { title: '问题评论管理', icon: 'answer' }
      }
    ]
  },
  {
    path: '/feedback-table',
    component: Layout,
    redirect: 'noredirect',
    children: [
      {
        path: 'index',
        component: () => import('@/views/table/feedbackTable'),
        name: 'feedbackTable',
        meta: { title: '问题反馈', icon: 'feedback' }
      }
    ]
  },
  {
    path: '/system-table',
    component: Layout,
    redirect: 'noredirect',
    children: [
      {
        path: 'index',
        component: () => import('@/views/table/systemTable'),
        name: 'systemTable',
        meta: { title: '系统管理', icon: 'system' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
