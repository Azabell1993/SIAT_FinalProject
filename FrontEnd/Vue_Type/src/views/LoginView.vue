<template>
    <div>
    <h1>Login 페이지입니다.</h1>
    <form action="/loginTest" @submit.prevent="sendPost">
        <label for="memID">ID : <input id="memID" v-model="memID" type="text"></label><br><br>
        <label for="memPW">PW : <input id="memPW" v-model="memPW" type="password"></label><br><br>
        <!-- <input type="submit" value="로그인"> -->
        <button>Send</button>
    </form>

    </div>
</template>
<script lang="ts">
import axios from 'axios'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default {
  data () {
    return {
      memID: '',
      memPW: ''
    }
  },
  methods: {
    sendPost () {
      console.log('test')
      axios.post('http://192.168.0.88:8081/loginTest', {
        memID: 'ddd',
        memPW: 'sss'
      })
        .then(function (res) {
          console.log(res.data)
        }).catch(function () {
          console.log('failed')
        })
    }
  }
}
</script>
