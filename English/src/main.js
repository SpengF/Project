import Vue from 'vue'
import App from './App'
import router from './router'
import mint from 'mint-ui'
import {fetchPost} from './api/index'
/**
 * @compunents 各类组件
 * @description 注册各类全局组件
 */
import {Header} from './components/component'
Vue.use(Header)
Vue.config.productionTip = false
Vue.prototype.$post=fetchPost;

import 'mint-ui/lib/style.css'
Vue.use(mint) 

import './mock/index.js'
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
