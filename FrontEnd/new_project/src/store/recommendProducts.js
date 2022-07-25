import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({

    plugins: [
        createPersistedState()
    ],
    state: {
        products: {
            productsList: []
          }
    },
    getters: {
    },
    mutations: {
        updateProductList (state, proList) {
            state.products.productsList = proList
          },
    },  
    actions:{
    },
    modules: {
    }
})