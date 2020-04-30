import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import i18n from '@/plugins/i18n'
import VueProgressBar from 'vue-progressbar'
import { options as vueProgressBarOptions } from '@/plugins/vueProgressBar'

Vue.config.productionTip = false
Vue.use(VueProgressBar, vueProgressBarOptions)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
