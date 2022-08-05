import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TopView from '../views/product/TopView.vue'
import PantsView from '../views/product/PantsView.vue'
import ShoesView from '../views/product/ShoesView.vue'
import AccessoryView from '../views/product/AccessoryView.vue'
import SkirtView from '../views/product/SkirtView.vue'
import ProductDetail from '../components/ProductDetail.vue'
import Admin from '../components/AdminMain.vue'
import MyPage from '../views/MyPage.vue'
import MyCart from '../views/MyCart.vue'
import OrderList from '../views/admin/OrderList.vue'
import MemberList from '../views/admin/MemberList.vue'
import ProductEnroll from '../views/admin/ProductEnroll.vue'
import SelectOrder from '../views/mypage/SelectOrder.vue'
import ModifyInfo from '../views/mypage/ModifyInfo.vue'
import MemberResign from '../views/mypage/MemberResign.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignView.vue')
  },
  {
    path: '/topview',
    name: '상의',
    component: TopView
  },
  {
    path: '/pantsview',
    name: '바지',
    component: PantsView
  },
  {
    path: '/shoesview',
    name: '신발',
    component: ShoesView
  },
  {
    path: '/accessoryview',
    name: '모자',
    component: AccessoryView
  },
  {
    path: '/skirtview',
    name: '치마',
    component: SkirtView
  },
  {
    path: '/productdetail',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/mycart',
    name: 'MyCart',
    component: MyCart
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage
  },
  {
    path: '/orderlist',
    name: 'OrderList',
    component: OrderList
  },
  {
    path: '/memberlist',
    name: 'MemberList',
    component: MemberList
  },
  {
    path: '/productenroll',
    name: 'ProductEnroll',
    component: ProductEnroll
  },
  {
    path: '/selectorder',
    name: 'SelectOrder',
    component: SelectOrder
  },
  {
    path: '/modifyinfo',
    name: 'ModifyInfo',
    component: ModifyInfo
  },
  {
    path: '/memberresign',
    name: 'MemberResign',
    component: MemberResign
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
