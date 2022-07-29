<template>
  <div id="productList" v-bind:key="name" v-for="name in recommendProduct">
    <router-link v-on:click="productInfoRelay(name.proCode)" to="/productdetail">
      <p>{{ name.proName }}</p>
    </router-link>
      <!-- <img v-bind:src="require(`@/assets/image/${name.proImage}.png`)"> -->
      <p>{{ name.proPrice }}</p>
  </div>
</template>

<script>
import storeProduct from '@/store/recommendProducts'
import axios from 'axios'

const url = 'http://192.168.0.81:9292'

export default {
  data () {
    return {
      items: [
        {
          imgurl: require('@/assets/image/top1.png'),
        },
      ],
      productInfos: [],
      recommendProduct: [],
      productCode : ''
    }
  },
  computed: {
  
  },
  methods: {
    async productInfoRelay (newProCode) {
      console.log('값 확인 : ', newProCode)
      const renewList = storeProduct.state.products.productsList
      console.log(String(Object.values(renewList)).includes(newProCode))
      
      const oneCodeCheck = String(Object.values(renewList)).includes(newProCode)

      if(oneCodeCheck == true) {
        await axios.post(url+'/pro/proInfo', {
          proCode : newProCode
        })
        .then(function(response){
          storeProduct.commit('updateSelectOneProductCode',response.data.data.proCode)
          console.log('ProductList code : ',storeProduct.state.selectOneProductCode)
        })
      }
      else {
        console.log('상품 정보가 존재하지 않습니다.')
      }
    }
  },
  created () {
    var vm = this
    axios.post(url+'/pro/proList', //헤더 : url, value
    {
      proList: [1,2,3,4]
    }) //추천 알고리즘을 만든 곳으로 전달
        .then(async function (response) {
          vm.productInfos = response.data
          console.log(response.data.data)
          storeProduct.commit('updateProductList',response.data.data)
          console.log('저장소에 있는 값 : ',storeProduct.state.products.productsList);
          const proCodeList = storeProduct.state.products.productsList
          
          for(var i=0; i<proCodeList.length; i++) {
	          // console.log('proCode : ', proCodeList[i])
              await axios.post(url+'/pro/proInfo',
              { 
                proCode: proCodeList[i]
              })
              .then(function (response) {
                console.log('상품 정보 : ',response.data.data)
                // console.log('이미지 정보 : ',response.data.data.imageID)
                // console.log(vm.recommendProduct)
                vm.recommendProduct.push(response.data.data)
              })
          }
        })
        .catch(function (error) {
          console.log(error)
        })
},

}
</script>

<style>
  img {
    width : 180px;
    height: 180px;
  }
  #productList {
    display: inline-block;
    padding : 10px;
  }
</style>
