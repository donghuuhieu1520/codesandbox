import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({ preferences: state.preferences })
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appName: 'CodePaper',
    preferences: {
      darkMode: true,
      lang: 'en'
    }
  },
  mutations: {
    CHANGE_DARKMODE: ({ preferences }, value) => { preferences.darkMode = !!value },
    CHANGE_LANG: ({ preferences }, lang) => { preferences.lang = lang }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
