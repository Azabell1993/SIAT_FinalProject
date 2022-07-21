<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <button v-on:click="fetchData">Getdata</button>
    <HelloWorld msg="Welcome to My BlueClub"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

import axios from 'axios'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    fetchData () {
      console.log('success')
      axios.get('http://192.168.0.81:8081/jsonTest')
        .then(function (response) {
          console.log(response.data)
          console.log(response.data.memID)
          console.log(response.data.memPW)
          console.log(response.data.memRole)
          console.log(response.data.memRole.roleCode)
          console.log(response.data.memRole.roleName)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
