<template>
<div>
  <!-- 로그인 : 유저가 로그인 성공시 뜨는 상단 화면 -->
  <div class="login" v-if="loginuser">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/mycart">장바구니</router-link> |
      <router-link to="/mypage">My Page</router-link>
      <p>{{loginuserid}}님 환영합니다. <!-- 사용자 ID 출력 -->
        <button @click="userlogout">logout</button>
      </p>
      <router-link to="/admin" v-if="loginuserid == 'admin'">Admin Page</router-link> <!-- 로그인 ID가 관리자 계정시 관리자 페이지가 생성 -->
    </nav>
  </div>
  <!-- 로그아웃: 유저가 로그아웃시 뜨는 상단 화면 -->
  <div class="logout" v-else>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">Sign up</router-link> |
      <router-link to="/login" id="login">login</router-link> |
    </nav>
  </div>

  <!-- 상품 검색 부분 미완료 -->
  <!-- <form v-on:submit.prevent="productsubmit">
    <input type="text" v-model="productsearch" id="productsearch" placeholder="제품을 입력하세요">
    <button type="submit">검색</button>
  </form> -->
  <br>
    <router-view></router-view>
</div>
</template>
<script>
import store from '@/store/index'

export default {
  data () {
    return {
      productsearch: '', 
      loginuserid: store.state.loginUser.memID //로그인 유저 ID를 stroe 저장소에서 갖고온다.
    }
  },
  computed: {
    loginuser () {
      return this.loginuserid
    }
  },
  methods: {
    // productsubmit () {
    //   // console.log(this.productsearch)
    // },
    userlogout () { //로그아웃 버튼 클릭시 loginuserid를 비우고 다시 저장 후, 메인 화면으로 이동시킨다. 
      this.loginuserid = ''
      this.$store.commit('updateloginUserID', this.loginuserid)
      location.href = "http://localhost:8080/"
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
