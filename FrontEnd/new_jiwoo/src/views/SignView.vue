<template>
  <div class="container">
    <div>
      <h1>Sign Up 페이지입니다.</h1>
      </div>
      <form action="/SignTest" method="get" class="userjoin" @submit.prevent="checkId">
           <label for="memID">아이디 : <input type="text" id="memID" v-model="signup.memID" mexlength="20" ><p id="userid_msg"></p></label>
          <div v-if="!idValidFlag">유효하지 않은 아이디입니다.</div>
          <button>아이디 중복 체크</button>
      </form>

      <form action="/PwTest" method="get" class="userpwcheck" @submit.prevent="checkPw">
      <p>8 ~ 16자 대/소 영문, 숫자, 특수문자를 최소 한가지씩 조합하세요.</p>
      <label for="memPW">비밀번호 : <input type="password" id="memPW" v-model="signup.memPW" @blur="passwordValid"></label><br>
      <label for="memPWCheck">비밀번호 확인 : <input type="password" id="memPWCheck" v-model="signup.memPWCheck" maxlength="16" @blur="passwordCheckValid"></label><br>
      <div v-if="!passwordValidFlag">유효하지 않은 비밀번호 입니다.</div>
      <button>비밀번호 체크</button>
      </form>
      
      <label for="memName">이름 : <input type="text" id="memName" v-model="signup.memName"></label><br>
      <label for="memAddr">주소 : <input type="text" id="memAddr" v-model="signup.memAddr"></label><br>
      <label for="memPhone">전화번호 : <input type="text" id="memPhone" v-model="signup.memPhone"></label><br>
      <label for="memEmail">이메일 : <input type="email" id="memEmail" v-model="signup.memEmail"></label>
      <br>
      <label for="memBirth">생년월일 : <input type="date" id="memBirth" v-model="signup.memBirth"></label><br>
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
        signup: {
          memID:null,
          memPW:null,
          memPWCheck:null,
          memName:'',
          memAddr:'',
          memPhone:'',
          memEmail:'',
          memBirth:''
          },
          idCheck:'',
          idValidFlag: true,
          passwordCheck: '',
          passwordValidFlag: true
    };
  }, /* export default */
  methods: {
    idValid () {
      if(/^[A-Za-z0-9]+$/.test(this.signup.memID)) {
        this.idCheck = true
      } else {
        this.idCheck = false
      }
    },
    idCheckValid() {
            if (this.signup.memID === this.idCheck) {
        this.idValidFlag = true
      } else {
        this.idValidFlag = false
      }
    },

    /* 비밀번호 정규식 */
    passwordValid () {
      if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/.test(this.signup.memPW)) {
        this.passwordValidFlag = true
      } else {
        this.passwordValidFlag = false
      }
    },
     passwordCheckValid () {
      if (this.signup.memPW === this.passwordCheck) {
        this.passwordCheckFlag = true
      } else {
        this.passwordCheckFlag = false
      }
    },
    /* 아이디 중복 체크 */
    checkId () {
      console.log('ID test')
      axios.post('http://192.168.0.107:9292/idCheckProc', {
        memID: this.signup.memID
      })
        .then(function (idchk) {
          if(idchk.data.data === idValidFlag) {
            alert("사용 가능");
          } else {
            alert("사용 불가");
          }
        })
        .catch(function (error) {
          console.log(error)
        })

    },
    /* pw check */
    checkPw() {
      // id 값 입력	


      if(!(this.passwordValidFlag)) {		
        alert("사용할 수 없는 조합입니다.\n패스워드 설정안내를 확인해 주세요.");		
        return false;
      }
      alert("사용 가능한 비밀번호 입니다.");
      return true;
    }
  } // methods

} // export default


</script>
