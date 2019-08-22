import Vue from 'vue'
import App from './App'
import router from './router'
import elment from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import {fetchPost} from './api/index'
import {Header} from './components/component'
Vue.use(Header)
Vue.config.productionTip = false
Vue.prototype.$post=fetchPost;
Vue.use(elment) 
import './mock/index.js'
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
