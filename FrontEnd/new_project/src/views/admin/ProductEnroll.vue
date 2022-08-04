<template>
  <AdminCategory></AdminCategory>
    <div class="container">
      <h1>상품 등록 페이지</h1>
    </div>


    <!-- <form action="/productAdd" method="get" class="productAddSpaceCheck" @submit.prevent="productAddSpace">
      <label for="priceRangeName"> 등록할 상품의 가격대 범위 선택 : <input type="text" id="proName" v-model="product.proName" mexlength="20" ></label><br/>
      <input type="reset" value="초기화">
      <input type="submit" id="product_submit" value="제출">
      
    </form> -->
      <hr>
      <label for="proName"> 등록할 상품 이름 : <input type="text" id="proName" v-model="product.proName" mexlength="20" ></label><br/><hr>
      <label for="proPrice"> 등록할 상품 가격 : <input type="text" id="proPrice" v-model="product.proPrice" mexlength="20" ></label> 원 <br/> <hr>
      <label for="proStock"> 등록할 상품 재고 : <input type="text" id="proStock" v-model="product.proStock" mexlength="20" ></label> 개 <br/> <hr>
      <label for="proDetail"> 등록할 상품 상세 설명 :<textarea id="proDetail" v-model="product.proDetail" mexlength="40" > 40자 내외로 작성해주세요. </textarea></label><br/><hr>

    <form action="/productAdd" method="post" class="productAdd" @submit.prevent="productAddSpace">
      <!-- ------------------- -->
      <!-- 1 -->
      <!-- 등록할 상품 카테고리 선택 -->
      <label for="categorySmallName" ><strong>등록할 상품 카테고리 선택</strong>
          <ul class="ul">
            <nav v-bind:key="index" v-for="(item, index) in categorySmallNameIndex" >


              <li class="li" v-if=" index==='상의'">
                <nav v-bind:key="index" v-if="(index) in categoryLargeNameIndex" >
                  <input type="radio" v-model="product.categoryLargeName" value="상의" id="상의" />상의 
                </nav>
              </li>

              <li class="li" v-if=" index==='바지'">
                <nav v-bind:key="index" v-if="(index) in categoryLargeNameIndex" >
                  <input type="radio" v-model="product.categoryLargeName" value="바지" id="바지" />바지
                </nav>
              </li>
              
              <li class="li" v-if=" index==='치마'">
                <nav v-bind:key="index" v-if="(index) in categoryLargeNameIndex" >
                  <input type="radio" v-model="product.categoryLargeName" value="치마" id="치마" />치마 
                </nav>
              </li>

              <li class="li" v-if=" index==='신발'">
                <nav v-bind:key="index" v-if="(index) in categoryLargeNameIndex" >
                  <input type="radio" v-model="product.categoryLargeName" value="신발" id="신발" />신발 
                </nav>
              </li>

              <li class="li" v-if=" index==='모자'">
                <nav v-bind:key="index" v-if="(index) in categoryLargeNameIndex" >
                  <input type="radio" v-model="product.categoryLargeName" value="모자" id="모자" />모자 
                </nav>
              </li>

              <select name="count" v-model="product.categorySmallName" id="categorySmallNameOption">
                <option v-bind:key="small" v-for="small in item">{{small}}</option>
              </select>

            </nav>
          </ul>
      </label><hr><br>
      <!-- ------------------- -->
      
      <!-- ---------------------- -->
      <!-- 2 -->
      <!-- 등록할 상품의 주 성별 층 선택 -->
          <label for="genderName" ><strong>등록할 상품의 주 성별 층 선택</strong>
          <ul class="ul">
            <nav v-bind:key="index" v-for="(item, index) in genderIndex" >
              <li class="li" v-if=" index==='남자'">성별 선택</li>
                  <select name="count" v-model="product.genderName" id="genderNameOption">
                    <option v-bind:key="small" v-for="small in item">{{small.genderName}}</option>
                  </select>
            </nav>
          </ul>
      </label><hr><br>
      <!-- ---------------------- -->

      <!-- ---------------------- -->
      <!-- 3 -->
      <!-- 등록할 상품의 색깔 층 선택 -->
          <label for="colorName" ><strong>등록할 상품의 색깔 선택</strong>
          <ul class="ul">
            <nav v-bind:key="index" v-for="(item, index) in colorIndex" >
              <li class="li" v-if=" index==='화이트'">색깔 선택</li>
                  <select name="count" v-model="product.colorName" id="colorNameOption">
                    <option v-bind:key="small" v-for="small in item">{{small.colorName}}</option>
                  </select>
            </nav>
          </ul>
      </label><hr><br>
      <!-- ---------------------- -->

      <!-- ---------------------- -->
      <!-- 4 -->
      <!-- 등록할 상품의 재질 층 선택 -->
          <label for="materialName" ><strong>등록할 상품의 재질 선택</strong>
          <ul class="ul">
            <nav v-bind:key="index" v-for="(item, index) in meterialIndex" >
              <li class="li" v-if=" index==='면'">재질 선택</li>
                  <select name="count" v-model="product.materialName" id="materialNameOption">
                    <option v-bind:key="small" v-for="small in item">{{small.materialName}}</option>
                  </select>
            </nav>
          </ul>
      </label><hr><br>
      <!-- ---------------------- -->

      <!-- ---------------------- -->
      <!-- 5 -->
      <!-- 등록할 상품의 주 연령대 선택 -->
          <label for="ageName" ><strong>등록할 상품의 연령대 선택</strong>
          <ul class="ul">
            <nav v-bind:key="index" v-for="(item, index) in ageIndex" >
              <li class="li" v-if=" index==='유아'">연령대 선택</li>
                  <select name="count" v-model="product.ageName" id="ageNameOption">
                    <option v-bind:key="small" v-for="small in item">{{small.ageName}}</option>
                  </select>
            </nav>
          </ul>
      </label><hr><br>
      <!-- ---------------------- -->

      <!-- ---------------------- -->
      <!-- 6 -->
      <!-- 등록할 상품의 주 가격대 책정 -->
          <label for="priceRangeName" ><strong>등록할 상품의 가격대 책정</strong>
          <ul class="ul">
            <nav v-bind:key="index" v-for="(item, index) in priceIndex" >
              <li cl0ass="li" v-if=" index==='~ 2만원'">가격대 선택</li>
                  <select name="count" v-model="product.priceRangeName" id="priceRangeNameOption">
                    <option v-bind:key="small" v-for="small in item">{{small.priceRangeName}}</option>
                  </select>
            </nav>
          </ul>
      </label><hr><br>
      <!-- ---------------------- -->

      <!-- ---------------------- -->
      <!-- 6 -->
      <!-- 등록할 상품의 주 계절 책정 -->
          <label for="seasonName" ><strong>등록할 상품의 계절대 선택</strong>
          <ul class="ul">
            <nav v-bind:key="index" v-for="(item, index) in seasonIndex" >
              <li cl0ass="li" v-if=" index==='봄'">계절 선택</li>
                  <select name="count" v-model="product.seasonName" id="seasonNameOption">
                    <option v-bind:key="small" v-for="small in item">{{small.seasonName}}</option>
                  </select>
            </nav>
          </ul>
      </label><hr><br>
      <!-- ---------------------- -->

      <!-- ---------------------- -->
      <!-- 7 -->
      <!-- 등록할 상품의 사진 업로드 -->

      <!-- <form action="/pictureAdd" method="post" class="pictureAdd" @submit.prevent="pictureAdd"> -->
        <div>
            <input type="file" id="form1" /> <br>
        </div>
        <div>
            <!-- <input type="reset" value="초기화"> -->
            <!-- <input type="submit" id="product_submit" value="사진등록 완료"> -->
        </div>
      <!-- </form> -->
      <hr>
      <!-- ---------------------- -->


      <!-- -->
      <div>
        <input type="reset" value="초기화">
        <input type="submit" id="product_submit" value="제출">
      </div>



    
    </form>

    
