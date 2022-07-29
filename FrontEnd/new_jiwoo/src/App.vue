<template>
<div>
  <div class="login" v-if="loginuser">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/mycart">장바구니</router-link> |
      <router-link to="/mypage">My Page</router-link>
      <p>{{loginuserid}}님 환영합니다.
        <button @click="userlogout">logout</button>
      </p>
      <router-link to="/admin" v-if="loginuserid == 'admin'">Admin Page</router-link> 
    </nav>
  </div>
  <div class="logout" v-else>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">Sign up</router-link> |
      <router-link to="/login" id="login">login</router-link> |
    </nav>
  </div>
  
  <form v-on:submit.prevent="productsubmit">
    <input type="text" v-model="productsearch" id="productsearch" placeholder="제품을 입력하세요">
    <button type="submit">검색</button>
  </form>
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
      loginuserid: store.state.loginUser.memID
    }
  },
  computed: {
    loginuser () {
      return this.loginuserid
    }
  },
  methods: {
    productsubmit () {
      // console.log(this.productsearch)
    },
    userlogout () {
      this.loginuserid = ''
      this.$store.commit('updateloginUserID', this.loginuserid)
      location.href = "http://localhost:8081/"
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
