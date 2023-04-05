import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
 
  plugins: [
    //vuex 사용시, 새로 고침시 데이터 초기화 되는 부분 방지 하기 위한 플러그인
    createPersistedState()
  ],
  state: { //store.state.loginUser.memID
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
    updateloginUserEmail(state, loginUserEmail) {
      state.loginUser.memEmail = loginUserEmail
    },
    updateloginUserRole(state, loginUserRole) {
      state.loginUser.memRole = loginUserRole
    }
  },
  actions: {
  },
  modules: {
  }
})
