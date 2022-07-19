<template>
  <ul id="productList">
    <li v-bind:key="item" v-for="item in items">
        <img v-bind:src="item.imgurl"><br>
        {{ item.message }}
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          imgurl: require('@/assets/image/top1.png'),
          message: 'product1'
        },
        {
          imgurl: require('@/assets/image/pants1.png'),
          message: 'product2'
        },
        {
          imgurl: require('@/assets/image/outer1.png'),
          message: 'product3'
        },
        {
          imgurl: require('@/assets/image/accessory1.png'),
          message: 'product4'
        }
      ]
    }
  }
}
</script>

<style>
  img {
    width : 150px;
    height: 150px;
  }
</style>
