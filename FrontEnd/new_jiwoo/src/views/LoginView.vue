<template>
    <div>
    <h1>Login 페이지입니다.</h1>
    
    <form @submit.prevent="sendPost">  <!-- sendPost 함수 실행 -->
        <label for="memID">ID : <input id="memID" v-model="memID" type="text"></label><br><br>
        <label for="memPW">PW : <input id="memPW" v-model="memPW" type="password"></label><br><br>
        <button  >Send</button><br>
        <!-- @click="onClickRedirect()" 로그인 성공시 화면 이동 -->
        {{ memID }}
    </form>
    </div>
</template>
<script>
import axios from 'axios'
import store from '@/store'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default {
  computed: {
    memID: {
      get () {
        return store.state.loginUser.memID //store에 있는 값 가져오기 (초기값을 가져옴)
      },
      set(value) {
        this.$store.commit('updateloginUserID', value) //input에 친 값을 다시 세팅
      }
    }
  },
  methods: {
    sendPost () {
      const userId = this.memID; //변수 선언 이 값을 그대로 쓰겠다. 자스 내에선 this 선언 부분이 다를 수있음. 당분간 이게 좀 안전할 듯
      console.log(userId);

      axios.post('http://192.168.0.81:9292/loginProc', {
        memID: this.memID,
        memPW: this.memPW
      })
        .then(function (res) {
          if(res.data.mem.memID == userId){
            console.log("ID가 일치합니다.")
            location.href = "http://localhost:8080/"
          }
          //store.commit('updateloginUserID',this.memID)
          console.log(`login : ${store.state.loginUser.memID}`) //store에 있는 ID 값 체크
        }).catch(function () {
          alert('ID 혹은 비밀번호가 틀렸습니다')
        })
        console.log("end")
    }
  }
}
</script>
