<template>
<MypageCategoryVue></MypageCategoryVue>
  <div class="container">
    <hr>
    <div>
      <h3>회원 정보 수정 페이지입니다.</h3>
     </div>
     
      <form action="/modifyup" method="get" class="usermodifyup" @submit.prevent="modifyupProc">
        <p>{{ modifyup.memID }}님 회원정보 페이지.</p><hr>
      <form action="/PwTest" class="userpwcheck" @submit.prevent="checkPw">
        <p>8 ~ 16자 대/소 영문, 숫자, 특수문자를 최소 한가지씩 조합하세요.</p>
        <label for="memPW">비밀번호 : 
        <input type="password" id="memPW" v-model="modifyup.memPW" @blur="passwordValid" ref="memPWck"></label><br>
        <label for="memPWCheck">비밀번호 확인 : <input type="password" id="memPWCheck" v-model="modifyup.memPWCheck" maxlength="16" @blur="passwordCheckValid" ref="modifyup.memPW"></label><br>
        <div v-if="!passwordValidFlag">유효하지 않은 비밀번호 입니다.</div>
        <!-- <button>비밀번호 체크</button> -->
        </form>

        <label for="memName">이름 : <input type="text" id="memName" v-model="modifyup.memName" > </label><br>
        <label for="memAddr">주소 : <input type="text" id="memAddr" v-model="modifyup.memAddr"></label><br>
        <label for="memPhone">전화번호 : <input type="text" id="memPhone" v-model="modifyup.memPhone"></label><br>
        <label for="memEmail">이메일  <input type="text" id="memEmail" v-model="modifyup.memEmail" ref="memEmailck"></label><br><hr>

        <input type="reset" value="초기화">
        <input type="submit" id="modify_submit" value="수정완료">
      </form>
  </div>
</template>

<script>
import axios from 'axios'
import store from '@/store/index'
import MypageCategoryVue from '@/components/MypageCategory.vue'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
export default {
  components: {
    MypageCategoryVue
  },
  
  data() {
    return {
      
      modifyup: {
          memID: store.state.loginUser.memID,
          memPW:      null,
          memPWCheck: null,
          memName: store.state.loginUser.memName,
          memAddr: store.state.loginUser.memAddr,
          memPhone:store.state.loginUser.memPhone,
          memEmail :store.state.loginUser.memEmail,
          memBirth: store.state.loginUser.memBirth
          },
          // idValidFlag: true,
          passwordValidFlag: true,
          // idCheck:'',
          passwordCheck: '',
    };
  }, 

  
  /* export default */
  methods: {

    /* 비밀번호 정규식 */
    passwordValid () {
      if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/.test(this.modifyup.memPW)) {
        this.passwordValidFlag = true
      } else {
        this.passwordValidFlag = false
      }
    },

     passwordCheckValid () {
      if (this.modifyup.memPW === this.passwordCheck) {
        this.passwordCheckFlag = true
      } else {
        this.passwordCheckFlag = false
      }
    },

    /* pw check */
    checkPw() {
      if(!(this.passwordValidFlag)) {		
        alert("사용할 수 없는 조합입니다.\n패스워드 설정안내를 확인해 주세요.");		
        return false;
      } else if(store.state.loginUser.memPW === this.modifyup.memPW) {
        alert("이전 비밀번호와 같은 값은 사용할 수 없습니다.");		
        return false;
      } else {
        alert("사용 가능한 비밀번호 입니다.");
        return true;
      }
    },
    
    /* 회원가입 정보 전체 넘기기 */
    modifyupProc() {    

      // console.log('ID test')
      
      if(!this.modifyup.memPW) {
        alert("비밀번호를 입력해주세요!");
        return false;
      } else if(!this.modifyup.memPWCheck) {
        alert("비밀번호 체크를 해주세요!");
        return false;
      } else {
        axios.post('http://192.168.202.11:9292/mem/updateProc', {          
          memID: this.modifyup.memID,
          memPW: this.modifyup.memPW,
          memName: this.modifyup.memName,
          memAddr: this.modifyup.memAddr,
          memPhone: this.modifyup.memPhone,
          memEmail: this.modifyup.memEmail,
          memBirth : this.modifyup.memBirth
        }) .then(function ( ) {
            alert("정보 수정 완료");
          }).catch(function (error) {
            console.log(error)
          })

      }

    } // modifyupProc

  } // methods

} // export default
</script>