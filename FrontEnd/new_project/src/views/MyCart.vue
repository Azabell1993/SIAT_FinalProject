<template>
  <h1>My Cart 입니다.</h1>
  <div v-bind:key="item" v-for="(item, index) in mycartInfo">
    {{item}}
    {{index}}
  </div>

</template>

<script>
import axios from 'axios'
import storeUser from '@/store/index'

const url = 'http://192.168.0.81:9292'

export default {

  data () {
    return {
      mycartInfo : []
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
      })
  }
}
</script>

<style>

</style>
