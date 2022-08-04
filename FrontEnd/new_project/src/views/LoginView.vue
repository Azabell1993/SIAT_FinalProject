<template>
    <div id="loginview">
    <h1>Login</h1>
    <br>
    <form @submit.prevent="sendPost">  <!-- sendPost 함수 실행 -->
        <label for="memID">
          <td>ID&nbsp;</td><td><b-form-input id="memID" v-model="memID" type="text"/></td></label><br><br>
        <label for="memPW">
          <td>PW&nbsp;</td><td><b-form-input id="memPW" v-model="memPW" type="password"/></td></label><br><br>
        <button class="btn btn-outline-secondary">Login</button><br>
        <!-- @click="onClickRedirect()" 로그인 성공시 화면 이동 -->
        {{ memID }}
    </form>
    </div>
</template>
<script>
import axios from 'axios'
import store from '@/store/index'
import ipconfig from '@/store/ipconfig'

const url = ipconfig.state.ip

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default {
  methods: {
    sendPost () {
      const vm = this
      const userId = this.memID; //변수 선언 이 값을 그대로 쓰겠다. 자스 내에선 this 선언 부분이 다를 수있음. 당분간 이게 좀 안전할 듯
      console.log('input 값 : ',userId);

      axios.post(url+'/mem/loginProc', {
        memID: this.memID,
        memPW: this.memPW
      })
        .then(function (response) { //될떄 실행하는 함수
          console.log('response 값 : ',response.data.mem)
          if(response.data.mem.memID == userId){
            console.log("ID가 일치합니다.")
            setTimeout(()=> {//일정시간 뒤 
              location.href = ipconfig.state.networkip //페이지 새로고침 기능 임시 대체(주석 처리하면 당연히 페이지 렌더리이 안되므로 새로고침 눌러야 새로운 값이 들어가는 것)
            },500)
            
            axios.post(url+'/mem/memberInfo', 
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
              store.commit('updateloginUserAddr', response.data.data.memAddr)
              store.commit('updateloginUserPhone', response.data.data.memPhone)
              store.commit('updateloginUserBirth', response.data.data.memBirth)
              store.commit('updateloginUserRole', response.data.data.memRole)
              store.commit('updateloginUserEmail', response.data.data.memEmail)
              console.log('store에 있는 Id : ',store.state.loginUser.memID)
            })
          }
        }).catch(function () { // 뭔가 실패할때 쓰는 함수
          alert('ID 혹은 비밀번호가 틀렸습니다')
        })
    }
  }
}
</script>

<style scoped>
#loginview{
  margin-top:100px;
}
</style>