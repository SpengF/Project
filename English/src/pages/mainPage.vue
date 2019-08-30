<template>
  <div class="mainPage">
    <Header headerTitle='主页' :backshow='false' ref='headers'>
      <template v-slot:icon>
        <van-icon name="apps-o" slot="right" class="header-icon-serach my-icon-left" @click="showPopup"/>
      </template>
    </Header>
    
    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    <Left-pop ref="leftpop"></Left-pop>
  </div>
</template>

<script>
import LeftPop from '../components/leftPop'
import recordingDestroyed from '../components/Destroyed'
export default {
  components:{
    LeftPop
  },
  mixins:[recordingDestroyed],
  data(){
    return {
      
    }
  },
  mounted(){
  },
  computed:{
  },
  methods:{
    showPopup(){
      this.$refs.leftpop.showPopup()
    },
  }
}
</script>

<style>

</style>
