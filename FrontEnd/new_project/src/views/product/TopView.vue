<template>
<div>
  <CategoryList></CategoryList>
  <h1>상의 페이지입니다.</h1>
  <div id="productList" v-bind:key="item" v-for="item in productTopInfos">
    <router-link v-on:click="productInfoRelay(item.proCode)" to="/productdetail">
      <p>{{item.proName}}</p>
      <!-- <img v-bind:src="require(`@/assets/image/${item.proImage}.png`)"> -->
    </router-link>
    <p>{{item.proPrice}}</p>
  </div>
</div>
</template>

<script>
import CategoryList from '@/components/CategoryList.vue'
import storeProduct from '@/store/recommendProducts'
import axios from 'axios'

const url = 'http://192.168.0.88:9292'

export default {
  components: {
    CategoryList
  },
  data () {
    return {
      productTopInfos: [],
      topCodeList: []
    }
  },

  async created () {
    // console.log('카테고리에서 넘어온 탑 데이터 : ',vm.$route.query.data);
    // var topdata =  vm.$route.query.data
    // console.log(typeof(topdata))
    var vm = this
    console.log('topview : ', storeProduct.state.categoryTopList)
    this.topCodeList = storeProduct.state.categoryTopList
    if (this.topCodeList == "") {
      console.log('Data가 없습니다.')
    }
    else {
      console.log(Object.values(Object.values(this.topCodeList)[0]))
      var topList = Object.values(Object.values(this.topCodeList)[0])
        for (var i=0 ;i < topList.length; i++) {
          console.log(topList[i])
          await axios.post(url+'/pro/proInfo', 
          {proCode : topList[i]}) 
          .then(function (response) {
            console.log(response.data.data);
            vm.productTopInfos.push(response.data.data)
          })
          .catch(function (error) {
            console.log(error);
          })
        }
    }
  },
  methods: {
    async productInfoRelay (newProCode) {
      const renewList = storeProduct.state.products.productsList //저장소에 있는 상품 리스트 값
      const oneCodeCheck = String(Object.values(renewList)).includes(newProCode)

      if(oneCodeCheck == true) { //상품코드가 있다면, 그 상품코드로 상품 정보 요청
        await axios.post(url+'/pro/proInfo', {
          proCode : newProCode
        })
        .then(function(response){
          storeProduct.commit('updateSelectOneProductCode',response.data.data.proCode)
          //상품 한개만 요청하기 때문에, selectOne으로 지정하고, 각 상품이 클릭시 때마다 업데이트 시킴.
          //한 상품 클릭 후, 다른 상품 클릭시 해당 상품으로 가는 것까지 확인 됨
          console.log('ProductList code : ',storeProduct.state.selectOneProductCode)
        })
      }
      else {
        console.log('상품 정보가 존재하지 않습니다.')
      }
    }
  }
}
</script>

<style scoped>
 #productList {
    display: inline-block;
    padding : 10px;
  }
</style>
