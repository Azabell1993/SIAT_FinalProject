import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
 
  plugins: [
    createPersistedState()
  ],
  state: {
    loginUser: {
      memID: '',
      memPW: '',
      memName: '',
      memAddr: '',
      memPhone: '',
      memEmail: '',
      memBirth: '',
    },
  },
  getters: {
  },
  mutations: {
    updateloginUserID (state, loginUserID) {
      state.loginUser.memID = loginUserID
    }
  },
  actions: {
  },
  modules: {
  }
})
