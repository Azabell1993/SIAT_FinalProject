<template>
  <div>
    <ul>
      <nav v-bind:key="index" v-for="(item, index) in categoryIndex">
        <li v-if="index==='상의'"><router-link to="/topview">상의</router-link></li>
        <li v-if="index==='바지'"><router-link :to="{name: 'PantsView'}">바지</router-link></li>
        <li v-if="index==='신발'"><router-link to="/shoesview">신발</router-link></li>
        <li v-if="index==='치마'"><router-link to="/skirtview">치마</router-link></li>
        <li v-if="index==='모자'"><router-link to="/accessoryview">모자</router-link></li>
      </nav>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      categoryIndex : []
    }
  },
  mounted () {
    var vm = this
    axios.post('http://192.168.0.81:9292/categoryData')
        .then(function (response) {
          vm.categoryIndex = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
  }
}
</script>

<style scoped>
ul nav {
  display:inline-block;
}
ul nav li {
   list-style:none;
}

</style>
