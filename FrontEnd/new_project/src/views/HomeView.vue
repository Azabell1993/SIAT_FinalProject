<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <button v-on:click="fetchData">DataTest</button>
    <HelloWorld msg="Welcome to My BlueClub"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import store from '@/store/index'
import storeProduct from '@/store/recommendProducts'
import axios from 'axios'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

console.log(`login home : ${store.state.loginUser.memID}`)
console.log('productStore : ',storeProduct.state.products.productsList.data)
const productCodeList = Object.values(storeProduct.state.originProductList)

export default {
  name: 'HomeView',
  data () {
    return {
      num : 0,
      sentence: []
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    fetchData () {
      const vm = this
      const num = this.num
      // console.log('productCodeList : ', productCodeList)
      axios.post('http://192.168.0.88:9292/pro/proListByCategory',
      {
        proList: productCodeList,
        categoryLargeName : '상의',
        categorySmallName : '반소매'
      })
        .then(function (response) {
          // console.log(response.data)
          vm.sentence = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
