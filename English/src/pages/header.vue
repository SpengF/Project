<template>
  <div class="header">
  <van-nav-bar :title="headerTitle" :left-text="backshow?'返回':''" :left-arrow='backshow'>
    <!-- <van-icon name="search" slot="right" class="header-icon-serach"/> -->
  </van-nav-bar>
  </div>
</template>

<script>
export default {
  data(){
    return {
      selected:1,
    }
  },
  props:{
    headerTitle:{
      type:String,
      default:'标题'
    },
    backshow:{
      type:Boolean,
      default:true
    }
  }
}
</script>

<style lang='less'>
  .header{
    position: fixed;
    width: 100%;
    top: 0;
    .header-icon-serach{
      font-size: 18px;
    }
  }
</style>
