<template>
<div id="topview">
  <CategoryList></CategoryList>
  <h1>상의 페이지입니다.</h1>
  <div id="productList" v-bind:key="item" v-for="item in proinfo">
    <router-link v-on:click="productInfoRelay(item.proCode)" to="/productdetail">
      <img :src="item.imageURL">
    </router-link>
    <p>{{item.proName}}</p>
    <p>{{item.proPrice}}</p>
  </div>
</div>
</template>

<script>
import CategoryList from '@/components/CategoryList.vue'
import storeProduct from '@/store/recommendProducts'
import axios from 'axios'
import ipconfig from '@/store/ipconfig'

const url = ipconfig.state.ip

export default {
  components: {
    CategoryList
  },
  data () {
    return {
      topCodeList: [],
      imageProName : '',
      proinfo: []
    }
  },

  async created () {
    var vm = this
    console.log('topview : ', storeProduct.state.categoryTopList)
    this.topCodeList = storeProduct.state.categoryTopList
    if (this.topCodeList == "") {
      console.log('Data가 없습니다.')
    }
    else {
      console.log(Object.values(Object.values(this.topCodeList)[0]))
      var topList = Object.values(Object.values(this.topCodeList)[0])
        for (var i=0 ;i < topList.length; i++) {
          var proObject = {
              proCode : '',
              proName : '',
              proPrice : '',
              imageURL : ''
          }

          console.log('상의 코드 리스트',topList[i])
          await axios.post(url+'/pro/proInfo', 
          { 
            proCode : topList[i]
          }) 
          .then(async function (response) {
            console.log(response.data.data);
            proObject.proCode = response.data.data.proCode
            proObject.proName = response.data.data.proName
            proObject.proPrice = response.data.data.proPrice
            vm.imageProName = response.data.data.proName

            await axios({
              method: 'post',
              url: url+'/pro/imageLoad',
              responseType: 'blob',
              data: {proName: vm.imageProName }
            })
            .then((res) => {
              var url = window.URL.createObjectURL(new Blob([res.data], { type: res.headers['content-type'] } ))
              proObject.imageURL = url
              console.log('카테고리 이미지 데이터', proObject.imageURL)
            })
          })
          .catch(function (error) {
            console.log(error);
          })
          vm.proinfo.push(proObject)
          console.log('상품 객체 확인 : ',vm.proinfo)
        }
    }
  },
  methods: {
    async productInfoRelay (newProCode) {
      const renewList = storeProduct.state.products.productsList //저장소에 있는 상품 리스트 값
      const oneCodeCheck = String(Object.values(renewList)).includes(newProCode)

      if(oneCodeCheck == true) { //상품코드가 있다면, 그 상품코드로 상품 정보 요청
        await axios.post(url+'/pro/proInfo', {
          proCode : newProCode
        })
        .then(function(response){
          storeProduct.commit('updateSelectOneProductCode',response.data.data.proCode)
          //상품 한개만 요청하기 때문에, selectOne으로 지정하고, 각 상품이 클릭시 때마다 업데이트 시킴.
          //한 상품 클릭 후, 다른 상품 클릭시 해당 상품으로 가는 것까지 확인 됨
          console.log('ProductList code : ',storeProduct.state.selectOneProductCode)
        })
      }
      else {
        console.log('상품 정보가 존재하지 않습니다.')
      }
    }
  }
}
</script>

<style scoped>
#topview{
  margin-top : 100px;
}
 #productList {
    display: inline-block;
    padding : 10px;
  }
</style>
