<!-- 회원 마이페이지 부분 -->
<template>
  <div id="mypagecategory">
    <!-- views/mypage 각 메뉴로 이동 -->
    <router-link to="/selectorder">주문 조회</router-link> |
    <router-link to="/modifyinfo">정보 수정</router-link> |
    <router-link to="/memberresign">회원 탈퇴</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}
#mypagecategory{
  margin-top: 100px;
}
</style>
