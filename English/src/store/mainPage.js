import axios from "axios"
const mainPage={
  state: {
    slideArray:[]
  },
  mutations: {
    assignmentSlideArray(state,e){
      state.slideArray=e;
    }
  },
  actions:{
    async assignmentSlideArray({commit}){
      let data=await axios.get('/index')
      if(data.status===200){
        commit('assignmentSlideArray',data.data)
      }
    }
  },
  getters: {
    getslideArray(state){
      return state.slideArray
    }
  }
}
export default mainPage;