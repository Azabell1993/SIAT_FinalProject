<template>
    <div>
    <h1>Login 페이지입니다.</h1>
    
    <form @submit.prevent="sendPost">  <!-- sendPost 함수 실행 -->
        <label for="memID">ID : <input id="memID" v-model="memID" type="text"></label><br><br>
        <label for="memPW">PW : <input id="memPW" v-model="memPW" type="password"></label><br><br>
        <button>Send</button><br>
        <!-- @click="onClickRedirect()" 로그인 성공시 화면 이동 -->
        {{ memID }}
    </form>
    </div>
</template>
<script>
import axios from 'axios'
import store from '@/store/index'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default {
  methods: {
    sendPost () {
      const userId = this.memID; //변수 선언 이 값을 그대로 쓰겠다. 자스 내에선 this 선언 부분이 다를 수있음. 당분간 이게 좀 안전할 듯
      console.log(userId);

      axios.post('http://192.168.0.81:9292/mem/loginProc', {
        memID: this.memID,
        memPW: this.memPW
      })
        .then(function (response) { //될떄 실행하는 함수
          console.log(response.data)
          if(response.data.mem.memID == userId){
            console.log("ID가 일치합니다.")
            location.href = "http://localhost:8080/"
            
            axios.post('http://192.168.0.81:9292/mem/memberInfo', 
            {
              memID: userId
            })
            .then(function(response) {
              // console.log(response.data)
              // console.log('memPW : ',response.data.data.memPW)
              // store.commit('updateloginUserID', userId) //로그인이 성공하는 과정에서 memID를 조회해서 정보를 가져오는건가?
              store.commit('updateloginUserID', response.data.data.memID)
              store.commit('updateloginUserPW', response.data.data.memPW)
              store.commit('updateloginUserName', response.data.data.memName)
              console.log('store에 있는 Name : ',store.state.loginUser.memName)
            })
          }
          else{
            alert('ID 혹은 비밀번호가 틀렸습니다')
          }
          //store.commit('updateloginUserID',this.memID)
          console.log(`login : ${store.state.loginUser.memID}`) //store에 있는 ID 값 체크
        }).catch(function (error) { // 뭔가 실패할때 쓰는 함수
          console.log(error);
        })
    }
  }
}
</script>
