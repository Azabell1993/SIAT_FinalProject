<template>
  <div>
    <nav>
      <router-link to="/topview">상의</router-link> |
      <router-link to="/pantsview">하의</router-link> |
      <router-link to="/outerview">아우터</router-link> |
      <router-link to="/accessoryview">악세서리</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style>

</style>
