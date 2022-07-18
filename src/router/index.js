import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TopView from '../views/TopView.vue'
import PantsView from '../views/PantsView.vue'
import OuterView from '../views/OuterView.vue'
import AccessoryView from '../views/AccessoryView.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
