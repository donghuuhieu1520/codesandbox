import Dashboard from '@/views/dashboard/Dashboard.vue'

export default [
  {
    path: '/dashboard',
    component: Dashboard,
    meta: {
      name: 'dashboard',
      requiresAuth: false
    },
    children: [
      {
        path: '',
        component: () => import('@/views/dashboard/Newfeeds.vue')
      },
      {
        path: 'newfeeds',
        name: 'newfeeds',
        component: () => import('@/views/dashboard/Newfeeds.vue')
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('@/views/dashboard/Settings.vue')
      },
      {
        path: 'post/:postId',
        name: 'post',
        component: () => import('@/views/dashboard/PostDetail.vue')
      }
    ]
  },
  {
    path: '/signin',
    name: 'signin',
    meta: {
      requiresAuth: false
    },
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    meta: {
      requiresAuth: false
    },
    component: () => import('@/views/Signup.vue')
  },
  {
    path: '*',
    component: () => import('@/views/404.vue')
  }
]
