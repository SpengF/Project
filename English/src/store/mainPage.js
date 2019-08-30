import {fetchPost} from '../api/index'
import { Toast } from 'vant';
const mainPage={
  state: {
    slideArray:[],
    levelarray:[],
    recordingDestroyed:'', //记录离开首页路由路径
    recordingScrool:''      //记录单词离开时位置
  },
  mutations: {
    assignmentSlideArray(state,e){
      state.slideArray=e;
    },
    assignmentLevel(state,e){
      state.levelarray=e;
    },
    recordingDestroyed(state,e){
      state.recordingDestroyed=e;
    },
    recordingScrool(state,e){
      state.recordingScrool=e;
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
      return state.slideArray;
    },
    getlevelArray(state){
      return state.levelarray;
    },
    getrecordingDestroyed(state){
      return state.recordingDestroyed;
    },
    recordingScrool(state){
      return state.recordingScrool;
    }
  }
}
export default mainPage;