import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/pages/mainPage'
import search from '@/pages/search'
import level from '@/pages/level'
import levelWordDetail from '@/pages/levelWordDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'marinPage',
      component: mainPage
    },
    {
      path:'/levelWordDetail',
      name:'levelWordDetail',
      component:levelWordDetail
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/level/:level',
      name: 'level',
      component: level,
    },
  ]
})
