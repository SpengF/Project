import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/pages/mainPage'
import search from '@/pages/search'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/mainPage',
      name: '主页',
      component: mainPage
    },
    {
      path: '/search',
      name: '搜索',
      component: search
    }
  ]
})
