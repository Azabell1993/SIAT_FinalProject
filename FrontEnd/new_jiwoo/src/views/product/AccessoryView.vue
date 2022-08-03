<template>
<div>
  <CategoryList></CategoryList>
  <h1>모자 페이지입니다.</h1>
  <div id="productList" v-bind:key="item" v-for="item in productHatInfos">
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

const url = 'http://192.168.202.11:9292'

export default {
  components: {
    CategoryList
  },
  data () {
    return {
      productHatInfos: [],
      hatCodeList: []
    }
  },
  async created () {
    var vm = this
    console.log('hatsview : ', storeProduct.state.categoryHatList)
    this.hatCodeList = storeProduct.state.categoryHatList
    
    if (this.hatCodeList == "") {
      console.log('Data가 없습니다.')
    }

    else {
      console.log(Object.values(Object.values(this.hatCodeList)[0]))
      var hatList = Object.values(Object.values(this.hatCodeList)[0])
    
      for (var i=0 ;i < hatList.length; i++) {
        console.log(hatList[i])
        await axios.post(url+'/pro/proInfo', 
        {proCode : hatList[i]})
        .then(function (response) {
          console.log(response.data.data);
          vm.productHatInfos.push(response.data.data)
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
