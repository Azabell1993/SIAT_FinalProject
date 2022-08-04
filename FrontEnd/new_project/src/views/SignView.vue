<template>
  <div class="container">
    <div>
      <h1>Sign Up 페이지입니다.</h1>
     </div>
     
      <form action="/SignUp" method="get" class="usersignup" @submit.prevent="signUpProc">
        <form action="/SignTest" method="get" class="userjoin" @submit.prevent="checkId">
            <label for="memID">아이디 : <input type="text" id="memID" v-model="signup.memID" mexlength="20"  @blur="idValid" ref="memIDck"><p id="userid_msg"></p></label>
            <!-- <label for="memIDCheck">아이디 확인 : <input type="text" id="memIDCheck" v-model="signup.memIDCheck" mexlength="20"  @blur="idCheckValid"><p id="userid_msg"></p></label> -->
            <div v-if="!idValidFlag">유효하지 않은 아이디입니다.</div>
            <button>아이디 사용 가능 체크</button>
        </form>

        <form action="/PwTest" class="userpwcheck" @submit.prevent="checkPw">
          <p>8 ~ 16자 대/소 영문, 숫자, 특수문자를 최소 한가지씩 조합하세요.</p>
          <label for="memPW">비밀번호 : 
          <input type="password" id="memPW" v-model="signup.memPW" @blur="passwordValid" ref="memPWck"></label><br>
          <label for="memPWCheck">비밀번호 확인 : <input type="password" id="memPWCheck" v-model="signup.memPWCheck" maxlength="16" @blur="passwordCheckValid" ref="signup.memPW"></label><br>
          <div v-if="!passwordValidFlag">유효하지 않은 비밀번호 입니다.</div>
          <!-- <button>비밀번호 체크</button> -->
        </form>
        
        <label for="memName">이름 : <input type="text" id="memName" v-model="signup.memName"></label><br>
        <label for="memAddr">주소 : <input type="text" id="memAddr" v-model="signup.memAddr"></label><br>
        <label for="memPhone">전화번호 : <input type="text" id="memPhone" v-model="signup.memPhone"></label><br>
        <label for="memEmail">이메일  <input type="text" id="memEmail" v-model="memEmail" ref="memEmailck"></label><br>
        <label for="memBirth">생년월일 : <input type="date"  id="memBirth" v-model="memBirth" ></label><br>
        <input type="reset" value="초기화">
        <input type="submit" id="login_submit" value="가입">
      </form>

  </div>
</template>

<script>
import axios from 'axios'
import ipconfig from '@/store/ipconfig'

const url = ipconfig.state.ip
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default {
  
  data() {
    return {
        memEmail:'test@test.com',
        memBirth:'1990-01-01',
        
        signup: {
          memID:null,
          //memIDCheck:null,
          memPW:null,
          memPWCheck:null,
          memName:null,
          memAddr:null,
          memPhone:'010-1234-5678',
          },
          idValidFlag: true,
          passwordValidFlag: true,
          
          idCheck:'',
          passwordCheck: '',
    };
  }, /* export default */
  methods: {
    idValid () {
      if( /^[A-Za-z]{1}[A-Za-z0-9]{3,19}$/.test(this.signup.memID)) {        
        this.idValidFlag = true
      } else {
        this.idValidFlag = false
      }
    },
    idCheckValid() {
        if (this.signup.memID === this.idCheck) {
        this.idCheck = true
      } else {
        this.idCheck = false
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

      /* 정규식 검사 */
      if(!(this.idValidFlag)) {
        alert("사용할 수 없는 조합의 아이디입니다.");
      } else{
         /* DB와 비교하기 */
      axios.post(url+'/mem/idCheckProc', {
        memID: this.signup.memID
      })
        .then(function (idchk) {
          if(idchk.data.data === 'false') {
            alert("사용 가능");
          } else {
            alert("이미 누가 사용하고 있는 아이디입니다.");
          }
        })
        .catch(function (error) {
          console.log(error)
        })
      }

    },
    /* pw check */
    checkPw() {
      if(!(this.passwordValidFlag)) {		
        alert("사용할 수 없는 조합입니다.\n패스워드 설정안내를 확인해 주세요.");		
        return false;
      }
      alert("사용 가능한 비밀번호 입니다.");
      return true;
    },
    
    /* 회원가입 정보 전체 넘기기 */
    signUpProc() {
      const vm = this
      if(!vm.signup.memID) {
        alert("아이디를 입력해주세요!");
        return;
      } else if(!vm.signup.memPW) {
        alert("비밀번호를 입력해주세요!");
        return;
      } else if(!vm.memEmail) {
        alert("이메일을 입력해주세요!");
        return;
      } else {
        axios.post(url+'/mem/signUpProc', {
          memID: vm.signup.memID,
          memPW: vm.signup.memPW,
          memPWCheck: vm.signup.memPWCheck,
          memName: vm.signup.memName,
          memAddr: vm.signup.memAddr,
          memPhone: vm.signup.memPhone,
          memEmail: vm.memEmail,
          memBirth: vm.memBirth  
        }) .then(function (datatest) {
            console.log('가입 후 유저 정보 : ',datatest.data)
            if(datatest.data.data === false) {
              alert("기존에 없는 아이디를 생성하시오.");
            } else if(datatest.data.data !== true){
              alert("회원가입 완료")
              location.href = ipconfig.state.networkip
            }
            //console.log(datatest.data);
          }).catch(function (error) {
            console.log(error)
          })
      }
    } // signUpProc
  } // methods

} // export default
</script>

