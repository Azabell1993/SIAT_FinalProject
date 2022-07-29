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
        categoryTopList: [],
        categoryPantList: [],
        categoryShoesList: [],
        categorySkirtList: [],
        categoryHatList: [],
        selectOneProductCode : []
    },
    getters: {

    },
    mutations: {
        updateProductList (state, proList) {
            state.products.productsList = proList
        },
        updateCategoryTopList (state, categoryTopNewList) {
            state.categoryTopList = categoryTopNewList
        },
        updateCategoryPantsList (state, categoryPantsNewList) {
            state.categoryPantList = categoryPantsNewList
        },
        updateCategoryShoesList (state, categoryShoesNewList) {
            state.categoryShoesList = categoryShoesNewList
        },
        updateCategorySkirtList (state, categorySkirtNewList) {
            state.categorySkirtList = categorySkirtNewList
        },
        updateCategoryHatList (state, categoryHatNewList) {
            state.categoryHatList = categoryHatNewList
        },
        updateSelectOneProductCode (state, selectOne) {
            state.selectOneProductCode = selectOne
        }
    },  
    actions:{
    },
    modules: {
    }
})