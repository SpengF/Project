import {fetchPost} from '../api/index'
import { Toast } from 'vant';
const mainPage={
  state: {
    slideArray:[],
    levelarray:[],
    recordingDestroyed:'', //记录离开首页路由路径
    recordingScrool:'',      //记录单词离开时位置
    levelName:''              //记录页面等级文字
  },
  mutations: {
    assignmentSlideArray(state,e){
      state.slideArray=e;
    },
    assignmentLevel(state,e){
      state.levelarray=e;
    },
    levelName(state,e){
      state.levelName=e;
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
      }catch(e){
        Toast('错误');
      }
    },
    async assignmentLevel({commit},el){
      let data=await fetchPost(el.to)
      commit('assignmentLevel',data)
      commit('levelName',el.level)
    }
  },
  getters: {
    getslideArray(state){
      return state.slideArray;
    },
    getlevelArray(state){
      return state.levelarray;
    },
    getLevelName(state){
      return state.levelName;
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