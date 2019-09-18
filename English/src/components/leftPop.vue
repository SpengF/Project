<template>
  <div class="leftPop">
    <van-popup v-model="show" position="left" :style="{height:'100%',width:'35%'}">
      <p @click="tohome" class="toMain">回到主页</p>
      <ul class="sliderContent">
          <li v-for="item in getslideArray" :key='item.to' @click='routerto(item.to)'>
            {{item.level}}
          </li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show:false,
    }
  },
  mounted(){
    this.$store.dispatch('assignmentSlideArray')
  },
  computed:{
    getslideArray(){
      return this.$store.state.mainPage.slideArray
    }
  },
  methods:{
    showPopup(){
      this.show=!this.show
    },
    routerto(e){
      this.show=false;
      this.$store.dispatch('assignmentLevel',e)
      this.$router.push({path:e})
    },
    tohome(){
      this.show=false;
      this.$router.push({path:'/'})
    }
  }
}
</script>

<style lang='less'>
  @import '../assets/css/backGroundColor.less';
  .van-popup--left {
    background-color:@body-bgColor;
  }
  .toMain{
    text-align: center;
    border-bottom: 1px solid #ccc;
    border-radius: 0 0 14px 14px;
    margin: 0 auto;
    height: 30px;
    line-height: 30px;
    background-color:@title-bgColor;
    box-shadow: 0px -4px 10px #6b6a6a;
  }
</style>
