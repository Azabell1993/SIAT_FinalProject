import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({

    plugins: [
        //vuex 사용시, 새로 고침시 데이터 초기화 되는 부분 방지 하기 위한 플러그인
        createPersistedState()
    ],
    state: { //초기 상태값 지정하기
        products: {
            productsList: [],
        },
        originProductList: [],
        categoryTopList: [],
        categoryPantList: [],
        categoryShoesList: [],
        categorySkirtList: [],
        categoryHatList: [],
        selectOneProductCode : []
    },
    getters: {

    },
    mutations: { //state의 상태 값 변화 주기, vue에서 commit 요청을 통해 데이터 변화 감지
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