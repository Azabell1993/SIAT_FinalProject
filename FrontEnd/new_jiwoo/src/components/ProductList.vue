<template>
  <div id="productList" v-bind:key="name" v-for="name in recommendProduct">
    <router-link v-on:click="productInfoRelay(name.proCode)" to="/productdetail">
      <p>{{ name.proName }}</p>
    </router-link>
      <!-- 이미지 부분은 아직 미구현, 
      현재 백엔드에서 이미지 정보 주는 것 까진 확인. 프론트에서 어떻게 뿌리는지 연구해봐야 함 -->
      <!-- <img v-bind:src="require(`@/assets/image/${name.proImage}.png`)"> -->
      <p>{{ name.proPrice }}</p>
  </div>
</template>

<script>
import storeProduct from '@/store/recommendProducts'
import axios from 'axios'

const url = 'http://192.168.202.11:9292'

export default {
  data () {
    return {
      items: [
        {
          imgurl: require('@/assets/image/top1.png'),
        },
      ],
      productInfos: [],
      recommendProduct: [],
    }
  },
  computed: {
  
  },
  methods: {
    //상품 코드를 인자로 받아서, 제품 상세 페이지로 이동시킨다.
    async productInfoRelay (newProCode) {
      console.log('값 확인 : ', newProCode)
      const renewList = storeProduct.state.products.productsList //저장소에 있는 상품 리스트 값
      console.log(String(Object.values(renewList)).includes(newProCode)) 
      //=> Object형식으로 들어와서, 객체 내의 값을 String값으로 변환시켜서 맞는지 체크시킴,
      //그 후, 인자 값을 받아서 그 배열 안에 해당 상품코드가 있는지 확인 시킨다.
      
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
  },
  //상품 리스트 부분, 페이지가 생성될 때 갖고있는 상품들을 불러와줘야한다.
  created () {
    var vm = this
    axios.post(url+'/pro/proList', //헤더 : url, value
    {
      proList: [1,2,3,4]
    }) //추천 알고리즘을 만든 곳으로 전달
        .then(async function (response) {
          vm.productInfos = response.data
          console.log(response.data.data)
          storeProduct.commit('updateProductList',response.data.data)
          console.log('저장소에 있는 값 : ',storeProduct.state.products.productsList);
          const proCodeList = storeProduct.state.products.productsList
          
          for(var i=0; i<proCodeList.length; i++) {
	          // console.log('proCode : ', proCodeList[i])
              await axios.post(url+'/pro/proInfo',
              { 
                proCode: proCodeList[i]
              })
              .then(function (response) {
                console.log('상품 정보 : ',response.data.data)
                // console.log('이미지 정보 : ',response.data.data.imageID)
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
