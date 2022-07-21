import { createStore } from 'vuex'

export default createStore({
  state: {
    users: []
  },
  getters: {
    usersList (state) {
      return state.users
    }
  },
  mutations: {
    SET_USERS (state, data) {
      state.users = data
    }
  },
  actions: {
  },
  modules: {
  }
})
