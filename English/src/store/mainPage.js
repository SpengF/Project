import {fetchPost} from '../api/index'
const mainPage={
  state: {
    slideArray:[],
    levelarray:[]
  },
  mutations: {
    assignmentSlideArray(state,e){
      state.slideArray=e;
    },
    assignmentLevel(state,e){
      state.levelarray=e;
    }
  },
  actions:{
    async assignmentSlideArray({commit}){
      try {
        let data=await fetchPost('/index')
        commit('assignmentSlideArray',data)
      }
      catch(e){
        console.log(e)
      }
    },
    async assignmentLevel({commit},el){
      console.log(333,el)
      let data=await fetchPost(el)
      commit('assignmentLevel',data)
    }
  },
  getters: {
    getslideArray(state){
      return state.slideArray
    },
    getlevelArray(state){
      return state.levelArray
    }
  }
}
export default mainPage;