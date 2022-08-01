<!-- 관리자 페이지 전용 메뉴 부분 -->
<template>
  <nav>
    <!-- views/admin에 있는 컴포넌트로 이동 -->
    <router-link to="/orderlist">주문 리스트</router-link> | 
    <router-link to="/memberlist">회원 관리</router-link> |
    <router-link to="/productenroll">상품 등록</router-link>
  </nav>
</template>

<script>
export default {

}
</script>
