import { createStore } from 'vuex'

export default createStore({
  state: {
    loginUser: {}
  },
  getters: {
    isLogin(state) {
      return state.loginUser
    }
  },
  mutations: {
    setUser(state, loginUser) {
      state.loginUser = loginUser
    }
  },
  actions: {
  },
  modules: {
  }
})
