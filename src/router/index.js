import Vue from 'vue'
import VueRouter from 'vue-router'
// import loveday from '../views/loveday.vue'
// import carptree from '../views/carptree.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: () => import('@/views/carptree') },
  { path: '/kfg/ss', component: () => import('@/views/loveday') },
]

const router = new VueRouter({
  routes,
})

export default router
