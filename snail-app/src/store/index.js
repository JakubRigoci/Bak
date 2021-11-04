import Vue from "vue"
import Vuex from "vuex"
import * as actions from "./actions.js"
import * as getters from "./getters.js"
import * as mutations from "./mutations.js"
import state from "./state.js"
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state,
  getters,
  mutations,
  actions
})
