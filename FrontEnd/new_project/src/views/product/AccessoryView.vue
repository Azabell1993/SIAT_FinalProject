<template>
<div>
  <CategoryList></CategoryList>
  <h1>모자 페이지입니다.</h1>
  <div id="productList" v-bind:key="item" v-for="item in productHatInfos">
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
      productHatInfos: [],
      hatCodeList: []
    }
  },
  async created () {
    var vm = this
    console.log('hatsview : ', storeproducts.state.categoryHatList)
    this.hatCodeList = storeproducts.state.categoryHatList
    
    if (this.hatCodeList == "") {
      console.log('Data가 없습니다.')
    }
    else {
    console.log(Object.values(Object.values(this.hatCodeList)[0]))
    var hatList = Object.values(Object.values(this.hatCodeList)[0])
    
      for (var i=0 ;i < hatList.length; i++) {
        console.log(hatList[i])
        await axios.post('http://192.168.0.88:9292/pro/proInfo', 
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
    }
}
</script>

<style>

</style>
