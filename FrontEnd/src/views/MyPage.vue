<template> 
  <div id="mypageview">
    <!-- <MypageCategoryVue></MypageCategoryVue> -->
    <ModifyInfo></ModifyInfo>
  </div>
</template>

<script>
import MypageCategoryVue from '@/components/MypageCategory.vue'
import ModifyInfo from '@/views/mypage/ModifyInfo.vue'

export default {
  components: {
    MypageCategoryVue,
    ModifyInfo
  }
}
</script>

<style scoped>
#mypageview{
  margin-top : 100px;
}
</style>
