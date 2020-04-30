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
        component: () => import('@/components/dashboard/Newfeeds.vue')
      },
      {
        path: 'newfeeds',
        name: 'newfeeds',
        component: () => import('@/components/dashboard/Newfeeds.vue')
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('@/components/dashboard/Settings.vue')
      }
    ]
  },
  {
    path: '/login',
    meta: {
      requiresAuth: false
    },
    component: () => import('@/views/Login.vue')
  },
  {
    path: '*',
    component: () => import('@/views/404.vue')
  }
]
