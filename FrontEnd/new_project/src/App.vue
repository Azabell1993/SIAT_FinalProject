<template>
<div>
  <form v-on:submit.prevent="productsubmit">
    <input type="text" v-model="productsearch" id="productsearch" placeholder="제품을 입력하세요">
    <button type="submit">검색</button>
  </form>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/signup">Sign up</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/mycart">장바구니</router-link> |
    <router-link to="/mypage">My Page</router-link>
  </nav>
    <router-link to="/admin">Admin Page</router-link>
  <router-view></router-view>
</div>
</template>
<script>
export default {
  data () {
    return {
      productsearch: ''
    }
  },
  methods: {
    productsubmit () {
      // console.log(this.productsearch)
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
