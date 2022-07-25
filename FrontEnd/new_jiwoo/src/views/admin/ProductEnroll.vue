<!-- 

  ProAdd

   private String  proName; //상품명
   private Integer proPrice; //가격
   private Integer proStock; //재고
   private String  proDetail; //상세 설명

   private String  categorySmallName; //카테고리 소분류 이름
   private String  genderName; //성별 속성 이름
   private String  colorName; //색깔 속성 이름
   private String  materialName; //재질 속성 이름
   private String  ageName; //나이 속성 이름
   private String  priceRangeName; //가격대 속성 이름
-->
<template>
  <AdminCategory></AdminCategory>
    <div class="container">
      <h1>상품 등록 페이지</h1>
    </div>


    <form action="/productAdd" method="get" class="productAdd" @submit.prevent="productAddSpace">
      <label for="proName"> 등록할 상품 이름 : <input type="text" id="proName" v-model="product.proName" mexlength="20" ></label><br/>
      <label for="proName"> 등록할 상품 가격 : <input type="text" id="proPrice" v-model="product.proPrice" mexlength="20" ></label><br/>
      <label for="proStock"> 등록할 상품 재고 : <input type="text" id="proStock" v-model="product.proStock" mexlength="20" ></label><br/>
      <label for="proDetail"> 등록할 상품 상세 설명 : <h></h><textarea id="proDetail" v-model="product.proDetail" mexlength="20" ></textarea></label><br/>

      <label for="proName"> 등록할 상품 카테고리 선택 : <input type="text" id="proName" v-model="product.proName" mexlength="20" ></label><br/>


      <label for="proName"> 등록할 상품의 주 성별 층 선택 : <input type="text" id="proName" v-model="product.proName" mexlength="20" ></label><br/>
      <label for="proName"> 등록할 상품의 색깔 선택 : <input type="text" id="proName" v-model="product.proName" mexlength="20" ></label><br/>
      <label for="proName"> 등록할 상품의 재질 선택 : <input type="text" id="proName" v-model="product.proName" mexlength="20" ></label><br/>
      <label for="proName"> 등록할 상품의 주 연령대 선택 : <input type="text" id="proName" v-model="product.proName" mexlength="20" ></label><br/>
      <label for="proName"> 등록할 상품의 가격대 범위 선택 : <input type="text" id="proName" v-model="product.proName" mexlength="20" ></label><br/>
      <input type="reset" value="초기화">
      <input type="submit" id="product_submit" value="제출">
      
    </form>
</template>


<script>import axios from 'axios'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

import AdminCategory from '@/components/AdminCategory.vue'
export default {
  components: {
    AdminCategory
  },

  data() {
    return {
      product: {
        proName:null,       // 상품명 
        proPrice:null,      // 가격
        proStock:null,      // 재고
        proDetail:null,     // 상세설명
        categorySmallName:null, // 카테고리 소분류 이름
        genderName:null,    //성별 속성 이름
        colorName:null,     //색깔 속성 이름
        materialName:null,  // 재질 속성 이름
        ageName:null,       // 나이 속성 이름
        priceRangeName:null // 가격대 속성 이름
      }
    }
  }
}
</script>

<style>

</style>
