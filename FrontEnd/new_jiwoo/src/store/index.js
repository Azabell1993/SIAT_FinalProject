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
      memRole: ''
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
    },
    updateloginUserAddr(state, loginUserAddr) {
      state.loginUser.memAddr = loginUserAddr
    },
    updateloginUserPhone(state, loginUserPhone) {
      state.loginUser.memPhone = loginUserPhone
    },
    updateloginUserBirth(state, loginUserBirth) {
      state.loginUser.memBirth = loginUserBirth
    },
    updateloginUserRole(state, loginUserRole) {
      state.loginUser.memRole = loginUserRole
    },
    updateloginUserEmail(state, loginUserEmail) {
      state.loginUser.memEmail = loginUserEmail
    },
  },

  actions: {
  },
  modules: {
  }
})
