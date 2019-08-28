import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import Vant from 'vant'
import {fetchPost} from './api/index'

Vue.config.productionTip = false
Vue.prototype.$post=fetchPost;
import './assets/css/reset.css'
import 'vant/lib/index.css';
Vue.use(Vant) 
import {Header,Footer} from './components/component'
Vue.use(Header)
Vue.use(Footer)
import './mock/index.js'
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
