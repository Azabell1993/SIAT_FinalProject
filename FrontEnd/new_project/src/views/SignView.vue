<template>
  <div>
    <h1>Sign Up 페이지입니다.</h1>
    <form action="" @submit.prevent="checkID">
      <label for="memID">아이디 : <input type="text" id="memID" v-model="memeID"></label><br>
      <label for="memPW">비밀번호 : <input type="password" id="memPW"></label><br>
      <label for="memPWCheck">비밀번호 확인 : <input type="password" id="memPWCheck"></label><br>
      <label for="memName">이름 : <input type="text" id="memName"></label><br>
      <label for="memAddr">주소 : <input type="text" id="memAddr"></label><br>
      <label for="memPhone">전화번호 : <input type="text" id="memPhone"></label><br>
      <label for="memEmail">이메일 : <input type="email" id="memEmail"></label><br>
      <label for="memBirth">생년월일 : <input type="date" id="memBirth"></label><br>
      <input type="reset" value="초기화">
      <button>가입</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default {
 
}
</script>

<style>

</style>
