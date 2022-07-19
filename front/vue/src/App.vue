<template>
<div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/signup">Sign up</router-link> |
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view></router-view>
</div>
</template>

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
