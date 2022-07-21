<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <CategoryList></CategoryList>
    <ProductList></ProductList>
  </div>
</template>

<script lang="ts">
import CategoryList from '@/components/CategoryList.vue'
import ProductList from '@/components/ProductList.vue'

export default {
  components: {
    CategoryList,
    ProductList
  },
  name: 'HelloWorld',
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
