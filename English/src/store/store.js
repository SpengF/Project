import vue from 'vue'
import Vuex from 'vuex'
import mainPage from './mainPage'
vue.use(Vuex)
export default new Vuex.Store({
  state:{
    stateRouter:'' //存储路由
  }, 
  mutations:{

  },
  modules:{
    mainPage
  }
})