import Vue from 'vue'
import VueRouter from 'vue-router'
import loveday from '../views/loveday.vue'

Vue.use(VueRouter)

const routes = [{ path: '/', component: loveday }]

const router = new VueRouter({
  routes,
})

export default router
