<template>
  <div id="productList" v-bind:key="name" v-for="name in recommendProduct">
    <router-link to="/productdetail"><img v-bind:src="require(`@/assets/image/${name.proImage}.png`)"></router-link>
    <p>{{ name.proName }}</p>
    <p>{{ name.proPrice }}</p>
  </div>
  
  <div v-bind:key="item" v-for="(item) in productInfos2">
    {{ item }}
  </div>
</template>

<script>
import store from '@/store/recommendProducts'
import axios from 'axios'

export default {
  data () {
    return {
      items: [
        {
          imgurl: require('@/assets/image/top1.png'),
        },
      ],
      productInfos: [],
      recommendProduct: []
    }
  },
  computed: {
    productInfos2: {
      get () {
        return store.state.products.productsList
      },
      set(value) {
        this.$store.commit('updateProductList', value)
      }
    }
  },
  methods: {
   
  },
  created () {
    var vm = this
    axios.post('http://192.168.0.81:9292/pro/proList', //헤더 : url, value
    {proList: [1,2,3,4]}) //추천 알고리즘을 만든 곳으로 전달
        .then(async function (response) {
          vm.productInfos = response.data
          //console.log(response.data.data)
          const proCodeList = response.data.data
          
          for(var i=0; i<proCodeList.length; i++) {
	          // console.log('proCode : ', proCodeList[i])
              await axios.post('http://192.168.0.81:9292/pro/proInfo', 
              { 
                proCode: proCodeList[i]
              })
              .then(function (response) {
                console.log(response.data.data)
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
