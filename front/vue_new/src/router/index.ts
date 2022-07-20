import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TopView from '../views/product/TopView.vue'
import PantsView from '../views/product/PantsView.vue'
import OuterView from '../views/product/OuterView.vue'
import AccessoryView from '../views/product/AccessoryView.vue'
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

const routes: Array<RouteRecordRaw> = [
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
    name: 'TopView',
    component: TopView
  },
  {
    path: '/pantsview',
    name: 'PantsView',
    component: PantsView
  },
  {
    path: '/outerview',
    name: 'OuterView',
    component: OuterView
  },
  {
    path: '/accessoryview',
    name: 'AccessoryView',
    component: AccessoryView
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
