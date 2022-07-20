<template>
  <ul id="productList">
    <li v-bind:key="item" v-for="item in items">
        <router-link to="/productdetail"><img v-bind:src="item.imgurl"></router-link>
        {{ item.name }}
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
          name: 'product1',
          price: 1000,
          stock: 30
        },
        {
          imgurl: require('@/assets/image/pants1.png'),
          name: 'product2'
        },
        {
          imgurl: require('@/assets/image/outer1.png'),
          name: 'product3'
        },
        {
          imgurl: require('@/assets/image/accessory1.png'),
          name: 'product4'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style>
  img {
    width : 150px;
    height: 150px;
  }
</style>
