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


    <!-- <form action="/productAdd" method="get" class="productAddSpaceCheck" @submit.prevent="productAddSpace">
      <label for="materialName"> 등록할 상품의 재질 선택 : <input type="text" id="proName" v-model="product.proName" mexlength="20" ></label><br/>
      <label for="ageName"> 등록할 상품의 주 연령대 선택 : <input type="text" id="proName" v-model="product.proName" mexlength="20" ></label><br/>
      <label for="priceRangeName"> 등록할 상품의 가격대 범위 선택 : <input type="text" id="proName" v-model="product.proName" mexlength="20" ></label><br/>
      <input type="reset" value="초기화">
      <input type="submit" id="product_submit" value="제출">
      
    </form> -->
      <hr>
      <label for="proName"> 등록할 상품 이름 : <input type="text" id="proName" v-model="product.proName" mexlength="20" ></label><br/><hr>
      <label for="proPrice"> 등록할 상품 가격 : <input type="text" id="proPrice" v-model="product.proPrice" mexlength="20" ></label><br/> <hr>
      <label for="proStock"> 등록할 상품 재고 : <input type="text" id="proStock" v-model="product.proStock" mexlength="20" ></label><br/> <hr>
      <label for="proDetail"> 등록할 상품 상세 설명 :<textarea id="proDetail" v-model="product.proDetail" mexlength="20" ></textarea></label><br/><hr>
      

    <form action="/productAdd" method="get" class="productAdd" @submit.prevent="productAddSpace">
      <!-- ------------------- -->
      <!-- 등록할 상품 카테고리 선택 -->
      <label for="categorySmallName" ><strong>등록할 상품 카테고리 선택</strong>
          <ul class="ul">
            <nav v-bind:key="index" v-for="(item, index) in categoryIndex" >
              <li class="li" v-if="index==='상의'">상의</li>
              <li class="li" v-if="index==='바지'">바지</li>
              <li class="li" v-if="index==='치마'">치마</li>
              <li class="li" v-if="index==='신발'">신발</li>
              <li class="li" v-if="index==='모자'">모자</li>
                  <select name="count" v-model="product.categorySmallName" id="categorySmallNameOption">
                    <option>{{index}}</option>
                    <option v-bind:key="small" v-for="small in item">{{small}}</option>
                  </select>
            </nav>
          </ul>
      </label><hr><br>
      <!-- 등록할 상품 카테고리 선택 -->
      <!-- ------------------- -->
      
      <!-- ---------------------- -->
      <!-- 등록할 상품의 주 성별 층 선택 -->
          <label for="genderName" ><strong>등록할 상품의 주 성별 층 선택</strong>
          <ul class="ul">
            <nav v-bind:key="index" v-for="(item, index) in genderIndex" >
              <li class="li" v-if="index==='성별'">성별 선택</li>
                  <select name="count" v-model="product.genderName" id="genderNameOption">
                    <option>{{index}}</option>
                    <option v-bind:key="small" v-for="small in item">{{small}}</option>
                  </select>
            </nav>
          </ul>
      </label><hr><br>
      <!-- 등록할 상품의 주 성별 층 선택 -->
      <!-- ---------------------- -->

      <!-- ---------------------- -->
      <!-- 등록할 상품의 색깔 층 선택 -->
          <label for="colorName" ><strong>등록할 상품의 색깔 선택</strong>
          <ul class="ul">
            <nav v-bind:key="index" v-for="(item, index) in colorIndex" >
              <li class="li" v-if="index==='성별'">성별 선택</li>
                  <select name="count" v-model="product.colorName" id="colorNameOption">
                    <option>{{index}}</option>
                    <option v-bind:key="small" v-for="small in item">{{small}}</option>
                  </select>
            </nav>
          </ul>
      </label><hr><br>
      <!-- 등록할 상품의 주 성별 층 선택 -->
      <!-- ---------------------- -->


      <!-- ---------------------- -->
      <!-- 등록할 상품의 색깔 층 선택 -->
          <label for="materialName" ><strong>등록할 상품의 재질 선택</strong>
          <ul class="ul">
            <nav v-bind:key="index" v-for="(item, index) in colorIndex" >
              <li class="li" v-if="index==='성별'">성별 선택</li>
                  <select name="count" v-model="product.materialName" id="materialNameOption">
                    <option>{{index}}</option>
                    <option v-bind:key="small" v-for="small in item">{{small}}</option>
                  </select>
            </nav>
          </ul>
      </label><hr><br>
      <!-- 등록할 상품의 주 성별 층 선택 -->
      <!-- ---------------------- -->



      <!-- -->
        <input type="reset" value="초기화">
        <input type="submit" id="product_submit" value="제출">

    
    </form>

    
</template>

<script>
import axios from 'axios'

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
      },
      categoryIndex : [],
      genderIndex: [],
      colorIndex: []
    };
  },
  /* import data code */
  /* Category small name */
  categoryMount () {
    var vm = this
    axios.post('http://192.168.0.81:9292/pro/categoryData')
        .then(function (response) {
          vm.categoryIndex = response.data
          console.log('상품 데이터 : ',response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  /* genderSelecter */
  genderMount () {
     var vm = this
    axios.post('http://192.168.0.81:9292/pro/categoryData')
    .then(function (response) {
          vm.genderIndex = response.data
          console.log('상품 데이터 : ',response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
  },
  /* colorSelecter */
  colorMount () {
     var vm = this
    axios.post('http://192.168.0.81:9292/pro/categoryData')
    .then(function (response) {
          vm.colorIndex = response.data
          console.log('상품 데이터 : ',response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
  },
  methods: {
    /* export data code */
    productAddSpace() {
      
      console.log('product test')
      // var select = document.getElementById('categorySmallNameOption');
      // var value = select.options[select.selectedIndex].value;
      // console.log(value);

      var ve = this;
      if(!ve.product.categorySmallName) {
        alert("카테고리 소분류 정보를 결정해주세요!");
        this.$refs.categorySmallNameClick.focus(); //방식으로 선택자를 찾는다.
        return;
      } else {
        axios.post('http://192.168.0.81:9292/pro/ProAdd', {
          proName: this.product.proName,
          proPrice: this.product.proPrice,
          proStock: this.product.proStock,
          proDetail: this.product.proDetail,
          categorySmallName: this.product.categorySmallName,
          genderName: this.product.genderName,
          colorName: this.product.colorName,
          materialName: this.product.materialName,
          ageName: this.product.ageName,
          priceRangeName: this.product.priceRangeName  
      })
        .then(function (datatest) {
          if(datatest.data.data !== 'true') {
            alert("true");
            // select내 id에서 값을 참조하여 가져온다.

            /* Test Get Selector at Category Name Value */
            var select = document.getElementById('categorySmallNameOption');
            var categorySmallNameOption_value = select.options[select.selectedIndex].value;
            console.log(categorySmallNameOption_value);

            /* Test Get Selector at genderNameOption Name Value */
            var select = document.getElementById('genderNameOption');
            var genderNameOption_value = select.options[select.selectedIndex].value;
            console.log(genderNameOption_value);

      
          } else {
            alert("false");
          }
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style>
ul nav {
  display: inline-block;
}

ul { list-style-type:none;
      margin : 1px; 
      display: inline-block;}
li { display:inline;     
    width: 5px;
    margin: 10px;
    height: 0.1px;
    background: linear-gradient(33deg, #d7d79f, #e5e5b9);
    border: 2px solid #f8f8ea;
    text-align: center;
    line-height: 30px;
    margin-left: 10px;}



</style>