<template>
<div>
  <h1>제품 상세 페이지입니다.</h1>
  {{ $routes.productdetail.price }}
</div>
</template>

<script>
export default {
  props: ['item'],
  created () {
    console.log('this.item', this.item)
  }
}
</script>

<style>

</style>
