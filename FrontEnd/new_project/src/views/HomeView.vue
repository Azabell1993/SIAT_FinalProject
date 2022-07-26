<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <button v-on:click="fetchData">DataTest</button>
    <HelloWorld msg="Welcome to My BlueClub"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import store from '@/store/index'
import axios from 'axios'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

console.log(`login home : ${store.state.loginUser.memID}`)
export default {
  name: 'HomeView',
  data () {
    return {
      num : 0,
      sentence: []
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    fetchData () {
      const vm = this
      const num = this.num
      console.log(num)
      axios.post('http://192.168.0.81:9292/pro/categoryData', )
        .then(function (response) {
          console.log(response.data)
          vm.sentence = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