</template>

<script>
import axios from 'axios'
import ipconfig from '@/store/ipconfig'

const url = ipconfig.state.ip
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

import AdminCategory from '@/components/AdminCategory.vue'
export default {
  components: {
    AdminCategory
  },

  data() {
    return {
      product: {
        proName: 'test',       // 상품명 
        proPrice:'23000',      // 가격
        proStock: '23',      // 재고
        proDetail: '상세설명을 쓰세요',     // 상세설명

        /* selector option value name */
        categoryLargeName: null,
        categorySmallName: null, // 카테고리 소분류 이름
        genderName: null,    //성별 속성 이름
        colorName: null,     //색깔 속성 이름
        materialName: null,  // 재질 속성 이름
        ageName: null,       // 나이 속성 이름
        priceRangeName: null, // 가격대 속성 이름
        seasonName:null,       // 계절 속성 이름
      },
      picProduct: {
        proImage : {}
      },
      categoryIndex : [],
      genderIndex: [],
      colorIndex: [],
      meterialIndex: [],
      ageIndex:[],
      priceIndex : [],
      seasonIndex: [],
      categoryLargeNameIndex:[],
      categorySmallNameIndex:[]
    };
  }, //data() function

  mounted () {
    var vm = this

    /* import data code */
    /* 1 */
    /* Category large name */
    if(vm.categoryLargeNameIndex) {
        axios.post(url+'/pro/categoryData')
        .then(function (response) {
          vm.categoryLargeNameIndex = response.data
          console.log('상품 대분류 데이터 : ',response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    } // vm.categoryIndex


    /* import data code */
    /* 1 */
    /* Category small name */
    if(vm.categorySmallNameIndex) {
        axios.post(url+'/pro/categoryData')
        .then(function (response) {
          vm.categorySmallNameIndex = response.data
          console.log('상품 소분류 데이터 : ',response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    } // vm.categoryIndex


    /* 2 */
    /* genderSelecter */
    if(vm.genderIndex) {
        axios.post(url+'/pro/genderInfo')
        .then(function (response) {
          vm.genderIndex = response.data
          console.log('상품 성별 데이터 : ',response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }

    /* 3 */
    /* colorSelecter */
    if(vm.colorIndex) {
        axios.post(url+'/pro/colorInfo')
        .then(function (response) {
          vm.colorIndex = response.data
          console.log('상품 색깔 데이터 : ',response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    } // vm.colorIndex

    /* 4 */
    /* material Selector*/
    if(vm.meterialIndex) {
      axios.post(url+'/pro/materialInfo')
      .then(function (response) {
            vm.meterialIndex = response.data
            console.log('상품 재질 데이터 : ',response.data)
          })
          .catch(function (error) {
            console.log(error)
        })
    } //  vm.meterialIndex

    /* 5 */
    /* age Selector*/
    if(vm.ageIndex) {
        axios.post(url+'/pro/ageInfo')
        .then(function (response) {
              vm.ageIndex = response.data
              console.log('상품 나이 데이터 : ',response.data)
            })
            .catch(function (error) {
              console.log(error)
        })
    } //  vm.ageIndex

    /* 6 */
    /* priceRangeName Selector*/
    if(vm.meterialIndex) {
        axios.post(url+'/pro/priceRangeInfo')
        .then(function (response) {
              vm.priceIndex = response.data
              console.log('상품 가격대 데이터 : ',response.data)
            })
            .catch(function (error) {
              console.log(error)
      })
    } //  vm.meterialIndex

    /* 7 */
    /* seasonName Selector*/
    if(vm.seasonIndex) {
        axios.post(url+'/pro/seasonInfo')
        .then(function (response) {
              vm.seasonIndex = response.data
              console.log('상품 계절 데이터 : ',response.data)
            })
            .catch(function (error) {
              console.log(error)
      })
    } //  vm.meterialIndex

  }, // mounted
  methods: {

    productAddSpace() {
      
      console.log('product test')

      /* export data code */
      var ve = this;
      if(!ve.product.proName) {
        alert("상품의 정보를 결정해주세요!");
        return false;
      } else if(!ve.product.proPrice) {
        alert("상품의 가격을 결정해주세요!");
        return false;
      } else if(!ve.product.proStock) {
        alert("상품의 재고를 입력해주세요. 수량단위로 입력해주셔야 합니다.");
        return false;
      } else if(!ve.product.proDetail) {
        alert("상품의 상세설명을 입력해주세요.");
        return false;
      } else if(!ve.product.categoryLargeName) {
        alert("카테고리 대분류 정보를 결정해주세요!");
        return false;
      } else if(!ve.product.categorySmallName) {
        alert("카테고리 소분류 정보를 결정해주세요!");
        return false;
      }  else if(!ve.product.genderName) {
        alert("상품의 성별 속성을 선택해주세요.");
        return false;
      } else if(!ve.product.colorName) {
        alert("상품의 색상을 선택해 주세요.");
        return false;
      } else if(!ve.product.materialName) {
        alert("상품의 재질을 선택해주세요.");
        return false;
      } else if(!ve.product.ageName) {
        alert("상품의 연령대를 선택해주세요.");
        return false;
      } else if(!ve.product.priceRangeName) {
        alert("상품의 가격대를 선택해주세요.");
        return false;
      } else if(!ve.product.seasonName) {
        alert("상품의 계절을 선택해주세요.");
        return false;
      } else {
        
        alert("전송이 완료 되었습니다!");
        axios.post(url+'/pro/proAdd', {
          proName: ve.product.proName,
          proPrice: ve.product.proPrice,
          proStock: ve.product.proStock,
          proDetail: ve.product.proDetail,
          categoryLargeName: ve.product.categoryLargeName,
          categorySmallName: ve.product.categorySmallName,
          genderName: ve.product.genderName,
          colorName: ve.product.colorName,
          materialName: ve.product.materialName,
          ageName: ve.product.ageName,
          priceRangeName: ve.product.priceRangeName,
          seasonName : ve.product.seasonName,
          //proImage: this.picProduct.proImage
      }).then(function (datatest) {
          if(datatest.data.data !== true) {
            //alert("전송 완료");

            /* Image Form export Argc */
            console.log('picture test')

              /* proImage */
              console.log("사진 전송 시작 ");

              var inputFile = document.getElementById('form1');
              var files = inputFile.files;

              console.log('file 정보 넘어오기 확인',files[0].name);
              console.log('proName : ', ve.product.proName);

              let formData = new FormData();
            
              formData.append('proImage', files[0]);
              formData.append('proName', ve.product.proName);
              // FormData의 key 확인
              for (let key of formData.keys()) {
                console.log(key);
              }

              // FormData의 value 확인
              for (let value of formData.values()) {
                console.log(value);
              }

              axios.post(url+'/pro/imageUpload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                  }
              })
                .then(function (response) {
                  console.log(response.data)
                  // response => (this.info = response)
                })
                .catch(function(error) {
                console.log(error);
          });

            /* 기본 품 전송이 모두 true일 때 */
            /* Image Form export Argc */
          } else {
            alert("전송 오류. 다시 작성해서 제출해주십시오.");
          }
        }).catch(function (error) {
          console.log(error)
        })
    } // product else end
  }, //productAddSpace


  }
}
</script>

<style scoped>
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
