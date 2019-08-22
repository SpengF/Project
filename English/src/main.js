import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import {fetchPost} from './api/index'
/**
 * @compunents 各类组件
 * @description 注册各类全局组件
 */
import {Header} from './components/component'
Vue.use(Header)
Vue.config.productionTip = false
Vue.prototype.$post=fetchPost;

import 'vant/lib/index.css';
Vue.use(Vant) 

import './mock/index.js'
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
