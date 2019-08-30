export default {
  /**
   * @param {记录离开时路由地址，下次还可以回来} from 
   */
  beforeRouteLeave(to,from,next){
    this.$store.commit('recordingDestroyed',from.path)
    next()
  }
}