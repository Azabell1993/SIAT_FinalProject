<template>

<div id="prodetailHeader">
<img id="mainlogo" src="@/assets/logo.png">
    <p id="subtitle"> Made by SIAT</p>
    <hr>
  <CategoryList></CategoryList>
</div>
<div id="prodetailview">
  <img id="img" loading="lazy" src=""/>

  <table>
    <tr>
      <!-- <th>상품명</th> -->
      <th id="productName"><h4>{{productInfo.proName}}</h4></th>
      <td>조회수 : {{productInfo.proCount}}</td>
    </tr>

    <tr>
      <td colspan="2">{{productInfo.proDetail}}</td>
    </tr>

    <!-- <tr v-bind:key="item" v-for="(item, index) in productInfo.proCategory">
      <th v-if="index == 'categoryLargeName'">카테고리 대분류</th>
        <td v-if="index == 'categoryLargeName'">{{ item }}</td>
      <th v-if="index == 'categorySmallName'">카테고리 소분류</th>
        <td v-if="index == 'categorySmallName'">{{ item }}</td>
    </tr> -->

    <tr>
      <th>상품가격</th>
      <td>￦ {{productInfo.proPrice}}</td>
    </tr>
    <td></td>
    <td>재고 수량 : {{productInfo.proStock}}</td>

    <!-- <tr v-bind:key="item" v-for="(item, index) in productInfo.proColor">
      <th  v-if="index == 'colorName'">상품 색깔</th>
        <td v-if="index == 'colorName'">{{ item }}</td>
    </tr> -->

    <tr>
      <!-- 수량 증가 버튼 -->
      <th>상품 수량</th>
      <td><b-form-input type="number" min="0" v-model="proCount"/></td>
    </tr>
    
    <div>재고 수량 : {{productInfo.proStock}}</div>
    <b-button v-on:click="mycartToproInfo()">장바구니 담기</b-button>
  </table>


  <!-- <div v-bind:key="index" v-for="(index, item) in productInfo">
    <p>{{ item }} : {{index}}</p>
  </div> -->
</div>
<div>
  <br>
  <h1>리뷰 게시판</h1>
  <h4>추후 구현 예정</h4>
</div>
</template>

<script>
import CategoryList from '@/components/CategoryList.vue'
import storeProduct from '@/store/recommendProducts'
import storeUser from '@/store/index'
import axios from 'axios'
import ipconfig from '@/store/ipconfig'

const url = ipconfig.state.ip
// const url = 'http://192.168.0.81:9292'

export default {
  components: {
    CategoryList,
  },
  data () {
    return {
      productInfo : [],
      proCount : '',
      proImageData : ''
    }
  },
  created () {
    const vm = this
    //시간 설정한 이유, 앞의 ProductList에서 selectOneProductCode에 저장하고 불러와주는 속도가 
    //이 페이지에서 selectOneProductCode 정보를 갖고오는게 더 빠름,
    //그래서 시간을 지연시킨 후 productDetail 코드를 불러 와준 후, 상품 정보를 갖고 오게 하자고 생각
    setTimeout(() => {
      axios.post(url+'/pro/proInfo', { 
        proCode : storeProduct.state.selectOneProductCode
      })
      .then(async function (response) {
        vm.productInfo = response.data.data
          
        await axios({
           method: 'post',
           url: url+'/pro/imageLoad',
           responseType: 'blob',
           data: {proName: response.data.data.proName }
         })
        .then((res) => {
          const url = window.URL.createObjectURL(new Blob([res.data], { type: res.headers['content-type'] } ))
          document.getElementById('img').src = url
        })
        .catch(function(error){
           console.log(error)
        })

          // axios.post(url+'/pro/imageLoad',{
          //   proName : response.data.data.proName,
          //   responseType: 'blob'
          // })
          // .then(function(response) {
          //   console.log('Image Data : ',response)
          //   var url = window.URL.createObjectURL(new Blob([response.data], 
          //   { type: response.headers['content-type'] } ))
          //   document.getElementById('img').src = url
          //   console.log('url : ',vm.proImageData)
            
          // })
      })
      .catch(function(error){
        console.log(error)
      })
    }, 500)
  },
  methods : {
    //테이블에 있는 td 값만 가져와서 myCart컨트롤러로 데이터 전달하는 기능
    mycartToproInfo () {
      // console.log(storeUser.state.loginUser.memID)
      if ( confirm("선택한 상품을 장바구니에 담겠습니까?") == true){   
           //확인
          axios.post(url+'/cart/addCart', {
          //addCart, cartInfo
          memID : storeUser.state.loginUser.memID,
          proCode : this.productInfo.proCode,
          cartCount : this.proCount
        })
      .then(function(response) {
        console.log(response.data)
        console.log('true false 여부 : ', response.data.data);
            if(response.data.data !== 'false') {
              alert('해당 상품이 장바구니에 담겼습니다.')
            }
        })
      }else if (response.data.data !== 'true'){   //취소
          alert('장바구니 담기가 취소되었습니다.')
      }

      //memID, proCount, proCode
      // console.log('장바구니 전달 데이터: ', this.productInfo.proCode)
       
      // console.log(this.proCount)
      //상품 조회시 뷰 증가 //proView, get
    }
  }
   
}
</script>

<style scoped>
hr {
  border : none;
  background-color: #0067A3;
  height: 10px;
  width: 5%;
  align-content :  center;
  margin-left : auto;
  margin-right : auto;
}

#prodetailHeader{
  margin-top : 150px;
}
#prodetailview{
  display:flex;
  justify-content: center;
  align-items: center;
}
img, table {
    display:inline-block;
}
#productName {
  width : 50%;
}
img {
  width : 500px;
  height : 500px;
}
table {
  border-top: 1px solid black;
  padding : 30px;
  margin-left : 150px;
}
th {
  padding : 30px;
}

</style>
