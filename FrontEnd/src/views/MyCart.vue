<template>
<div id="mycartview">
  <h1>My Cart 입니다.</h1>

    <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">상품 번호</th>
            <th scope="col">상품명</th>
            <th scope="col">상품 가격</th>
            <th scope="col">상품 개수</th>
            <th scope="col">상품 삭제</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in mycartInfo" :key="item">
            <th scope="row" > {{ index + 1 }} </th>
            <th scope="row" > {{ item.proCode.proName }} </th>
            <th scope="row"> {{ item.proCode.proPrice }} </th>
            <th scope="row"> {{ item.cartCount }} </th>
            <th scope="row" > 
              <div v-bind:key="item" v-if="(index) in mycartInfo">
                <b-button v-on:click="deleteCartProc(index)" > 삭제 </b-button>
              </div>
            </th>
          </tr>
        </tbody>

       
      </table>

   <b-button v-on:click="buycartProc()" > 구매하기 </b-button>
              
</div>
</template>

<script>
import axios from 'axios'
import storeUser from '@/store/index'
import ipconfig from '@/store/ipconfig'

const url = ipconfig.state.ip
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

// import { response } from 'express'


export default {

  data () {
    return {
      product: {
        proName: this.proName,
        proPrice: this.proPrice,
        cartCount: this.cartCount,

      },
      mycartInfo : [],
      arr: ''
    }
  },

  created () {
    const vm = this

    axios.post(url+'/cart/cartInfo', {
        //addCart, cartInfo
        memID : storeUser.state.loginUser.memID,
      })
      .then(function(response) {
        console.log(response.data.data)
        vm.mycartInfo = response.data.data
        console.log(vm.mycartInfo)
      })
  },

 
  methods : {

    deleteCartProc (index) {
      var vm = this
      // console.log(storeUser.state.loginUser.memID);
      // console.log(vm.mycartInfo[index].proCode.proCode);

      axios.post(url+'/cart/deleteCart', {

        memID : storeUser.state.loginUser.memID,
        proCode : vm.mycartInfo[index].proCode.proCode  

      }).then(function(response) {
        console.log(response.data);
        alert("삭제 완료");
        location.reload();
      }).catch(function (error) {
            console.log(error)
      })
    },

    buycartProc () {
      axios.post(url+'/cart/buyCart', {

        memID : storeUser.state.loginUser.memID,

      }).then(function(response) {
        console.log(response.data);
          alert("구매 완료");
          location.reload();
      }).catch(function (error) {
            console.log(error)
      })
    }

  }
}

</script>

<style scoped>
#mycartview{
  margin-top : 100px;
}
</style>