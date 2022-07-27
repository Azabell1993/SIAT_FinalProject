import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({

    plugins: [
        createPersistedState()
    ],
    state: {
        products: {
            productsList: [],
        },
        originProductList: [1,2,3,4],
        categoryTopList: []
    },
    getters: {

    },
    mutations: {
        updateProductList (state, proList) {
            state.products.productsList = proList
          },
        updateCategoryTopList (state, categoryTopNewList) {
            state.categoryTopList = categoryTopNewList
        }
    },  
    actions:{
    },
    modules: {
    }
})