<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <button v-on:click="fetchData">DataTest</button>
    <HelloWorld msg="Welcome to My BlueClub"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import store from '@/store'
import axios from 'axios'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'


console.log(`login home : ${store.state.loginUser.memID}`)
export default {
  name: 'HomeView',
  data () {
    return {
      num : 0
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    fetchData () {
      const num = this.num
      console.log(num)
      axios.post('http://192.168.219.191:9292/categoryData')
        .then(function (response) {
          console.log(response.data.모자)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
