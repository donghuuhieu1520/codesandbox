import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({
    preferences: state.preferences,
    authorization: state.authorization
  })
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appName: 'CodePaper',
    authorization: {
      token: 'asdasd'
    },
    preferences: {
      darkMode: true,
      lang: 'en'
    }
  },
  mutations: {
    CHANGE_DARKMODE: ({ preferences }, value) => { preferences.darkMode = !!value },
    CHANGE_LANG: ({ preferences }, lang) => { preferences.lang = lang },
    DO_LOGOUT: ({ authorization }) => { authorization.token = '' }
  },
  getters: {
    language ({ preferences }) {
      return preferences.lang
    },
    hasToken ({ authorization }) {
      return !!authorization.token
    },
    token ({ authorization }) {
      return authorization.token
    },
    isDarkMode ({ preferences }) {
      return preferences.darkMode
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
