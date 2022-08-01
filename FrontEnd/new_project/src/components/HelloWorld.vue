<template>
  <div>
    <h1>{{ msg }}</h1>
    <!-- Welcome to My BlueClub 홈페이지 이름-->
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
ul {
  list-style-type: none;
  padding: 0;
}
</style>
