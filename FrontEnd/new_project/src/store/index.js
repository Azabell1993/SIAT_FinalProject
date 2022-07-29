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
    },
    updateloginUserPW(state, loginUserPW) {
      state.loginUser.memPW = loginUserPW
    },
    updateloginUserName(state, loginUserName) {
      state.loginUser.memName = loginUserName
    }
  },
  actions: {
  },
  modules: {
  }
})
