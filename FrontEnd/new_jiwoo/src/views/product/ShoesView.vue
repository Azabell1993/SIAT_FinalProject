<template>
<div>
  <CategoryList></CategoryList>
  <h1>신발 페이지입니다.</h1>
  <div id="productList" v-bind:key="item" v-for="item in productShoesInfos">
    <router-link to="/productdetail"><img v-bind:src="require(`@/assets/image/${item.proImage}.png`)"></router-link>
    <p>{{item.proName}}</p>
    <p>{{item.proPrice}}</p>
  </div>
</div>
</template>

<script>
import CategoryList from '@/components/CategoryList.vue'
import storeproducts from '@/store/recommendProducts'
import axios from 'axios'

export default {
  components: {
    CategoryList
  },
  data () {
    return {
      productShoesInfos: [],
      shoesCodeList: []
    }
  },
  async created () {
    var vm = this
    console.log('pantsview : ', storeproducts.state.categoryShoesList)
    this.shoesCodeList = storeproducts.state.categoryShoesList

    if (this.shoesCodeList == "") {
      console.log('Data가 없습니다.')
    }
    else {
    console.log(Object.values(Object.values(this.shoesCodeList)[0]))
    var shoesList = Object.values(Object.values(this.shoesCodeList)[0])
    
      for (var i=0 ;i < shoesList.length; i++) {
        console.log(shoesList[i])
        await axios.post('http://192.168.0.81:9292/pro/proInfo', 
        {proCode : shoesList[i]})
        .then(function (response) {
          console.log(response.data.data);
          vm.productShoesInfos.push(response.data.data)
        })
        .catch(function (error) {
          console.log(error);
        })
      }
      }
    }
}
</script>

<style>

</style>
