<!-- 관리자 메인 페이지, 여기서 추가로 더 할 건 없습니다~! -->
<template>
<div id="admainpage">
    <ProductEnroll></ProductEnroll>
</div>

</template>

<script>
import AdminCategory from '@/components/AdminCategory.vue'
import ProductEnroll from '@/views/admin/ProductEnroll.vue'
export default {
  components: {
    AdminCategory,
    ProductEnroll
  }
}
</script>

<style scoped>
#admainpage{
  margin-top : 100px;
}
</style>