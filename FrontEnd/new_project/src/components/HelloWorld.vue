<template>
  <div id="main">
    <img id="mainlogo" src="@/assets/logo.png">
    <p id="subtitle"> Made by SIAT</p>
    <hr>
    <CategoryList></CategoryList> <!-- 카테고리 부분 컴포넌트 -->
    <ProductList></ProductList> <!-- 상품 리스트 컴포넌트 -->
  </div>
</template>

<script>
import CategoryList from '@/components/CategoryList.vue'
import ProductList from '@/components/ProductList.vue'

export default {
  components: {
    CategoryList,
    ProductList 
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr {
  border : none;
  background-color: #0067A3;
  height: 10px;
  width: 5%;
  align-content :  center;
  margin-left : auto;
  margin-right : auto;
}

#main{
  margin-top : 110px;
}

ul {
  list-style-type: none;
  padding: 0;
}
#mainlogo {
  width : 600px;
  height: 100px;
}
#subtitle {
  margin-top : 10px;
  font-size: 30px;
}
</style>
