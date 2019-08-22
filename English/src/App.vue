<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <button @click="send">点击发送请求</button>
  </div>
</template>

<script>
// import Header from './pages/header'
export default {
  name: 'App',
  // components:{
  //   Header
  // }
  methods:{
    send(){
      this.$post('/index').then(res=>{
        console.log(5555,res)
      })
    }
  }
}
</script>

<style>
</style>
