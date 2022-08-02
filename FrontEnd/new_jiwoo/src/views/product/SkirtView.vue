<template>
<div>
  <CategoryList></CategoryList>
  <h1>치마 페이지입니다.</h1>
  <div id="productList" v-bind:key="item" v-for="item in productSkirtInfos">
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

const url = 'http://192.168.219.162:9292'

export default {
  components: {
    CategoryList
  },

  data () {
    return {
      productSkirtInfos: [],
      skirtCodeList: []
    }
  },

  async created () {
    var vm = this
    console.log('skirtview : ', storeProduct.state.categorySkirtList)
    this.skirtCodeList = storeProduct.state.categorySkirtList

    if (this.skirtCodeList == "") {
      console.log('Data가 없습니다.')
    }

    else {
      console.log(Object.values(Object.values(this.skirtCodeList)[0]))
      var skirtList = Object.values(Object.values(this.skirtCodeList)[0])
    
      for (var i=0 ;i < skirtList.length; i++) {
        console.log(skirtList[i])
        await axios.post(url+'/pro/proInfo', 
        {proCode : skirtList[i]})
        .then(function (response) {
          console.log(response.data.data);
          vm.productSkirtInfos.push(response.data.data)
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

<style>

</style>
