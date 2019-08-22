<template>
  <div class="header">
  <van-nav-bar title="标题" left-text="返回" left-arrow>
    <van-icon name="search" slot="right" class="header-icon-serach"/>
  </van-nav-bar>
  </div>
</template>

<script>
export default {
  data(){
    return {
      selected:1
    }
  }
}
</script>

<style lang='less'>
  .header-icon-serach{
    font-size: 18px;
  }
</style>
