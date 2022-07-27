<template>
<div>
  <CategoryList></CategoryList>
  <h1>상의 페이지입니다.</h1>
  <div v-bind:key="item" v-for="item in productTopInfos">
    <p>{{item.proName}}</p>
    <p>{{item.proPrice}}</p>
  </div>

</div>
</template>

<script>
import CategoryList from '@/components/CategoryList.vue'
import store from '@/store/recommendProducts'
import axios from 'axios'

export default {
  components: {
    CategoryList
  },
  name:"상의",
  data () {
    return {
      productTopInfos: [],      
    }
  },

  created () {
    // var vm = this
    // console.log('카테고리에서 넘어온 탑 데이터 : ',vm.$route.query.data);
    // var topdata =  vm.$route.query.data
    // console.log(typeof(topdata))
    console.log(store.state.categoryTopList);

    // var arrList = topdata.split(",")
    //   for (var i=0 ;i < arrList.length; i++) {
    //     console.log(arrList[i])
    //     axios.post('http://192.168.0.81:9292/pro/proInfo', 
    //     {proCode : arrList[i]}) 
    //     .then(function (response) {
    //       console.log(response.data.data);
    //       vm.productTopInfos.push(response.data.data)
          
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //   })
    // }
  }
 
}
</script>

<style>

</style>
