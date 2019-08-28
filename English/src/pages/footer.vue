<template>
  <div class="footer">
    <van-tabbar v-model="active" >
      <van-tabbar-item icon="home-o" @click='goMainPage'>首页</van-tabbar-item>
      <van-tabbar-item icon="search"  @click='search'>搜索</van-tabbar-item>
      <!-- <van-tabbar-item icon="friends-o">标签</van-tabbar-item> -->
      <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  methods:{
    goMainPage(){
      this.$router.push({path:'/'})
    },
    search(){
      this.$router.push({path:'/search'})
    }
  }
}
</script>

<style>
  /* .footer{
    position: absolute;
    bottom: 0;
  } */
</style>
