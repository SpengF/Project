<template>
  <div class="levelWordDetail">
    <Header :backshow='false' ref='headers' headerTitle="详情">
      <template v-slot:icon>
        <van-icon name="arrow-left" slot="right" class="header-icon-serach my-icon-left" @click="back"/>
      </template>
    </Header>
    <word-detail :wordDetailList='wordDetailList'></word-detail>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import wordDetail from '../components/wordDetail'
export default {
  components:{
    wordDetail
  },
  computed:{
    ...mapGetters({
      wordDetailList:'wordDetails',
      getrecordingDestroyed:'getrecordingDestroyed'
    })
  },
  methods:{
    turnToLevel(){
      this.$router.push({path:this.getrecordingDestroyed})
    },
    back(){
      window.history.back()
    }
  },
  beforeRouteEnter(to,from,next){
    next(()=>{
      document.documentElement.scrollTop=0
      document.body.scrollTop=0
    })
  }
}
</script>

<style>

</style>
