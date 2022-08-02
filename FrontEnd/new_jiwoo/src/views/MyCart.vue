<template>
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
            <th  scope="row"> {{ item.proCode.proPrice }} </th>
            <th  scope="row"> {{ item.proCode.proCount }} </th>
            <th scope="row" > 
              <div v-bind:key="item" v-if="(index) in mycartInfo">
                <button v-on:click="deleteCartProc(index)" > 삭제 </button>
              </div>
            </th>
          </tr>
        </tbody>

       
      </table>

   <button v-on:click="buycartProc()" > 구매하기 </button>
              

</template>

<script>
import axios from 'axios'
import storeUser from '@/store/index'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

// import { response } from 'express'

const url = 'http://192.168.219.162:9292'

export default {

  data () {
    return {
      product: {
        proName: this.proName,
        proPrice: this.proPrice,
        proCount: this.proCount,

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
        // console.log(response.data.data)
        vm.mycartInfo = response.data.data
      })
  },

 
  methods : {

    deleteCartProc (index) {
      var vm = this
      // console.log(storeUser.state.loginUser.memID);
      // console.log(vm.mycartInfo[index].proCode.proCode);

      axios.post('http://192.168.219.162:9292/cart/deleteCart', {

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
      axios.post('http://192.168.219.162:9292/cart/buyCart', {

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

<style>

</style>