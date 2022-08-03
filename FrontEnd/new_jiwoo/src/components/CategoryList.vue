<template>
  <div>
    <!-- 카테고리 메뉴 부분 -->
    <div class="btn-group" v-bind:key="index" v-for="(item, index) in categoryIndex">
      <button class="btn btn-secondary btn-lg" type="button">
        <!-- 대분류 카테고리 클릭시 해당 카텍리 품목 페이지 이동 -->
        <router-link v-on:click="topdata" v-if="index=='상의'" :to="{name: '상의'}">{{ index }}</router-link>
        <router-link v-on:click="pantdata" v-if="index=='바지'" :to="{name: '바지'}">{{ index }}</router-link>
        <router-link v-on:click="shoesdata" v-if="index=='신발'" :to="{name: '신발'}">{{ index }}</router-link>
        <router-link v-on:click="skirtdata" v-if="index=='치마'" :to="{name: '치마'}">{{ index }}</router-link>
        <router-link v-on:click="hatdata" v-if="index=='모자'" :to="{name: '모자'}">{{ index }}</router-link>
      </button>

      <!-- 소분류 선택 메뉴, 정보 띄우기만 하고 선택시 기능 미구현 상태 -->
      <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <!-- 소분류 메뉴 리스트 -->
        <ul class="dropdown-menu">
          <li v-bind:key="small" v-for="small in item"> {{ small }}</li>
        </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import storeProduct from '@/store/recommendProducts'


const productCodeList = Object.values(storeProduct.state.originProductList)
const url = 'http://192.168.202.11:9292'
export default {
  data () {
    return {
      categoryIndex : [],
    }
  },
  // 백엔드의 카테고리 정보 갖고와서 활용
  mounted () {
    var vm = this
    axios.post(url+'/pro/categoryData')
        .then(function (response) {
          vm.categoryIndex = response.data
          console.log('카테고리 데이터 : ',response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
  },
  // 각 카테고리 클릭시 카테고리 품목 페이지로 이동
   methods: {
    topdata () {
      var topCodeList = []
      axios.post(url+'/pro/proListByCategory',
      {
        //백엔드에 원하는 정보 요청하기 (select 정보)
        proList: productCodeList,
        categoryLargeName : '상의',
        categorySmallName : 'none'
      })
        .then(function (response) {
          //DB에서 조회한 정보를 프론트로 던져준다.
          // console.log(response.data)
          
          topCodeList.push(response.data.data) //각 카테고리 품목별 상품 코드를 저장해주는 부분
          storeProduct.state.categoryTopList = topCodeList //store에 각 상품 코드를 저장한다.
        })
        .catch(function (error) {
          console.log(error)
        })
      },
      pantdata () {
      var pantCodeList = []
      axios.post(url+'/pro/proListByCategory',
      {
        proList: productCodeList,
        categoryLargeName : '바지',
        categorySmallName : 'none'
      })
        .then(function (response) {
          pantCodeList.push(response.data.data)
          storeProduct.commit('updateCategoryPantsList', pantCodeList)
          // storeProduct.state.categoryPantList = pantCodeList
        })
        .catch(function (error) {
          console.log(error)
        })
      },
      shoesdata () {
        var shoesCodeList = []
        axios.post(url+'/pro/proListByCategory',
        {
          proList: productCodeList,
          categoryLargeName : '신발',
          categorySmallName : 'none'
        })
          .then(function (response) {
            shoesCodeList.push(response.data.data)
            storeProduct.commit('updateCategoryShoesList', shoesCodeList)
            // storeProduct.state.categoryShoesList = shoesCodeList
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      skirtdata () {
        var skirtCodeList = []
        axios.post(url+'/pro/proListByCategory',
        {
          proList: productCodeList,
          categoryLargeName : '치마',
          categorySmallName : 'none'
        })
          .then(function (response) {
            skirtCodeList.push(response.data.data)
            console.log('skirtCodeList : ',skirtCodeList)
            storeProduct.commit('updateCategorySkirtList', skirtCodeList)
            // storeProduct.state.categorySkirtList = skirtCodeList
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      hatdata () {
        var hatCodeList = []
        axios.post(url+'/pro/proListByCategory',
        {
          proList: productCodeList,
          categoryLargeName : '모자',
          categorySmallName : 'none'
        })
          .then(function (response) {
            hatCodeList.push(response.data.data)
            // storeProduct.state.categoryHatList = hatCodeList
            storeProduct.commit('updateCategoryHatList', hatCodeList)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
      
    }
}
</script>
  
<style scoped>
ul nav {
  display:inline-block;
}
ul nav li {
   list-style:none;
}
.btn-group {
  display:inline-block;
  padding:30px;
}
</style>
