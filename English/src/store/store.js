import vue from 'vue'
import Vuex from 'vuex'
import mainPage from './mainPage'
import search from './search'
vue.use(Vuex)
export default new Vuex.Store({
  state:{
    stateRouter:'' //存储路由
  }, 
  mutations:{

  },
  modules:{
    mainPage,
    search
  }
})