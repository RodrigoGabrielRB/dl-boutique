import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/estoque',
    name: 'Estoque',
    component: () => import(/* webpackChunkName: "estoque" */ '../pages/Estoque')
  },
  {
    path: '/vendas',
    name: 'Vendas',
    component: () => import(/* webpackChunkName: "vendas" */ '../pages/Vendas')
  },
  {
    path: '/produtos',
    name: 'Produtos',
    component: () => import(/* webpackChunkName: "produtos" */ '../pages/Produtos')
  },
  {
    path: '/Relatorios',
    name: 'relatorios',
    component: () => import(/* webpackChunkName: "relatorios" */ '../pages/Relatorios')
  }
]

const router = new VueRouter({
  routes
})

export default router
