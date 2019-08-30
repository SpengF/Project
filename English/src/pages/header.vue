<template>
  <div class="header">
  <van-nav-bar :title="headerTitle" :left-text="backshow?'返回':''" :left-arrow='backshow'>
  </van-nav-bar>
    <slot name="icon" class="icon"></slot>
  </div>
</template>

<script>
export default {
  data(){
    return {
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
  },
  methods:{
  }
}
</script>

<style lang='less'>
  .header{
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
    .header-icon-serach{
      font-size: 18px;
    }
  }
</style>
