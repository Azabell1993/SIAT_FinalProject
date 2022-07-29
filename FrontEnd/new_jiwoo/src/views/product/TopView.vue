<template>
<div>
  <CategoryList></CategoryList>
  <h1>상의 페이지입니다.</h1>
  <div id="productList" v-bind:key="item" v-for="item in productTopInfos">
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
      productTopInfos: [],
      topCodeList: []
    }
  },

  async created () {
    // console.log('카테고리에서 넘어온 탑 데이터 : ',vm.$route.query.data);
    // var topdata =  vm.$route.query.data
    // console.log(typeof(topdata))
    var vm = this
    console.log('topview : ', storeproducts.state.categoryTopList)
    this.topCodeList = storeproducts.state.categoryTopList
    if (this.topCodeList == "") {
      console.log('Data가 없습니다.')
    }
    else {
      console.log(Object.values(Object.values(this.topCodeList)[0]))
      var topList = Object.values(Object.values(this.topCodeList)[0])
        for (var i=0 ;i < topList.length; i++) {
          console.log(topList[i])
          await axios.post('http://192.168.0.81:9292/pro/proInfo', 
          {proCode : topList[i]}) 
          .then(function (response) {
            console.log(response.data.data);
            vm.productTopInfos.push(response.data.data)
          })
          .catch(function (error) {
            console.log(error);
          })
        }
    }
  }
}
</script>

<style scoped>
 #productList {
    display: inline-block;
    padding : 10px;
  }
</style>
