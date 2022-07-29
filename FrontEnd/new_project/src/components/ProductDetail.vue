<template>
<div>
  <h1>제품 상세 페이지입니다.</h1>
  <div v-bind:key="index" v-for="(index, item) in productInfo">
    <p>{{ item }} : {{index}}</p>
  </div>
</div>
</template>

<script>
import storeProduct from '@/store/recommendProducts'
import axios from 'axios'

const url = 'http://192.168.0.81:9292'

export default {
  data () {
    return {
      productInfo : []
    }
  },
  created () {
    const vm = this
    setTimeout(() => {
      console.log('ProductDetail Code : ', storeProduct.state.selectOneProductCode)
      axios.post(url+'/pro/proInfo', { 
      proCode : storeProduct.state.selectOneProductCode
      })
      .then(function (response) {
        console.log(response.data.data)
        vm.productInfo = response.data.data
      })
      .catch(function(error){
        console.log(error)
      })
    }, 500)
    
}
   
}
</script>

<style>

</style>
