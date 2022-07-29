<template>
<div>
  <CategoryList></CategoryList>
  <h1>치마 페이지입니다.</h1>
  <div id="productList" v-bind:key="item" v-for="item in productSkirtInfos">
    <router-link to="/productdetail">
      <!-- <img v-bind:src="require(`@/assets/image/${item.proImage}.png`)"> -->
    </router-link>
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
      productSkirtInfos: [],
      skirtCodeList: []
    }
  },
  async created () {
    var vm = this
    console.log('skirtview : ', storeproducts.state.categorySkirtList)
    this.skirtCodeList = storeproducts.state.categorySkirtList

    if (this.skirtCodeList == "") {
      console.log('Data가 없습니다.')
    }
    else {
    console.log(Object.values(Object.values(this.skirtCodeList)[0]))
    var skirtList = Object.values(Object.values(this.skirtCodeList)[0])
    
      for (var i=0 ;i < skirtList.length; i++) {
        console.log(skirtList[i])
        await axios.post('http://192.168.0.81:9292/pro/proInfo', 
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
    }
}
</script>

<style>

</style>
