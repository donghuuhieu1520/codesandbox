import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import routes from '@/router/paths'
import store from '@/store'

Vue.use(VueRouter)
Vue.use(VueMeta)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPos) {
    if (savedPos) return savedPos
    if (to.hash) return { selector: to.hash }
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.hasToken) return next()
    return next({
      name: 'signin',
      query: { redirect: to.fullPath }
    })
  }
  return next()
})

export default router
