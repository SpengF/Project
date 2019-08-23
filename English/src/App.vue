<template>
  <div id="app" >
    <Header headerTitle='主页' :backshow='false'></Header>
    <router-view id="main"/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './pages/footer'
import Header from './pages/header'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
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
  #main{
    margin: 50px 0;
  }
</style>
