import {fetchPost} from '../api/index'
import { Toast } from 'vant';
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
        Toast(e);
      }
    },
    async assignmentLevel({commit},el){
      let data=await fetchPost(el)
      commit('assignmentLevel',data)
    }
  },
  getters: {
    getslideArray(state){
      return state.slideArray
    },
    getlevelArray(state){
      return state.levelarray
    }
  }
}
export default mainPage;