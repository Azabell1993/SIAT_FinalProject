<template>
<div>
  <h1>제품 상세 페이지입니다.</h1>
  {{ $routes.productdetail.price }}
</div>
</template>

<script lang="ts">
export default {
  props: ['item']
}
</script>

<style>

</style>
