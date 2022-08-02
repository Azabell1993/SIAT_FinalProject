<template>
  <div class="home">
    <button v-on:click="fetchData">DataTest</button> <!-- 데이터 어떻게 날아오는지 테스트 -->
    <HelloWorld msg="Welcome to My BlueClub"/> <!-- HelloWorld 컴포넌트로 이동 삭제 금지!, HelloWorld.vue인데 헷갈리면 다른 이름으로 변경 예정 HelloWorld => ??? --> 
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import store from '@/store/index'
import storeProduct from '@/store/recommendProducts'
import axios from 'axios'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

// console.log(`login home : ${store.state.loginUser.memID}`)
// console.log('productStore : ',storeProduct.state.products.productsList)
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

      // console.log('productCodeList : ', productCodeList)
      axios.post('http://192.168.0.81:9999/imageload',
      {
        fileName:"testImage2.jpg"
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
