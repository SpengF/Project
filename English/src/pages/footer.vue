<template>
  <div class="footer">
    <van-tabbar v-model="active" >
      <van-tabbar-item icon="home-o" @click='goMainPage'>首页</van-tabbar-item>
      <van-tabbar-item icon="search"  @click='search'>搜索</van-tabbar-item>
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
        this.$router.push({path:this.getrecordingDestroyed?this.getrecordingDestroyed:'/'})
    },
    search(){
      this.$router.push({path:'/search'})
    }
  },
  computed:{
    getrecordingDestroyed(){
      return this.$store.getters.getrecordingDestroyed
    }
  }
}
</script>

<style>
</style>
