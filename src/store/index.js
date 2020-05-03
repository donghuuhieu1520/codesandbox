import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({
    preferences: state.preferences,
    authorization: state.authorization
  })
})

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
