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
<script>
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
      axios.post('http://192.168.0.81:8081/loginProc', {
        memID: this.memID,
        memPW: this.memPW
      })
        .then(function (res) {
          console.log(res.data)
          console.log(res.data.mem.memID)
          console.log(res.data.mem.memRole.roleCode)
          this.$emit(res.data.mem.memID)
        }).catch(function () {
          console.log('failed')
        })
    }
  }
}
</script>
