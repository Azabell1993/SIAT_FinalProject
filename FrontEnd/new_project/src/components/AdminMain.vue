<!-- 관리자 메인 페이지, 여기서 추가로 더 할 건 없습니다~! -->
<template>
<div>
    <AdminCategory></AdminCategory> <!-- 관리자 메뉴 -->
    <h1>관리자 페이지입니다</h1>
</div>

</template>

<script>
import AdminCategory from '@/components/AdminCategory.vue'
export default {
  components: {
    AdminCategory
  }
}
</script>
