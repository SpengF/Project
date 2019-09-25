import {fetchPost} from '../api/index'
const search={
  state: {
    inputSelect:[],
    wordDetails:{},
    vanSkeletonLoading:false
  },
  mutations: {
    inputSelect(state,e){
      state.inputSelect=e;
    },
    wordDetails(state,e){
      state.wordDetails=e;
    },
    vanSkeletonLoadingShow(state){
      state.vanSkeletonLoading=true
    },
    vanSkeletonLoadingHide(state){
      state.vanSkeletonLoading=false
    }
  },
  actions:{
    async inputSelect({commit},e){
      try {
        let data=await fetchPost('/inputSearch',JSON.stringify(e))
        commit('inputSelect',data)
      }catch(e){

      }
    },
    async wordDetails({commit},e){
      commit('vanSkeletonLoadingShow')
      try {
        let data=await fetchPost('/wordDetails',JSON.stringify(e))
        commit('vanSkeletonLoadingHide')
        commit('wordDetails',data)
      }catch(e){

      }
    }
  },
  getters: {
    inputSelect(state){
      return state.inputSelect
    },
    wordDetails(state){
      console.log(state.wordDetails)
      return state.wordDetails
    },
    vanSkeletonLoading(state){
      return state.vanSkeletonLoading
    }
  }
}
export default search;