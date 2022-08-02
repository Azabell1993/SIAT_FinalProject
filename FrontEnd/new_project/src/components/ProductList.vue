<template>
  <div id="productList" v-bind:key="item" v-for="(item) in proinfo">
  <router-link v-on:click="productInfoRelay(item.proCode)" to="/productdetail">
    <img :src="item.imageURL">
  </router-link>
    <p>{{item.proName}}</p>
    <p>{{item.proPrice}}</p>
  </div>  
</template>

<script>
import storeProduct from '@/store/recommendProducts'
import axios from 'axios'

const url = 'http://192.168.0.81:9292'

export default {
  data () {
    return {
      productInfos: [],
      recommendProduct: [],
      imageURL:[],
      imageProName: '',
      proinfo: []
    }
  },
  methods: {
    //상품 코드를 인자로 받아서, 제품 상세 페이지로 이동시킨다.
    async productInfoRelay (newProCode) {
      const renewList = storeProduct.state.products.productsList //저장소에 있는 상품 리스트 값
      // console.log(String(Object.values(renewList)).includes(newProCode)) 
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
          // console.log('ProductList code : ',storeProduct.state.selectOneProductCode)
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
      proList: storeProduct.state.products.productsList
    }) //추천 알고리즘을 만든 곳으로 전달
        .then(async function (response) {
          vm.productInfos = response.data
          storeProduct.commit('updateProductList',response.data.data)
          // console.log('저장소에 있는 값 : ',storeProduct.state.products.productsList);
          const proCodeList = storeProduct.state.products.productsList
          
          for(var i=0; i<proCodeList.length; i++) {
            var proObject = {
              proCode : '',
              proName : '',
              proPrice : '',
              imageURL : ''
            }
	          // console.log('proCode : ', proCodeList[i])
              await axios.post(url+'/pro/proInfo',
              { 
                proCode: proCodeList[i]
              })
              .then(async function (response) {
                // console.log('상품 정보 : ',response.data.data)
                // console.log('이미지 정보 : ',response.data.data.imageID)
                // console.log(vm.recommendProduct)
                vm.recommendProduct.push(response.data.data)

                proObject.proCode = response.data.data.proCode
                proObject.proName = response.data.data.proName
                proObject.proPrice = response.data.data.proPrice

                vm.imageProName = response.data.data.proName
                  await axios({
                    method: 'post',
                    url: 'http://192.168.0.81:9292/pro/imageLoad',
                    responseType: 'blob',
                    data: {proName: vm.imageProName }
                  })
                  .then((res) => {
                    var url = window.URL.createObjectURL(new Blob([res.data], { type: res.headers['content-type'] } ))
                    // document.getElementById('proImage').src = url
                    // vm.imageURL = url
                    console.log('image Data : ',res)
                    console.log('image Data : ',url)
                    vm.imageURL.push(url)
                    proObject.imageURL = url
                    // console.log('image Data List : ',vm.imageList)
                  })
                  .catch(function(error){
                    console.log(error)
                  })
              })
              console.log('객체 생성 확인 : ', proObject)
              vm.proinfo.push(proObject)
          }
          console.log('출력 확인 : ',vm.proinfo)
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
