<template>
  <div class="container">
    <div>
      <h1>Sign Up 페이지입니다.</h1>
      </div>
      <form action="/SignTest" @submit.prevent="sendPost">
           <label for="memID">아이디 : <input type="text" id="memID" v-model="memID"><p id="userid_msg"></p></label>
          <button>Send</button>
      </form>
     
      <label for="memPW">비밀번호 : <input type="password" id="memPW" v-model="memPW"></label><br>
      <label for="memPWCheck">비밀번호 확인 : <input type="password" id="memPWCheck" v-model="memPWCheck"></label><br>
      <label for="memName">이름 : <input type="text" id="memName" v-model="memName"></label><br>
      <label for="memAddr">주소 : <input type="text" id="memAddr" v-model="memAddr"></label><br>
      <label for="memPhone">전화번호 : <input type="text" id="memPhone" v-model="memPhone"></label><br>
      <label for="memEmail">이메일 : <input type="email" id="memEmail" v-model="memEmail"></label>
      <br>
      <label for="memBirth">생년월일 : <input type="date" id="memBirth" v-model="memBirth"></label><br>
      <input type="reset" value="초기화">
      <input type="submit" id="login_submit" value="가입">
  </div>
</template>

<script>
import axios from 'axios'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default {
  data() {
    return {
        memID:'',
        memPW:'',
        memPWCheck:'',
        memName:'',
        memAddr:'',
        memPhone:'',
        memEmail:'',
        memBirth:'',
    };
  },
  methods: {
    sendPost () {
      console.log('test')
      axios.post('http://192.168.0.81:8081/idCheckProc', {
        memID: this.memID
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
