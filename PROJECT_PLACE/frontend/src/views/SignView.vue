<template>
  <div>
    <h1>Sign Up 페이지입니다.</h1>
    <form action="">
      <label for="memID">아이디 : <input type="text" id="memID"></label><br>
      <label for="memPW">비밀번호 : <input type="password" id="memPW"></label><br>
      <label for="memPWCheck">비밀번호 확인 : <input type="password" id="memPWCheck"></label><br>
      <label for="memName">이름 : <input type="text" id="memName"></label><br>
      <label for="memAddr">주소 : <input type="text" id="memAddr"></label><br>
      <label for="memPhone">전화번호 : <input type="text" id="memPhone"></label><br>
      <label for="memEmail">이메일 : <input type="email" id="memEmail"></label><br>
      <label for="memBirth">생년월일 : <input type="date" id="memBirth"></label><br>
      <input type="reset" value="초기화">
      <input type="submit" value="가입">
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
