<template>
  <ul id="productList">
    <li v-bind:key="item" v-for="item in items">
        <router-link to="/productdetail"><img v-bind:src="item.imgurl"></router-link>
        {{ item }}
    </li>
  </ul>
  <div v-bind:key="item" v-for="(item) in productInfos">
    {{ item }}
  </div>
  {{ productInfos2 }}
  
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
          name: 'product1',
          price: 1000,
          stock: 30
        },
        {
          imgurl: require('@/assets/image/pants1.png'),
          name: 'product2'
        }
      ],
      productInfos: []
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
  mounted () {
    var vm = this
    axios.post('http://192.168.0.81:9292/ProList',
    {proList: [1,2,3,4]})
        .then(function (response) {
          console.log(response.data) 
          vm.productInfos = response.data
          console.log(`추천 상품 : ${store.state.products.productsList}`)
          console.log(typeof(vm.productInfos2))
        })
        .catch(function (error) {
          console.log(error)
        })
},

}
</script>

<style>
  img {
    width : 150px;
    height: 150px;
  }
</style>
