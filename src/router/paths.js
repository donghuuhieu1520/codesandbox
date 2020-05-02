import Dashboard from '@/views/dashboard/Dashboard.vue'
import store from '@/store'

const ifNotAuthenticated = (to, from, next) => {
  if (store.getters.hasToken) {
    return next({ name: 'newfeeds' })
  }
  return next()
}

// const ifAuthenticated = (to, from, next) => {
//   if (store.getters.hasToken) {
//     return next()
//   }
//   return next({ name: 'signin' })
// }

export default [
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'dashboard',
    meta: {
      requiresAuth: true
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
    beforeEnter: ifNotAuthenticated,
    meta: {
      requiresAuth: false
    },
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    beforeEnter: ifNotAuthenticated,
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
