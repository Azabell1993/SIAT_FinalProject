<template>
  <div>
    <ul>
      <nav v-bind:key="index" v-for="(item, index) in categoryIndex">
        <li v-if="index==='상의'"><router-link to="/topview">상의</router-link>
          <!-- <select>
            <option>{{index}}</option>
            <option v-bind:key="small" v-for="small in item">{{small}}</option>
          </select> -->
        </li>
        <li v-if="index==='바지'"><router-link :to="{name: 'PantsView'}">바지</router-link></li>
        <li v-if="index==='신발'"><router-link to="/shoesview">신발</router-link></li>
        <li v-if="index==='치마'"><router-link to="/skirtview">치마</router-link></li>
        <li v-if="index==='모자'"><router-link to="/accessoryview">모자</router-link></li>
      </nav>
    </ul>

    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
  </div>
  
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      categoryIndex : [],
      mystyle: {
        width : "100px",
        height : "100px",
        backgroundColor : "yellow"
      },
    }
  },
  mounted () {
    var vm = this
    axios.post('http://192.168.0.81:9292/pro/categoryData')
        .then(function (response) {
          vm.categoryIndex = response.data
          console.log('상품 데이터 : ',response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
  },
   methods: {
        changemenu: function () {
            this.mystyle.backgroundColor = "green"
        },
        orginalmenu: function () {
            this.mystyle.backgroundColor = "yellow"
        }
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
