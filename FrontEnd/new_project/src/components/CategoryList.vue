<template>
  <div>
    <!-- <ul>
      <nav v-bind:key="index" v-for="(item, index) in categoryIndex">
        <li v-if="index==='상의'"><router-link to="/topview">{{index}}</router-link>
          <select>
            <option>{{index}}</option>
            <option v-bind:key="small" v-for="small in item">{{small}}</option>
          </select>
        </li>
        <li v-if="index==='바지'"><router-link :to="{name: '바지' }">바지</router-link></li>
        <li v-if="index==='신발'"><router-link to="/shoesview">신발</router-link></li>
        <li v-if="index==='치마'"><router-link to="/skirtview">치마</router-link></li>
        <li v-if="index==='모자'"><router-link to="/accessoryview">모자</router-link></li>
      </nav>
    </ul> -->

    <div class="btn-group" v-bind:key="index" v-for="(item, index) in categoryIndex">
      <button class="btn btn-secondary btn-lg" type="button">
        <router-link v-on:click="topdata" v-if="index=='상의'" :to="{name: '상의'}">{{ index }}</router-link>
        <router-link v-on:click="pantdata" v-if="index=='바지'" :to="{name: '바지'}">{{ index }}</router-link>
        <router-link v-on:click="shoesdata" v-if="index=='신발'" :to="{name: '신발'}">{{ index }}</router-link>
        <router-link v-on:click="skirtdata" v-if="index=='치마'" :to="{name: '치마'}">{{ index }}</router-link>
        <router-link v-on:click="hatdata" v-if="index=='모자'" :to="{name: '모자'}">{{ index }}</router-link>
        </button>
      <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
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

export default {
  data () {
    return {
      categoryIndex : [],
    }
  },

  mounted () {
    var vm = this
    axios.post('http://192.168.0.88:9292/pro/categoryData')
        .then(function (response) {
          vm.categoryIndex = response.data
          // console.log('상품 데이터 : ',response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
  },
   methods: {
    topdata () {
      var topCodeList = []
      axios.post('http://192.168.0.88:9292/pro/proListByCategory',
      {
        proList: productCodeList,
        categoryLargeName : '상의',
        categorySmallName : 'none'
      })
        .then(function (response) {
          // console.log(response.data)
          topCodeList.push(response.data.data)
          storeProduct.state.categoryTopList = topCodeList
          
          // console.log('new Top code list',topCodeList)
          // vm.$router.push({
          // name: "상의",
          // query: { data : topCodeList }
          // })
        })
        .catch(function (error) {
          console.log(error)
        })
      },
      pantdata () {
      var pantCodeList = []
      axios.post('http://192.168.0.88:9292/pro/proListByCategory',
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
        axios.post('http://192.168.0.88:9292/pro/proListByCategory',
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
        axios.post('http://192.168.0.88:9292/pro/proListByCategory',
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
        axios.post('http://192.168.0.88:9292/pro/proListByCategory',
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
