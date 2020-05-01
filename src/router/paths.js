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
