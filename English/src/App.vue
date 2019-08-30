<template>
  <div id="app" >
    <router-view id="main"/>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
    }
  },
  mounted(){
  
  },
  methods:{
    
  },
  computed:{
    
  }
}
</script>

<style lang='less'>
  #main{
    margin: 50px 0;
  }
  .sliderContent{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    li{
      padding: 10px;
      border-bottom: 1px solid #ccc;
      color: black;
      .levelClor{
        color: black;
      }
    }
  }
</style>
