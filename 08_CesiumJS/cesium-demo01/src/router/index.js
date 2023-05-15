import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/bingMaps',
    name: 'bingMaps',
    component: () => import(/* webpackChunkName: "about" */ '../views/BingMaps.vue')
  },
  {
    path: '/VcViewer',
    name: 'VcViewer',
    component: () => import(/* webpackChunkName: "about" */ '../views/VcViewer.vue')
  },
  {
    path: '/VcLayerImagery',
    name: 'VcLayerImagery',
    component: () => import(/* webpackChunkName: "about" */ '../views/VcLayerImagery.vue')
  },
  {
    path: '/HelloCesium',
    name: 'HelloCesium',
    component: () => import(/* webpackChunkName: "about" */ '../views/HelloCesium.vue')
  },
  {
    path: '/VcEntity',
    name: 'VcEntity',
    component: () => import(/* webpackChunkName: "about" */ '../views/VcEntity.vue')
  },
  {
    path: '/VcPrimitiveModel',
    name: 'VcPrimitiveModel',
    component: () => import(/* webpackChunkName: "about" */ '../views/VcPrimitiveModel.vue')
  },
  {
    path: '/Tianditu',
    name: 'Tianditu',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tianditu.vue')
  },
  {
    path: '/VcNavigation',
    name: 'VcNavigation',
    component: () => import(/* webpackChunkName: "about" */ '../views/VcNavigation.vue')
  },
  {
    path: '/VcOverviewMap',
    name: 'VcOverviewMap',
    component: () => import(/* webpackChunkName: "about" */ '../views/VcOverviewMap.vue')
  },
  {
    path: '/Baidu',
    name: 'Baidu',
    component: () => import(/* webpackChunkName: "about" */ '../views/Baidu.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
