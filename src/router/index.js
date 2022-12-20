import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/', name: 'Home', component: () => import('@/views/Home'),
}, {
  path: '/page', name: 'page', component: () => import('@/views/DragPage/index'),
},]

export default new Router({
  mode: 'history', base: process.env.BASE_URL, routes,
})
