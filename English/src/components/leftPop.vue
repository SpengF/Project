<template>
  <div class="leftPop">
    <van-popup v-model="show" position="left" :style="{height:'100%',width:'35%'}">
      <p @click="tohome">回到主页</p>
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

<style>

</style>
