<template>

  <!-- 로그인 : 유저가 로그인 성공시 뜨는 상단 화면 -->
  <div id="loginheader" v-if="loginuser">
    <div id="logo">
        <router-link to="/"><img id="mainlogo" src="@/assets/logo.png"></router-link> 
        <p id="userheader"> 
         <!-- {{loginuserid}}님 환영합니다. 사용자 ID 출력 -->
         <router-link to="/mycart"><img id="mycart" src="@/assets/mycart.png"></router-link> | 
         <router-link to="/mypage"><img id="mypage" src="@/assets/mypage.png"></router-link> | 
         <router-link to="/admin" v-if="loginuserid == 'admin'">Admin Page</router-link> <!-- 로그인 ID가 관리자 계정시 관리자 페이지가 생성 -->
         <b-button variant="dark" @click="userlogout">logout</b-button>
      </p>
    </div> 
  </div>
  
  <!-- 로그아웃: 유저가 로그아웃시 뜨는 상단 화면 -->
  <div id="logoutheader" v-else>
    <div id="logo">
      <router-link to="/"><img id="mainlogo" src="@/assets/logo.png"></router-link>
      <p id="userheader">
        <router-link to="/signup">Sign up</router-link> |
        <router-link to="/login" id="login">login</router-link> 
      </p>
    </div>
  </div>

  <!-- 상품 검색 부분 미완료 -->
  <!-- <form v-on:submit.prevent="productsubmit">
    <input type="text" v-model="productsearch" id="productsearch" placeholder="제품을 입력하세요">
    <button type="submit">검색</button>
  </form> -->
  <br>
    <router-view></router-view>

</template>
<script>
import store from '@/store/index'
import ipconfig from './store/ipconfig'

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
      location.href = ipconfig.state.networkip
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
#app {
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#mainlogo {
  width: 250px;
  height : 50px;
}

#userheader {
 display: inline;
 margin-left: 25px;
 text-align : right;
 float : right;
}

#userheader button {
  margin-left : 10px;
  margin-right : 20px;
}

#logo {
  position: -webkit-sticky;
  background-color : white;
  width: 100%;
  position : fixed;
  padding : 30px;
  text-align: left;
}

#logo a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}

#mycart {
  width : 100px;
  height: 40px;
}

#mypage {
  width : 135px;
  height: 40px;
}
#logo a.router-link-exact-active {
  color: #42b983;
}
</style>
