<template>
<MypageCategoryVue></MypageCategoryVue>
<hr>
  <h1>회원 탈퇴 페이지</h1>

  <form @submit.prevent="deleteupProc">  <!-- sendPost 함수 실행 -->
  <hr>
        <label for="memID">ID : <input id="memID" v-model="deleteup.memID" type="text" readonly></label><br><br>
       <label for="memPW">비밀번호 : 
         <input type="password" id="memPW" v-model="deleteup.memPW" @blur="passwordValid" ref="memPWck"></label><br>
        <label for="memPWCheck">비밀번호 확인 : <input type="password" id="memPWCheck" v-model="deleteup.memPWCheck" maxlength="16" @blur="passwordCheckValid" ref="modifyup.memPW"></label><br>
        <div v-if="!passwordValidFlag">유효하지 않은 비밀번호 입니다.</div><hr>

        <input type="reset" value="초기화">
        <input type="submit" id="signout_submit" value="회원 탈퇴">
<hr>
    </form>
</template>

<script>
import axios from 'axios'
import store from '@/store/index'
import MypageCategoryVue from '@/components/MypageCategory.vue'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default {
  components: {
    MypageCategoryVue,
    loginuser () {
      return this.memID
    }
  },

  data() {
    return {
      deleteup : {
        memID : store.state.loginUser.memID,
        memPW : null,
        memPWCheck : null,
        memName: store.state.loginUser.memName,
        memAddr: store.state.loginUser.memAddr,
        memPhone:store.state.loginUser.memPhone,
        memEmail :store.state.loginUser.memEmail,
        memBirth: store.state.loginUser.memBirth
      },
      passwordValidFlag: true,
      asswordCheck: '',
    };          
  },

  methods : {


    /* 비밀번호 정규식 */
    passwordValid () {
      if (store.state.loginUser.memPW === this.deleteup.memPW) {
        this.passwordValidFlag = true
      } else {
        this.passwordValidFlag = false
      }
    },

     passwordCheckValid () {
      if (this.deleteup.memPW === this.deleteup.memPWCheck) {
        this.passwordCheckFlag = true
      } else {
        alert("두 비밀번호가 같아야합니다.");
        this.passwordCheckFlag = false
      }
    },

    /* pw check */
    checkPw() {
      if(!(store.state.loginUser.memPW)) {		
        alert("다시 입력해주세요.");		
        return false;
      } else {
        //alert("맞게 입력하셨습니다.");
        return true;
      }
    },


    /* 회원가입 정보 전체 넘기기 */
    deleteupProc() {    

      // console.log('ID test')
      
      if(!this.deleteup.memPW) {
        alert("비밀번호를 입력해주세요!");
        return false;
      } else if(!this.deleteup.memPWCheck) {
        alert("비밀번호 체크를 해주세요!");
        return false;
      } else {
        axios.post('http://192.168.202.11:9292/mem/deleteProc', {          
          memID: this.deleteup.memID,
          memPW: this.deleteup.memPW,
          memName: this.deleteup.memName,
          memAddr: this.deleteup.memAddr,
          memPhone: this.deleteup.memPhone,
          memEmail: this.deleteup.memEmail,
          memBirth : this.deleteup.memBirth
        }) .then(function (res) {
          //console.log(res.data.data);
          if(res.data.data === 'true') {
            alert("회원탈퇴 완료");
          } 

        }).catch(function (error) {
            console.log(error)
        })

      }

    } // modifyupProc


  }
}
</script>

<style>

</style>